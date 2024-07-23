import React from 'react'
import Gift1 from "./../../assets/DivaCoins/gift1.png";
import Gift2 from "./../../assets/DivaCoins/gift2.png";
import winner from "./../../assets/DivaCoins/winner.png";

const Section2 = () => {
    return (
        <div className='w-full h-full flex flex-col items-center gap-5 py-5'>
            <h1 className='montserrat text-[1.5rem] md:text-[2rem] font-medium'>Collect your Diva Coins?</h1>
            <p className='poppins-medium p-color text-xs text-center w-[22rem] md:text-base md:w-full'>Stay updated with our latest blog posts, offering deep insights and news.</p>

            <div className='flex flex-col lg:flex-row items-center gap-5'>

                <div className='w-80 h-[22rem] hover:scale-[1.1] hover:-translate-y-5 md:hover:translate-y-0 xl:hover:-translate-x-5 transition-all duration-500 bg-gradient-to-b from-rose-400 to-rose-600 rounded-lg shadow-lg hover:shadow-xl hover:shadow-rose-700'>
                    <div className='w-full relative rounded-lg overflow-hidden'>
                        <img src={Gift1} className='object-cover h-48 w-full' alt="" />
                        <div className='bg-rose-300 bg-opacity-20 absolute top-0 bottom-0 left-0 right-0'>

                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2 py-2'>
                        <h1 className='w-[80%] montserrat text-center mt-2 text-xl text-white '>Understanding Digital Currencies</h1>

                        <p className='poppins-regular text-rose-200 text-sm text-center w-[15rem] px-1'>A comprehensive guide to digital currencies and their impact on the global economy.</p>
                    </div>
                </div>

                <div className='w-80 h-[22rem] hover:scale-[1.1] hover:translate-x-0 md:transition-all duration-500 bg-gradient-to-b from-rose-400 to-rose-600 rounded-lg shadow-lg hover:shadow-xl hover:shadow-rose-700'>
                    <div className='w-full relative rounded-lg overflow-hidden'>
                        <img src={Gift2} className='object-cover h-48 w-full' alt="" />
                        <div className='bg-rose-300 bg-opacity-20 absolute top-0 bottom-0 left-0 right-0'>

                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2 py-2'>
                        <h1 className='w-[80%] montserrat text-center mt-2 text-xl text-white'>The Rise of Diva Coins</h1>

                        <p className='poppins-regular text-rose-200 text-sm text-center w-[15rem] px-1'>Explore the journey and success story of Diva Coins in the digital currency market.</p>
                    </div>
                </div>

                <div className='w-80 h-[22rem] hover:scale-[1.1] hover:translate-y-5 md:hover:translate-y-0 xl:hover:translate-x-5 transition-all duration-500 bg-gradient-to-b from-rose-400 to-rose-600 rounded-lg shadow-lg hover:shadow-xl hover:shadow-rose-700'>
                    <div className='w-full relative rounded-lg overflow-hidden'>
                        <img src={winner} className='object-cover w-full h-48' alt="" />
                        <div className='bg-rose-300 bg-opacity-20 absolute top-0 bottom-0 left-0 right-0'>

                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center gap-2 py-2'>
                        <h1 className='w-[80%] montserrat text-center mt-2 text-xl text-white'>Investing in Diva Coins</h1>

                        <p className='poppins-regular text-rose-200 text-sm text-center w-[15rem] px-1'>Learn the best strategies for investing in Diva Coins to maximize your returns.</p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Section2