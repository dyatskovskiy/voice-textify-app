import prisma from "@/lib/prisma";
import { ITranscriptionApi } from "@/interfaces/transcription.interface";

export const getAllTranscriptions = async (
  clientId: number,
): Promise<ITranscriptionApi[]> => {
  try {
    return await prisma.transcription.findMany({
      where: {
        ownerId: clientId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    prisma.$disconnect();
  }
};
