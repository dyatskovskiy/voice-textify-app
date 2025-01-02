"use client";

import React from "react";

export const FileUploadArea = () => {
  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];

      if (file && file.type.startsWith("audio/")) {
        console.log(file);

        try {
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleFileInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file && file.type.startsWith("audio/")) {
      console.log(file);

      try {
      } catch (error) {
        console.log(error);
      }
    }
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
          Supported formats: MP3, WAV, M4A (max 25 MB)
        </p>
      </div>
    </label>
  );
};
