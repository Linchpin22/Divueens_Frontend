import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { sub_1, sub_2, sub_3, sub_4 } from "../../../assets/assets";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Slider = () => {
  const slidesData = [
    {
      img: sub_1,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 4.5,
    },
    {
      img: sub_2,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_3,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 2.6,
    },
    {
      img: sub_4,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 5,
    },
    {
      img: sub_1,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_2,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_3,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_4,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_1,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_2,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_3,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_4,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_1,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_2,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_3,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
    {
      img: sub_4,
      name: "Beauty Combo",
      price: 8400,
      original_price: 12000,
      rating: 3.2,
    },
  ];

  const [swiper, setSwiper] = useState(null);

  const handleNextClick = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        onSwiper={(swiper) => setSwiper(swiper)}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper h-96 px-[5rem] py-4">
        {
          slidesData.map((data, i) => (
            <SwiperSlide className="shadow-xl border-2 text-white rounded-xl overflow-hidden" key={i}>
              <div className="h-[70%] relative">
                <img
                  src={data.img} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="opacity-0 bg-black hover:opacity-100 hover:bg-opacity-20 absolute top-0 left-0 right-0 bottom-0 h-[70%] transition-all duration-[0.3s] flex items-center justify-center">
                <Link to="/">
                    <button className="bg-rose-700 text-white border-[3px] border-rose-700 text-[1rem] font-bold rounded-[8px] py-[5px] px-[10px] sm:py-[2px] sm:px-[10px] cursor-pointer shadow-[0px_1px_2px_#000] mb-[5px] hover:bg-white hover:text-rose-700">
                      Buy Now
                    </button>
                  </Link>
              </div>
              <div className="flex flex-col px-5 py-3 w-full h-[30%]">
                <div className="star icon flex items-center">
                  {[...Array(Math.floor(data.rating))].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                  {data.rating % 1 !== 0 ? (
                    data.rating % 1 <= 0.5 ? (
                      <FaRegStarHalfStroke />
                    ) : (
                      <FaRegStar />
                    )
                  ) : (
                    <></>
                  )}
                  {[...Array(5 - Math.ceil(data.rating))].map((_, i) => (
                    <FaRegStar key={i} />
                  ))}
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-black mt-[5px] mx-0 text-[1rem] font-medium text-left flex items-center gap-4 relative w-full">
                    {data.name}
                    <div className="flex flex-col items-center absolute -top-4 right-0">
                      <p className="text-[12px] text-[grey] flex items-center gap-2 font-[300]">
                        <del>Rs. {data.original_price}/-</del>
                        <span className="font-[300] text-[12px] text-[green]">
                          {(data.price / data.original_price) * 100}%
                        </span>
                      </p>

                      <h3 className="text-[0.9rem] text-[#333] font-bold">
                        Rs. {data.price}/- <br />
                      </h3>
                    </div>
                  </div>
                  <div className="text-black font-medium">
                    <p className="text-[0.8rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        }
        <div className="swiper-button-prev absolute top-1/2 left-2 text-sm transform -translate-y-1/2 w-[2.5rem] h-10 rounded-full flex items-center md:text-lg md:w-[3rem] md:h-[3rem]" onClick={handlePrevClick}>
        </div>
        <div className="swiper-button-next absolute top-1/2 right-2 text-sm transform -translate-y-1/2 w-[2.5rem] h-10 rounded-full flex items-center md:text-lg md:w-[3rem] md:h-[3rem]" onClick={handleNextClick}>
        </div>
      </Swiper >
    </>
  );
};

export default Slider;
