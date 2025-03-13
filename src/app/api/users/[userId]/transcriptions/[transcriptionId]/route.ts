import { NextRequest, NextResponse } from "next/server";
import { updateTranscription } from "@/app/api/users/[userId]/transcriptions/update/update.action";
import { mapResponse } from "@/app/api/users/[userId]/transcriptions/mappers";
import parseParams from "@/lib/parseParams";
import { deleteTranscription } from "../delete/delete.action";

export const PATCH = async (
  req: NextRequest,
  { params }: { params: Promise<{ userId: string; transcriptionId: string }> },
): Promise<NextResponse> => {
  const { userId, transcriptionId } = await parseParams({ params });

  if (!userId || !transcriptionId) {
    return NextResponse.json(
      { error: "User ID and Transcription ID are required" },
      { status: 400 },
    );
  }
  const { values } = await req.json();

  console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", values);

  try {
    const newTranscription = await updateTranscription(
      transcriptionId,
      userId,
      values,
    );

    if (!newTranscription) {
      throw new Error("Something went wrong. Transcription is not updated");
    }

    const response = mapResponse(newTranscription);

    return NextResponse.json(
      { data: response, message: "Transcription updated successfully" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Promise<{ userId: string; transcriptionId: string }> },
): Promise<NextResponse> => {
  const { userId, transcriptionId } = await parseParams({ params });

  if (!userId || !transcriptionId) {
    return NextResponse.json(
      { error: "User ID and Transcription ID are required" },
      { status: 400 },
    );
  }

  try {
    await deleteTranscription(transcriptionId, userId);

    return NextResponse.json(
      { message: "Transcription deleted successfully" },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
};
