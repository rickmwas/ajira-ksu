"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { COURSES_DATA, type Course } from "../constants/courses";
import { createClient } from "../lib/supabase/client";

export interface StudentUser {
  name: string;
  email: string;
  phone: string;
  course: string;
  year: string;
  interest: string;
  bio?: string;
  regId: string;
  regDate: string;
  role?: string; // RBAC role (Member, Executive, Admin)
  schoolRegNo?: string;
  onboarded?: boolean;
}

interface PortalContextType {
  user: StudentUser | null;
  completedLessons: Record<string, string[]>; // courseId -> lessonIds[]
  courses: Course[];
  loading: boolean;
  register: (name: string, email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<void>;
  completeOnboarding: (details: {
    phone: string;
    schoolRegNo: string;
    course: string;
    year: string;
    interest: string;
    bio: string;
  }) => Promise<void>;
  updateProfile: (details: {
    name: string;
    phone: string;
    course: string;
    year: string;
    interest: string;
    bio: string;
  }) => Promise<void>;
  toggleLessonComplete: (courseId: string, lessonId: string) => Promise<void>;
  isCourseCompleted: (courseId: string) => boolean;
}

const PortalContext = createContext<PortalContextType | undefined>(undefined);

export function PortalProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<StudentUser | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState(true);

  const supabase = createClient();

  // Monitor auth state and fetch student profile + progress
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      setLoading(true);
      if (session?.user) {
        // Fetch profile with retries to account for database trigger latency
        let profile = null;
        let attempts = 0;
        while (!profile && attempts < 3) {
          const { data } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", session.user.id)
            .single();

          if (data) {
            profile = data;
            break;
          }
          attempts++;
          await new Promise((resolve) => setTimeout(resolve, 500));
        }

        if (profile) {
          setUser({
            name: profile.name,
            email: profile.email,
            phone: profile.phone || "",
            course: profile.course || "",
            year: profile.year || "",
            interest: profile.interest || "",
            bio: profile.bio || "",
            regId: profile.reg_id,
            regDate: profile.reg_date,
            role: profile.role,
            schoolRegNo: profile.school_reg_no || "",
            onboarded: session.user.user_metadata?.onboarded ?? false,
          });

          // Fetch lesson progress
          const { data: progress } = await supabase
            .from("lessons_progress")
            .select("course_id, lesson_id")
            .eq("profile_id", session.user.id);

          const completedMap: Record<string, string[]> = {};
          progress?.forEach((item) => {
            if (!completedMap[item.course_id]) {
              completedMap[item.course_id] = [];
            }
            completedMap[item.course_id].push(item.lesson_id);
          });
          setCompletedLessons(completedMap);
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
        setCompletedLessons({});
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const register = async (name: string, email: string, password: string) => {
    // Default roles matching database rules
    let role = "Member";
    if (email.includes("admin") || email.includes("pres")) {
      role = "Admin";
    } else if (email.includes("exec") || email.includes("board")) {
      role = "Executive";
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          role,
          onboarded: false,
        },
      },
    });

    if (error) {
      throw new Error(error.message);
    }
    return data;
  };

  const login = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message);
    }
    return data;
  };

  const completeOnboarding = async (details: {
    phone: string;
    schoolRegNo: string;
    course: string;
    year: string;
    interest: string;
    bio: string;
  }) => {
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser();

    if (!authUser) {
      throw new Error("No active user session found");
    }

    // 1. Update database profile
    const { error: profileError } = await supabase
      .from("profiles")
      .update({
        phone: details.phone,
        school_reg_no: details.schoolRegNo,
        course: details.course,
        year: details.year,
        interest: details.interest,
        bio: details.bio,
      })
      .eq("id", authUser.id);

    if (profileError) {
      throw new Error(profileError.message);
    }

    // 2. Update auth metadata onboarded = true
    const { error: authError } = await supabase.auth.updateUser({
      data: {
        onboarded: true,
      },
    });

    if (authError) {
      throw new Error(authError.message);
    }

    // Update local context user state
    setUser((prev) =>
      prev
        ? {
            ...prev,
            phone: details.phone,
            schoolRegNo: details.schoolRegNo,
            course: details.course,
            year: details.year,
            interest: details.interest,
            bio: details.bio,
            onboarded: true,
          }
        : null
    );
  };

  const updateProfile = async (details: {
    name: string;
    phone: string;
    course: string;
    year: string;
    interest: string;
    bio: string;
  }) => {
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser();

    if (!authUser) {
      throw new Error("No active user session found");
    }

    // 1. Update database profile name & details
    const { error: profileError } = await supabase
      .from("profiles")
      .update({
        name: details.name,
        phone: details.phone,
        course: details.course,
        year: details.year,
        interest: details.interest,
        bio: details.bio,
      })
      .eq("id", authUser.id);

    if (profileError) {
      throw new Error(profileError.message);
    }

    // 2. Also update auth user metadata name so they match
    const { error: authError } = await supabase.auth.updateUser({
      data: {
        name: details.name,
      },
    });

    if (authError) {
      throw new Error(authError.message);
    }

    // 3. Update local user state
    setUser((prev) =>
      prev
        ? {
            ...prev,
            name: details.name,
            phone: details.phone,
            course: details.course,
            year: details.year,
            interest: details.interest,
            bio: details.bio,
          }
        : null
    );
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setCompletedLessons({});
  };

  const toggleLessonComplete = async (courseId: string, lessonId: string) => {
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser();

    if (!authUser) return;

    const currentCompleted = completedLessons[courseId] || [];
    const isCompleted = currentCompleted.includes(lessonId);

    // Optimistic Update
    let updated: string[];
    if (isCompleted) {
      updated = currentCompleted.filter((id) => id !== lessonId);
    } else {
      updated = [...currentCompleted, lessonId];
    }

    setCompletedLessons((prev) => ({
      ...prev,
      [courseId]: updated,
    }));

    if (isCompleted) {
      await supabase
        .from("lessons_progress")
        .delete()
        .match({
          profile_id: authUser.id,
          course_id: courseId,
          lesson_id: lessonId,
        });
    } else {
      await supabase.from("lessons_progress").upsert({
        profile_id: authUser.id,
        course_id: courseId,
        lesson_id: lessonId,
      });
    }
  };

  const isCourseCompleted = (courseId: string) => {
    const course = COURSES_DATA.find((c) => c.id === courseId);
    if (!course) return false;

    const completed = completedLessons[courseId] || [];
    return course.lessons.every((lesson) => completed.includes(lesson.id));
  };

  return (
    <PortalContext.Provider
      value={{
        user,
        completedLessons,
        courses: COURSES_DATA,
        loading,
        register,
        login,
        logout,
        completeOnboarding,
        updateProfile,
        toggleLessonComplete,
        isCourseCompleted,
      }}
    >
      {children}
    </PortalContext.Provider>
  );
}

export function usePortal() {
  const context = useContext(PortalContext);
  if (!context) {
    throw new Error("usePortal must be used within a PortalProvider");
  }
  return context;
}
