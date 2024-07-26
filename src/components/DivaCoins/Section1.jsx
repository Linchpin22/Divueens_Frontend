import React from 'react'

const Section1 = () => {
    return (
        <div className='w-full h-full flex flex-col items-center'>

            <div className='w-full h-full flex flex-col items-center gap-4 lg:pb-12 xl:px-32'>
                <h1 className='montserrat text-[1.2rem] md:text-[2rem] font-medium'>How to Earn Diva Coins </h1>

                <div className="container">
                    <div
                        className="flex flex-col lg:grid grid-cols-9 mx-auto p-2 text-blue-50"
                    >
                        <div className="flex flex-row-reverse lg:contents">
                            <div
                                className="bg-gradient-to-b w-full from-rose-400 to-rose-600 rounded-lg shadow-lg hover:shadow-xl hover:shadow-rose-700 col-start-1 col-end-5 p-4 my-4 lg:ml-auto"
                            >
                                <h3 className="font-semibold text-[0.9rem] md:text-sm mb-1"><span className='font-semibold md:text-base'>Purchases:</span></h3>
                                <p className="text-[0.7rem] tracking-tight md:text-base">
                                    You get paid Diva Coins for every transaction that you make on Divueens.
                                </p>
                                <ul className='list-disc list-inside mt-2'>
                                    <li
                                        className="text-[0.7rem] tracking-tighter md:text-[0.9rem]">Spend just ₹2999 – that nets you 65 Diva Coins and other loot.</li>
                                    <li className="text-[0.7rem] tracking-tight md:text-[0.9rem]">Shop worth ₹5999 and get 125 Diva Coins, gifts included.</li>
                                    <li className="text-[0.7rem] tracking-tight md:text-[0.9rem]">1 rs Diva coin will be equal to one Indian Rupee, i.e., ₹.</li>
                                </ul>
                            </div>
                            <div className="col-start-5 col-end-6 lg:mx-auto relative mr-4 md:mr-10">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 rounded-t-xl bg-rose-400 pointer-events-none"></div>
                                </div>
                                <div
                                    className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-rose-700 shadow"
                                ></div>
                            </div>
                        </div>

                        <div className="flex flex-row-reverse lg:flex-none lg:contents">
                            <div
                                className="bg-gradient-to-b w-full from-rose-400 to-rose-600 rounded-lg shadow-lg hover:shadow-xl hover:shadow-rose-700 col-start-6 col-end-10 p-4 text-sm my-4 lg:mr-auto"
                            >
                                <h3 className="font-semibold text-[0.9rem] mb-1"><span className='font-semibold md:text-base'>Referrals: </span></h3>
                                <p className="text-[0.7rem] tracking-tight md:text-base">
                                    You can also invite your friends to our team on Divueens and receive Diva Coins when your invitee makes their first order.
                                </p>
                                <ul className='list-disc list-inside mt-2'>
                                <li className="text-[0.7rem] tracking-tight md:text-[0.9rem]">The referrer receives 50 Diva Coins.</li>
                                <li className="text-[0.7rem] tracking-tight md:text-[0.9rem]">The Diva Coins balance of the person to who the referral is given increases to 50 Diva Coins after the first order.</li>
                                </ul>
                            </div>
                            <div className="grid lg:hidden col-start-5 col-end-6 lg:mx-auto relative mr-4 md:mr-10">
                                <div className="h-full w-6 flex items-center justify-center">
                                    <div className="h-full w-1 bg-rose-400 pointer-events-none"></div>
                                </div>
                                <div
                                    className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-rose-700 shadow"
                                ></div>
                            </div>
                        </div>

                    </div>
                </div>

                <p className='poppins-medium text-center text-xs md:text-sm py-4'>(NOTE - Diva coins will be transferred to both the parties after the referred user receives their first order.)</p>
            </div>

            {/* <h1 className='montserrat text-[1.5rem] md:text-[2rem] font-medium'>Collect your Diva Coins?</h1>
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

            </div> */}
        </div>
    )
}

export default Section1