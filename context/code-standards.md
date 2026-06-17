# Engineering Code Standards - Ajira Club KSU

## TypeScript & Type Safety
* **Strict Mode**: Enforced in `tsconfig.json`. No compiler warnings are allowed.
* **No "any"**: Explicit `any` is prohibited. Use typed interfaces, records, unknown, or generics.
* **Type Declarations**: Keep models and domain interfaces isolated in `@/types/index.ts` or folder-specific type declarations.

## Component & Client/Server Rules
* **Server Components by Default**: All routes, pages, and large content components must be Server Components unless they require hooks (`useState`, `useEffect`, `useContext`) or browser APIs.
* **Client Boundary isolation**: If a component needs interactivity, extract the interactive parts into smaller Client Components (`"use client"`) rather than making the entire page a Client Component. This maintains SEO and fast initial paint.
* **Naming Conventions**:
  * PascalCase for React component files (`Navbar.tsx`, `EventCard.tsx`).
  * camelCase for utility functions, hooks, helper files (`usePortal.ts`, `cn.ts`).

## API & Server Actions Standards
* **API Response Structure**: All Server Actions and API endpoints must return a unified envelope layout:
  ```typescript
  export interface ApiResponse<T = any> {
    success: boolean;
    data: T | null;
    error: string | null;
  }
  ```
* **Error Handling**: Use structured try-catch blocks. Do not swallow errors. Log error context using a simple logger wrapper and return friendly client-facing strings:
  ```typescript
  try {
    // operation
  } catch (error) {
    console.error(`[CourseService:completeLesson] Failed to complete lesson`, { error, courseId, lessonId });
    return { success: false, data: null, error: "Unable to save your progress. Please try again." };
  }
  ```

## State & Data Sync
* **Database Interactivity**: Use server action calls for mutations and server components for initial page fetches.
* **Validation**: Always compile forms with Zod schema verification and match matching fields on the database.
