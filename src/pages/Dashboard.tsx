// src/pages/Dashboard.tsx

import React, { useState, useEffect } from 'react';
import ProjectsList from '../components/projects/ProjectsList';
import BidStatus from '../components/projects/BidStatus';
import { Project } from '../types';

const Dashboard: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // In a real app, you would fetch from an API
        // For this assignment, we'll simulate loading from a JSON file
        const response = await fetch('/data/projects.json');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
        setLoading(false);
        
        // Fallback to sample data if fetch fails
        setProjects([
          {
            id: 1,
            name: "Website Redesign",
            description: "Redesign a company website to be modern, responsive, and user-friendly.",
            budget: 15000,
            timeline: 7,
            skills: ["React", "TailwindCSS", "UI/UX"]
          },
          {
            id: 2,
            name: "Blockchain Smart Contract",
            description: "Develop a secure smart contract for a new crypto token.",
            budget: 50000,
            timeline: 14,
            skills: ["Solidity", "Ethereum", "Web3"]
          },
          {
            id: 3,
            name: "Mobile App Development",
            description: "Create a cross-platform mobile app for a fitness tracking system.",
            budget: 40000,
            timeline: 21,
            skills: ["React Native", "Firebase", "Redux"]
          },
          {
            id: 4,
            name: "E-commerce Platform Integration",
            description: "Integrate payment gateways and shipping APIs into an existing e-commerce site.",
            budget: 20000,
            timeline: 10,
            skills: ["API", "Backend", "Payment Processing"]
          }
        ]);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {loading ? (
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 p-4 rounded-md text-red-800 dark:text-red-200">
          {error}
        </div>
      ) : (
        <>
          <BidStatus projects={projects} />
          <ProjectsList projects={projects} />
        </>
      )}
    </div>
  );
};

export default Dashboard;