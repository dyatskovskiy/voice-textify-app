import React from "react";

export const MainBoard = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="p-4 h-full">
      <h1 className="text-3xl text-center">Audio transcription</h1>
      {children}
    </main>
  );
};
