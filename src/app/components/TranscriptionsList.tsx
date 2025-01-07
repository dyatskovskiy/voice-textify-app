import { ITranscription } from "@/interfaces/transcription.interface";
import React from "react";
import { TrancsriptionItem } from "./TrancsriptionItem";

interface TranscriptionsListProps {
  transcriptions: ITranscription[];
}

export const TranscriptionsList = ({
  transcriptions,
}: TranscriptionsListProps) => {
  return (
    <>
      <h2>Your last transcriptions:</h2>
      <span className="block w-full bg-borderColor h-px my-2" />
      {transcriptions.length > 0 ? (
        <ul className="flex flex-col gap-1">
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
