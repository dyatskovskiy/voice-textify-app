import { FileUploadArea } from "@/app/components/FileUploadArea";
import { ResultArea } from "@/app/components/ResultArea";
import { useTranscriptionsStore } from "@/app/stores";

export const MainBoard = () => {
  const activeTranscription = useTranscriptionsStore(
    (state) => state.activeTranscription,
  );

  return (
    <main className="p-4 h-[calc(100vh-80px)] overflow-hidden">
      <h1 className="text-3xl text-center">Audio transcription</h1>
      <FileUploadArea />
      {activeTranscription ? (
        <ResultArea transcription={activeTranscription} />
      ) : (
        <p className="text-center mt-20 text-xl">
          Upload a new file or choose from your last transcriptions
        </p>
      )}
    </main>
  );
};
