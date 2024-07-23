import React from 'react';

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-self-center align-center md:justify-center md:align-center lg:justify-start xl:justify-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < rating ? 'text-rose-700' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927C9.228 2.593 9.598 2.4 10 2.4s.772.193.951.527l1.908 3.858 4.26.617c.352.051.656.266.812.576.156.31.137.678-.052.971l-3.08 3.006.727 4.24c.057.348-.085.7-.361.9-.276.2-.64.239-.956.101L10 15.27l-3.804 2.002c-.316.138-.68.099-.956-.101-.276-.2-.418-.552-.361-.9l.727-4.24-3.08-3.006c-.19-.293-.208-.661-.052-.971.156-.31.46-.525.812-.576l4.26-.617L9.049 2.927z"/>
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
