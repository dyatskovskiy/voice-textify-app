"use client";

import { useEffect } from "react";
import { MainBoard } from "./components/MainBoard";
import { Sidebar } from "./components/Sidebar";
import { TranscriptionsList } from "./components/TranscriptionsList";
import { useTranscriptionsStore, useUserStore } from "@/app/stores";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const { userId: clerkId } = useAuth();
  const user = useUserStore((state) => state.user);

  const transcriptions = useTranscriptionsStore(
    (state) => state.transcriptions,
  );

  useEffect(() => {
    if (user) {
      (async function () {
        try {
          const response = await fetch(`api/transcriptions/${user.id}`, {
            method: "GET",
          });

          const transcriptions = await response.json();

          useTranscriptionsStore.getState().setTranscriptions(transcriptions);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  }, [user]);

  useEffect(() => {
    (async function () {
      if (clerkId) {
        const user = await fetch(`api/users/${clerkId}`, {
          method: "GET",
          credentials: "include",
        }).then((r) => r.json());

        useUserStore.getState().setUser(user);
      }
    })();
  }, [clerkId]);

  return (
    <div className="h-[1fr] grid grid-rows-[1fr] grid-cols-[320px_1fr]  gap-4">
      <Sidebar>
        <TranscriptionsList transcriptions={transcriptions} />
      </Sidebar>

      <MainBoard></MainBoard>
    </div>
  );
}
