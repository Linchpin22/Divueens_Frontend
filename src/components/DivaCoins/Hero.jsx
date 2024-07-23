import React from 'react'
// import ScrollAnimation from 'react-animate-on-scroll'

const Hero = () => {
    return (

        <header className='w-full h-full flex items-center justify-center text-white my-4 md:my-10'>

            <div
                className="overflow-hidden flex items-center justify-center relative"
            >
                <img
                    alt=""
                    className=" w-full h-full md:w-[70%] xl:h-1/2 overflow-hidden md:rounded-2xl transition duration-300 ease-in-out"
                    src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg"
                />
                {/* <ScrollAnimation animateIn='fadeIn'
                    animateOut='fadeOut'> */}
                    <div
                        className="z-50 cursor-pointer overflow-hidden w-full h-80 absolute top-0 left-0 right-0 bottom-0 md:w-[70%] md:h-full md:left-1/2 md:-translate-x-1/2 xl:left-1/2 xl:-translate-x-1/2 text-white flex items-center justify-center rounded-2xl"
                    >
                        <div>
                            <div
                                className="p-4 lg:pt-32 text-center transform transition duration-300 ease-in-out flex flex-col items-center justify-center"
                            >
                                <h1 className='montserrat text-[1.8rem] leading-[2.5rem] mb-2 md:leading-[3.5rem] md:text-[2rem] xl:text-[3rem] md:w-[40rem]'>Digital curency of Divueens</h1>

                                <p className='text-[0.7rem] leading-[1.1rem] md:leading-[1.5rem] md:w-[30rem] md:text-[1rem] text-[#e1e1e1] poppins-medium'>Stay informed with the latest insights and updates on our unique digital coin. Join us in exploring the innvoative world of Diva Coins.</p>
                            </div>
                        </div>
                    </div>
                {/* </ScrollAnimation> */}
            </div>
        </header>
    )
}

export default Hero