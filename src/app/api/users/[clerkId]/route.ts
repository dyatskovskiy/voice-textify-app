import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/app/api/users/[clerkId]/getUser/getUser.action";

export const GET = async (
  req: NextRequest,
  { params }: { params: Promise<{ clerkId: string }> },
) => {
  const clerkId = (await params).clerkId;

  if (!clerkId) {
    return NextResponse.json(
      { error: "Clerk ID is required" },
      { status: 400 },
    );
  }

  try {
    const user = await getUser("clerkId", clerkId);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
};
