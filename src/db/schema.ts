import { pgTable, serial, text, boolean, integer, timestamp, jsonb } from "drizzle-orm/pg-core";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  subtitle: text("subtitle"),
  genre: text("genre").notNull(),
  engine: text("engine").notNull(),
  programming: text("programming").notNull(),
  status: text("status").notNull(), // 'Currently In Development' | 'Prototype' | 'Completed'
  isFeatured: boolean("is_featured").default(false),
  sortOrder: integer("sort_order").default(0),
  shortDescription: text("short_description").notNull(),
  fullPremise: text("full_premise"),
  roleDescription: text("role_description"),
  features: jsonb("features").$type<string[]>().default([]),
  contentWarnings: jsonb("content_warnings").$type<string[]>().default([]),
  languages: jsonb("languages").$type<string[]>().default([]),
  mechanics: jsonb("mechanics").$type<{
    name: string;
    description: string;
    diagramFlow?: string[];
    tag?: string;
  }[]>().default([]),
  technicalSystems: jsonb("technical_systems").$type<{
    name: string;
    category: string;
    details: string;
    codeSnippet?: string;
  }[]>().default([]),
  controls: jsonb("controls").$type<{
    key: string;
    action: string;
    category: string;
  }[]>().default([]),
  coverImage: text("cover_image"),
  galleryImages: jsonb("gallery_images").$type<{
    url: string;
    caption: string;
  }[]>().default([]),
  videoUrl: text("video_url"),
  demoUrl: text("demo_url"),
  gddDocId: integer("gdd_doc_id"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  category: text("category").notNull(), // 'Game Engine' | 'Programming / Scripting' | 'Web' | 'Game Design'
  name: text("name").notNull(),
  level: text("level").notNull(), // 'Core Focus' | 'Proficient' | 'Hands-on'
  description: text("description"),
  sortOrder: integer("sort_order").default(0),
});

export const documents = pgTable("documents", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category").notNull(), // 'Game Design Documents' | 'Technical Documentation' | 'Narrative Design'
  projectName: text("project_name").notNull(),
  version: text("version").default("v1.0"),
  summary: text("summary").notNull(),
  contentMarkdown: text("content_markdown").notNull(),
  fileUrl: text("file_url"),
  pagesCount: integer("pages_count").default(1),
  tags: jsonb("tags").$type<string[]>().default([]),
  updatedDate: text("updated_date"),
});

export const gameJams = pgTable("game_jams", {
  id: serial("id").primaryKey(),
  eventName: text("event_name").notNull(),
  projectTitle: text("project_title").notNull(),
  role: text("role").notNull(),
  status: text("status").notNull(), // 'Prototype'
  timeline: text("timeline"),
  overview: text("overview").notNull(),
  contributions: jsonb("contributions").$type<string[]>().default([]),
  gameplayConcept: text("gameplay_concept"),
  mechanics: jsonb("mechanics").$type<string[]>().default([]),
  process: text("process"),
  takeaways: text("takeaways"),
  technologies: jsonb("technologies").$type<string[]>().default([]),
  image: text("image"),
});

export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  studioOrCompany: text("studio_or_company"),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const profileSettings = pgTable("profile_settings", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  title: text("title").notNull(),
  subtitle: text("subtitle").notNull(),
  bio: text("bio").notNull(),
  strengths: jsonb("strengths").$type<string[]>().default([]),
  email: text("email").notNull(),
  linkedin: text("linkedin"),
  github: text("github"),
  location: text("location"),
  resumeUrl: text("resume_url"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export type Project = typeof projects.$inferSelect;
export type InsertProject = typeof projects.$inferInsert;
export type Skill = typeof skills.$inferSelect;
export type InsertSkill = typeof skills.$inferInsert;
export type Document = typeof documents.$inferSelect;
export type InsertDocument = typeof documents.$inferInsert;
export type GameJam = typeof gameJams.$inferSelect;
export type InsertGameJam = typeof gameJams.$inferInsert;
export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = typeof contactMessages.$inferInsert;
export type ProfileSettings = typeof profileSettings.$inferSelect;
