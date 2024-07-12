import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { sub_1, sub_2, sub_3, sub_4 } from "../../../assets/assets";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    <div className="md:px-5">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        onSwiper={(swiper) => setSwiper(swiper)}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1170: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper relative px-10 py-10 md:px-16 "
      >
        {slidesData.map((data, i) => (
          <SwiperSlide
            className="h-80 border overflow-hidden shadow-md shadow-zinc-400 bg-white md:h-96"
            key={i}
          >
            <div className="h-[70%] ">
              <img
                src={data.img}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="opacity-0 bg-black hover:opacity-100 hover:bg-opacity-20 absolute top-0 left-0 right-0 bottom-0 h-[100%] transition-all duration-[0.7s] flex items-center justify-center">
              <Link to={""}>
                <button className="bg-rose-800 text-white tfont-bold cursor-pointe font-semibold p-3 px-5 shadow-lg shadow-black hover:bg-rose-600">
                  Buy Now
                </button>
              </Link>
            </div>
            <div className="flex flex-col px-3 pt-2 w-full">
              <div className="flex justify-between">
                <div className="">
                  {/* Product Name */}
                  <p className="text-xl text-rose-950 text-nowrap ">{data.name}</p>
                  {/* StarIcons */}
                  <div className="pb-2 gap-[0.02em] flex items-center text-[#f5911e]">
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
                </div>
                {/* Pricings */}
                <div className="flex flex-col items-end">
                  <p className="text-[22px] text-rose-800"><span className="text-[14px] align-text-top">₹</span>
                    {data.price}/-</p>
                  <p className="text-[11px] text-slate-400">
                    
                    <span className="text-emerald-600 pr-1">
                      {(data.price / data.original_price) * 100}%
                    </span>
                    <del className="text-[10px]">₹{data.original_price}/-</del>
                  </p>
                </div>
              </div>
              <p className="text-xs pr-3 py-1 text-slate-600">
                Lorem ipsum dolor sit amet consec tetur adipisicing elit.
              </p>

              {/* <div className="flex flex-col items-center">
                <div className="text-black mt-[5px] mx-0 text-[1rem] font-medium text-left flex items-center gap-4 relative w-full">
                  // {data.name}
                  <div className="flex flex-col items-center absolute -top-4 right-0"></div>
                </div>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
        <div
          className="swiper-button-prev after:content-['prev'] after:text-xs after:font-extrabold after:text-center after:px-[13px] after:py-2 after:rounded-full after:text-white after:bg-rose-700 rounded-full after:hover:bg-rose-800 absolute top-1/2 left-2"
          onClick={handlePrevClick}
        ></div>
        {/* <div
          className="swiper-button-prev after:content-['prev'] after:text-xs after:font-extrabold after:text-center after:px-[13px] after:py-2 after:rounded-full after:text-rose-800 after:hover:text-white rounded-full after:hover:bg-rose-700 absolute top-1/2 left-2"
          onClick={handlePrevClick}
        ></div> */}

        <div
          className="swiper-button-next absolute top-1/2 right-0 after:content-['next'] after:text-xs after:font-extrabold after:text-center after:px-[13px] after:py-2 after:rounded-full after:text-white after:bg-rose-700 rounded-full after:hover:bg-rose-800"
          onClick={handleNextClick}
        ></div>
      </Swiper>
    </div>
  );
};

export default Slider;
