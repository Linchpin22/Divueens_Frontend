import React from 'react'
import { b1, b2, b3, b4, Pic57, product_11, product_13, product_14 } from '../../../assets/assets'
import img1 from '../../../assets/myOrders/img1.png'
import "swiper/css";
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";

import { Link } from 'react-router-dom';

const NewArrivals = () => {

    const product = [
        {
            img: Pic57,
            title: 'Vaseline Shea Butter for Glowing skin (180g), whipped body butter',
            price: 500,
        },
        {
            img: Pic57,
            title: 'Vaseline Shea Butter for Glowing skin (180g), whipped body butter',
            price: 500,
        },
        {
            img: Pic57,
            title: 'Vaseline Shea Butter for Glowing skin (180g), whipped body butter',
            price: 500,
        },
        {
            img: Pic57,
            title: 'Vaseline Shea Butter for Glowing skin (180g), whipped body butter',
            price: 500,
        },
        {
            img: Pic57,
            title: 'Vaseline Shea Butter for Glowing skin (180g), whipped body butter',
            price: 500,
        },
        {
            img: Pic57,
            title: 'Vaseline Shea Butter for Glowing skin (180g), whipped body butter',
            price: 500,
        },
        {
            img: Pic57,
            title: 'Vaseline Shea Butter for Glowing skin (180g), whipped body butter',
            price: 500,
        },
        {
            img: Pic57,
            title: 'Vaseline Shea Butter for Glowing skin (180g), whipped body butter',
            price: 500,
        },
        {
            img: Pic57,
            title: 'Vaseline Shea Butter for Glowing skin (180g), whipped body butter',
            price: 500,
        },
    ]

    return (
        <>
            <div className="heading md:pt-16 pt-8 md:pb-8">
                <hr className="bg-gradient-to-l from-rose-700" data-aos="fade-right" data-aos-delay="3000" data-aos-duration="2000" data-aos-easing="ease-in" />
                <h2 className="text-nowrap" data-aos="fade-up" data-aos-delay="3000" data-aos-duration="2000" data-aos-easing="ease-in">New Arrivals</h2>
                <hr className="bg-gradient-to-r from-rose-700" data-aos="fade-left" data-aos-delay="3000" data-aos-duration="2000" data-aos-easing="ease-in" />
            </div>
            <div className="flex flex-col lg:flex-row w-full h-full relative px-8 md:px-2">
                <div className="w-full h-52 select-none backdrop-blur-3xl bg-gradient-to-r from-white to-white/75 lg:w-[35%] lg:h-96 px-4">
                    <div className="w-full h-full flex flex-col justify-center text-center gap-2 lg:text-left">
                        {/* <h1 className="text-[1.8rem] md:text-[2rem] dancing-script font-bold">New Arrivals</h1> */}
                        
                        <p className="text-[0.8rem] md:text-[1rem] font-medium">
                        Step into the world of latest fashion trends with our New Arrivals! Our collection brings you the freshest styles, straight from the runways. From statement-making dresses to modern tops, we have something for every taste. Browse through our latest additions and elevate your style game!
                        </p>

                    </div>
                </div>

                <div className="ml-auto w-full h-72 lg:w-[70%] lg:h-96">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={20}
                        scrollbar={{
                            hide: true,
                        }}
                        breakpoints={{
                            320: { slidesPerView: 2, spaceBetween: 20 },
                            768: { slidesPerView: 4, spaceBetween: 0 },
                            1440: { slidesPerView: 4, spaceBetween: 0 },
                        }}
                        modules={[Pagination, Scrollbar]}
                        className="mySwiper w-full h-full py-4">
                        {product.map((p, i) => {
                            return <SwiperSlide key={i} className='rounded-xl w-full h-[100%] overflow-hidden group relative mx-4'>
                                <img src={p.img} alt="" className="w-full h-full object-cover transition group-hover:scale-110 duration-75" />
                                <div className="absolute bg-black/5 flex flex-col justify-between top-0 bottom-0 right-0 left-0 group-hover:bg-black/50">
                                    <div>
                                        <p className="text-xs md:text-sm pt-4 pl-4 font-semibold hidden transition group-hover:flex text-white">{p.title}</p>
                                        <p className="text-xs md:text-sm pt-4 pl-4 font-semibold hidden transition group-hover:flex text-white">₹ {p.price}</p>
                                    </div>

                                    <button className='text-center hidden group-hover:flex bg-rose-700 px-4 text-white font-medium text-base md:text-lg w-fit mr-auto rounded-tr-xl'>Buy Now</button>
                                </div>
                            </SwiperSlide>
                        })}

                    </Swiper>
                </div>

            </div>
        </>
    )
}

export default NewArrivals