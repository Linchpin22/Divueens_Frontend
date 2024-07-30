import React, { useState } from 'react'
import "swiper/css";
import 'swiper/css/scrollbar';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import { Banner1, Banner10, Banner11, Banner12, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7, Banner8, Banner9, Pic58, brand_2, brand_3, product_1, product_2, product_3, product_4, product_5, product_6 } from '../../../assets/assets';
import MaintennacePage from '../../../pages/MaintennacePage'; 
import {Link} from 'react-router-dom';


const BrandProducts = () => {

    const [swiper, setSwiper] = useState(null);

    const handleNextClick = () => swiper?.slideNext();
    const handlePrevClick = () => swiper?.slidePrev();

    const banner = [
        Banner13, Banner14, Banner15, Banner16, Banner17
    ]

    const brandLeft1 = [
        {
            brandImage: brand_1,
            products1: product_1,
            products2: product_2,
            products3: product_3,
        },
    ]
    const brandLeft2 = [
        {
            brandImage: brand_3,
            products1: product_1,
            products2: product_2,
            products3: product_3,
        },
    ]
    const brandLeft3 = [
        {
            brandImage: brand_5,
            products1: product_1,
            products2: product_2,
            products3: product_3,
        },
    ]
    const brandLeft4 = [
        {
            brandImage: brand_7,
            products1: product_1,
            products2: product_2,
            products3: product_3,
        },
    ]

    const brandRight1 = [

        {
            brandImage: brand_2,
            products1: product_4,
            products2: product_5,
            products3: product_6,
        },

    ]
    const brandRight2 = [
        {
            brandImage: brand_4,
            products1: product_4,
            products2: product_5,
            products3: product_6,
        },
    ]
    const brandRight3 = [

        {
            brandImage: brand_6,
            products1: product_4,
            products2: product_5,
            products3: product_6,
        },
    ]
    const brandRight4 = [
        {
            brandImage: brand_8,
            products1: product_4,
            products2: product_5,
            products3: product_6,
        },
    ]

    return (
        <>
            <div className="heading md:pt-16 pt-8 md:pb-8">

                <hr className="bg-gradient-to-l from-rose-700" />
                <h2 className="text-nowrap">Top Brands Products</h2>
                <hr className="bg-gradient-to-r from-rose-700" />
            </div>

            <div className="flex flex-col w-full h-full">
                <div className="flex flex-col-reverse md:flex-row items-center gap-4 px-8 py-4">
                    <div className="w-full h-52 md:w-1/2 lg:w-[70%] md:h-72 border rounded-xl">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            scrollbar={{
                                hide: true,
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 20 },
                                425: { slidesPerView: 2, spaceBetween: 20 },
                                768: { slidesPerView: 1, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 20 }
                            }}
                            modules={[Pagination, Scrollbar]}
                            className="mySwiper w-full h-full">
                            <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                <img src={product_4} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                    <div>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                    </div>

                                    <Link to={'/maintennace'} className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                <img src={product_5} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                    <div>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                    </div>

                                    <Link to={'/maintennace'} className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                <img src={product_6} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                    <div>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                    </div>

                                    <Link to={'/maintennace'} className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</Link>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                    <div className="w-full h-52 lg:w-[30%] md:h-56 rounded-xl flex flex-col items-center justify-center text-center">
                        <img src={brand_3} className="w-full h-40" alt="" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-4 px-8 py-4">
                    <div className="w-full h-52 lg:w-[30%] md:h-56 rounded-xl flex flex-col items-center justify-center text-center">
                        <img src={brand_2} className="w-full h-40" alt="" />
                    </div>
                    <div className="w-full h-52 md:w-1/2 lg:w-[70%] md:h-72 border rounded-xl">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={20}
                            scrollbar={{
                                hide: true,
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 20 },
                                425: { slidesPerView: 2, spaceBetween: 20 },
                                768: { slidesPerView: 1, spaceBetween: 20 },
                                1024: { slidesPerView: 3, spaceBetween: 20 }

                            }}
                            modules={[ Pagination, Scrollbar]}
                            className="mySwiper w-full h-full">
                            <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                <img src={product_1} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                    <div>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                    </div>

                                    <Link to={'/maintennace'} className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                <img src={product_2} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                    <div>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                    </div>

                                    <Link to={'/maintennace'} className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</Link>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='rounded-xl w-full h-[100%] overflow-hidden group relative'>
                                <img src={product_3} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                <div className="absolute flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                    <div>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">Vaseline Shea Butter for Glowing skin (180g), whipped body butter</p>
                                        <p className="text-xs md:text-sm lg:text-base pt-4 px-4 font-semibold hidden transition group-hover:flex text-white">₹ 500</p>
                                    </div>

                                    <Link to={'/maintennace'} className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</Link>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                {/* Banners */}
                <div className="grid grid-cols-1 px-4 my-4 md:grid-cols-2 w-full h-full">
                    <img src={Banner1} alt="banner" />
                    <img src={Banner2} alt="banner" />
                    <img src={Banner3} alt="banner" />
                    <img src={Banner4} alt="banner" />
                    <img src={Banner5} alt="banner" />
                    <img src={Banner6} alt="banner" />
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={40}
                    loop={true}
                    onSwiper={setSwiper}
                    modules={[Navigation, Pagination]}
                    className="mySwiper relative py-4 md:py-10 px-8 w-full"
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
                <div className='grid grid-cols-1 px-4 my-4 md:grid-cols-2 w-full h-full'>
                    <img src={Banner7} alt="banner" />
                    <img src={Banner8} alt="banner" />
                    <img src={Banner9} alt="banner" />
                    <img src={Banner10} alt="banner" />
                    <img src={Banner11} alt="banner" />
                    <img src={Banner12} alt="banner" />
                </div>
            </div>
        </>
    )
}

export default BrandProducts