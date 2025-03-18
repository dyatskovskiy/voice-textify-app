"use client";

import React from "react";
import { Bars } from "react-loader-spinner";
import { createPortal } from "react-dom";

export const LoaderOverlay = () => {
  if (typeof window === "undefined") return null;

  return createPortal(
    <div className="absolute top-0 left0 z-[10000] w-screen h-screen flex flex-col justify-center items-center bg-black bg-opacity-40">
      <Bars
        height="80"
        width="80"
        color="#78716c"
        ariaLabel="Loading..."
        visible={true}
      />
      <p className="mt-2">Please, wait a moment...</p>
    </div>,
    window.document.body,
  );
};
