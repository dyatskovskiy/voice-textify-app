import prisma from "@/lib/prisma";
import { IUser, IUserDto } from "@/interfaces/user.interface";

export const createUser = async (userDto: IUserDto): Promise<IUser | void> => {
  try {
    const { clerkId, firstName, lastName, email } = userDto;

    return await prisma.user.create({
      data: {
        clerkId,
        firstName: firstName ?? "",
        lastName: lastName ?? "",
        email,
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
};
