import React from 'react'
import { Link } from 'react-router-dom'
import L1 from '../../../assets/WhoWeAre/l1.png'
import L2 from '../../../assets/WhoWeAre/l2.png'
import L3 from '../../../assets/WhoWeAre/l3.png'
import Subscription from '../../Subscription/Subscription'
import { FaLongArrowAltRight, FaShippingFast } from 'react-icons/fa'
import { RiSecurePaymentFill } from 'react-icons/ri'
import { FaTrophy } from 'react-icons/fa6'

const BlogCards = () => {

    const blog = [
        {
            id: 1,
            img: 'https://i.pinimg.com/originals/75/53/5b/75535b41afb92264d8fbf0a30f1a4ca5.jpg',
            title: 'Do consectetur',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            img: 'https://blackhealthmatters.com/wp-content/uploads/2014/01/AdobeStock_251064401.jpeg',
            title: 'Consequat labore',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            img: 'https://www.richbeganyphoto.com/wp-content/uploads/2017/04/BrushKit2-060-11x14.jpg',
            title: 'Laboris nulla',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 4,
            img: 'https://i.pinimg.com/736x/d9/f4/85/d9f48595c43a8a109c2100e0be7364db.jpg',
            title: 'Do consectetur',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]

    return (
        <>
            <div className="heading md:pt-16 pt-8 md:pb-8">

                <hr className="bg-gradient-to-l from-rose-700" data-aos="fade-right" data-aos-delay="3000" data-aos-duration="2000" data-aos-easing="ease-in" />
                <h2 className="text-nowrap" data-aos="fade-up" data-aos-delay="3000" data-aos-duration="2000" data-aos-easing="ease-in">Blogs</h2>
                <hr className="bg-gradient-to-r from-rose-700" data-aos="fade-left" data-aos-delay="3000" data-aos-duration="2000" data-aos-easing="ease-in" />
            </div>
            <div className='ml-auto w-fit px-10'>
                <Link to={'/blogs'} className='px-4 py-2 text-white bg-black/60 rounded-lg flex items-center gap-2 border hover:bg-black text-sm md:text-base'>More <FaLongArrowAltRight size={22} /></Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 mt-4">
                {blog.map((b) => {
                    return <div key={b.id} className="group w-full h-72 lg:w-56 xl:w-72 lg:h-80 overflow-hidden rounded-xl relative">
                        <img src={b.img} className="w-full h-[95%] object-cover rounded-xl" alt="" />
                        <div className="w-full backdrop-blur-sm bg-black/60 absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer group-hover:max-h-full h-full max-h-[40px] flex flex-col items-center justify-center text-center">
                            <p className="text-sm md:text-lg font-semibold text-white">{b.title}</p>
                            <p className="text-xs md:text-sm px-2 font-semibold text-white hidden group-hover:flex">{b.desc}</p>
                        </div>
                    </div>
                })}
            </div>


            <div className='bg-gradient-to-r from-rose-700 to-rose-300 text-white grid grid-cols-2 gap-x-32 max-md:block mt-12'>
                <div className='ml-[14%] my-[8%] max-md:ml-[10%]'>
                    <p className='text-lg lg:text-2xl font-semibold max-sm:text-xl max-sm:pt-4 mb-4'>Don't miss an Update!!</p>
                    <p className='text-sm lg:text-[15px] lg:leading-[2rem] font-[400]'>Get the latest beauty trends, exclusive offers, and stories
                        straight to your inbox. Subscribe now and enjoy 20% off
                        your next purchase!
                    </p>
                </div>
                <Subscription />
            </div>
            {/* Last */}
            <div className='w-[90%] m-auto grid grid-cols-1 md:grid-cols-3 my-8'>
                <div className='flex items-center justify-center w-full gap-4 py-2 md:py-0'>
                    {/* <img src={L1} className='w-14 md:w-[25%] lg:w-[15%] grayscale' /> */}
                    <FaTrophy size={50} className='text-rose-600' />
                    <div className='w-full flex items-center gap-1 md:w-fit md:flex-col'>
                        <p className='text-base md:text-lg font-semibold md:text-center'>100% Original</p>
                        <p className='text-base md:text-lg font-semibold md:text-center'>Product</p>
                    </div>
                </div>
                <div className='flex items-center justify-center w-full gap-4 py-2 md:py-0'>
                    {/* <img src={L2} className='w-16 md:w-[30%] lg:w-[25%] grayscale' /> */}

                    <FaShippingFast size={50} className='text-rose-600' />
                    <div className='w-full flex items-center gap-1 md:w-fit md:flex-col'>
                        <p className='text-base md:text-lg font-semibold md:text-center'>Free Delivery</p>
                        <p className='text-base md:text-lg font-semibold md:text-center'>on Prepaid</p>
                    </div>
                </div>
                <div className='flex items-center justify-center w-full gap-4 py-2 md:py-0'>
                    {/* <img src={L3} className='w-16 md:w-[30%] lg:w-[25%] grayscale' /> */}
                    <RiSecurePaymentFill size={50} className='text-rose-600' />

                    <div className='w-full flex items-center gap-1 md:w-fit md:flex-col'>
                        <p className='text-base md:text-lg font-semibold md:text-center'>Secure</p>
                        <p className='text-base md:text-lg font-semibold md:text-center'>Payments</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCards