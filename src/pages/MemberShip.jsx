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

    return (
        <div className='p-4 w-full h-full flex flex-col items-center'>
            {/* Mahak */}
            <div></div>

            {/* Aayush */}
            <div className='w-full flex flex-col gap-10 md:px-10 lg:px-32'>
                <div className='w-full h-full my-4'>
                    <h3 className=' font-semibold text-center my-4 text-2xl md:text-3xl'>Customer Reviews</h3>
                    <div className='w-72 h-72 relative mx-auto md:w-full md:h-80 lg:w-[45rem]'>
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
                            className="mySwiper w-full h-full py-2 bg-rose-300 rounded-lg"
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

                <div className=' h-full bg-rose-300 rounded-lg p-4 md:p-8 md:w-full'>
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