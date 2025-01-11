import { WebhookEvent } from "@clerk/nextjs/server";
import { Webhook } from "svix";
import { headers } from "next/headers";
import config from "@/config/config";
import { NextRequest, NextResponse } from "next/server";
import { createUser } from "@/app/api/clerk-webhook/createUser/create.action";

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  const SIGNING_SECRET = config.SIGNING_SECRET!;

  const wh = new Webhook(SIGNING_SECRET);

  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new NextResponse("Error: Missing Svix headers", {
      status: 400,
    });
  }

  const payload = await req.json();

  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;

    const eventType = evt.type;

    if (eventType === "user.created") {
      const {
        id: clerkId,
        first_name: firstName,
        last_name: lastName,
        email_addresses,
      } = evt.data;

      const email = email_addresses[0].email_address;

      await createUser({ clerkId, firstName, lastName, email });

      return new NextResponse("User created", { status: 201 });
    }

    return new NextResponse("Event ignored", { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);

    return new NextResponse("Internal server error", { status: 500 });
  }
};
