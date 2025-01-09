"use client";

import { useEffect } from "react";
import { Container } from "./components/Container";
import { FileUploadArea } from "./components/FileUploadArea";
import { MainBoard } from "./components/MainBoard";
import { ResultArea } from "./components/ResultArea";
import { Sidebar } from "./components/Sidebar";
import { TranscriptionsList } from "./components/TranscriptionsList";
import { useTranscriptionsStore } from "@/app/stores";

export default function Home() {
  const transcriptions = useTranscriptionsStore(
    (state) => state.transcriptions,
  );

  const activeTranscription = useTranscriptionsStore(
    (state) => state.activeTranscription,
  );

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch("api/transcriptions/", {
          method: "GET",
        });

        const transcriptions = await response.json();

        useTranscriptionsStore.getState().setTranscriptions(transcriptions);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-[320px_1fr] h-full gap-4">
        <Sidebar>
          <TranscriptionsList transcriptions={transcriptions} />
        </Sidebar>

        <MainBoard>
          <FileUploadArea />
          {activeTranscription ? (
            <ResultArea transcription={activeTranscription} />
          ) : (
            <p className="text-center mt-20 text-xl">
              Upload a new file or choose from your last transcriptions
            </p>
          )}
        </MainBoard>
      </div>
    </Container>
  );
}
