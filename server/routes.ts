import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.get("/api/projects", async (_req, res) => {
    const projects = await storage.getProjects();
    res.json(projects);
  });

  app.get("/api/experiences", async (_req, res) => {
    const experiences = await storage.getExperiences();
    res.json(experiences);
  });

  app.get("/api/certifications", async (_req, res) => {
    const certifications = await storage.getCertifications();
    res.json(certifications);
  });

  app.post("/api/contacts", async (req, res) => {
    const data = insertContactSchema.parse(req.body);
    const contact = await storage.createContact(data);
    res.json(contact);
  });

  const httpServer = createServer(app);
  return httpServer;
}
