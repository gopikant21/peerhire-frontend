// src/types/index.ts

export interface Project {
    id: number;
    name: string;
    budget: number;
    timeline: number;
    skills: string[];
    description?: string;
  }
  
  export interface CompletedProject {
    id: number;
    name: string;
    description: string;
    completionDate: string;
    technologies: string[];
  }
  
  export interface Freelancer {
    id: number;
    name: string;
    profileImage: string;
    skills: string[];
    yearsOfExperience: number;
    description: string;
    portfolioLinks: {
      github?: string;
      linkedin?: string;
      website?: string;
    };
    completedProjects: CompletedProject[];
    rating: number;
  }
  
  export interface Bid {
    id: number;
    projectId: number;
    amount: number;
    timeline: number;
    proposal: string;
    status: 'Pending' | 'Accepted' | 'Rejected';
    createdAt: string;
  }
  
  export type BidFormData = Omit<Bid, 'id' | 'status' | 'createdAt'>;
  
  export type BidStatus = 'Pending' | 'Accepted' | 'Rejected';