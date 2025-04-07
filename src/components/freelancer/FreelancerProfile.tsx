// src/components/freelancer/FreelancerProfile.tsx

import React from 'react';
import { Freelancer } from '../../types';
import StarRating from '../common/StarRating';
import SkillBadge from './SkillBadge';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface FreelancerProfileProps {
  freelancer: Freelancer;
}

const FreelancerProfile: React.FC<FreelancerProfileProps> = ({ freelancer }) => {
  const [rating, setRating] = useLocalStorage<number>(`freelancer-${freelancer.id}-rating`, freelancer.rating);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      <div className="p-6">
        <div className="flex flex-col md:flex-row">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              className="h-32 w-32 rounded-full object-cover border-4 border-indigo-100 dark:border-indigo-900"
              src={freelancer.profileImage}
              alt={`${freelancer.name}'s profile`}
            />
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {freelancer.name}
            </h1>
            <div className="mb-4">
              <StarRating initialRating={rating} onChange={handleRatingChange} />
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {freelancer.description}
            </p>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {freelancer.skills.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Experience
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {freelancer.yearsOfExperience} years of experience
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                Portfolio
              </h2>
              <div className="flex space-x-4">
                {freelancer.portfolioLinks.github && (
                  <a
                    href={freelancer.portfolioLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
                {freelancer.portfolioLinks.linkedin && (
                  <a
                    href={freelancer.portfolioLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                )}
                {freelancer.portfolioLinks.website && (
                  <a
                    href={freelancer.portfolioLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    <span className="sr-only">Website</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerProfile;