import React, { useState } from 'react'
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { IoIosArrowDown } from 'react-icons/io';

const MemberShip = () => {
    const [swiper, setSwiper] = useState(null);
    const handleNextClick = () => swiper?.slideNext();
    const handlePrevClick = () => swiper?.slidePrev();

    const customer = [
        {
            "id": 1,
            "name": "John Doe",
            "image": "https://picsum.photos/200/300?random=1",
            "text": "I've been using this product for a month now and I've seen amazing results! My skin has never looked better.",
            "rating": 5
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "image": "https://picsum.photos/200/300?random=2",
            "text": "I was skeptical at first, but this product really delivers. I've noticed a significant improvement in my hair growth.",
            "rating": 4
        },
        {
            "id": 3,
            "name": "Bob Johnson",
            "image": "https://picsum.photos/200/300?random=3",
            "text": "I've tried many products before, but this one is the best. It's easy to use and the results are amazing.",
            "rating": 5
        },
        {
            "id": 4,
            "name": "Alice Brown",
            "image": "https://picsum.photos/200/300?random=4",
            "text": "I was impressed by the customer service and the product itself. It's definitely worth the investment.",
            "rating": 4
        },
        {
            "id": 5,
            "name": "Mike Davis",
            "image": "https://picsum.photos/200/300?random=5",
            "text": "I've been using this product for a few weeks now and I've seen a noticeable difference in my skin tone.",
            "rating": 4
        },
        {
            "id": 6,
            "name": "Emily Chen",
            "image": "https://picsum.photos/200/300?random=6",
            "text": "This product has been a game-changer for my beauty routine. I highly recommend it!",
            "rating": 5
        },
        {
            "id": 7,
            "name": "David Lee",
            "image": "https://picsum.photos/200/300?random=7",
            "text": "I was blown away by the results I saw after just one use. This product is amazing!",
            "rating": 5
        },
        {
            "id": 8,
            "name": "Sarah Taylor",
            "image": "https://picsum.photos/200/300?random=8",
            "text": "I've tried many products before, but this one is the most effective. I've seen a huge improvement in my skin.",
            "rating": 5
        },
        {
            "id": 9,
            "name": "Kevin White",
            "image": "https://picsum.photos/200/300?random=9",
            "text": "I was hesitant to try a new product, but this one has exceeded my expectations. I'm so impressed!",
            "rating": 5
        }
    ]

    const accord = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione eum rem tempore laborum, ducimus similique. Ullam reiciendis quis quaerat."
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione eum rem tempore laborum, ducimus similique. Ullam reiciendis quis quaerat."
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione eum rem tempore laborum, ducimus similique. Ullam reiciendis quis quaerat."
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione eum rem tempore laborum, ducimus similique. Ullam reiciendis quis quaerat."
        },
        {
            id: 5,
            title: "Lorem ipsum dolor sit amet.",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione eum rem tempore laborum, ducimus similique. Ullam reiciendis quis quaerat."
        },
    ]

    const features = [
        "Exclusive discounts",
        "Early access to products",
        "Loyalty points/rewards",
        "Free samples/gifts",
        "Special events",
        "Personalized recommendations",
    ];

    return (
        <div className='p-4 w-full h-full flex flex-col items-center'>
            {/* Mahak */}
            <div>
                <div className="flex items-center justify-center  bg-white">

                    <div className="relative max-w-6xl xl:h-80 md:mx-20">
                        <img src="https://ideogram.ai/assets/progressive-image/balanced/response/KHAy-nYvTimiAa32Po365A" alt="Sample" className="object-cover w-full h-full absolute inset-0" />
                        <div className="relative z-10 p-8 md:w-3/5 xl:h-80 bg-white opacity-80 ">
                            <h1 className="md:text-4xl text-xl  font-bold text-black mb-4 mr-6">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor</h1>
                            <p class="mt-4 text-black mr-6">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor</p>
                            <button className="bg-black  text-white font-bold py-2 px-10 rounded-full shadow-lg hover:bg-rose-400 focus:outline-none mt-4">
                                Explore products
                            </button>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col items-center justify-center min-h-screen bg-white">
                    <h1 className="md:text-4xl text-xl font-bold mb-10 mt-10">Membership plans</h1>
                    <div className="flex flex-col md:flex-row gap-8 md:max-w-full ">
                        <div className="bg-gradient-to-b from-rose-100  to-rose-300 rounded-lg shadow-lg text-center overflow-hidden transform transition-transform duration-500 hover:scale-105 border outline-gray-900 mb-10">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 py-2 bg-rose-300">Basic</h2>
                            <div className='px-6'>
                                <p className="text-4xl font-bold mb-4">$10<span className="text-lg font-normal">/month</span></p>
                                <button className="w-full md:text-xl  text-base md:py-3  px-4 py-2 mb-4 text-white bg-black rounded-full hover:bg-gray-600 shadow-xl">Get now</button>
                            </div>
                            <ul className="space-y-4 px-6 pb-6">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center ">
                                        <span className="flex-shrink-0 w-4 h-4 mr-3 flex items-center justify-center border-2 border-black rounded-full  ">
                                            <svg className="w-4 h-4  text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </span>
                                        <span className="text-black">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-gradient-to-b from-rose-100  to-rose-300 rounded-lg shadow-lg text-center overflow-hidden transform transition-transform duration-500 hover:scale-105 border outline-gray-900 mb-10">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4 py-2 bg-rose-300">Premium</h2>
                            <div className='px-6'>
                                <p className="text-4xl font-bold mb-4">$20<span className="text-lg font-normal">/month</span></p>
                                <button className="w-full md:text-xl  text-base md:py-3  px-4 py-2 mb-4 text-white bg-black rounded-full hover:bg-gray-600 shadow-xl">Get now</button>
                            </div>
                            <ul className="space-y-4 px-6 pb-6">
                                {features.map((feature, index) => (
                                    <li key={index} className="flex items-center ">
                                        <span className="flex-shrink-0 w-4 h-4 mr-3 flex items-center justify-center border-2 border-black rounded-full  ">
                                            <svg className="w-4 h-4  text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                                            </svg>
                                        </span>
                                        <span className="text-black">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Aayush */}
            <div className='w-full flex flex-col gap-10 md:px-10 lg:px-32'>
                <div className='w-full h-full my-4'>
                    <h3 className=' font-bold text-center my-4 text-2xl md:text-4xl'>Customer Reviews</h3>
                    <div className='w-72 relative mx-auto md:w-full h-80 lg:w-[45rem]'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={0}
                            onSwiper={setSwiper}
                            breakpoints={{
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 0
                                },
                            }}
                            modules={[Navigation]}
                            className="mySwiper w-full h-full py-2 bg-gradient-to-b from-rose-200  to-rose-400 rounded-lg"
                        >
                            {customer.map((customer) => {
                                return <SwiperSlide key={customer.id} className='w-full h-full px-2 text-white flex flex-col items-center transition-all duration-[0.3s] hover:shadow-lg hover:shadow-rose-600 md:border-r-[1px] md:border-black'>
                                    <div className='w-24 h-24 overflow-hidden rounded-full md:w-28 md:h-28'>
                                        <img src={customer.image} alt="customer-reviews" className='w-full h-full object-cover' />
                                    </div>

                                    <p className='font-medium py-2 text-lg md:text-xl'>{customer.name}</p>

                                    <div className='text-center text-sm'>
                                        <p className=''>{customer.text}</p>
                                        <button className='border-b border-black cursor-pointer pt-2'>More</button>
                                    </div>
                                </SwiperSlide>
                            })}

                        </Swiper>
                        <div
                            className="swiper-button-prev after:content-['prev'] after:text-xs after:font-semibold after:text-center after:px-[13px] after:py-2 after:rounded-full after:border-2 after:border-black after:text-black absolute top-1/2 -left-2 md:-left-10"
                            onClick={handlePrevClick}
                        ></div>
                        <div
                            className="swiper-button-next after:content-['next'] after:text-xs after:font-semibold after:text-center after:px-[13px] after:py-2 after:rounded-full after:border-2 after:border-black after:text-black absolute top-1/2 -right-2 md:-right-10"
                            onClick={handleNextClick}
                        ></div>
                    </div>
                </div>

                <div className=' h-full bg-gradient-to-b from-rose-300  to-rose-400 rounded-lg p-4 md:p-8 md:w-full'>
                    <ol >
                        {accord.map((acc) => {
                            return <li key={acc.id} className='my-2 w-full bg-rose-200'>

                                <details class="group rounded-lg">
                                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-sm md:text-lg">
                                        <span className="">
                                            {acc.id}. {acc.title}
                                        </span>
                                        <span class="transition group-open:rotate-180">
                                            <IoIosArrowDown />
                                        </span>
                                    </summary>
                                    <p class="text-neutral-600 group-open:animate-fadeIn px-4 py-2 bg-rose-100 text-xs md:text-base">
                                        {acc.desc}
                                    </p>
                                </details>

                            </li>
                        })}
                    </ol>
                </div>
            </div>

            {/* Gaurav */}
            <div></div>
        </div>
    )
}

export default MemberShip