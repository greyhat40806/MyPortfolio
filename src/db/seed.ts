import { db } from "@/db";
import { projects, skills, documents, gameJams, profileSettings } from "@/db/schema";
import { initialProfile, initialProjects, initialSkills, initialDocuments, initialGameJams } from "./seed-data";
import { count } from "drizzle-orm";

export async function seedDatabaseIfEmpty() {
  try {
    const [projectCount] = await db.select({ value: count() }).from(projects);
    if (projectCount && Number(projectCount.value) > 0) {
      return { seeded: false, message: "Database already contains data." };
    }

    console.log("Seeding database with Ryan Casalme portfolio data...");

    // Seed Profile
    await db.insert(profileSettings).values(initialProfile);

    // Seed Projects
    for (const p of initialProjects) {
      await db.insert(projects).values(p);
    }

    // Seed Skills
    for (const s of initialSkills) {
      await db.insert(skills).values(s);
    }

    // Seed Documents
    for (const d of initialDocuments) {
      await db.insert(documents).values(d);
    }

    // Seed Game Jams
    for (const j of initialGameJams) {
      await db.insert(gameJams).values(j);
    }

    console.log("Database seeded successfully!");
    return { seeded: true, message: "Database seeded successfully!" };
  } catch (error) {
    console.error("Error seeding database:", error);
    return { seeded: false, error: String(error) };
  }
}
