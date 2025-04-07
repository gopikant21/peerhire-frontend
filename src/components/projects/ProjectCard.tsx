// src/components/projects/ProjectCard.tsx

import React, { useState } from 'react';
import { Project, Bid } from '../../types';
import SkillBadge from '../freelancer/SkillBadge';
import BidForm from './BidForm';

interface ProjectCardProps {
  project: Project;
  existingBid?: Bid;
  onBidSubmit: (projectId: number, bid: Omit<Bid, 'id' | 'projectId' | 'status' | 'createdAt'>) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, existingBid, onBidSubmit }) => {
  const [showBidForm, setShowBidForm] = useState(false);

  const toggleBidForm = () => {
    setShowBidForm(!showBidForm);
  };

  const handleBidSubmit = (amount: number, timeline: number, proposal: string) => {
    onBidSubmit(project.id, { amount, timeline, proposal });
    setShowBidForm(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg">
      <div className="p-5">
        <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
          {project.name}
        </h3>
        
        {project.description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} />
          ))}
        </div>
        
        <div className="flex justify-between mb-4">
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            Budget: <span className="text-indigo-600 dark:text-indigo-400">₹{project.budget.toLocaleString()}</span>
          </div>
          <div className="text-sm font-medium text-gray-900 dark:text-white">
            Timeline: <span className="text-indigo-600 dark:text-indigo-400">{project.timeline} days</span>
          </div>
        </div>
        
        {existingBid ? (
          <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
            <h4 className="text-md font-medium text-gray-800 dark:text-white mb-2">
              Your Bid
            </h4>
            <div className="flex justify-between mb-2">
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Amount: <span className="font-medium text-indigo-600 dark:text-indigo-400">₹{existingBid.amount.toLocaleString()}</span>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Timeline: <span className="font-medium text-indigo-600 dark:text-indigo-400">{existingBid.timeline} days</span>
              </div>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              <p className="font-medium mb-1">Proposal:</p>
              <p>{existingBid.proposal}</p>
            </div>
            <div className="flex items-center">
              <span className="inline-flex items-center px-3 py-1 text-sm font-medium rounded-full 
                {existingBid.status === 'Accepted' 
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                  : existingBid.status === 'Rejected'
                  ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                }"
              >
                {existingBid.status}
              </span>
              <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                Submitted on {new Date(existingBid.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        ) : (
          <div className="mt-4">
            {showBidForm ? (
              <BidForm
                projectId={project.id}
                onSubmit={handleBidSubmit}
                onCancel={toggleBidForm}
              />
            ) : (
              <button
                onClick={toggleBidForm}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Place a Bid
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;