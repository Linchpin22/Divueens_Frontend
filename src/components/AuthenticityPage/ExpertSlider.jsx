import React, { useState } from 'react';
import ExpertCard from './ExpertCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode , Pagination } from 'swiper/modules';

const experts = [
  { image:"src/assets/AuthenticityPage/doc_1.png", name: 'Betty A.', title: 'Dermatologist, Beauty Expert', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veniam placeat ducimus minima id corporis maiores aperiam cupiditate officia perferendis recusandae nostrum, quisquam autem dolorem inventore sapiente error repellat libero sequi modi totam? Ex debitis quod incidunt natus, nulla aspernatur!' },
  { image: "src/assets/AuthenticityPage/doc_1.png", name: 'John B.', title: 'Plastic Surgeon', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veniam placeat ducimus minima id corporis maiores aperiam cupiditate officia perferendis recusandae nostrum, quisquam autem dolorem inventore sapiente error repellat libero sequi modi totam? Ex debitis quod incidunt natus, nulla aspernatur!' },
  { image: "src/assets/AuthenticityPage/doc_1.png", name: 'Alice C.', title: 'Cosmetologist', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, veniam placeat ducimus minima id corporis maiores aperiam cupiditate officia perferendis recusandae nostrum, quisquam autem dolorem inventore sapiente error repellat libero sequi modi totam? Ex debitis quod incidunt natus, nulla aspernatur!' },
];

const ExpertSlider = () => {
  return (
    <div className="w-full relative flex flex-row items-center">
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          376: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          800: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          1240: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
        }}
        modules={[FreeMode, Pagination]}
        pagination={{clickable:true}}
        freeMode={true}
        className='md:w-[50%] w-[80%] min-h-[80vh]'
      >
        {experts.map((data, index) => (
          <SwiperSlide className='flex justify-center items-center w-full h-[80%]' key={index}>
            <ExpertCard image={data.image} title={data.title} description={data.description} name={data.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExpertSlider;
