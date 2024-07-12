import React from 'react';

const sizes = ['106 cm (42)', '121 cm (48)', '139 cm (55)', '164 cm (65)', '196 cm (77)', '210 cm (83)'];

const SizeSelector = ({ selectedSize, onSizeChange }) => {
  return (
    <div className="grid grid-cols-3 gap-3 mt-4 flex-shrink-0 w-[350px] -ml-[45px] 1xs:w-[350px] 1xs:-ml-[20px] xs:w-[350px] xs:-ml-0 sm:ml-0 sm:w-[450px]">
      {sizes.map((size) => (
        <button
          key={size}
          className={`border-2 py-2 px-4 flex items-center justify-center text-center ${selectedSize === size ? 'border-rose-500' : 'border-gray-300'} hover:bg-gray-200 transition duration-150 ease-in-out`}
          onClick={() => onSizeChange(size)}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelector;
