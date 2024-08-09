import React from 'react'

import Slider from './cardSlider';
function ProductsYouMightLike() {
  return (
    <div className='flex flex-col w-full mt-10 justify-center items-center'>
    <h2 className="text-[30px] font-bold text-center mb-10">Products You Might Like</h2>
  <Slider />
  </div>
  )
}

export default ProductsYouMightLike