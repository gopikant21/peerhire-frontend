// src/pages/Profile.tsx

import React from 'react';
import FreelancerProfile from '../components/freelancer/FreelancerProfile';
import CompletedProjects from '../components/freelancer/CompletedProjects';
import { Freelancer } from '../types';

const Profile: React.FC = () => {
  // In a real app, you would fetch this data from an API
  // For this assignment, we'll use sample data
  const freelancerData: Freelancer = {
    id: 1,
    name: "Alex Johnson",
    profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    skills: ["React", "TypeScript", "TailwindCSS", "NextJS", "Node.js", "GraphQL"],
    yearsOfExperience: 4,
    description: "Full-stack developer specializing in React and TypeScript. Passionate about creating clean, efficient, and user-friendly interfaces. Experienced in both frontend and backend development.",
    portfolioLinks: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
      website: "https://alexjohnson.dev"
    },
    completedProjects: [
      {
        id: 1,
        name: "E-commerce Platform",
        description: "Developed a full-stack e-commerce platform with product listings, shopping cart, and payment processing integration.",
        completionDate: "2023-08-15",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"]
      },
      {
        id: 2,
        name: "Real-time Chat Application",
        description: "Built a real-time chat application with private messaging, group chats, and file sharing capabilities.",
        completionDate: "2023-05-22",
        technologies: ["React", "Socket.io", "Express", "Redis"]
      },
      {
        id: 3,
        name: "Task Management Dashboard",
        description: "Created a task management dashboard with drag-and-drop functionality, task assignments, and progress tracking.",
        completionDate: "2023-03-10",
        technologies: ["React", "TypeScript", "Redux", "TailwindCSS"]
      },
      {
        id: 4,
        name: "Health & Fitness Tracker",
        description: "Developed a mobile-responsive web app for tracking workouts, nutrition, and health metrics with data visualization.",
        completionDate: "2022-11-05",
        technologies: ["React", "D3.js", "Firebase", "TailwindCSS"]
      }
    ],
    rating: 4.8
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <FreelancerProfile freelancer={freelancerData} />
      <CompletedProjects projects={freelancerData.completedProjects} />
    </div>
  );
};

export default Profile;