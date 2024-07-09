import React from 'react'
import discount from "./../../assets/DivCoins/discount.png";
import collecting from "./../../assets/DivCoins/collecting.png";
import onlineConnections from "./../../assets/DivCoins/online-connections.png";

const Section1 = () => {
    return (
        <div className='w-full h-full flex flex-col items-center gap-5 py-10 mb-5'>
            <h1 className='montserrat text-[1.5rem] md:text-[2rem] font-medium'>Redeem Gifts Using Div Coins?</h1>
            <p className='poppins-medium p-color text-xs text-center w-[22rem] md:text-base md:w-full'>Explore the unparalleled features that make Div Coins the leading choice in digital currency.</p>

            <div className='flex items-center flex-col gap-5 lg:flex-row justify-between mt-2'>
                <div className="w-80 md:w-full relative shadow-lg hover:shadow-rose-700 hover:scale-[1.1] hover:-translate-y-5 md:hover:translate-y-0 xl:hover:-translate-x-5 transition-all duration-500 flex items-center justify-center h-auto rounded-xl overflow-hidden">
                    <div className="group bg-gradient-to-b from-rose-300 to-rose-600 p-2.5 w-80">
                        <div className="rounded-3xl h-[10rem] md:h-[12rem] ">
                            <img src={collecting} alt="image" className="rounded-xl w-full h-full" />
                        </div>
                        <div className="flex flex-col items-center justify-center py-6 gap-4 text-center">
                            <h4 className="font-bold text-center montserrat text-xl text-white">Top-notch Security</h4>
                            <p className="font-medium mb-4 text-center poppins-regular text-rose-200 text-sm">Our advanced security measures ensure your investments are always protected.</p>

                        </div>
                    </div>
                </div>
                <div className="w-80 md:w-full relative shadow-lg hover:shadow-rose-700 hover:scale-[1.1] hover:translate-x-0 transition-all duration-500 flex items-center justify-center h-auto rounded-xl overflow-hidden">
                    <div className="group bg-gradient-to-b from-rose-300 to-rose-600 p-2.5 w-80">
                        <div className="rounded-3xl h-[10rem] md:h-[12rem]">
                            <img src={discount} alt="image" className="rounded-xl w-full h-full" />
                        </div>
                        <div className="flex flex-col items-center justify-center py-6 gap-4 text-center">
                            <h4 className="font-bold text-center montserrat text-xl text-white">Market Growth</h4>
                            <p className="font-medium mb-4 text-center poppins-regular text-rose-200 text-sm">Benefit from the growing market and maximize your returns with Div Coins.</p>

                        </div>
                    </div>
                </div>
                <div className="w-80 md:w-full relative shadow-lg hover:shadow-rose-700 hover:scale-[1.1] hover:translate-y-5 md:hover:translate-y-0 xl:hover:translate-x-5 transition-all duration-500 flex items-center justify-center h-auto rounded-xl overflow-hidden">
                    <div className="group bg-gradient-to-b from-rose-300 to-rose-600 p-2.5 w-80">
                        <div className="rounded-3xl h-[10rem] md:h-[12rem]">
                            <img src={onlineConnections} alt="image" className="rounded-xl w-full h-full" />
                        </div>
                        <div className="flex flex-col items-center justify-center py-6 gap-4 text-center">
                            <h4 className="font-bold text-center montserrat text-xl text-white">Community Support</h4>
                            <p className="font-medium mb-4 text-center poppins-regular text-rose-200 text-sm">Join a thriving community of users and experts ready to help you succeed.</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Section1