import React, { useState } from "react";
// import styles from "./BestSeller.module.css";
import { imageUrls } from "../../../assets/assets";
import { LiaShoppingCartSolid, LiaHeart } from "react-icons/lia";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
 
//import MaintennacePage from '../../pages/MaintennacePage'; 
import {Link} from 'react-router-dom';


const trending = imageUrls.slice(0, imageUrls.length / 2);
const newArrivals = imageUrls.slice(imageUrls.length / 2);

const BestSeller = () => {
  const [swiper, setSwiper] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("trending");

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  const handleNextClick = () => swiper?.slideNext();
  const handlePrevClick = () => swiper?.slidePrev();

  const categories = { trending, newArrivals };

  return (
    <>
      <div className="heading flex justify-center items-center">
        <hr className="bg-gradient-to-l from-rose-700" />
        <h2 className="text-xl text-nowrap text-center">Best Seller</h2>
        <hr className="bg-gradient-to-r from-rose-700" />
      </div>

      <p
        className='text-center text-lg font-normal text-slate-400'
      >
        Your Cosmetics and Skincare Products
      </p>

      <div
        className='my-10 mx-auto text-center'
      >
        {["trending", "newArrivals"].map((cat, idx) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              backgroundColor: selectedCategory === cat ? "#be123c" : "#fff",
              color: selectedCategory === cat ? "#fff" : "#be123c",
            }}
            className={`${idx === 0 ? "first rounded-s-lg" : "second rounded-e-lg"
            } text-xs md:text-sm transition-all py-1 md:py-2 px-4 md:px-12  font-semibold shadow shadow-slate-400`}
          >
            {cat === "trending" ? "Trending Now" : "New Arrivals"}
          </button>
        ))}
      </div>

      <div className='bg-rose-50'>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          onSwiper={setSwiper}
          pagination={{ dynamicBullets: true, clickable: true }}
          breakpoints={{
            425: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1440: { slidesPerView: 5, spaceBetween: 20 },
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper relative py-10 px-14 "
        >
          {categories[selectedCategory].map((data, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className='bg-white rounded-lg shadow-xl h-[17rem] md:h-[20rem] overflow-hidden cursor-pointer transition-[0.9s_ease]'
            >
              <Link to = {`/product/${data.Name}`} className="h-[70%] block overflow-hidden">
                <img
                  onMouseEnter={() => setHoveredImageIndex(index)}
                  onMouseLeave={() => setHoveredImageIndex(null)}
                  style={{
                    transform:
                      hoveredImageIndex === index ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                  src={data.Image}
                  alt={`product ${index}`}
                  className="w-full h-full object-cover"
                />
              </Link>
              {/* hover icons */}
              <div
                className='absolute left-[90%] top-12 -translate-x-[50%] -translate-y-[50%] flex flex-col z-10 transition-[0.9s] gap-3'
              >
                <button
                  title="Add to cart"
                  className="cursor-pointer translate-x-[100px]"
                  style={{ transition: ".2s" }}
                >
                  <LiaShoppingCartSolid className="text-rose-700" />
                </button>
                <a
                  title="Add to Wishlist"
                  className="cursor-pointer translate-x-[100px]"
                  style={{ transition: ".3s" }}
                >
                  <LiaHeart className="text-rose-700" />
                </a>
              </div>
              <div className="flex flex-col px-2 md:px-3 pt-2 w-full">
                {/* Product Name */}
                <p className="text-base font-medium md:text-lg pl-2 pb-1 text-black ">
                  {data.Name}
                </p>
                <div className="flex px-2 justify-between">
                  
                    {/* StarIcons
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
                  </div> */}
                 
                  {/* Pricings */}
                  <div className="flex flex-col ">
                    <p className="text-sm md:text-lg font-semibold text-rose-800">
                      <span className="text-xs align-top">₹</span>
                      {data.Price}/-
                    </p>
                    <p className="text-[11px] text-slate-400">
                      <span className="text-emerald-600 pr-1">
                        {(data.Price / data.Original_Price) * 100}%
                      </span>
                      <del className="text-[10px]">
                        ₹{data.Original_Price}/-
                      </del>
                    </p>
                  </div>

                  {/* Buynow btn */}
                <Link to="/">
                <Link to={'/maintennace'}className="bg-rose-700 rounded text-xs md:text-md text-white text-nowrap p-2 font-medium cursor-pointer hover:bg-rose-600">
                    Buy Now
                  </Link>
                </Link>
                </div>
                
              </div>
            </SwiperSlide>
          ))}

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
      </div>
    </>
  );
};

export default BestSeller;
