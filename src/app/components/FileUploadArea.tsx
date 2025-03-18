"use client";
import React, { useEffect, useState } from "react";
import { useTranscriptionsStore, useUserStore } from "@/app/stores";
import useGlobalAppStateStore from "@/app/stores/globalAppState.store";

export const FileUploadArea = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");
  const user = useUserStore((state) => state.user);
  const { setIsLoading, setError } = useGlobalAppStateStore.getState();

  useEffect(() => {
    if (file) {
      (async function () {
        setIsLoading(true);
        setError(null);
        try {
          const formData = new FormData();

          formData.append("audio", file);

          const fileDetails = await fetch("/api/file", {
            method: "POST",
            body: formData,
          }).then((r) =>
            r.json().catch(() => {
              setMessage("Something went wrong. Try again, please");
            }),
          );

          const { fileName, filePath } = fileDetails.data;

          const { data } = await fetch(
            `/api/users/${user?.id}/transcriptions`,
            {
              method: "POST",
              body: JSON.stringify({ fileName, filePath }),
            },
          ).then((r) => r.json());

          useTranscriptionsStore.getState().addNew(data);
          useTranscriptionsStore.getState().setActiveTranscription(data);
        } catch (err: unknown) {
          setMessage("File Upload Error");

          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unknown error occurred.");
          }
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [file, setError, setIsLoading, user?.id]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];

      setFile(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setMessage("");
    const file = event.target.files?.[0];

    if (!file || !file.type.startsWith("audio/")) {
      setMessage("Please, choose an audio file");
      return;
    }

    if (file.size / 1024 / 1000 > 4.5) {
      setMessage("File size is too large. It should be smaller than 4.5 MB");
      return;
    }

    setFile(file);

    event.target.value = "";
  };

  return (
    <label htmlFor="file-upload">
      <div
        className="border-dashed border-2 border-borderColor p-4 mb-4 rounded-2xl mt-3 text-center cursor-pointer"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <input
          type="file"
          accept="audio/*"
          name="file-upload"
          id="file-upload"
          onChange={handleFileInputChange}
          hidden
        />
        <p className="text-center text-borderColor">
          Drag and drop an audio file here, or click to select
        </p>
        <p className="text-center text-borderColor">
          Supported formats: MP3, WAV, M4A (max 4.5 MB)
        </p>

        <p className="text-red-600">{message}</p>
      </div>
    </label>
  );
};
