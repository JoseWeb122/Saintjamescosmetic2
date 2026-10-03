import { db } from "@/db";
import { contactInquiries } from "@/db/schema";

export const dynamic = "force-dynamic";

const allowedTopics = new Set(["product", "shade", "order", "mail-order", "general"]);
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Please send your note using the contact form." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object") {
    return Response.json({ error: "Please check the form and try again." }, { status: 400 });
  }

  const fields = payload as Record<string, unknown>;
  const name = typeof fields.name === "string" ? fields.name.trim() : "";
  const email = typeof fields.email === "string" ? fields.email.trim().toLowerCase() : "";
  const phone = typeof fields.phone === "string" ? fields.phone.trim().slice(0, 40) : "";
  const topic = typeof fields.topic === "string" && allowedTopics.has(fields.topic) ? fields.topic : "general";
  const productName = typeof fields.productName === "string" ? fields.productName.trim().slice(0, 180) : "";
  const message = typeof fields.message === "string" ? fields.message.trim() : "";
  const honeypot = typeof fields.website === "string" ? fields.website.trim() : "";

  // Quietly accept the submission so spambots can't use the response to verify the trap.
  if (honeypot) return Response.json({ ok: true }, { status: 201 });

  if (name.length < 2 || name.length > 120) {
    return Response.json({ error: "Please enter your name (at least two characters)." }, { status: 400 });
  }
  if (email.length > 254 || !emailPattern.test(email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 5000) {
    return Response.json({ error: "Please enter a note between 10 and 5,000 characters." }, { status: 400 });
  }

  try {
    await db.insert(contactInquiries).values({
      name,
      email,
      phone: phone || null,
      topic,
      productName: productName || null,
      message,
    });
    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Unable to save contact inquiry", error);
    return Response.json(
      { error: "We couldn't receive your note right now. Please email or call us directly." },
      { status: 500 },
    );
  }
}
