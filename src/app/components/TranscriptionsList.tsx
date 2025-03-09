"use client";

import { ITranscription } from "@/interfaces/transcription.interface";
import { TrancsriptionItem } from "./TrancsriptionItem";
import React from "react";

interface TranscriptionsListProps {
  transcriptions: ITranscription[];
}

export const TranscriptionsList = ({
  transcriptions,
}: TranscriptionsListProps) => {
  return (
    <>
      <h2>Your last transcriptions:</h2>
      <span className="block w-full bg-borderColor h-px mt-1 mb-4" />
      {transcriptions.length > 0 ? (
        <ul className="px-1 h-[95%] overflow-y-auto scrollbar flex flex-col gap-2 z-0">
          {transcriptions.map((item) => {
            return (
              <li key={item.id}>
                <TrancsriptionItem transcription={item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>There are no transcriptions yet</p>
      )}
    </>
  );
};
