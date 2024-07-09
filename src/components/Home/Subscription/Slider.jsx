import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { sub_1, sub_2, sub_3, sub_4 } from "../../../assets/assets";
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import {Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
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

const Item = ({ list }) => {
  return (
    <div className="w-[17.5em] h-[24.5em] bg-[#fff] overflow-hidden rounded-[10px] shadow-[0_4px_8px_#bbb] text-center transition-[0.3s_ease]">
      <img
        src={list.img}
        className="w-full h-auto rounded-t-[10px] object-cover"
        alt="Beauty Combo"
      />
      <div className="flex justify-around items-center rounded-b-[10px] p-1 font-bold">
        <div className="flex flex-col my-[10px] mx-0 items-start">
          <div className="star icon flex items-center">
            {[...Array(Math.floor(list.rating))].map((_, i) => (
              <FaStar key={i} />
            ))}
            {list.rating % 1 !== 0 ? (
              list.rating % 1 <= 0.5 ? (
                <FaRegStarHalfStroke />
              ) : (
                <FaRegStar />
              )
            ) : (
              <></>
            )}
            {[...Array(5 - Math.ceil(list.rating))].map((_, i) => (
              <FaRegStar key={i} />
            ))}
          </div>
          <div className="text-black my-[5px] mx-0 text-[18px] font-medium text-left">
            {list.name}
            <h3 className="text-[12px] text-[#333] font-bold">
              Rs. {list.price}/- <br />
            </h3>
            <span className="text-[12px] text-[grey] font-[300]">
              <del>Rs. {list.original_price}/-</del>
            </span>
            <span className="font-[300] text-[12px] text-[green]">
              {(list.price / list.original_price) * 100}%
            </span>
          </div>
        </div>
        <Link to="/">
          <button className="text-sm bg-rose-700 text-white border-[3px] border-rose-700 text-[12px] font-bold rounded-[8px] py-[5px] px-[10px] sm:py-[2px] sm:px-[10px] cursor-pointer shadow-[0px_1px_2px_#000] mb-[5px] hover:bg-white hover:text-rose-700">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

const Slider = () => {
  return (
    <Swiper
      navigation={true}
      slidesPerView={1.2}
      breakpoints={{
        500: {
          slidesPerView: 1.5,
        },
        650: {
          slidesPerView: 2.2,
        },
        970: {
          slidesPerView: 3.2,
          // spaceBetween: 50,
        },
        1200: {
          slidesPerView: 4.2,
          // spaceBetween: 50,
        },
      }}
      modules={[Navigation]}
      className="mySwiper"
    >
      {slidesData.map((data, i) => (
        <SwiperSlide className="box-border p-10" key={i}>
          <Item key={i} list={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
