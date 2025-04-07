import React from 'react';
import { motion } from 'framer-motion';
import DarkModeToggle from './components/DarkModeToggle';
import FreelancerProfile from './components/FreelancerProfile';
import ProjectBidding from './components/ProjectBidding';
import { mockProfile, mockProjects } from './data/mockData';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-8 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex justify-end mb-6">
          <DarkModeToggle />
        </div>
        
        <FreelancerProfile profile={mockProfile} />
        <ProjectBidding projects={mockProjects} />
      </motion.div>
    </div>
  );
}

export default App;