"use client";

import React from "react";

export const FileUploadArea = () => {
  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    console.log(event);

    if (event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];

      console.log(file);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      className="border-dashed border-2 border-borderColor p-4 mb-4 rounded-2xl mt-3 text-center"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <p className="text-center text-borderColor">
        Drag and drop an audio file here, or click to select
      </p>
      <p className="text-center text-borderColor">
        Supported formats: MP3, WAV, M4A (max 25 MB)
      </p>
    </div>
  );
};
