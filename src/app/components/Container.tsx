import React from "react";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto my-4 w-full max-w-[1400px] max-h-full">
      {children}
    </div>
  );
};
