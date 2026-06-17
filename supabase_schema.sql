-- ==========================================
-- PRODUCTION SUPABASE DATABASE SCHEMA
-- AJIRA DIGITAL CLUB - KISII UNIVERSITY (KSU)
-- ==========================================

-- Enable extensions
create extension if not exists "uuid-ossp";

-- 1. PROFILES TABLE (linked to Supabase auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text not null,
  email text not null unique,
  phone text,
  course text,
  year text,
  interest text,
  bio text,
  school_reg_no text,
  reg_id text not null unique,
  reg_date text not null,
  role text not null default 'Member' check (role in ('Member', 'Executive', 'Admin')),
  points integer not null default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.profiles enable row level security;

-- RLS Policies for Profiles
create policy "Public profiles are viewable by everyone" 
  on public.profiles for select 
  using (true);

create policy "Users can update their own profile" 
  on public.profiles for update 
  using (auth.uid() = id);

create policy "Admins and Executives can update any profile" 
  on public.profiles for all 
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('Executive', 'Admin')
    )
  );

-- 2. LESSONS PROGRESS TABLE
create table public.lessons_progress (
  profile_id uuid references public.profiles(id) on delete cascade not null,
  course_id text not null,
  lesson_id text not null,
  completed_at timestamp with time zone default timezone('utc'::text, now()) not null,
  primary key (profile_id, course_id, lesson_id)
);

-- Enable RLS
alter table public.lessons_progress enable row level security;

-- RLS Policies for Lessons Progress
create policy "Users can view their own progress" 
  on public.lessons_progress for select 
  using (auth.uid() = profile_id);

create policy "Users can insert/modify their own progress" 
  on public.lessons_progress for all 
  using (auth.uid() = profile_id);

create policy "Admins and Executives can view all progress" 
  on public.lessons_progress for select 
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('Executive', 'Admin')
    )
  );

-- 3. EVENTS TABLE
create table public.events (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  category text not null check (category in ('WORKSHOP', 'TRAINING', 'HACKATHON', 'MEETING')),
  day text not null,
  month text not null,
  time text not null,
  location text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
alter table public.events enable row level security;

-- RLS Policies for Events
create policy "Events are viewable by everyone" 
  on public.events for select 
  using (true);

create policy "Only Admins and Executives can modify events" 
  on public.events for all 
  using (
    exists (
      select 1 from public.profiles
      where id = auth.uid() and role in ('Executive', 'Admin')
    )
  );

-- ==========================================
-- AUTOMATION TRIGGERS FOR SIGNUPS
-- ==========================================

-- Trigger to automatically create a profile for new auth.users signup
create or replace function public.handle_new_user()
returns trigger as $$
declare
  random_suffix integer;
  generated_reg_id text;
  user_role text;
begin
  -- Generate unique KSU registration ID format: KSU/AJR/2026/XXXX
  random_suffix := floor(random() * 9000 + 1000)::integer;
  generated_reg_id := 'KSU/AJR/2026/' || random_suffix::text;

  -- Default administrative roles based on signup email
  if new.email like '%admin%' or new.email like '%pres%' then
    user_role := 'Admin';
  elsif new.email like '%exec%' or new.email like '%board%' then
    user_role := 'Executive';
  else
    user_role := 'Member';
  end if;

  insert into public.profiles (
    id, 
    name, 
    email, 
    phone,
    course,
    year,
    interest,
    bio,
    school_reg_no,
    role,
    reg_id, 
    reg_date
  )
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', 'KSU Member'),
    new.email,
    new.raw_user_meta_data->>'phone',
    new.raw_user_meta_data->>'course',
    new.raw_user_meta_data->>'year',
    new.raw_user_meta_data->>'interest',
    new.raw_user_meta_data->>'bio',
    new.raw_user_meta_data->>'school_reg_no',
    user_role,
    generated_reg_id,
    to_char(now(), 'DD Month YYYY')
  );
  return new;
end;
$$ language plpgsql security definer;

-- Bind trigger to auth.users inserts
create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
