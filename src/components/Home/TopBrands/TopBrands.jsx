import React from "react";
import styles from "./TopBrands.module.css";
import { brands } from "../../../assets/assets";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const TopBrands = () => {
  return (
    <>
      <div className={`${styles["brand-section"]} mt-8`}>
        <div className="heading pt-16 pb-8">
          <hr className="bg-gradient-to-l from-rose-700" />
          <h2 className="text-nowrap">Top Brands</h2>
          <hr className="bg-gradient-to-r from-rose-700" />
        </div>

        <div
          className={`${styles["brand-background"]} flex mt-[4px] py-[20px] px-0`}
        >
          {/* -------------- */}
          <Swiper
            slidesPerView={brands.length - 3}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className={`${styles["bar"]} mySwiper flex items-center gap-[30px] w-[100%] py-0 px-[40px] my-[25px] mx-auto relative overflow-hidden scroll-smooth snap-start pb-[10px]`}
          >
            {brands.map((item, index) => (
              <SwiperSlide
                key={index}
                className={`${styles["card"]} min-w-[24%] h-full bg-[#fff] border-[2px] border-[#e9acb6] py-[5px] px-0 text-[#fff] flex items-center justify-center text-center snap-start`}
              >
                <img
                  className="max-w-full max-h-[10vh] object-contain flex justify-center items-center w-auto h-auto p-0 box-border snap-start"
                  src={item}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* -------------- */}
        </div>

        <Link to="/coins">
          <div
            className={`${styles["heading-2"]} mt-8 font-['Montserrat'] relative p-10 text-center`}
          >
            <div
              className={`${styles["spot"]} absolute top-[-10%] w-[25px] h-[25px] bg-white rounded-[50%] blur-[10px] ${styles["spot1"]}`}
            ></div>
            <div
              className={`${styles["spot"]} absolute top-[-10%] w-[25px] h-[25px] bg-white rounded-[50%] blur-[10px] ${styles["spot2"]}`}
            ></div>
            <div
              className={`${styles["spot"]} absolute top-[-10%] w-[25px] h-[25px] bg-white rounded-[50%] blur-[10px] ${styles["spot3"]}`}
            ></div>
            <div
              className={`${styles["spot"]} absolute top-[-10%] w-[25px] h-[25px] bg-white rounded-[50%] blur-[10px] ${styles["spot4"]}`}
            ></div>
            <div className={`${styles["coinLink"]} font-semibold text-[2rem]`}>
              Get Div coins on every order
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default TopBrands;
