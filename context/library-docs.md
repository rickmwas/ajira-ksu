# Technical Documentation & Libraries - Ajira Club KSU

## Next.js App Router
* **Layouts**: Use nested `layout.tsx` for shared sidebars, navigations, and global styling wrappers (e.g. portal page vs website page).
* **Data Fetching**: Fetch data directly in Server Components using standard `fetch` or direct Supabase client calls.
* **Metadata**: Utilize the static `metadata` object or dynamic `generateMetadata` function for SEO parameters in `page.tsx` directories.

## Supabase PostgreSQL & Client
* **Server Client**: Use `@supabase/ssr` (or direct Next.js helper clients) to retrieve sessions, cookie headers, and build server-side authenticated requests.
* **Client Client**: Use the standard browser client for real-time updates and interactive calls if database updates don't require middleware hooks.
* **Database Actions**: All mutations happen inside Next.js Server Actions (`"use server"`) to guarantee backend safety.

## UI System (shadcn/ui & Tailwind)
* **Customization**: Build UI components using shadcn templates. Keep the tailwind structure uniform to design principles.
* **Icons**: Standardize on `lucide-react`. Do not import raw SVG templates directly.

## Framer Motion
* **Restraint**: Use animations only to enhance page feel (fade-in, slide-in on entry). Avoid high bounce values, loops, and heavy rendering transitions.
* **Standard Fade-Up**:
  ```typescript
  export const FADE_UP_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
  };
  ```

## Forms (React Hook Form & Zod)
* Always isolate Zod validator schemas:
  ```typescript
  export const registerSchema = zod.object({
    name: zod.string().min(2, "Name must be at least 2 characters"),
    email: zod.string().email("Invalid email address"),
    phone: zod.string().min(10, "Phone number must be valid"),
    course: zod.string().min(1, "Please select a course track"),
    year: zod.string().min(1, "Please select your year of study"),
    interest: zod.string().min(1, "Please specify your interest"),
  });
  ```
* Standardize on `<Form>` components from shadcn/ui.
