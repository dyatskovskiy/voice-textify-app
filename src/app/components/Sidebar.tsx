import React, { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <aside className="border-2 border-l-0 border-borderColor bg-primaryBg p-4 rounded-2xl h-[calc(100vh-80px)] relative z-10 overflow-visible">
      {children}
    </aside>
  );
};
