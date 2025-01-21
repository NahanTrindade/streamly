"use client";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar();

  return (
    <aside
      className={cn(
        "fixed h-full w-60 left-0 flex-col bg-sidebar border-r z-50 border-[#2D2E35]",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};

export default Wrapper;
