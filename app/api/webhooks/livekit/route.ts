import { db } from "@/lib/db";
import { WebhookReceiver } from "livekit-server-sdk";
import { headers } from "next/headers";

const receiver = new WebhookReceiver(
  process.env.LIVEKIT_API_KEY!,
  process.env.LIVEKIT_API_SECRET!
);

export async function POST(req: Request) {
  const body = await req.text();
  const headerPayload = await headers();
  const authorization = headerPayload.get("Authorization");

  if (!authorization) {
    return new Response("No authorization header", { status: 400 });
  }

  const event = await receiver.receive(body, authorization);

  if (event.event === "ingress_ended") {
    await db.stream.update({
      where: { ingressId: event.ingressInfo?.ingressId },
      data: { isLive: false },
    });
  }

  if (event.event === "ingress_started") {
    await db.stream.update({
      where: { ingressId: event.ingressInfo?.ingressId },
      data: { isLive: true },
    });
  }

  return new Response("Webhook received", { status: 200 });
}
