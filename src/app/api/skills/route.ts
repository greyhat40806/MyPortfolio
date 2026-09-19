import { NextResponse } from "next/server";
import { db } from "@/db";
import { skills } from "@/db/schema";
import { asc } from "drizzle-orm";
import { seedDatabaseIfEmpty } from "@/db/seed";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await seedDatabaseIfEmpty();
    const allSkills = await db
      .select()
      .from(skills)
      .orderBy(asc(skills.category), asc(skills.sortOrder), asc(skills.id));

    return NextResponse.json(allSkills);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
