import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="pb-4 mx-auto w-full max-w-[1400px] h-screen grid grid-rows-[auto_1fr] gap-4 overflow-y-hidden">
      {children}
    </div>
  );
};
