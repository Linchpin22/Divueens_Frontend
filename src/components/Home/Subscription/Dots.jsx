import React from 'react';

const Dots = ({ slidesCount, currentSlide, setCurrentSlide }) => {
  return (
    <div className="dots text-center mt-[20px]">
      {Array.from({ length: slidesCount }).map((_, index) => (
        <span key={index} className={`dot h-[15px] w-[15px] my-0 mx-[5px] bg-[#ffc0cb] rounded-[50%] inline-block cursor-pointer ${currentSlide === index ? 'active bg-[#c42792]' : ''}`} onClick={() => setCurrentSlide(index)}></span>
      ))}
    </div>
  );
};

export default Dots;
