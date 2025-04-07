import { Project, FreelancerProfile } from '../types';

export const mockProjects: Project[] = [
  {
    id: 1,
    name: "E-commerce Website Development",
    budget: 75000,
    timeline: 30,
    skills: ["React", "Node.js", "MongoDB"],
    description: "Build a full-stack e-commerce platform with user authentication, product management, and payment integration."
  },
  {
    id: 2,
    name: "Mobile App UI Design",
    budget: 45000,
    timeline: 15,
    skills: ["UI/UX", "Figma", "Mobile Design"],
    description: "Design a modern and intuitive user interface for a fitness tracking mobile application."
  },
  {
    id: 3,
    name: "Blockchain Smart Contract",
    budget: 120000,
    timeline: 45,
    skills: ["Solidity", "Ethereum", "Web3.js"],
    description: "Develop and deploy smart contracts for a decentralized finance (DeFi) platform."
  }
];

export const mockProfile: FreelancerProfile = {
  name: "Alex Thompson",
  skills: ["React", "TypeScript", "Node.js", "TailwindCSS", "MongoDB"],
  experience: 5,
  description: "Full-stack developer with 5 years of experience specializing in React and Node.js. Passionate about building scalable web applications and mentoring junior developers.",
  portfolioLinks: {
    github: "https://github.com/alexthompson",
    linkedin: "https://linkedin.com/in/alexthompson",
    website: "https://alexthompson.dev"
  },
  completedProjects: [
    {
      name: "Social Media Dashboard",
      description: "Developed a real-time analytics dashboard for social media management",
      completionDate: "2024-01-15"
    },
    {
      name: "Healthcare Platform",
      description: "Built a telemedicine platform connecting patients with healthcare providers",
      completionDate: "2023-11-20"
    }
  ],
  rating: 4.8,
  totalRatings: 24
};