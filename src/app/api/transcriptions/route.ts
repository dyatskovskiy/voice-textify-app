import {
  IParsedTranscription,
  ITranscriptionResponse,
} from "@/interfaces/transcription.interface";
import { parseTranscriptionResponse, transcribeFile } from "@/lib/deepgram";
import { deleteFile, getFileBuffer } from "@/lib/file";
import { NextRequest, NextResponse } from "next/server";
import { mapResponse } from "@/app/api/transcriptions/getAll/mappers";
import { getAllTranscriptions } from "@/app/api/transcriptions/getAll/getAll.action";
import { createTranscription } from "@/app/api/transcriptions/create/create.action";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const { fileName, filePath, currentUser } = await req.json();

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

    const savedTranscription = await createTranscription({
      filename: fileName,
      ownerId: currentUser.id,
      ...transcription,
    });

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

export const GET = async (): Promise<NextResponse> => {
  try {
    const transcriptions = await getAllTranscriptions();

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
