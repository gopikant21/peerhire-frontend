// src/components/freelancer/SkillBadge.tsx

import React from 'react';

interface SkillBadgeProps {
  skill: string;
  className?: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill, className = '' }) => {
  return (
    <span 
      className={`inline-flex items-center px-3 py-1 text-sm font-medium rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 ${className}`}
    >
      {skill}
    </span>
  );
};

export default SkillBadge;