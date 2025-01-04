import React from "react";

interface TranscriptionItemProps {
  filename: string;
}

export const TrancsriptionItem = ({ filename }: TranscriptionItemProps) => {
  return (
    <div className="w-full h-16  border border-borderColor rounded-md p-2 overflow-y-hidden">
      {filename}
    </div>
  );
};
