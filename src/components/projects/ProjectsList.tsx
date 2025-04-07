// src/components/projects/ProjectsList.tsx

import React, { useState } from 'react';
import { Project, Bid } from '../../types';
import ProjectCard from './ProjectCard';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  const [bids, setBids] = useLocalStorage<Bid[]>('freelancer-bids', []);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [skillFilter, setSkillFilter] = useState<string>('');

  // Get all unique skills from projects
  const allSkills = Array.from(new Set(projects.flatMap(project => project.skills)));

  // Filter projects based on search term and skill filter
  const filteredProjects = projects.filter(project => {
    const matchesSearch = searchTerm === '' || 
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      (project.description && project.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesSkill = skillFilter === '' || project.skills.includes(skillFilter);
    
    return matchesSearch && matchesSkill;
  });

  const handleBidSubmit = (projectId: number, bidData: Omit<Bid, 'id' | 'projectId' | 'status' | 'createdAt'>) => {
    setLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      const newBid: Bid = {
        id: Date.now(),
        projectId,
        ...bidData,
        status: 'Pending',
        createdAt: new Date().toISOString(),
      };
      
      setBids([...bids, newBid]);
      setLoading(false);
    }, 500);
  };

  const getExistingBid = (projectId: number): Bid | undefined => {
    return bids.find(bid => bid.projectId === projectId);
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Available Projects
        </h2>
        
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="md:flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Search Projects
            </label>
            <input
              id="search"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
              placeholder="Search by project name or description"
            />
          </div>
          
          <div className="md:w-64">
            <label htmlFor="skill-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Filter by Skill
            </label>
            <select
              id="skill-filter"
              value={skillFilter}
              onChange={(e) => setSkillFilter(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white"
            >
              <option value="">All Skills</option>
              {allSkills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
        </div>
      )}
      
      {!loading && filteredProjects.length === 0 && (
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            No projects found matching your criteria.
          </p>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            existingBid={getExistingBid(project.id)}
            onBidSubmit={handleBidSubmit}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;