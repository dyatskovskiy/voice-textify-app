"use client";

import React, { useEffect, useState } from "react";
import { ITranscription } from "@/interfaces/transcription.interface";
import { useTranscriptionsStore, useUserStore } from "@/app/stores";
import { Popover } from "@/app/components/Popover/Popover";
import { Icon } from "@/app/components/Icon";
import { BaseModal } from "@/app/components/Modal";
import { Form } from "@/app/components/Form/Form";
import type { FormValues } from "@/app/components/Form/FormContext";
import useGlobalAppStateStore from "@/app/stores/globalAppState.store";

interface TranscriptionItemProps {
  transcription: ITranscription;
}

export const TranscriptionItem = ({
  transcription,
}: TranscriptionItemProps) => {
  const { id, filename, duration, createdAt } = transcription;

  const user = useUserStore((state) => state.user);

  const { setActiveTranscription, setTranscriptions } =
    useTranscriptionsStore.getState();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const isLoading = useGlobalAppStateStore((state) => state.isLoading);
  const setIsLoading = useGlobalAppStateStore((state) => state.setIsLoading);
  const setIsError = useGlobalAppStateStore((state) => state.setIsError);
  const onEditOpen = () => {
    setIsEditModalOpen(true);
  };

  const onEditClose = () => {
    setIsEditModalOpen(false);
  };

  const onEditSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      await fetch(`/api/transcriptions/${user?.id}`, {
        method: "PATCH",
        body: JSON.stringify({ transcriptionId: id, updateValues: values }),
        headers: { "Content-Type": "application/json" },
      }).then((r) => r.json());

      const refreshedTranscriptions = await fetch(
        `api/transcriptions/${user?.id}`,
        {
          method: "GET",
        },
      ).then((r) => r.json());

      setTranscriptions(refreshedTranscriptions);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
      setIsEditModalOpen(false);
    }
  };

  return (
    <>
      <div
        onClick={() => setActiveTranscription(transcription)}
        className="w-full h-16  border border-borderColor rounded-md p-2 cursor-pointer"
      >
        <div className={"flex flex-row justify-between"}>
          <p className="max-w-[240px] whitespace-nowrap overflow-hidden overflow-ellipsis">
            {filename}
          </p>
          <Popover>
            <Popover.Button>
              <Icon
                name={"dots"}
                className={" fill-globalForeground stroke-transparent"}
              />
            </Popover.Button>
            <Popover.List
              className={
                "bg-globalBackground p-2 rounded-xl border border-borderColor  flex flex-col min-w-min"
              }
            >
              <Popover.ListItem>
                <button
                  onClick={onEditOpen}
                  className={"flex flex-row gap-1 items-center mb-1"}
                >
                  <Icon
                    name={"pencil"}
                    className={
                      "min-w-3 h-3  fill-globalForeground stroke-transparent"
                    }
                  />
                  <span>Edit</span>
                </button>
              </Popover.ListItem>

              <Popover.ListItem>
                <button
                  className={"flex flex-row gap-1 items-center min-w-min"}
                >
                  <Icon
                    name={"bin"}
                    className={
                      "min-w-4 h-3  fill-globalForeground stroke-transparent"
                    }
                  />
                  <span>Delete</span>
                </button>
              </Popover.ListItem>
            </Popover.List>
          </Popover>
        </div>

        <div className="flex flex-row justify-between">
          <span className="text-borderColor text-sm">{createdAt}</span>
          <span className="text-borderColor text-sm">{duration}</span>
        </div>
      </div>

      <BaseModal isOpen={isEditModalOpen} onClose={onEditClose}>
        <Form onSubmit={(values) => onEditSubmit(values)}>
          <Form.Field title={"Enter new record name"} className={"mb-1"}>
            <Form.Input name={"filename"} initialValue={filename} />
          </Form.Field>

          <Form.SubmitButton
            className={"mt-4 mx-auto block"}
            disabled={isLoading}
          >
            Save
          </Form.SubmitButton>
        </Form>
      </BaseModal>
    </>
  );
};
