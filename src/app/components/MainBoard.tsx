import { FileUploadArea } from "@/app/components/FileUploadArea";
import { ResultArea } from "@/app/components/ResultArea";
import { useTranscriptionsStore } from "@/app/stores";
import useGlobalAppStateStore from "@/app/stores/globalAppState.store";
import { LoaderOverlay } from "@/app/components/LoaderOverlay";
import { toast, Toaster } from "react-hot-toast";

export const MainBoard = () => {
  const activeTranscription = useTranscriptionsStore(
    (state) => state.activeTranscription,
  );

  const { isLoading, isError } = useGlobalAppStateStore.getState();

  if (isLoading) {
    return <LoaderOverlay />;
  }

  if (isError) {
    toast.error("Oops, something went wrong");
  }

  return (
    <>
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
      <Toaster />
    </>
  );
};
