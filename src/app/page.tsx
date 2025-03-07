"use client";

import { useEffect } from "react";
import { MainBoard } from "./components/MainBoard";
import { Sidebar } from "./components/Sidebar";
import { TranscriptionsList } from "./components/TranscriptionsList";
import { useTranscriptionsStore, useUserStore } from "@/app/stores";
import { useAuth } from "@clerk/nextjs";
import useGloballAppStateStore from "@/app/stores/globalAppState.store";

export default function Home() {
  const { userId: clerkId } = useAuth();
  const { setIsLoading, setIsError } = useGloballAppStateStore.getState();
  const user = useUserStore((state) => state.user);

  const transcriptions = useTranscriptionsStore(
    (state) => state.transcriptions,
  );

  useEffect(() => {
    if (user) {
      (async function () {
        setIsLoading(true);
        setIsError(false);
        try {
          const response = await fetch(`api/transcriptions/${user.id}`, {
            method: "GET",
          });

          const transcriptions = await response.json();

          useTranscriptionsStore.getState().setTranscriptions(transcriptions);
        } catch {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [setIsError, setIsLoading, user]);

  useEffect(() => {
    (async function () {
      useGloballAppStateStore.getState().setIsLoading(true);

      if (clerkId) {
        setIsLoading(true);
        setIsError(false);
        try {
          const response = await fetch(`api/users/${clerkId}`, {
            method: "GET",
            credentials: "include",
          });

          const user = await response.json();

          useUserStore.getState().setUser(user);
        } catch {
          setIsError(true);
        } finally {
          setIsLoading(false);
        }
      }
    })();
  }, [clerkId, setIsError, setIsLoading]);

  return (
    <div className="h-[1fr] grid grid-rows-[1fr] grid-cols-[320px_1fr]  gap-4">
      <Sidebar>
        <TranscriptionsList transcriptions={transcriptions} />
      </Sidebar>
      <MainBoard></MainBoard>
    </div>
  );
}
