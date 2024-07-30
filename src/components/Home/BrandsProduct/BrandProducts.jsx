import React, { useState } from 'react'
import "swiper/css";
import 'swiper/css/scrollbar';
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Banner1, Banner10, Banner11, Banner12, Banner13, Banner14, Banner15, Banner16, Banner17, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7, Banner8, Banner9, brand_1, brand_2, brand_3, brand_4, brand_5, brand_6, brand_7, brand_8, product_1, product_2, product_3, product_4, product_5, product_6 } from '../../../assets/assets';
import BrandLeft from './BrandLeft';
import BrandRight from './BrandRight';


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
                {brandLeft1.map((b,i) =>{
                    return <BrandLeft key={i} brandImage={b.brandImage} products1={b.products1} products2={b.products2} products3={b.products3}  />
                })}
                {brandRight1.map((b,i) =>{
                    return <BrandRight key={i} brandImage={b.brandImage} products1={b.products1} products2={b.products2} products3={b.products3}  />
                })}
                {brandLeft2.map((b,i) =>{
                    return <BrandLeft key={i} brandImage={b.brandImage} products1={b.products1} products2={b.products2} products3={b.products3}  />
                })}
                {brandRight2.map((b,i) =>{
                    return <BrandRight key={i} brandImage={b.brandImage} products1={b.products1} products2={b.products2} products3={b.products3}  />
                })}
                {brandLeft3.map((b,i) =>{
                    return <BrandLeft key={i} brandImage={b.brandImage} products1={b.products1} products2={b.products2} products3={b.products3}  />
                })}
                {brandRight3.map((b,i) =>{
                    return <BrandRight key={i} brandImage={b.brandImage} products1={b.products1} products2={b.products2} products3={b.products3}  />
                })}
                {brandLeft4.map((b,i) =>{
                    return <BrandLeft key={i} brandImage={b.brandImage} products1={b.products1} products2={b.products2} products3={b.products3}  />
                })}
                {brandRight4.map((b,i) =>{
                    return <BrandRight key={i} brandImage={b.brandImage} products1={b.products1} products2={b.products2} products3={b.products3}  />
                })}


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