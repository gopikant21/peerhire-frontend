// src/components/freelancer/CompletedProjects.tsx

import React from 'react';
import { CompletedProject } from '../../types';
import SkillBadge from './SkillBadge';

interface CompletedProjectsProps {
  projects: CompletedProject[];
}

const CompletedProjects: React.FC<CompletedProjectsProps> = ({ projects }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Completed Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400 block mb-2">
                  Technologies used:
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <SkillBadge key={index} skill={tech} />
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                <span>
                  Completed on: {new Date(project.completionDate).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedProjects;