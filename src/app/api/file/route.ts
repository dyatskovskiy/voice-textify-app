import { NextRequest, NextResponse } from "next/server";
import { saveFile } from "@/lib/file";

export const config = {
  api: {
    bodyParser: false,
  },
};

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const formdata = await req.formData();

    const originalFile = formdata.get("audio") as File;

    if (!originalFile) {
      return NextResponse.json(
        {
          error: "File not founded",
        },
        { status: 400 }
      );
    }

    const { type, name } = originalFile;

    if (!type.includes("audio")) {
      return NextResponse.json(
        {
          error: "Wrong file format",
        },
        { status: 400 }
      );
    }

    const savedFilePath = await saveFile(name, originalFile);

    return NextResponse.json(
      {
        message: "File successfully uploaded",
        data: { fileName: name, filePath: savedFilePath },
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to upload the file",
        details: error instanceof Error ? error.message : error,
      },
      { status: 500 }
    );
  }
};
