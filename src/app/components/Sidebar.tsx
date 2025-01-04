import React, { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <aside className="border-2 border-l-0 border-borderColor overflow-x-hidden overflow-y-auto bg-primaryBg p-4 rounded-2xl">
      {children}
    </aside>
  );
};
