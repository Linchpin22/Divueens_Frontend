import React, { useState } from 'react'
import "swiper/css";
import 'swiper/css/scrollbar';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Banner1, Banner10, Banner11, Banner12, Banner13, Banner14, Banner15, Banner16, Banner17, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7, Banner8, Banner9, brand_1, brand_18, brand_22, brand_23, brand_4, brand_5, brand_6, brand_7, product_1, product_2, product_3, product_4, product_5, product_6 } from '../../../assets/assets';


const BrandProducts = () => {

    const [swiper, setSwiper] = useState(null);

    const handleNextClick = () => swiper?.slideNext();
    const handlePrevClick = () => swiper?.slidePrev();

    return (
        <>
            <div className="heading md:pt-16 pt-8 md:pb-8">

                <hr className="bg-gradient-to-l from-rose-700" data-aos="fade-right" />
                <h2 className="text-nowrap" data-aos="fade-up">Top Brands Products</h2>
                <hr className="bg-gradient-to-r from-rose-700" data-aos="fade-left" />
            </div>

            <div className="flex flex-col-reverse md:flex-row items-center gap-4 px-8 lg:px-20 py-4">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    scrollbar={{
                        hide: true,
                    }}
                    loop={true}
                    onSwiper={setSwiper}
                    modules={[Pagination, Scrollbar, Navigation]}
                    className="mySwiper w-full h-full relative px-4"
                >
                    <SwiperSlide className='flex flex-col-reverse md:flex-row items-center gap-4 lg:px-20 py-4'>
                        <div className="w-full h-52 md:w-[60%] lg:w-[70%] md:h-60 border rounded-xl">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={20}
                                scrollbar={{
                                    hide: true,
                                }}
                                breakpoints={{
                                    320: { slidesPerView: 1, spaceBetween: 20 },
                                    425: { slidesPerView: 2, spaceBetween: 20 },
                                    1024: { slidesPerView: 3, spaceBetween: 20 }
                                }}
                                modules={[Pagination, Scrollbar]}
                                className="mySwiper w-full h-full">
                                <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                    <img src={product_1} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                    <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                        <div>
                                            <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                            <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                        </div>

                                        <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                    <img src={product_1} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                    <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                        <div>
                                            <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                            <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                        </div>

                                        <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                    <img src={product_1} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                    <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                        <div>
                                            <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                            <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                        </div>

                                        <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <div className="w-fit h-fit md:w-[40%] lg:w-[30%] md:h-56 rounded-xl flex flex-col items-center justify-center text-center">
                            <img src={brand_1} className="w-full h-40" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='flex flex-col-reverse md:flex-row items-center gap-4 lg:px-20 py-4'>
                        <div className="w-fit h-fit md:w-[40%] lg:w-[30%] md:h-56 rounded-xl flex flex-col items-center justify-center text-center">
                            <img src={brand_22} className="w-full h-40" alt="" />
                        </div>
                        <div className="w-full h-52 md:w-[60%] lg:w-[70%] md:h-60 border rounded-xl">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={20}
                                scrollbar={{
                                    hide: true,
                                }}
                                breakpoints={{
                                    320: { slidesPerView: 1, spaceBetween: 20 },
                                    425: { slidesPerView: 2, spaceBetween: 20 },
                                    1024: { slidesPerView: 3, spaceBetween: 20 }

                                }}
                                modules={[Pagination, Scrollbar]}
                                className="mySwiper w-full h-full">
                                <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                    <img src={product_2} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                    <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                        <div>
                                            <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                            <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                        </div>

                                        <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                    <img src={product_2} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                    <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                        <div>
                                            <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                            <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                        </div>

                                        <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                    <img src={product_2} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                    <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                        <div>
                                            <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                            <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                        </div>

                                        <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                                    </div>
                                </SwiperSlide>
                                
                            </Swiper>
                        </div>
                    </SwiperSlide>

                    {/* Navigation buttons */}
                    <div
                        className="swiper-button-prev after:content-['prev'] after:text-xs after:font-extrabold after:text-center after:px-[13px] after:py-2 after:rounded-full after-border after:border-rose-800 after:bg-rose-700 after:text-white absolute top-1/2 left-2 after:z-20"
                        onClick={handlePrevClick}
                    ></div>
                    <div
                        className="swiper-button-next after:content-['next'] after:text-xs after:font-extrabold after:text-center after:px-[13px] after:py-2 after:rounded-full after-border after:border-rose-800 after:bg-rose-700 after:text-white absolute top-1/2 right-2 after:z-20"
                        onClick={handleNextClick}
                    ></div>
                </Swiper>
            </div >
        </>
    )
}

export default BrandProducts