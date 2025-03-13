import { ITranscriptionApi } from "@/interfaces/transcription.interface";
import prisma from "@/lib/prisma";

export const updateTranscription = async (
  transcriptionId: number,
  clientId: number,
  data: Record<string, unknown>,
): Promise<ITranscriptionApi | undefined> => {
  console.log("data", data);
  try {
    return await prisma.transcription.update({
      where: { ownerId: clientId, id: transcriptionId },
      data: data,
    });
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
};
