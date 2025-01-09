"use client";

import { ITranscription } from "@/interfaces/transcription.interface";
import React from "react";
import { useTranscriptionsStore } from "@/app/stores";

interface TranscriptionItemProps {
  transcription: ITranscription;
}

export const TrancsriptionItem = ({
  transcription,
}: TranscriptionItemProps) => {
  const { filename, duration, createdAt } = transcription;

  const setActive = useTranscriptionsStore.getState().setActiveTranscription;

  return (
    <div
      onClick={() => setActive(transcription)}
      className="w-full h-16  border border-borderColor rounded-md p-2 overflow-y-hidden whitespace-nowrap overflow-hidden overflow-ellipsis cursor-pointer hover:scale-[1.03] hover:border-hoverColor transition-transform"
    >
      {filename}
      <div className="flex flex-row justify-between">
        <span className="text-borderColor text-sm">{createdAt}</span>
        <span className="text-borderColor text-sm">{duration}</span>
      </div>
    </div>
  );
};
