import { pgTable, text, serial, date, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  githubUrl: text("github_url").notNull(),
  technologies: text("technologies").array().notNull(),
  image: text("image"),
});

export const experiences = pgTable("experiences", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  company: text("company").notNull(),
  startDate: date("start_date").notNull(),
  endDate: date("end_date"),
  description: text("description").notNull(),
});

export const certifications = pgTable("certifications", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  issuer: text("issuer").notNull(),
  date: date("date").notNull(),
  url: text("url"),
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export const insertProjectSchema = createInsertSchema(projects);
export const insertExperienceSchema = createInsertSchema(experiences);
export const insertCertificationSchema = createInsertSchema(certifications);
export const insertContactSchema = createInsertSchema(contacts);

export type Project = typeof projects.$inferSelect;
export type Experience = typeof experiences.$inferSelect;
export type Certification = typeof certifications.$inferSelect;
export type Contact = typeof contacts.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type InsertExperience = z.infer<typeof insertExperienceSchema>;
export type InsertCertification = z.infer<typeof insertCertificationSchema>;
export type InsertContact = z.infer<typeof insertContactSchema>;
