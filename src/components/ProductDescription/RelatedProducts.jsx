import React from 'react';
import Cards from './Cards';
import Slider from './cardSlider';

const RelatedProducts = () => {
  return (
    <div className='flex flex-col w-full mt-10 justify-center items-center'>
      <h2 className="text-[30px] font-bold text-center mb-10">Related Products</h2>
    <Slider />
    </div>
  );
};

export default RelatedProducts;