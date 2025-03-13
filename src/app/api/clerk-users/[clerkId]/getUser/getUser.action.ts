import { IUser } from "@/interfaces/user.interface";
import prisma from "@/lib/prisma";

export const getUser = async <T extends keyof IUser>(
  field: T,
  value: IUser[T],
): Promise<IUser | null | void> => {
  try {
    return await prisma.user.findFirst({ where: { [field]: value } });
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    prisma.$disconnect();
  }
};
