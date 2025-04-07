import { useState } from 'react';
import { motion } from 'framer-motion';
import { Project, Bid } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Props {
  projects: Project[];
}

export default function ProjectBidding({ projects }: Props) {
  const [bids, setBids] = useLocalStorage<Bid[]>('projectBids', []);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [bidAmount, setBidAmount] = useState('');
  const [bidTimeline, setBidTimeline] = useState('');
  const [proposal, setProposal] = useState('');

  const handleBidSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProject) return;

    const newBid: Bid = {
      projectId: selectedProject.id,
      amount: Number(bidAmount),
      timeline: Number(bidTimeline),
      proposal,
      status: 'pending'
    };

    setBids([...bids, newBid]);
    setSelectedProject(null);
    setBidAmount('');
    setBidTimeline('');
    setProposal('');
  };

  const getBidStatus = (projectId: number) => {
    return bids.find(bid => bid.projectId === projectId)?.status;
  };

  return (
    <div className="max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Available Projects</h2>
      
      <div className="space-y-6">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{project.description}</p>
                
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    Budget: ₹{project.budget.toLocaleString()}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Timeline: {project.timeline} days
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="text-right">
                {getBidStatus(project.id) ? (
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    getBidStatus(project.id) === 'accepted' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100' :
                    getBidStatus(project.id) === 'rejected' ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100' :
                    'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100'
                  }`}>
                    {getBidStatus(project.id)?.charAt(0).toUpperCase() + getBidStatus(project.id)?.slice(1)}
                  </span>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(project)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    Place Bid
                  </motion.button>
                )}
              </div>
            </div>

            {selectedProject?.id === project.id && (
              <motion.form
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6 space-y-4"
                onSubmit={handleBidSubmit}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Bid Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Timeline (days)
                  </label>
                  <input
                    type="number"
                    value={bidTimeline}
                    onChange={(e) => setBidTimeline(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Proposal
                  </label>
                  <textarea
                    value={proposal}
                    onChange={(e) => setProposal(e.target.value)}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Submit Bid
                  </button>
                </div>
              </motion.form>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}