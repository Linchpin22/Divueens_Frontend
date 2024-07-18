import React from 'react'
import Hero from '../components/MemberShip/Hero';
import MiddleSec from '../components/MemberShip/MiddleSec';
import MemberSection from '../components/MemberShip/MemberSection';

const MemberShip = () => {
    return (
        <div className='p-4 w-full h-full flex flex-col items-center'>
            {/* Mahak */}
            <div>
                <Hero />
            </div>

            {/* Aayush */}
            <div className='w-full flex flex-col gap-10 md:px-10 lg:px-32'>
                <MiddleSec />
            </div>

            {/* Gaurav */}
            <div className='flex flex-col items-center gap-4 my-4 md:w-[45rem] lg:w-[50rem] md:px-10 md:my-12'>
                <MemberSection />
            </div>
        </div>
    )
}

export default MemberShip