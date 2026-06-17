"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { COURSES_DATA, type Course } from "../constants/courses";

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
}

interface PortalContextType {
  user: StudentUser | null;
  completedLessons: Record<string, string[]>; // courseId -> lessonIds[]
  courses: Course[];
  register: (userDetails: Omit<StudentUser, "regId" | "regDate">) => void;
  logout: () => void;
  toggleLessonComplete: (courseId: string, lessonId: string) => void;
  isCourseCompleted: (courseId: string) => boolean;
}

const PortalContext = createContext<PortalContextType | undefined>(undefined);

export function PortalProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<StudentUser | null>(null);
  const [completedLessons, setCompletedLessons] = useState<Record<string, string[]>>({});

  // Sync session check for cookies to align with Next.js Middleware redirects
  const setAuthCookies = (student: StudentUser | null) => {
    if (student) {
      // Set simple cookie parsed by middleware
      document.cookie = `ajira_mock_auth=${JSON.stringify({ email: student.email, role: student.role || "Member" })}; path=/; max-age=604800; SameSite=Lax`;
    } else {
      document.cookie = "ajira_mock_auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC; SameSite=Lax";
    }
  };

  // Load from local storage
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("ajira_ksu_student");
      const storedLessons = localStorage.getItem("ajira_ksu_lessons");

      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setAuthCookies(parsedUser);
      }
      if (storedLessons) setCompletedLessons(JSON.parse(storedLessons));
    } catch (e) {
      console.error("Local storage read error", e);
    }
  }, []);

  const saveToLocal = (key: string, data: any) => {
    localStorage.setItem(key, JSON.stringify(data));
  };

  const register = (userDetails: Omit<StudentUser, "regId" | "regDate">) => {
    const randomSuffix = Math.floor(Math.random() * 9000) + 1000;
    const regId = `KSU/AJR/2026/${randomSuffix}`;
    const regDate = new Date().toLocaleDateString("en-KE", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    // Default first registration to Executive or Member based on name prefix for easier testing if needed,
    // otherwise default to Member.
    let role = "Member";
    if (userDetails.email.includes("admin") || userDetails.name.toLowerCase().includes("admin")) {
      role = "Admin";
    } else if (userDetails.email.includes("executive") || userDetails.name.toLowerCase().includes("lead")) {
      role = "Executive";
    }

    const newStudent: StudentUser = {
      ...userDetails,
      regId,
      regDate,
      role
    };

    setUser(newStudent);
    setAuthCookies(newStudent);
    saveToLocal("ajira_ksu_student", newStudent);
  };

  const logout = () => {
    setUser(null);
    setAuthCookies(null);
    localStorage.removeItem("ajira_ksu_student");
  };

  const toggleLessonComplete = (courseId: string, lessonId: string) => {
    const currentCompleted = completedLessons[courseId] || [];
    let updated: string[];

    if (currentCompleted.includes(lessonId)) {
      updated = currentCompleted.filter(id => id !== lessonId);
    } else {
      updated = [...currentCompleted, lessonId];
    }

    const nextState = {
      ...completedLessons,
      [courseId]: updated
    };

    setCompletedLessons(nextState);
    saveToLocal("ajira_ksu_lessons", nextState);
  };

  const isCourseCompleted = (courseId: string) => {
    const course = COURSES_DATA.find(c => c.id === courseId);
    if (!course) return false;

    const completed = completedLessons[courseId] || [];
    return course.lessons.every(lesson => completed.includes(lesson.id));
  };

  return (
    <PortalContext.Provider
      value={{
        user,
        completedLessons,
        courses: COURSES_DATA,
        register,
        logout,
        toggleLessonComplete,
        isCourseCompleted
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
