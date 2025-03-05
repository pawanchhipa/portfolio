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
      description: "Built machine learning models to classify toxic chemicals and implemented data-driven approaches for chemical risk assessment. Developed and optimized sequential workflows combining classification and regression models.",
      githubUrl: "https://github.com/username/toxicity-prediction",
      technologies: ["Python", "Machine Learning", "Chemical Data Analysis", "Deep Neural Networks"],
      image: null,
    },
    {
      id: 2,
      title: "ML for Drug Discovery",
      description: "Developed predictive models for molecular property estimation and explored deep learning techniques for drug-likeness classification. Utilized advanced machine learning approaches for property prediction.",
      githubUrl: "https://github.com/username/drug-discovery",
      technologies: ["Deep Learning", "PyTorch", "RDKit", "SMILES Notation"],
      image: null,
    },
    {
      id: 3,
      title: "Polymer Bandgap Property Prediction",
      description: "Developed a comprehensive machine learning pipeline for polymer property prediction, using Random Forest models, Morgan fingerprints, and molecular descriptors from RDKit. Applied RFECV for feature selection and optimization.",
      githubUrl: "https://github.com/username/polymer-prediction",
      technologies: ["Random Forest", "RDKit", "Feature Engineering", "Cross-validation"],
      image: null,
    },
  ];

  private experiences: Experience[] = [
    {
      id: 1,
      title: "Project Associate",
      company: "CSIR CLRI",
      startDate: "2023-09-01",
      endDate: null,
      description: "Developed and optimized a sequential workflow combining classification and regression models for toxic chemical prediction. Optimized computational efficiency using HPC systems and GPU clusters for processing large-scale chemical datasets. Currently conducting cutting-edge chemistry research, employing machine learning for advanced molecular analysis & prediction.",
    },
    {
      id: 2,
      title: "Placement Coordinator",
      company: "IIT Madras",
      startDate: "2022-05-01",
      endDate: "2023-06-30",
      description: "Selected in a core team of 250+ students to manage placements for 1800+ students. Strategically pitched 15+ companies to open relevant job profiles for M.Sc and PhD candidates. Contributed to achieving 32 placement offers, a significant boost from the previous year's count of 7 offers.",
    },
    {
      id: 3,
      title: "Conference Volunteer",
      company: "Theoretical Chemistry Symposium (TCS) | IIT Madras",
      startDate: "2023-12-07",
      endDate: "2023-12-10",
      description: "Managed abstract processing for TCS, categorizing 600 submissions into 4 thematic sets. Utilized strategic planning to streamline abstract formatting and collaborated with a team to produce a high-quality abstract book.",
    }
  ];

  private certifications: Certification[] = [
    {
      id: 1,
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "DeepLearning.AI and Stanford Online",
      date: "2024-02-01",
      url: null,
    },
    {
      id: 2,
      title: "Advanced Learning Algorithms",
      issuer: "DeepLearning.AI and Stanford Online",
      date: "2024-01-15",
      url: null,
    },
    {
      id: 3,
      title: "Statistics for Data Science with Python",
      issuer: "IBM Skills Network",
      date: "2023-01-15",
      url: null,
    },
    {
      id: 4,
      title: "Databases and SQL for Data Science with Python",
      issuer: "IBM Skills Network",
      date: "2022-12-15",
      url: null,
    },
    {
      id: 5,
      title: "Data Science: Theory and Practice",
      issuer: "IIT Madras",
      date: "2022-11-15",
      url: null,
    },
    {
      id: 6,
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