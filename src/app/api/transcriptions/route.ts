import {
  createTranscription,
  getAllTranscriptions,
} from "@/actions/transcription.actions";
import {
  IParsedTranscription,
  ITranscriptionResponse,
} from "@/interfaces/transcription.interface";
import { parseTranscriptionResponse, transcribeFile } from "@/lib/deepgram";
import { getFileBuffer } from "@/lib/file";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const { fileName, filePath, currentUser } = await req.json();

  const fileNameArray: string[] = fileName.split(".");

  const extension = fileNameArray[fileNameArray.length - 1];

  const fileBuffer = getFileBuffer(filePath);

  try {
    const response: ITranscriptionResponse = await transcribeFile(
      extension,
      fileBuffer
    );

    const transcription: IParsedTranscription =
      parseTranscriptionResponse(response);

    const savedTranscription = await createTranscription({
      filename: fileName,
      ownerId: currentUser.id,
      ...transcription,
    });

    return NextResponse.json(
      {
        message: "Transcription created successfully",
        data: savedTranscription,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Deepgram API error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};

export const GET = async (): Promise<NextResponse> => {
  try {
    const transcriptions = await getAllTranscriptions();

    return NextResponse.json(transcriptions, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
