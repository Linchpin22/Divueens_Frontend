import React from 'react';

const sizes = ['106 cm (42)', '121 cm (48)', '139 cm (55)', '164 cm (65)', '196 cm (77)', '210 cm (83)'];

const SizeSelector = ({ selectedSize, onSizeChange }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 gap-y-4 mt-4 sm:w-[350px] w-[250px] text-nowrap mx-auto md:mx-0">
      {sizes.map((size) => (
        <button
          key={size}
          className={`py-2 border hover:border-gray-800 font-semibold text-sm rounded-md flex items-center justify-center shrink-0 ${selectedSize === size ? 'border-rose-500' : 'border-gray-300'}`}
          onClick={() => onSizeChange(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
