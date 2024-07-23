import React from 'react';

const sizes = ['106 cm (42)', '121 cm (48)', '139 cm (55)', '164 cm (65)', '196 cm (77)', '210 cm (83)'];

const SizeSelector = ({ selectedSize, onSizeChange }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-4 mt-4 sm:w-[350px] w-[250px] text-nowrap mx-auto">
      {sizes.map((size) => (
        <button
          key={size}
          className={`border-2 py-1 px-2 flex items-center justify-center text-center ${selectedSize === size ? 'border-rose-500' : 'border-gray-300'} hover:bg-gray-200 transition duration-150 ease-in-out`}
          onClick={() => onSizeChange(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
