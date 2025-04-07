// src/components/projects/BidForm.tsx

import React, { useState } from 'react';

interface BidFormProps {
  projectId: number;
  onSubmit: (amount: number, timeline: number, proposal: string) => void;
  onCancel: () => void;
}

const BidForm: React.FC<BidFormProps> = ({ projectId, onSubmit, onCancel }) => {
  const [amount, setAmount] = useState<number>(0);
  const [timeline, setTimeline] = useState<number>(1);
  const [proposal, setProposal] = useState<string>('');
  const [errors, setErrors] = useState<{
    amount?: string;
    timeline?: string;
    proposal?: string;
  }>({});

  const validateForm = (): boolean => {
    const newErrors: {
      amount?: string;
      timeline?: string;
      proposal?: string;
    } = {};

    if (!amount || amount <= 0) {
      newErrors.amount = 'Please enter a valid amount';
    }

    if (!timeline || timeline <= 0) {
      newErrors.timeline = 'Please enter a valid timeline';
    }

    if (!proposal.trim()) {
      newErrors.proposal = 'Please enter a proposal';
    } else if (proposal.trim().length < 10) {
      newErrors.proposal = 'Proposal should be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(amount, timeline, proposal);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md">
      <h4 className="text-md font-medium text-gray-800 dark:text-white mb-3">
        Place Your Bid
      </h4>
      
      <div className="mb-3">
        <label htmlFor={`amount-${projectId}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Bid Amount (₹)
        </label>
        <input
          id={`amount-${projectId}`}
          type="number"
          value={amount || ''}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white text-sm"
          placeholder="Enter bid amount"
        />
        {errors.amount && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.amount}</p>
        )}
      </div>
      
      <div className="mb-3">
        <label htmlFor={`timeline-${projectId}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Timeline (days)
        </label>
        <input
          id={`timeline-${projectId}`}
          type="number"
          value={timeline || ''}
          onChange={(e) => setTimeline(Number(e.target.value))}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white text-sm"
          placeholder="Enter timeline in days"
          min="1"
        />
        {errors.timeline && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.timeline}</p>
        )}
      </div>
      
      <div className="mb-4">
        <label htmlFor={`proposal-${projectId}`} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Proposal
        </label>
        <textarea
          id={`proposal-${projectId}`}
          value={proposal}
          onChange={(e) => setProposal(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-800 dark:text-white text-sm"
          placeholder="Enter your proposal"
        />
        {errors.proposal && (
          <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.proposal}</p>
        )}
      </div>
      
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex justify-center py-2 px-4 border border-gray-300 dark:border-gray-600 shadow-sm text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Bid
        </button>
      </div>
    </form>
  );
};

export default BidForm;