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
      title: "AI-Driven Toxicity Prediction",
      description: "Built machine learning models to classify toxic chemicals and implemented data-driven approaches for chemical risk assessment.",
      githubUrl: "https://github.com/username/toxicity-prediction",
      technologies: ["Python", "Machine Learning", "Chemical Data Analysis"],
      image: null,
    },
    {
      id: 2,
      title: "ML for Drug Discovery",
      description: "Developed predictive models for molecular property estimation and explored deep learning techniques for drug-likeness classification.",
      githubUrl: "https://github.com/username/drug-discovery",
      technologies: ["Deep Learning", "PyTorch", "RDKit"],
      image: null,
    },
    {
      id: 3,
      title: "Computational Materials Analysis",
      description: "Research project focused on automating the characterization and analysis of advanced materials using AI models integrated with computational simulation workflows.",
      githubUrl: "https://github.com/username/materials-analysis",
      technologies: ["Scientific ML", "Materials Studio", "Simulation"],
      image: null,
    },
  ];

  private experiences: Experience[] = [
    {
      id: 1,
      title: "Project Associate",
      company: "CSIR CLRI",
      startDate: "2024-01-01",
      endDate: null,
      description: "Developing machine learning models to classify toxic chemicals and implementing AI-driven methodologies for chemical risk assessment.",
    },
    {
      id: 2,
      title: "Intern",
      company: "IIT Madras",
      startDate: "2023-06-01",
      endDate: "2023-12-31",
      description: "Applied machine learning techniques for drug discovery and explored computational models for molecular property predictions.",
    },
    {
      id: 3,
      title: "PhD Candidate (Starting April 2025)",
      company: "Research Group of Prof. Dr. Marek Sierka",
      startDate: "2025-04-01",
      endDate: null,
      description: "Will be working on integrating simulation workflows and automating the characterization and analysis of advanced materials.",
    }
  ];

  private certifications: Certification[] = [
    {
      id: 1,
      title: "Machine Learning and AI in Materials Science",
      issuer: "IIT Madras",
      date: "2024-06-01",
      url: null,
    },
    {
      id: 2,
      title: "Master's Degree in Chemistry",
      issuer: "IIT Madras",
      date: "2023-05-15",
      url: null,
    }
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