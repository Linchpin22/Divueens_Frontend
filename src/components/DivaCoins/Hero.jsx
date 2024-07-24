import React from 'react'

const Hero = () => {
    return (

        <header className='w-full h-full flex items-center justify-center text-white my-4 md:my-10'>

            <div
                className="overflow-hidden h-[55vh] md:h-full flex items-center justify-center relative"
            >
                <img
                    alt=""
                    className=" w-full h-full lg:w-[70%] xl:h-1/2 overflow-hidden lg:rounded-2xl"
                    src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg"
                />
                <div
                    className="z-10 bg-black/40 overflow-hidden w-full h-80 absolute top-0 left-0 right-0 bottom-0 lg:w-[70%] md:h-full md:left-1/2 md:-translate-x-1/2 xl:left-1/2 xl:-translate-x-1/2 text-white flex items-center justify-center lg:rounded-2xl"
                >
                    <div>
                        <div
                            className="p-4 lg:pt-32 text-center transform transition duration-300 ease-in-out flex flex-col items-center justify-center"
                        >
                            <h1 className='montserrat text-[1.5rem] mb-2 md:leading-[3.5rem] md:text-[2rem] xl:text-[2.5rem] md:w-[40rem] lg:w-[50rem]'>Divueens Rewards Program: Earning Diva Coins and receiving perks!</h1>

                            <p className='text-[0.7rem] md:text-[0.9rem] px-8 md:leading-[1.5rem] lg:w-[40rem] text-[#e1e1e1] poppins-medium'>Divueens, being a customer-centric product, makes sure that the customers are rewarded. What’s more? With our Diva Coins program, you earn with every purchase, referral, and share. Spend your Diva Coins on the beauty products you love and get more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero