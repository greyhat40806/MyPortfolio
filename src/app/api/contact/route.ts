import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactMessages } from "@/db/schema";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Basic validation
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const [newMessage] = await db
      .insert(contactMessages)
      .values({
        name: data.name.trim(),
        email: data.email.trim(),
        subject: data.subject?.trim() || "Portfolio Inquiry",
        message: data.message.trim(),
      })
      .returning();

    return NextResponse.json(
      { success: true, message: "Message received!", data: newMessage },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
