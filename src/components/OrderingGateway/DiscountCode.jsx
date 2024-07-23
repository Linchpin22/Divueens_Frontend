// src/DiscountCode.js
import React from 'react';

const DiscountCode = ({ discountCode, setDiscountCode, handleDiscountCode }) => {
  return (
    <div className='-mt-[33px] mb-[15px]'>
        <h3 className="text-xl font-bold mt-5">Discount/ Promo Code</h3>
        <p className="text-gray-500 mb-2">Lorem Ipsum Dolor Sit Amet? Lorem Ipsum Dolor Sit Amet?</p>
    <div className="bg-rose-200 p-4  mt-3 shadow-lg rounded-md">
      <div className="flex">
        <input 
          type="text"
          placeholder="type or paste here"
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          className=" p-2 rounded flex-grow bg-rose-200 outline-none"
        />
        <button onClick={handleDiscountCode} className="bg-rose-300  h-auto w-20 hover:bg-rose-300">Apply</button>
      </div>
    </div>
    </div>
  );
};

export default DiscountCode;
