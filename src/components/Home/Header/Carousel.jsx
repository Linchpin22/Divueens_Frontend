import React, { useState, useEffect } from 'react';
import CustomSlide from './CustomSlide';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000); 

    return () => clearInterval(interval); 
  }, [slides.length]);

  return (
    <div className="carousel mb-[0%] relative overflow-x-hidden">
      <div className="slide-container flex transition-[transform_0.5s_ease-in-out]" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <CustomSlide
            key={index}
            background={slide.background}
            image={slide.image}
            text={slide.text}
            buttonText={slide.buttonText}
            buttonLink={slide.buttonLink}
          />
        ))}
      </div>
      {/* <div className="dot-container flex relative items-center justify-center b-[1rem] mb-8">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? 'dot current bg-rose-700 rounded-2xl w-[2vw] h-[0.8vh] shadow-[0px_1px_2px_gray]' : 'dot w-[1.1vw] h-[1.1vw] bg-rose-200 rounded-[50%] my-2 shadow-[0px_1px_2px_gray] cursor-pointer transition-[0.2s_ease]'}
            onClick={() => setCurrentSlide(index)}
          >
          </span>
        ))}
      </div> */}
    </div>
  );
};

export default Carousel;
