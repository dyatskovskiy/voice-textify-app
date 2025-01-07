import prisma from "@/lib/prisma";
import { ITranscriptionApi } from "@/interfaces/transcription.interface";

export const getAllTranscriptions = async (): Promise<ITranscriptionApi[]> => {
  try {
    return await prisma.transcription.findMany({
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
