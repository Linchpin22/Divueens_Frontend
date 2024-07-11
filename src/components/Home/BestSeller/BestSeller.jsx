import React, { useEffect, useState } from "react";
import styles from "./BestSeller.module.css";
import { imageUrls } from "../../../assets/assets";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowsRotate,
  FaCartShopping,
  FaHeart,
  FaMagnifyingGlass,
  FaRegStar,
  FaRegStarHalfStroke,
  FaStar,
  FaStarHalf,
} from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const trending = [...imageUrls].slice(0, imageUrls.length / 2);
const newArrivals = [...imageUrls].slice(
  imageUrls.length / 2,
  imageUrls.length
);

const BestSeller = () => {
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
  const [selectedCategory, setSelectedCategory] = useState("trending");
  // slider
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [offset, setOffset] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);

  // buttons
  const [isClicked, setIsClicked] = useState(false);

  // Hover effect
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  // slider end

  // top buttons
  const HandleBtnClicked = (cat) => {
    setSelectedCategory(cat);

    // console.log(e.target)
    setIsClicked2(false);
    setIsClicked(true);
  };
  const HandleBtnClicked2 = (cat) => {
    setSelectedCategory(cat);
    setIsClicked(false);
    // console.log(e.target)
    setIsClicked2(true);
  };
  // top buttons end

  // hover functionality
  const hoverStartHandler = (index) => {
    // console.log("hoverstart", index, styles.hover)
    setHoveredIndex(index);
  };
  const hoverEndHandler = () => {
    // console.log("hoverend")
    setHoveredIndex(null);
  };

  const scaleImagehandler = (index) => {
    setHoveredImageIndex(index);
  };
  const endScaleImagehandler = (index) => {
    setHoveredImageIndex(null);
  };

  return (
    <>
      <div className="heading flex justify-center items-center w-full h-[10vh]">
        <hr className="bg-gradient-to-l from-rose-700 " />
        <h2 className="text-xl text-nowrap">Best Seller</h2>
        <hr className="bg-gradient-to-r from-rose-700 " />
      </div>
      <div
        className={`${styles["subheading"]} text-center text-lg font-normal text-slate-400`}
      >
        <p>Your Cosmetics and Skincare Products</p>
      </div>

      <div
        className={`${styles["slideBtn"]} mt-16 mb-10 mx-auto ${styles["bestseller_container"]} text-center`}
      >
        <button
          onClick={() => {
            HandleBtnClicked2("trending");
          }}
          style={{
            backgroundColor: isClicked ? "#ffff" : "#be123c",
            color: isClicked ? "#be123c" : "#fff",
          }}
          className={`${styles["first"]} transition-[all_0.8s_ease] py-2 px-4 md:px-12 font-semibold border border-rose-600 rounded-s-full shadow-xl`}
        >
          Trending Now
        </button>

        <button
          onClick={() => {
            HandleBtnClicked("newArrivals");
          }}
          style={{
            backgroundColor: isClicked ? "#be123c" : "#ffff",
            color: isClicked ? "#fff" : "#be123c",
          }}
          className={`${styles["second"]} py-2 px-4 md:px-12 font-semibold rounded-e-full shadow-xl border border-rose-600 transition-[all_0.8s_ease]`}
        >
          New Arrivals
        </button>
      </div>

      <div
        className={`${styles["products"]} overflow-hidden relative`}
      >
        {selectedCategory === "trending" && (
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
            className="mySwiper h-96 px-[5rem] py-4" >
            {
              trending.map((data, index) => (
                <SwiperSlide
                  onMouseLeave={hoverEndHandler}
                  onMouseEnter={() => {
                    hoverStartHandler(index);
                  }}
                  style={{ transform: `translateX(-${offset}%)` }}
                  className={`${styles["product-card"]
                    } bg-rose-50 rounded-[10px] mx-auto shadow-[0_4px_8px_#bbb] overflow-hidden cursor-pointer text-center transition-[0.3s_ease] ${hoveredIndex === index ? styles.hover : ""
                    }`}
                  key={index}>

                  <div className="h-[70%] overflow-hidden">
                    <img
                      onMouseEnter={() => {
                        scaleImagehandler(index);
                      }}
                      onMouseLeave={endScaleImagehandler}
                      style={{
                        transform:
                          hoveredImageIndex === index ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease",
                      }}
                      src={data.Image}
                      alt={`product ${index + currentIndex}`}
                      className="w-full h-full object-cover" />
                  </div>
                  {/* animated icons */}
                  <div
                    className={`${styles["cart-info"]} absolute left-[93%] top-1/2 -translate-x-[50%] -translate-y-[50%] flex flex-col justify-around w-[min-content] h-[40%] p-[10px] cursor-auto z-10 transition-[.3s]`}
                  >
                    <button
                      title="Add to cart"
                      className=" text-[#ddd] cursor-pointer translate-x-[100px] hover:text-darkerColor"
                      style={{ transition: ".2s" }}
                    >
                      <FaCartShopping className="text-rose-500" />
                    </button>
                    <a
                      title="Add to Wishlist"
                      className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-darkerColor"
                      style={{ transition: ".3s" }}
                    >
                      <FaHeart className="text-rose-500" />
                    </a>
                    <a
                      title="Quick View"
                      className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-darkerColor"
                      style={{ transition: ".4s" }}
                    >
                      <FaMagnifyingGlass className="text-rose-500" />
                    </a>
                    <a
                      title="Compare"
                      className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-darkerColor"
                      style={{ transition: ".5s" }}
                    >
                      <FaArrowsRotate className="text-rose-500" />
                    </a>
                  </div>
                  <div className="flex flex-col px-4 py-2 w-full h-[30%]">

                    <div className="flex items-center justify-between">
                      <div className="text-black my-[5px] mx-0 text-[1rem] font-medium text-left">
                        {data.Name}
                        <h3 className="text-[0.9rem] text-[#333] font-bold">
                          Rs. {data.Price}/- <br />
                        </h3> 
                        <span className="text-[12px] text-[grey] font-[300]">
                          <del>Rs. {data.Original_Price}/-</del>
                        </span>
                        <span className="font-[300] text-[12px] text-[green]">
                          {(data.Price / data.Original_Price) * 100}%
                        </span>
                      </div>
                      <Link to="/">
                        <button className="text-sm bg-rose-700 text-white border-[3px] border-rose-700 text-[12px] font-bold rounded-[8px] p-2 cursor-pointer shadow-[0px_1px_2px_#000] mt-5 hover:bg-white hover:text-rose-700">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
            <div className="swiper-button-prev absolute top-1/2 left-2 text-sm transform -translate-y-1/2 w-[2.5rem] h-10 rounded-full flex items-center md:text-lg md:w-[3rem] md:h-[3rem]" onClick={handlePrevClick}>
            </div>
            <div className="swiper-button-next absolute top-1/2 right-2 text-sm transform -translate-y-1/2 w-[2.5rem] h-10 rounded-full flex items-center md:text-lg md:w-[3rem] md:h-[3rem]" onClick={handleNextClick}></div>
          </Swiper >
        ) || selectedCategory === "newArrivals" && (
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
            className="mySwiper h-96 px-[3rem] py-4" >
            {
              newArrivals.map((data, index) => (
                <SwiperSlide
                  onMouseLeave={hoverEndHandler}
                  onMouseEnter={() => {
                    hoverStartHandler(index);
                  }}
                  style={{ transform: `translateX(-${offset}%)` }}
                  className={`${styles["product-card"]
                    } bg-rose-50 rounded-[10px] shadow-[0_4px_8px_#bbb] overflow-hidden cursor-pointer text-center transition-[0.3s_ease] ${hoveredIndex === index ? styles.hover : ""
                    }`}
                  key={index}>

                  <div className="h-[70%] overflow-hidden">
                    <img
                      onMouseEnter={() => {
                        scaleImagehandler(index);
                      }}
                      onMouseLeave={endScaleImagehandler}
                      style={{
                        transform:
                          hoveredImageIndex === index ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease",
                      }}
                      src={data.Image}
                      alt={`product ${index + currentIndex}`}
                      className="w-full h-full object-cover" />
                  </div>
                  {/* animated icons */}
                  <div
                    className={`${styles["cart-info"]} absolute left-[93%] top-1/2 -translate-x-[50%] -translate-y-[50%] flex flex-col justify-around w-[min-content] h-[40%] p-[10px] cursor-auto z-10 transition-[.3s]`}
                  >
                    <button
                      title="Add to cart"
                      className=" text-[#ddd] cursor-pointer translate-x-[100px] hover:text-darkerColor"
                      style={{ transition: ".2s" }}
                    >
                      <FaCartShopping className="text-rose-500" />
                    </button>
                    <a
                      title="Add to Wishlist"
                      className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-darkerColor"
                      style={{ transition: ".3s" }}
                    >
                      <FaHeart className="text-rose-500" />
                    </a>
                    <a
                      title="Quick View"
                      className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-darkerColor"
                      style={{ transition: ".4s" }}
                    >
                      <FaMagnifyingGlass className="text-rose-500" />
                    </a>
                    <a
                      title="Compare"
                      className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-darkerColor"
                      style={{ transition: ".5s" }}
                    >
                      <FaArrowsRotate className="text-rose-500" />
                    </a>
                  </div>
                  <div className="flex flex-col px-4 py-2 w-full h-[30%]">

                    <div className="flex items-center justify-between">
                      <div className="text-black my-[5px] mx-0 text-[1rem] font-medium text-left">
                        {data.Name}
                        <h3 className="text-[0.9rem] text-[#333] font-bold">
                          Rs. {data.Price}/- <br />
                        </h3>
                        <span className="text-[12px] text-[grey] font-[300]">
                          <del>Rs. {data.Original_Price}/-</del>
                        </span>
                        <span className="font-[300] text-[12px] text-[green]">
                          {(data.Price / data.Original_Price) * 100}%
                        </span>
                      </div>
                      <Link to="/">
                        <button className="text-sm bg-rose-700 text-white border-[3px] border-rose-700 text-[12px] font-bold rounded-[8px] p-2 cursor-pointer shadow-[0px_1px_2px_#000] mt-5 hover:bg-white hover:text-rose-700">
                          Buy Now
                        </button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
            <div className="swiper-button-prev absolute top-1/2 left-2 text-sm transform -translate-y-1/2 w-[2.5rem] h-10 rounded-full flex items-center md:text-lg md:w-[3rem] md:h-[3rem]" onClick={handlePrevClick}>
            </div>
            <div className="swiper-button-next absolute top-1/2 right-2 text-sm transform -translate-y-1/2 w-[2.5rem] h-10 rounded-full flex items-center md:text-lg md:w-[3rem] md:h-[3rem]" onClick={handleNextClick}></div>
          </Swiper >
        )}

      </div>
      {/* <div className={`${styles["see-all"]} my-[20px] mx-auto`}>
        <button className="text-darkerColor bg-[#fff] border-[2px] border-darkerColor rounded-[5px] py-[10px] px-[40px] md:px-[20px] cursor-pointer text-[10px] md:text-[18px] font-semibold block m-auto transition-[.2s] hover:text-[#fff] hover:bg-darkestColor">
          View More
        </button>
      </div> */}
    </>
  );
};

export default BestSeller;
