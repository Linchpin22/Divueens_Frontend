import React, { useState } from "react";
import "swiper/css";
import 'swiper/css/scrollbar';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import {
  Banner1,
  Banner13,
  Banner14,
  Banner15,
  Banner16,
  Banner17,
  Banner2,
  Banner3,
  Banner4,
  Banner5,
  Banner6,
  bestsellers_1,
  freebies,
  loreal,
  mamaearth,
  suntan,
} from "../../../assets/assets";


const ExclusiveDiscount = () => {

  const [swiper, setSwiper] = useState(null);

  const handleNextClick = () => swiper?.slideNext();
  const handlePrevClick = () => swiper?.slidePrev();

  const banner = [
    Banner13, Banner14, Banner15, Banner16, Banner17
  ]

  return (
    <>
      <section className="Exclusive_Discount overflow-hidden font-semibold flex justify-center items-center flex-wrap ">
        <div className="heading pt-8 md:pt-16">
          <hr className="bg-gradient-to-l from-rose-700" data-aos="fade-right" />
          <h2 className="text-nowrap" data-aos="fade-up">Exclusive Discounts</h2>
          <hr className="bg-gradient-to-r from-rose-700" data-aos="fade-left" />
        </div>

        <div className="flex flex-col w-full h-full pt-2 md:pt-8">

          {/* Banners */}
          <div className="grid grid-cols-1 px-4 my-4 md:grid-cols-3 w-full h-full">
            <img src={Banner1} alt="banner" />
            <img src={Banner2} alt="banner" />
            <img src={Banner3} alt="banner" />
          </div>

          {/* autoplay old banner */}
          <Swiper
            centeredSlides={true}
            slidesPerView={1}
            spaceBetween={40}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}

            modules={[Autoplay]}
            className="mySwiper relative px-2 md:px-8 pt-4 pb-2 w-full"
          >
            <SwiperSlide className="w-full h-32 md:h-full">
              <img src={suntan} className='w-full h-full' alt={'banner'} />
            </SwiperSlide>
            <SwiperSlide className="w-full h-32 md:h-full">
              <img src={loreal} className='w-full h-full' alt={'banner'} />
            </SwiperSlide>
            <SwiperSlide className="w-full h-32 md:h-full">
              <img src={mamaearth} className='w-full h-full' alt={'banner'} />
            </SwiperSlide>
            <SwiperSlide className="w-full h-32 md:h-full">
              <img src={bestsellers_1} className='w-full h-full' alt={'banner'} />
            </SwiperSlide>

          </Swiper>

          <div className="grid grid-cols-1 px-4 my-4 md:grid-cols-3 w-full h-full">
            <img src={Banner4} alt="banner" />
            <img src={Banner5} alt="banner" />
            <img src={Banner6} alt="banner" />
          </div>

          {/* <div className="container grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 mt-[30px]">
            <div className="card w-[90%] mx-auto md:w-[90%] my-[10px] md:mx-[20px]" data-aos="fade-down-right">
              <a href="/">
                <button className="border-none outline-none p-0 bg-transparent cursor-pointer">
                  <img className="w-full h-auto md:h-[5rem] lg:h-[6rem] xl:h-[8rem] block rounded-md lg:rounded-[20px] shadow-[2px_2px_3px_#808080]" src={suntan} alt="" />
                </button>
              </a>
            </div>
            <div className="card w-[90%] mx-auto md:w-[90%] my-[10px] md:mx-[20px]" data-aos="fade-down-left">
              <a href="/">
                <button className="border-none outline-none p-0 bg-transparent cursor-pointer">
                  <img className="w-full h-auto md:h-[5rem] lg:h-[6rem] xl:h-[8rem] block rounded-md lg:rounded-[20px] shadow-[2px_2px_3px_#808080]" src={loreal} alt="" />
                </button>
              </a>
            </div>
            <div className="card w-[90%] mx-auto md:w-[90%] my-[10px] md:mx-[20px]" data-aos="fade-up-right">
              <a href="/">
                <button className="border-none outline-none p-0 bg-transparent cursor-pointer">
                  <img className="w-full h-auto md:h-[5rem] lg:h-[6rem] xl:h-[8rem] block rounded-md lg:rounded-[20px] shadow-[2px_2px_3px_#808080]" src={mamaearth} alt="" />
                </button>
              </a>
            </div>
            <div className="card w-[90%] mx-auto md:w-[90%] my-[10px] md:mx-[20px]" data-aos="fade-up-left">
              <a href="/">
                <button className="border-none outline-none p-0 bg-transparent cursor-pointer">
                  <img className="w-full h-auto md:h-[5rem] lg:h-[6rem] xl:h-[8rem] block rounded-md lg:rounded-[20px] shadow-[2px_2px_3px_#808080]" src={bestsellers_1} alt="" />
                </button>
              </a>
            </div>
          </div> */}


          {/* <div className='grid grid-cols-1 px-4 my-4 md:grid-cols-2 w-full h-full'>
            <img src={Banner7} alt="banner" />
            <img src={Banner8} alt="banner" />
            <img src={Banner9} alt="banner" />
            <img src={Banner10} alt="banner" />
            <img src={Banner11} alt="banner" />
            <img src={Banner12} alt="banner" />
          </div> */}


        </div>

        <br />
        <div className="heading pt-8 md:pt-16 pb-8">
          <hr className="bg-gradient-to-l from-rose-700" data-aos="fade-right" />
          <h2 className="text-nowrap" data-aos="fade-up">Freebies of the Month</h2>
          <hr className="bg-gradient-to-r from-rose-700" data-aos="fade-left" />
        </div>
        <br />
        <div className="banner-image">
          <img className="w-full h-auto " src={freebies} alt="" />
        </div>

        <Swiper
          slidesPerView={1}
          spaceBetween={40}
          loop={true}
          onSwiper={setSwiper}
          modules={[Navigation, Pagination]}
          className="mySwiper relative px-4 my-4 md:px-8 md:py-4 w-full"
        >
          {banner.map((b, i) => {
            return <SwiperSlide key={i}
              className='w-full h-32 md:h-full'
            >
              <img src={b} className='w-full h-full' alt={b} />
            </SwiperSlide>
          })}

          {/* Navigation buttons */}
          <div
            className="swiper-button-prev after:content-['prev'] after:text-xs after:font-extrabold after:text-center after:px-[13px] after:py-2 after:rounded-full after-border after:border-rose-800 after:bg-rose-700 after:text-white absolute top-1/2 left-2"
            onClick={handlePrevClick}
          ></div>
          <div
            className="swiper-button-next after:content-['next'] after:text-xs after:font-extrabold after:text-center after:px-[13px] after:py-2 after:rounded-full after-border after:border-rose-800 after:bg-rose-700 after:text-white absolute top-1/2 right-2"
            onClick={handleNextClick}
          ></div>
        </Swiper>
      </section>
    </>
  );
};

export default ExclusiveDiscount;
