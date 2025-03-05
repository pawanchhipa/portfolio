import type {
  Project,
  Experience,
  Certification,
  Contact,
  InsertContact,
} from "@shared/schema";

export interface IStorage {
  getProjects(): Promise<Project[]>;
  getExperiences(): Promise<Experience[]>;
  getCertifications(): Promise<Certification[]>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private projects: Project[] = [
    {
      id: 1,
      title: "Deep Learning Object Detection",
      description: "Real-time object detection system using YOLO architecture",
      githubUrl: "https://github.com/username/object-detection",
      technologies: ["Python", "PyTorch", "OpenCV"],
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
    },
    // Add more sample projects
  ];

  private experiences: Experience[] = [
    {
      id: 1,
      title: "Senior ML Engineer",
      company: "AI Solutions Inc",
      startDate: "2021-01-01",
      endDate: null,
      description: "Leading ML model development and deployment",
    },
    // Add more sample experiences
  ];

  private certifications: Certification[] = [
    {
      id: 1,
      title: "Deep Learning Specialization",
      issuer: "Coursera",
      date: "2020-06-15",
      url: "https://coursera.org/verify/specialization/123",
    },
    // Add more sample certifications
  ];

  private contacts: Contact[] = [];
  private contactId = 1;

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  async getExperiences(): Promise<Experience[]> {
    return this.experiences;
  }

  async getCertifications(): Promise<Certification[]> {
    return this.certifications;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const newContact = {
      id: this.contactId++,
      ...contact,
    };
    this.contacts.push(newContact);
    return newContact;
  }
}

export const storage = new MemStorage();