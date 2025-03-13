import { ITranscriptionApi } from "@/interfaces/transcription.interface";
import prisma from "@/lib/prisma";

export const deleteTranscription = async (
  transcriptionId: number,
  userId: number,
): Promise<ITranscriptionApi | undefined> => {
  try {
    console.log(transcriptionId, userId);
    const transcription = await prisma.transcription.findUnique({
      where: {
        id: transcriptionId,
        ownerId: userId,
      },
    });

    console.log(transcription);

    if (!transcription) {
      throw new Error("Transcription not found");
    }

    return await prisma.transcription.delete({
      where: {
        id: transcriptionId,
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
};
