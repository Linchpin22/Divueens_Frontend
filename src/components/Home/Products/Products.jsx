import React, { useState } from 'react'
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { b1, b2, product_11, product_13, product_14 } from '../../../assets/assets';

const Products = () => {
    const [swiper, setSwiper] = useState(null);

    const handleNextClick = () => swiper?.slideNext();
    const handlePrevClick = () => swiper?.slidePrev();

    return (
        <>
            <div className="heading md:pt-16 pt-8 md:pb-8">
                <hr className="bg-gradient-to-l from-rose-700" data-aos="fade-right" />
                <h2 className="text-nowrap" data-aos="fade-up">Products</h2>
                <hr className="bg-gradient-to-r from-rose-700" data-aos="fade-left" />
            </div>
            <section className="mt-8 mb-4">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={0}
                    onSwiper={setSwiper}
                    scrollbar={{
                        draggable: true,
                        hide: true,
                    }}
                    breakpoints={{
                        425: { slidesPerView: 3, spaceBetween: 20 },
                        768: { slidesPerView: 5, spaceBetween: 20 },
                    }}
                    modules={[Navigation, Scrollbar, Pagination]}
                    className="mySwiper relative w-full h-full px-6"
                >
                    <SwiperSlide
                        className='flex items-center justify-between w-fit h-full'
                    >
                        <div className="flex flex-col items-center w-fit">
                            <img src={product_11} alt="Top Products" className="w-24 h-24 md:w-28 md:h-28 lg:w-44 lg:h-44 rounded-full object-cover mb-2" />
                            {/* <p className="text-center font-bold pt-5">Top Products</p> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className='flex items-center justify-between w-fit h-full'
                    >
                        <div className="flex flex-col items-center w-fit">
                            <img src={product_13} alt="Top Brands" className="w-24 h-24 md:w-28 md:h-28 lg:w-44 lg:h-44 rounded-full object-cover mb-2" />
                            {/* <p className="text-center font-bold pt-5">Top Brands</p> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className='flex items-center justify-between w-fit h-full'
                    >
                        <div className="flex flex-col items-center w-fit">
                            <img src={product_14} alt="Top Brands" className="w-24 h-24 md:w-28 md:h-28 lg:w-44 lg:h-44 rounded-full object-cover mb-2" />
                            {/* <p className="text-center font-bold pt-5">Top Brands</p> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className='flex items-center justify-between w-fit h-full'
                    >
                        <div className="flex flex-col items-center w-fit">
                            <img src={b1} alt="Top Brands" className="w-24 h-24 md:w-28 md:h-28 lg:w-44 lg:h-44 rounded-full object-cover mb-2" />
                            {/* <p className="text-center font-bold pt-5">Top Brands</p> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide
                        className='flex items-center justify-between w-fit h-full'
                    >
                        <div className="flex flex-col items-center w-fit">
                            <img src={b2} alt="Top Brands" className="w-24 h-24 md:w-28 md:h-28 lg:w-44 lg:h-44 rounded-full object-cover mb-2" />
                            {/* <p className="text-center font-bold pt-5">Top Brands</p> */}
                        </div>
                    </SwiperSlide>


                    {/* Navigation buttons */}
                    {/* <div
                        className="swiper-button-prev after:content-['prev'] after:text-xs after:font-extrabold after:text-center after:px-[13px] after:py-2 after:rounded-full after-border after:border-rose-800 after:bg-rose-700 after:text-white absolute top-1/2 left-2"
                        onClick={handlePrevClick}
                    ></div>
                    <div
                        className="swiper-button-next after:content-['next'] after:text-xs after:font-extrabold after:text-center after:px-[13px] after:py-2 after:rounded-full after-border after:border-rose-800 after:bg-rose-700 after:text-white absolute top-1/2 right-2"
                        onClick={handleNextClick}
                    ></div> */}
                </Swiper>
            </section>
        </>
    )
}

export default Products