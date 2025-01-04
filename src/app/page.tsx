"use client";

import { useEffect, useState } from "react";
import { Container } from "./components/Container";
import { FileUploadArea } from "./components/FileUploadArea";
import { MainBoard } from "./components/MainBoard";
import { ResultArea } from "./components/ResultArea";
import { Sidebar } from "./components/Sidebar";
import { TranscriptionsList } from "./components/TranscriptionsList";
import { ITranscription } from "@/interfaces/transcription.interface";

export default function Home() {
  const [transcscriptions, setTranscriptions] = useState<ITranscription[]>([]);

  useEffect(() => {
    async function fetchAllTranscriptions() {
      const transcriptions = await fetch("api/transcriptions/", {
        method: "GET",
      })
        .then((r) => r.json())
        .catch((r) => console.log(r));

      setTranscriptions(transcriptions);
    }

    fetchAllTranscriptions();
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-[320px_1fr] h-full gap-4">
        <Sidebar>
          <TranscriptionsList transcriptions={transcscriptions} />
        </Sidebar>
        <MainBoard>
          <FileUploadArea />

          <ResultArea language="eng" duration="1m 20s" wordsQuantity="1400" />
        </MainBoard>
      </div>
    </Container>
  );
}
