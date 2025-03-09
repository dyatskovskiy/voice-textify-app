"use client";

import { ITranscription } from "@/interfaces/transcription.interface";
import React from "react";
import { useTranscriptionsStore } from "@/app/stores";
import { Popover } from "@/app/components/Popover/Popover";
import { Icon } from "@/app/components/Icon";

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
      className="w-full h-16  border border-borderColor rounded-md p-2 cursor-pointer"
    >
      <div className={"flex flex-row justify-between"}>
        <p className="max-w-[240px] whitespace-nowrap overflow-hidden overflow-ellipsis">
          {filename}
        </p>
        <Popover>
          <Popover.Button>
            <Icon name={"dots"} />
          </Popover.Button>
          <Popover.List
            className={
              "bg-globalBackground p-2 rounded-xl border border-borderColor  flex flex-col min-w-min"
            }
          >
            <Popover.ListItem
              className={"flex flex-row gap-1 items-center mb-1"}
            >
              <Icon name={"pencil"} className={"min-w-3 h-3"} />
              <span>Edit</span>
            </Popover.ListItem>

            <Popover.ListItem
              className={"flex flex-row gap-1 items-center min-w-min"}
            >
              <Icon name={"bin"} className={"min-w-4 h-3"} />
              <span>Delete</span>
            </Popover.ListItem>
          </Popover.List>
        </Popover>
      </div>

      <div className="flex flex-row justify-between">
        <span className="text-borderColor text-sm">{createdAt}</span>
        <span className="text-borderColor text-sm">{duration}</span>
      </div>
    </div>
  );
};
