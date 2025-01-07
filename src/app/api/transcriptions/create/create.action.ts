import prisma from "@/lib/prisma";
import {
  ICreateTranscriptionDto,
  ITranscriptionApi,
} from "@/interfaces/transcription.interface";

export const createTranscription = async (
  transcriptionDto: ICreateTranscriptionDto,
): Promise<ITranscriptionApi> => {
  try {
    return await prisma.transcription.create({
      data: transcriptionDto,
    });
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    prisma.$disconnect();
  }
};
