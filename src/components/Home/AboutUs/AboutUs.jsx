import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutUs = () => {
    return (
        <>
            <div className="heading md:pt-16 pt-8 md:pb-8">
                <hr className="bg-gradient-to-l from-rose-700" data-aos="fade-right" />
                <h2 className="text-nowrap" data-aos="fade-up">Know More About Divueens</h2>
                <hr className="bg-gradient-to-r from-rose-700" data-aos="fade-left" />
            </div>
            <div className='px-8'>
                <h3 className='text-left text-2xl font-semibold'>About Us</h3>

                <div className='mt-4'>
                    <p className='text-sm mb-4 tracking-wide'>Divueens, your one destination for every occasion. The power of beauty lies in our
                        confidence, it derives our identity and illuminates our route. Our name “divueens” is a fusion of“diva” with “queens", diva associated with glamour and
                        likewise queen stands for royalty. </p>

                    <p className='text-sm mt-4 tracking-wide'>Divueens honours every women who is queen to her own self. We believe that beauty isn't
                        instinct but something we can shape. After all beauty is not always about covering
                        imperfections, but it is a tool to define every “you”.</p>

                    <div className='mr-auto w-fit my-4'>
                        <Link to={'/about-us'} className='px-4 group py-2 text-white bg-black/60 rounded-lg flex items-center gap-2 border hover:bg-black text-sm'>More <FaLongArrowAltRight className='group-hover:animate-pulse' size={20} /></Link>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUs