import { NextResponse } from "next/server";
import { db } from "@/db";
import { projects } from "@/db/schema";
import { asc, desc } from "drizzle-orm";
import { seedDatabaseIfEmpty } from "@/db/seed";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await seedDatabaseIfEmpty();
    const allProjects = await db
      .select()
      .from(projects)
      .orderBy(desc(projects.isFeatured), asc(projects.sortOrder), asc(projects.id));

    return NextResponse.json(allProjects);
  } catch (error) {
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
