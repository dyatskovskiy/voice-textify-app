import { NextRequest, NextResponse } from "next/server";
import {
  IParsedTranscription,
  ITranscriptionResponse,
} from "@/interfaces/transcription.interface";
import { parseTranscriptionResponse, transcribeFile } from "@/lib/deepgram";
import { deleteFile, getFileBuffer } from "@/lib/file";
import { getAllTranscriptions } from "@/app/api/users/[userId]/transcriptions/getAll/getAll.action";
import { mapResponse } from "@/app/api/users/[userId]/transcriptions/mappers";
import { createTranscription } from "@/app/api/users/[userId]/transcriptions/create/create.action";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> },
): Promise<NextResponse> => {
  const userIdString = (await params).userId;

  const userId = parseInt(userIdString, 10);

  if (!userIdString || !userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }
  try {
    const transcriptions = await getAllTranscriptions(userId);

    const response = mapResponse(transcriptions);

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
};

export const POST = async (
  req: NextRequest,
  { params }: { params: Promise<{ userId: string }> },
): Promise<NextResponse> => {
  const userIdString = (await params).userId;

  if (!userIdString) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  const userId = parseInt(userIdString, 10);

  const { fileName, filePath } = await req.json();

  const fileNameArray: string[] = fileName.split(".");

  const extension = fileNameArray[fileNameArray.length - 1];

  const fileBuffer = getFileBuffer(filePath);

  try {
    const response: ITranscriptionResponse = await transcribeFile(
      extension,
      fileBuffer,
    );

    const transcription: IParsedTranscription =
      parseTranscriptionResponse(response);

    const newTranscription = await createTranscription({
      filename: fileName,
      ownerId: userId,
      ...transcription,
    });

    const savedTranscription = mapResponse(newTranscription);

    deleteFile(filePath);
    return NextResponse.json(
      {
        message: "Transcription created successfully",
        data: savedTranscription,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Deepgram API error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
};
