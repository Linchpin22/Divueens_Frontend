import React from 'react';

const PriceDisplay = ({ originalPrice, discountedPrice }) => {
  return (
    <div className="flex flex-row items-start space-x-4 mt-4">
      <p className="text-2xl font-bold text-black">${discountedPrice.toFixed(2)}</p>
      <p className="text-xl text-gray-600 line-through">${originalPrice.toFixed(2)}</p>
    </div>
  );
};

export default PriceDisplay;
