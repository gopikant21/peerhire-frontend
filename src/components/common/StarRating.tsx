// src/components/common/StarRating.tsx

import React, { useState } from 'react';

interface StarRatingProps {
  initialRating: number;
  totalStars?: number;
  onChange?: (rating: number) => void;
  readOnly?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({
  initialRating,
  totalStars = 5,
  onChange,
  readOnly = false,
}) => {
  const [rating, setRating] = useState<number>(initialRating);
  const [hover, setHover] = useState<number | null>(null);

  const handleRatingChange = (newRating: number) => {
    if (readOnly) return;
    
    setRating(newRating);
    if (onChange) {
      onChange(newRating);
    }
  };

  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            type="button"
            key={index}
            className={`${readOnly ? 'cursor-default' : 'cursor-pointer'} focus:outline-none p-1`}
            onClick={() => handleRatingChange(ratingValue)}
            onMouseEnter={() => !readOnly && setHover(ratingValue)}
            onMouseLeave={() => !readOnly && setHover(null)}
            disabled={readOnly}
            aria-label={`Rate ${ratingValue} out of ${totalStars} stars`}
          >
            <svg
              className={`w-6 h-6 ${
                (hover !== null ? hover : rating) >= ratingValue
                  ? 'text-yellow-400'
                  : 'text-gray-300 dark:text-gray-600'
              } transition-colors duration-150`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        );
      })}
      <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
        {rating.toFixed(1)} / {totalStars}
      </span>
    </div>
  );
};

export default StarRating;