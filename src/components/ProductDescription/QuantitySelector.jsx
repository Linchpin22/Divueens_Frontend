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
    <div className="flex gap-1 items-center">
      <button
        className=" w-fit  md:mx-0 px-4 py-2.5 border border-rose-800 bg-transparent hover:bg-rose-50 text-rose-800 text-sm font-semibold rounded-md"
        onClick={handleDecrement}
      >
        -
      </button>
      <span className="w-fit  md:mx-0 px-4 py-2.5 border border-rose-800 bg-transparent text-rose-800 text-sm font-semibold rounded-md">
        {quantity}
      </span>
      <button
        className="w-fit  md:mx-0 px-4 py-2.5 border border-rose-800 bg-transparent hover:bg-rose-50 text-rose-800 text-sm font-semibold rounded-md"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;
