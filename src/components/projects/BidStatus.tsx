// src/components/projects/BidStatus.tsx

import React from 'react';
import { Bid, Project } from '../../types';
import { useLocalStorage } from '../../hooks/useLocalStorage';

interface BidStatusProps {
  projects: Project[];
}

const BidStatus: React.FC<BidStatusProps> = ({ projects }) => {
  const [bids, setBids] = useLocalStorage<Bid[]>('freelancer-bids', []);

  // For demo purposes, let's add functionality to change bid status
  const updateBidStatus = (bidId: number, newStatus: 'Pending' | 'Accepted' | 'Rejected') => {
    const updatedBids = bids.map((bid) => {
      if (bid.id === bidId) {
        return { ...bid, status: newStatus };
      }
      return bid;
    });
    
    setBids(updatedBids);
  };

  const getProjectById = (projectId: number): Project | undefined => {
    return projects.find((project) => project.id === projectId);
  };

  // Group bids by status
  const pendingBids = bids.filter((bid) => bid.status === 'Pending');
  const acceptedBids = bids.filter((bid) => bid.status === 'Accepted');
  const rejectedBids = bids.filter((bid) => bid.status === 'Rejected');

  if (bids.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Your Bids
        </h2>
        <div className="text-center py-4">
          <p className="text-gray-600 dark:text-gray-300">
            You haven't placed any bids yet. Browse available projects to get started.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 mb-6">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
        Your Bids
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pending Bids */}
        <div className="border border-yellow-200 dark:border-yellow-900 rounded-lg p-4 bg-yellow-50 dark:bg-yellow-900/20">
          <h3 className="text-lg font-medium text-yellow-800 dark:text-yellow-200 mb-3">
            Pending ({pendingBids.length})
          </h3>
          
          {pendingBids.length === 0 ? (
            <p className="text-sm text-gray-600 dark:text-gray-400">No pending bids</p>
          ) : (
            <div className="space-y-3">
              {pendingBids.map((bid) => {
                const project = getProjectById(bid.projectId);
                if (!project) return null;
                
                return (
                  <div key={bid.id} className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                      {project.name}
                    </h4>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                      <span>₹{bid.amount.toLocaleString()}</span>
                      <span>{bid.timeline} days</span>
                    </div>
                    
                    {/* Demo buttons to change status */}
                    <div className="flex space-x-2 mt-2">
                      <button
                        onClick={() => updateBidStatus(bid.id, 'Accepted')}
                        className="text-xs py-1 px-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 rounded"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => updateBidStatus(bid.id, 'Rejected')}
                        className="text-xs py-1 px-2 bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 rounded"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        
        {/* Accepted Bids */}
        <div className="border border-green-200 dark:border-green-900 rounded-lg p-4 bg-green-50 dark:bg-green-900/20">
          <h3 className="text-lg font-medium text-green-800 dark:text-green-200 mb-3">
            Accepted ({acceptedBids.length})
          </h3>
          
          {acceptedBids.length === 0 ? (
            <p className="text-sm text-gray-600 dark:text-gray-400">No accepted bids</p>
          ) : (
            <div className="space-y-3">
              {acceptedBids.map((bid) => {
                const project = getProjectById(bid.projectId);
                if (!project) return null;
                
                return (
                  <div key={bid.id} className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                      {project.name}
                    </h4>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                      <span>₹{bid.amount.toLocaleString()}</span>
                      <span>{bid.timeline} days</span>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Accepted on {new Date(bid.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        
        {/* Rejected Bids */}
        <div className="border border-red-200 dark:border-red-900 rounded-lg p-4 bg-red-50 dark:bg-red-900/20">
          <h3 className="text-lg font-medium text-red-800 dark:text-red-200 mb-3">
            Rejected ({rejectedBids.length})
          </h3>
          
          {rejectedBids.length === 0 ? (
            <p className="text-sm text-gray-600 dark:text-gray-400">No rejected bids</p>
          ) : (
            <div className="space-y-3">
              {rejectedBids.map((bid) => {
                const project = getProjectById(bid.projectId);
                if (!project) return null;
                
                return (
                  <div key={bid.id} className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
                    <h4 className="font-medium text-gray-800 dark:text-white mb-1">
                      {project.name}
                    </h4>
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                      <span>₹{bid.amount.toLocaleString()}</span>
                      <span>{bid.timeline} days</span>
                    </div>
                    <p className="text-xs text-red-600 dark:text-red-400 mt-1">
                      Rejected on {new Date(bid.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BidStatus;