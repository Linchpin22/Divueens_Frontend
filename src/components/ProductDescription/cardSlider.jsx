import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import img from '../../assets/pictures/img1.jpg';
import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation} from "swiper/modules";
import { Link } from "react-router-dom";
import { HiHeart, HiOutlineHeart } from "react-icons/hi";

const  cardSlider = () => {
  const relatedProducts = [
    {
      id: 1, src: img, title: 'Sony BRAVIA XR Android Tv', price: '800.22', buttonText: 'Add to cart', original_price: 12000,
      rating: 2.6,
    },
    { id: 2, src: img, title: 'Mi P1 Smart Android HD TV', price: '400.22', buttonText: 'Add to cart',original_price: 12000,
    rating: 2.6, },
    { id: 3, src: img, title: 'Konka OLED of Android Tv', price: '700.22', buttonText: 'Add to cart',original_price: 12000,
    rating: 2.6, },
    { id: 4, src: img, title: 'CL Roku Smart Android Tv', price: '800.22', buttonText: 'Out of Stock', original_price: 12000,
    rating: 2.6,},
    { id: 5, src: img, title: 'Sony BRAVIA XR Android Tv', price: '800.22', buttonText: 'Add to cart',original_price: 12000,
    rating: 2.6, },
    { id: 6, src: img, title: 'Mi P1 Smart Android HD TV', price: '400.22', buttonText: 'Add to cart',original_price: 12000,
    rating: 2.6, },
    { id: 7, src: img, title: 'Konka OLED of Android Tv', price: '700.22', buttonText: 'Add to cart', original_price: 12000,
    rating: 2.6, },
    { id: 8, src: img, title: 'CL Roku Smart Android Tv', price: '800.22', buttonText: 'Out of Stock',original_price: 12000,
    rating: 2.6, },
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
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        onSwiper={(swiper) => setSwiper(swiper)}
        breakpoints={{
          425: {
            slidesPerView: 1,

          },
          600: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1170: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="w-full"
      >
        {relatedProducts.map((data, i) => (
          <SwiperSlide
            className="border rounded-lg overflow-hidden h-auto md:h-auto shadow-md lg:w-full w-[300px] shadow-zinc-400 bg-white mb-4"
            key={i}
          >
            {/* <div className="w-full ">
              <img
                src={data.src}
                alt=""
                className=" object-cover bg-black"
              />
            </div> */}
            
            <div class="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative">
            <div className="opacity-0 bg-black hover:opacity-100  hover:translate-y-2 hover:bg-opacity-20 absolute top-0 left-0 right-0 bottom-0 h-[100%] transition-all  flex items-center justify-center">c
              <Link to={""}>
                <button className="bg-rose-700 text-white z-10 cursor-pointe text-sm p-3 rounded-md shadow-md font-medium shadow-black hover:bg-rose-600">
                  Buy Now
                </button>
              </Link>
            </div>
            {/* <div
              class="bg-gray-100 w-10 h-10 flex items-center justify-center rounded-full cursor-pointer absolute top-4 right-4">
                <HiOutlineHeart className="text-xl"/> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-gray-800 inline-block" viewBox="0 0 64 64">
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"></path>
              </svg> */}
            {/* </div> */}

            <div class="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
              <img src={data.src} alt="Product 1"
                class="h-full w-full object-contain" />
            </div>

            <div>
              <h3 class="text-lg font-extrabold text-gray-800">{data.title}</h3>
              <p class="text-gray-600 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <h4 class="text-lg text-rose-800 font-bold mt-4">₹{data.price}</h4>
            </div>
          </div>
            {/* <div className="flex flex-col px-3 md:py-2 w-full">
              <div className="flex flex-col items-start">
                <div className="">
                  <p className=" text-rose-950 text-sm md:text-base pt-1 font-medium">{data.title}</p>
                  
                </div>
                <div className="flex flex-col my-2 w-full items-end">
                  <p className="text-md font-medium text-rose-800"><span className="text-xs align-text-top">₹</span>
                    {data.price}/-</p>
                  <p className="text-sm text-slate-500">
                    <del className="">₹{data.original_price}/-</del>
                  </p>
                </div>
              </div>
            </div> */}
          </SwiperSlide>
        ))}
        <div
          className="swiper-button-prev after:content-['prev'] after:text-xs after:font-extrabold after:text-center after:px-[13px] after:py-2 after:rounded-full after:text-white after:bg-rose-700 rounded-full after:hover:bg-rose-800 absolute top-1/2 "
          onClick={handlePrevClick}
        ></div>

        <div
          className="swiper-button-next absolute top-1/2 right-0 after:content-['next'] after:text-xs mx-2 after:font-extrabold after:text-center after:px-[13px] after:py-2 after:rounded-full after:text-white after:bg-rose-700 rounded-full after:hover:bg-rose-800"
          onClick={handleNextClick}
        ></div>
      </Swiper>
    </div>
  );
};

export default cardSlider;
