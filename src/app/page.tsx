"use client";

import { useEffect } from "react";
import { MainBoard } from "./components/MainBoard";
import { Sidebar } from "./components/Sidebar";
import { TranscriptionsList } from "./components/TranscriptionsList";
import { useTranscriptionsStore, useUserStore } from "@/app/stores";
import { useAuth } from "@clerk/nextjs";
import useGlobalAppStateStore from "@/app/stores/globalAppState.store";
import { LoaderOverlay } from "@/app/components/LoaderOverlay";
import { toast, Toaster } from "react-hot-toast";

export default function Home() {
  const isLoading = useGlobalAppStateStore((state) => state.isLoading);

  const error = useGlobalAppStateStore((state) => state.error);

  const { userId: clerkId } = useAuth();

  const { setIsLoading, setError } = useGlobalAppStateStore.getState();

  const user = useUserStore((state) => state.user);

  const transcriptions = useTranscriptionsStore(
    (state) => state.transcriptions,
  );

  useEffect(() => {
    if (user) {
      (async function () {
        setIsLoading(true);
        setError(null);
        try {
          const transcriptions = await fetch(
            `api/users/${user.id}/transcriptions`,
            {
              method: "GET",
            },
          ).then((r) => r.json());

          useTranscriptionsStore.getState().setTranscriptions(transcriptions);
        } catch (err) {
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
  }, [setError, setIsLoading, user]);

  useEffect(() => {
    (async function () {
      useGlobalAppStateStore.getState().setIsLoading(true);

      if (clerkId) {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(`api/clerk-users/${clerkId}`, {
            method: "GET",
            credentials: "include",
          });

          const user = await response.json();

          useUserStore.getState().setUser(user);
        } catch (err: unknown) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError("An unknown error occurred.");
          }
        } finally {
          setIsLoading(false);
        }
      }
    })();
  }, [clerkId, setError, setIsLoading]);

  if (error) {
    toast.error(error);
  }

  return (
    <div className="h-[1fr] grid grid-rows-[1fr] grid-cols-[320px_1fr]  gap-4">
      <Sidebar>
        <TranscriptionsList transcriptions={transcriptions} />
      </Sidebar>
      <MainBoard />

      <Toaster />

      {isLoading && <LoaderOverlay />}
    </div>
  );
}
