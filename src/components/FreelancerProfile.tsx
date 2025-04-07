import { Star, Github, Linkedin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { FreelancerProfile as ProfileType } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface Props {
  profile: ProfileType;
}

export default function FreelancerProfile({ profile }: Props) {
  const [rating, setRating] = useLocalStorage('freelancerRating', profile.rating);
  const [totalRatings, setTotalRatings] = useLocalStorage('totalRatings', profile.totalRatings);

  const handleRating = (newRating: number) => {
    const updatedTotalRatings = totalRatings + 1;
    const updatedRating = ((rating * totalRatings) + newRating) / updatedTotalRatings;
    setRating(updatedRating);
    setTotalRatings(updatedTotalRatings);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 max-w-4xl mx-auto"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{profile.name}</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">{profile.description}</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href={profile.portfolioLinks.github} target="_blank" rel="noopener noreferrer" 
             className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <Github size={24} />
          </a>
          <a href={profile.portfolioLinks.linkedin} target="_blank" rel="noopener noreferrer"
             className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <Linkedin size={24} />
          </a>
          <a href={profile.portfolioLinks.website} target="_blank" rel="noopener noreferrer"
             className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
            <Globe size={24} />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Rating</h2>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleRating(star)}
                className="focus:outline-none"
              >
                <Star
                  size={24}
                  className={`${
                    star <= Math.round(rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              </motion.button>
            ))}
            <span className="text-gray-600 dark:text-gray-300 ml-2">
              ({rating.toFixed(1)} from {totalRatings} ratings)
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Completed Projects</h2>
        <div className="space-y-4">
          {profile.completedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg"
            >
              <h3 className="font-semibold text-gray-900 dark:text-white">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{project.description}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Completed on: {new Date(project.completionDate).toLocaleDateString()}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}