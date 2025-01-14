import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between items-center rounded-xl rounded-t-none h-12 p-4 border-2 border-borderColor bg-primaryBg mx-auto w-full max-w-[1400px]">
      <Link href="/" className="font-lobster text-xl">
        VoiceTextify
      </Link>

      <UserButton
        showName={true}
        appearance={{
          elements: { userButtonTrigger: { color: "var(--foreground)" } },
        }}
      />
    </header>
  );
};
