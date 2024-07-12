import React from 'react';

const QuantitySelector = ({ quantity, onQuantityChange }) => {
  const handleIncrement = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        className="border-2 border-gray-300 w-10 h-10 flex items-center justify-center text-rose-600 hover:bg-gray-200 transition duration-150 ease-in-out"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="border-2 border-gray-300 w-10 h-10 flex items-center justify-center text-rose-600">
        {quantity}
      </span>
      <button
        className="border-2 border-gray-300 w-10 h-10 flex items-center justify-center text-rose-600 hover:bg-gray-200 transition duration-150 ease-in-out"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
