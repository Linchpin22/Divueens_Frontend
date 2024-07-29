import React from 'react'
import BG1 from '../../assets/WhoWeAre/ima1.png'
import BG2 from '../../assets/WhoWeAre/ima2.png'
import BG3 from '../../assets/WhoWeAre/ima3.png'
import L1 from '../../assets/WhoWeAre/l1.png'
import L2 from '../../assets/WhoWeAre/l2.png'
import L3 from '../../assets/WhoWeAre/l3.png'
import Subscription from '../Subscription/Subscription'

import background from '../../assets/WhoWeAre/background.jpg';

import n1Bg from '../../assets/WhoWeAre/n1.jpg';


const WhoWeAre = () => {
    return(
    <div className='font-[Montserrat]'>
        <p className="text-2xl font-semibold max-sm:text-xl text-center my-10 ">Who Are We</p>
        {/* Banner */}
        <div style={{backgroundImage: `url(${background})`}}
        className=" bg-no-repeat bg-cover bg-center flex justify-center items-center py-[100px]"
        >
            <div className="w-[70%] bg-white text-center">
                <p className="text-slate-500 max-sm:text-sm text-base m-14 mb-0">Divueens, your one destination for every occasion. The power of beauty lies in our
                                                            confidence, it derives our identity and illuminates our route.</p>
                <p className="text-slate-500 max-sm:text-sm text-base mx-14 my-3">Our name “divueens” is a fusion of“diva” with “queens", diva associated with glamour and
                                                            likewise queen stands for royalty.</p>
                <p className="text-slate-500 max-sm:text-sm text-base m-14 mt-0">Divueens honours every women who is queen to her own self. We believe that beauty isn't
                                                            instinct but something we can shape. After all beauty is not always about covering
                                                            imperfections, but it is a tool to define every “you”.</p>
                
            </div>
        </div>
        <div className="w-[80%] m-auto max-sm:px-2 px-10 mb-20">
            {/* Vision */}
            <div>
                <p className="text-lg font-semibold max-sm:text-base my-10 mb-4 max-sm:my-6">Vision</p>
                <p className="text-slate-500 max-sm:text-sm text-base">Nurturing the culture of integrity and making a difference in every life we touch..
                </p>
            </div>
            {/* Mission */}
            <div>
                <p className="text-lg font-semibold max-sm:text-base my-10 mb-4 max-sm:my-6">Mission</p>
                <p className="text-slate-500 max-sm:text-sm text-base ">Divueens do much more than just make you look divine, we have an incredibly great team
                with extreme dedication towards their work.
                </p>
                <p className="text-slate-500 max-sm:text-sm text-base">Our community believes that your skin deserves the best, and we are here to provide you
                with the BEST!
                </p>
            </div>
            {/* Values */}
            <div>
                <p className="text-lg font-semibold max-sm:text-base my-10 mb-4 max-sm:my-6">Values</p>
                <div className="grid grid-cols-3 gap-16 gap-x-32 max-sm:block max-[900px]:block">
                    <div>
                        <p className="text-lg text-slate-500 max-sm:text-base my-4 shadow-xl p-8 max-sm:my-10 max-lg:my-10">Sculpt, shade, slayyyy!</p>
                        {/* <p className="text-[20px] font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, officiis? Voluptates sed eum blanditiis vero, at rem tenetur consectetur, eligendi dicta accusantium alias ad cum ullam repudiandae ut saepe molestiae.</p> */}
                    </div>
                    <div>
                        <p className="text-lg text-slate-500 max-sm:text-base my-4 shadow-xl p-6 max-sm:my-10 max-lg:my-10">Achieve timeless beauty and flawless elegance</p>
                        {/* <p className="text-[20px] font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, officiis? Voluptates sed eum blanditiis vero, at rem tenetur consectetur, eligendi dicta accusantium alias ad cum ullam repudiandae ut saepe molestiae.</p> */}
                    </div>
                    <div>
                        <p className="text-lg text-slate-500 max-sm:text-base my-4 shadow-xl p-6 max-sm:my-10  max-lg:my-10">Celebrate the beauty that mirrors your culture</p>
                        {/* <p className="text-[20px] font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, officiis? Voluptates sed eum blanditiis vero, at rem tenetur consectetur, eligendi dicta accusantium alias ad cum ullam repudiandae ut saepe molestiae.</p> */}
                    </div>
                    <div>
                        <p className="text-lg text-slate-500 max-sm:text-base my-4 shadow-xl p-6 max-sm:my-10  max-lg:my-10">Discover your inner diva</p>
                        {/* <p className="text-[20px] font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, officiis? Voluptates sed eum blanditiis vero, at rem tenetur consectetur, eligendi dicta accusantium alias ad cum ullam repudiandae ut saepe molestiae.</p> */}
                    </div>
                    <div>
                        <p className="text-lg text-slate-500 max-sm:text-base my-4 shadow-xl p-6 max-sm:my-10 max-lg:my-10">Beauty that knows no limits.</p>
                        {/* <p className="text-[20px] font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, officiis? Voluptates sed eum blanditiis vero, at rem tenetur consectetur, eligendi dicta accusantium alias ad cum ullam repudiandae ut saepe molestiae.</p> */}
                    </div>
                    <div>
                        <p className="text-lg text-slate-500 max-sm:text-base my-4 shadow-xl p-6 max-sm:my-10  max-lg:my-10">Empowering you to shine like a diva</p>
                        {/* <p className="text-[20px] font-[400]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, officiis? Voluptates sed eum blanditiis vero, at rem tenetur consectetur, eligendi dicta accusantium alias ad cum ullam repudiandae ut saepe molestiae.</p> */}
                    </div>
                </div>
            </div>
            {/* Our Product */}
            <div>
                <p className="text-lg font-semibold max-sm:text-base my-10 mb-4 max-sm:my-6">Our Product</p>
                <p className="text-slate-500 max-sm:text-sm text-base my-4">Our exclusive products with divueens not only give you a pleasant appearance but are also
                made with organic ingredients that provide skin fitness.
                </p>
                <p className="text-slate-500 max-sm:text-sm text-base my-4">We believe Your beauty reflects your culture, that's why divueens have your ideal fit,
                which matches your complexion perfectly with your skin and gives a vibrant glow, so explore
                the shades with divueens, because we have everything your skin ever needs.
                </p>
                <p className="text-slate-500 max-sm:text-sm text-base my-4">Our range of products includes premium quality eyeliners to make your eyes look captivating
                and sharp, you will find lipstick which fits your skin color,body Lotions for
                smooth creamy skin, range of sunscreen for every skin to protect you from harsh
                sunburn, moisturisers to keep your skin hydrated, hair care products for healthy and
                beautiful hair.
                </p>
                <p className="text-slate-500 max-sm:text-sm text-base my-4">As divueens, the name itself says glamour, so make a move and grab your luxury look with
                our affordable products.
                </p>
                <p className="text-slate-500 max-sm:text-sm text-base my-4">Check out our hottest deal and grab your sustainable glow from our widest range of products
                and Snatch that radiant glow, and let your confidence flow.
                </p>
                {/* <div className='mt-28 grid grid-cols-3 gap-x-20 ml-20'>
                    <img src={BG1} className='w-[90%] rounded-lg'/>
                    <img src={BG2} className='w-[90%] rounded-lg'/>
                    <img src={BG3} className='w-[90%] rounded-lg'/>
                </div> */}
                <div className='grid grid-cols-3 mt-28 ml-16 max-sm:block max-md:block max-lg:ml-0 max-md:ml-8 max-lg:gap-x-6'>
                    <div className='relative'>
                        <div style={{backgroundImage: `url(${n1Bg})`}} className="relative bg-center bg-cover bg-no-repeat w-[85%] h-[250px] flex justify-center items-end pb-2 rounded-xl max-sm:my-6 max-md:my-6 max-lg:w-[95%]">      
                            <div className='bg-gradient-to-b from-[#ffffff00] via-[#ffffff00] to-rose-600 opacity-50 absolute h-[250px] w-[100%] rounded-xl top-0 left-0'></div>  
                        </div>
                        <p className='text-white text-[24px] font-[700] absolute bottom-2 left-[13%] max-[480px]:left-[8%]'>10000+ Products</p>
                    </div>
                    <div className='relative'>
                        <div style={{backgroundImage: `url(${n1Bg})`}} className="relative bg-center bg-cover bg-no-repeat w-[85%] h-[250px] flex justify-center items-end pb-2 rounded-xl max-sm:my-6 max-md:my-6 max-lg:w-[95%]">      
                            <div className='bg-gradient-to-b from-[#ffffff00] via-[#ffffff00] to-rose-600 opacity-50 absolute h-[250px] w-[100%] rounded-xl top-0 left-0'></div>  
                        </div>
                        <p className='text-white text-[24px] font-[700] absolute bottom-2 left-[18%] max-[380px]:left-[2%] max-[480px]:left-[10%] max-[360px]:left-[18%]'>500+ Brands</p>
                    </div>
                    <div className='relative'>
                        <div style={{backgroundImage: `url(${n1Bg})`}} className="relative bg-center bg-cover bg-no-repeat w-[85%] h-[250px] flex justify-center items-end pb-2 rounded-xl max-sm:my-6 max-md:my-6 max-lg:w-[95%]">      
                            <div className='bg-gradient-to-b from-[#ffffff00] via-[#ffffff00] to-rose-600 opacity-50 absolute h-[250px] w-[100%] rounded-xl top-0 left-0'></div>  
                        </div>
                        <p className='text-white text-[24px] font-[700] absolute bottom-2 left-[18%] max-[380px]:left-[18%] max-[480px]:left-[8%]'>Lorem Ipsum</p>
                    </div>
                </div>
            </div>
            {/* Founding Member */}
            <div>
                <p className="text-lg font-semibold max-sm:text-base my-24 mb-28 max-sm:my-6 text-center">Our Founding Team</p>
                <div className='flex justify-center max-sm:block'>
                    <div className='mx-10'>
                        <img src={BG1} className='rounded-full w-[85%] ml-[8%] max-sm:ml-0 max-lg:w-[100%]'/>
                        <p className='mt-4 text-center text-lg text-slate-500 max-sm:text-base'>Founder Name</p>
                        <p className=' text-center text-lg text-slate-500 max-sm:text-base mb-16'>Founder</p>
                    </div>
                    <div className='mx-10'>
                        <img src={BG2} className='rounded-full w-[85%] ml-[8%] max-sm:ml-0 max-lg:w-[100%]'/>
                        <p className='mt-4 text-center text-lg text-slate-500 max-sm:text-base'>Founder Name</p>
                        <p className=' text-center text-lg text-slate-500 max-sm:text-base mb-16'>CEO</p>
                    </div>
                    <div className='mx-10'>
                        <img src={BG3} className='rounded-full w-[85%] ml-[8%] max-sm:ml-0 max-lg:w-[100%]'/>
                        <p className='mt-4 text-center text-lg text-slate-500 max-sm:text-base'>Founder Name</p>
                        <p className=' text-center text-lg text-slate-500 max-sm:text-base mb-16'>CCO</p>
                    </div>
                </div>
            </div>
        </div>
        {/* Update */}
        <div className='bg-[#FECDD3] grid grid-cols-2 gap-x-32 max-md:block '>
            <div className='ml-[14%] my-[8%] max-md:ml-[10%]'>
                <p className='text-2xl font-semibold max-sm:text-xl max-sm:pt-4 mb-4'>Don't miss an Update!!</p>
                <p className='text-[20px] font-[400]'>Get the latest beauty trends, exclusive offers, and stories
                    straight to your inbox. Subscribe now and enjoy 20% off
                    your next purchase!
                </p>
            </div>
            <Subscription/>
            {/* <div className='max-md:ml-[10%]'>
                <form action="">
                    <fieldset>
                        <input type="email" name='email' placeholder='Enter Your Email' required="@gmail.com" className='border border-black w-[80%] mt-24 p-4 max-md:mt-12'/>
                        <input type="Submit" className='w-[80%] bg-rose-600 text-white text-[20px] font-[600] py-4 my-4' defaultValue="Subscribe"/>
                    </fieldset>
                </form>
            </div> */}
        </div>
        {/* Last */}
        <div className='w-[90%] m-auto grid grid-cols-3 my-16 max-sm:block max-md:block max-lg:gap-8'>
            <div className='flex items-center justify-center max-sm:my-10'>
                <img src={L1} className='w-[20%]'/>
                <div>
                    <p className='text-lg font-semibold max-sm:text-base text-center'>100% Original</p>
                    <p className='text-lg font-semibold max-sm:text-base text-center'>Product</p>
                </div>
            </div>
            <div className='flex items-center justify-center max-sm:my-10'>
                <img src={L2} className='w-[30%]'/>
                <div>
                    <p className='text-lg font-semibold max-sm:text-basetext-center'>Free Delivery</p>
                    <p className='text-lg font-semibold max-sm:text-base text-center'>on Prepaid</p>
                </div>
            </div>
            <div className='flex items-center justify-center max-sm:my-10'>
                <img src={L3} className='w-[30%]'/>
                <div>
                    <p className='text-lg font-semibold max-sm:text-base text-center'>Secure</p>
                    <p className='text-lg font-semibold max-sm:text-base text-center'>Payments</p>
                </div>
            </div>
        </div>
    </div>
);
}

export default WhoWeAre