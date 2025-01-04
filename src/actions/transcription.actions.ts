import prisma from "@/lib/prisma";
import {
  ICreateTranscriptionDto,
  ITranscription,
} from "@/interfaces/transcription.interface";

export const createTranscription = async (
  transcriptionDto: ICreateTranscriptionDto
): Promise<ITranscription | void> => {
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

export const getAllTranscriptions = async (): Promise<ITranscription[]> => {
  try {
    return await prisma.transcription.findMany();
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    prisma.$disconnect();
  }
};
