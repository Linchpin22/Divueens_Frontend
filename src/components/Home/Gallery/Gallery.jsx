import React, { useState } from 'react'
import { coll1, coll10, coll2, coll3, coll4, coll5, coll6, coll7, coll8, coll9 } from '../../../assets/assets'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const Gallery = () => {
    const [swiper, setSwiper] = useState(null);

    const handleNextClick = () => swiper?.slideNext();
    const handlePrevClick = () => swiper?.slidePrev();

    const gallery = [
        {
            id: 1,
            image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?'
        },
        {
            id: 2,
            image: coll5,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?'
        },
        {
            id: 3,
            image: coll6,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?'
        },
        {
            id: 4,
            image: coll3,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?'
        },
        {
            id: 5,
            image: coll1,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?'
        },
        {
            id: 6,
            image: coll7,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?'
        },
        {
            id: 7,
            image: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?'
        },
        {
            id: 8,
            image: coll8,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?'
        },
        {
            id: 9,
            image: coll10,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?'
        },
        {
            id: 10,
            image: coll2,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?'
        },
        {
            id: 11,
            image: coll4,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?'
        },
        {
            id: 12,
            image: coll9,
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?'
        },
    ]

    return (
        <>
            <div className="heading md:pt-16 pt-8 md:pb-8">

                <hr className="bg-gradient-to-l from-rose-700" />
                <h2 className="text-nowrap">Product Gallery</h2>
                <hr className="bg-gradient-to-r from-rose-700" />
            </div>
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 mt-8">

                <div className="grid gap-4">
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll5} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll6} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll3} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll1} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll7} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll8} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll10} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll2} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll4} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll9} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                </div>

            </div> */}

            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                onSwiper={setSwiper}
                pagination={{ dynamicBullets: true, clickable: true }}
                breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 20 },
                    1440: { slidesPerView: 5, spaceBetween: 20 },
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper relative py-10 px-14 "
            >
                {gallery.map((g) => {
                    return <SwiperSlide key={g.id} className='group w-full h-full overflow-hidden relative'>
                        <img className="h-80 w-full rounded-lg transition group-hover:scale-110 duration-75" src={g.image} alt="img" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex text-sm md:text-base'>
                            {g.text}
                        </p>
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

        </>
    )
}

export default Gallery