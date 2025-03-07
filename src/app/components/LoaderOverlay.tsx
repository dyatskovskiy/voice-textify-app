import React from "react";
import { Bars } from "react-loader-spinner";

export const LoaderOverlay = () => {
  return (
    <div className="absolute z-100 w-screen h-screen flex flex-col justify-center items-center bg-black bg-opacity-70">
      <Bars
        height="80"
        width="80"
        color="#78716c"
        ariaLabel="Loading..."
        visible={true}
      />
      <p className="mt-2">Please, wait a moment...</p>
    </div>
  );
};
