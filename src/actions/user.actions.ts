import prisma from "@/lib/prisma";
import { IUser, IUserDto } from "@/interfaces/user.interface";

export const createUser = async (userDto: IUserDto): Promise<IUser | void> => {
  try {
    const { clerkId, firstName, lastName, email } = userDto;

    const newUser = await prisma.user.create({
      data: {
        clerkId,
        firstName: firstName ?? "",
        lastName: lastName ?? "",
        email,
      },
    });
    return newUser;
  } catch (error) {
    console.error(error);
  } finally {
    prisma.$disconnect();
  }
};

export const getUser = async <T extends keyof IUser>(
  field: T,
  value: IUser[T]
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
