"use client";

import { ITranscription } from "@/interfaces/transcription.interface";
import React from "react";

interface TranscriptionItemProps {
  transcription: ITranscription;
}

export const TrancsriptionItem = ({
  transcription,
}: TranscriptionItemProps) => {
  const { filename, duration, createdAt } = transcription;

  return (
    <div className="w-full h-16  border border-borderColor rounded-md p-2 overflow-y-hidden whitespace-nowrap overflow-hidden overflow-ellipsis">
      {filename}
      <div className="flex flex-row justify-between">
        <span className="text-borderColor text-sm">{createdAt}</span>
        <span className="text-borderColor text-sm">{duration}</span>
      </div>
    </div>
  );
};
