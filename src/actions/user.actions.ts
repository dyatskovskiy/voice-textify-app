import UserModel, { IUser } from "@/models/user.model";
import connectDB from "@/config/database";
import { NextResponse } from "next/server";

interface IUserDto {
  clerkId: string;
  email: string;
  firstName: string | null;
  lastName: string | null;
}

export const createUser = async (
  userDto: IUserDto
): Promise<IUser | NextResponse> => {
  try {
    await connectDB();

    return await UserModel.create(userDto);
  } catch (error) {
    console.log(error);
    return new NextResponse("Error", { status: 500 });
  }
};
