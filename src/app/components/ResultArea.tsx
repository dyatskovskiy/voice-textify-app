import React from "react";
import { ITranscription } from "@/interfaces/transcription.interface";

interface ResultAreaProps {
  transcription: ITranscription;
}

export const ResultArea = ({ transcription }: ResultAreaProps) => {
  const { language, duration, wordsQuantity, text } = transcription;

  return (
    <>
      <div className="border-2 border-borderColor rounded-2xl overflow-x-auto relative ">
        <div className="grid grid-cols-3 h-20 sticky top-0 overflow-hidden bg-primaryBg">
          <div className="flex flex-col items-center justify-center border-r-2 border-borderColor text-borderColor">
            <p>Language:</p>
            <p className="text-globalForeground">{language}</p>
          </div>

          <div className="flex flex-col items-center justify-center border-r-2 border-borderColor text-borderColor">
            <p>Duration:</p>
            <p className="text-globalForeground">{duration}</p>
          </div>

          <div className="flex flex-col items-center justify-center text-borderColor">
            <p>Words:</p>
            <p className="text-globalForeground">{wordsQuantity}</p>
          </div>
        </div>
      </div>
      <div className="p-4 overflow-y-scroll scrollbar h-[400px]">
        <p>{text}</p>
      </div>
    </>
  );
};
