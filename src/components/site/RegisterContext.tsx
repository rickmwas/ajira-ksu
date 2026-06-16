import { createContext, useContext, useState, type ReactNode } from "react";

type Ctx = { open: boolean; setOpen: (v: boolean) => void };
const RegisterCtx = createContext<Ctx>({ open: false, setOpen: () => {} });

export function RegisterProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <RegisterCtx.Provider value={{ open, setOpen }}>{children}</RegisterCtx.Provider>;
}

export const useRegister = () => useContext(RegisterCtx);
