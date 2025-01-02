import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { IUser, IUserDto } from "@/interfaces/User.interface";

export const createUser = async (
  userDto: IUserDto
): Promise<IUser | NextResponse> => {
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
    console.log(error);
    return new NextResponse("Error", { status: 500 });
  } finally {
    prisma.$disconnect();
  }
};
