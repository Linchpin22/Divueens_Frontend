import React from 'react';
import ExpertSlider from '../components/AuthenticityPage/ExpertSlider';
import TestimonialCarousel from '../components/AuthenticityPage/TestimonialCarousel';
import CelebrityCard from '../components/AuthenticityPage/CelebrityCard';
import ethics from '../assets/AuthenticityPage/ethics.png';
import two from '../assets/AuthenticityPage/two.png';
import influencer from '../assets/AuthenticityPage/influencer.png';
import certificate from '../assets/AuthenticityPage/1.png'
import { useState } from 'react';



const certificatesData = [
    {
        id: 1,
        title: 'Certification in React JS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quia',
        img: certificate,
    },
    {
        id: 2,
        title: 'Certification in React JS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quia',
        img: certificate,
    },
    {
        id: 3,
        title: 'Certification in React JS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quia',
        img: certificate,
    },
    {
        id: 4,
        title: 'Certification in React JS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quia',
        img: certificate,
    },
];

const moreCertificates =[
    {
        id: 1,
        title: 'Certification in React JS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quia',
        img: certificate,
    },
    {
        id: 2,
        title: 'Certification in React JS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quia',
        img: certificate,
    },
    {
        id: 3,
        title: 'Certification in React JS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quia',
        img: certificate,
    },
    {
        id: 4,
        title: 'Certification in React JS',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, quia',
        img: certificate,
    },
];

const initialCards = [
    { image: influencer, name: 'Alina S.', description: 'Actress, Singer' },
    { image: influencer, name: 'Sofia K.', description: 'Youtuber, Fashion Blogger' },
    { image: influencer, name: 'Ketty J.', description: 'Model' },
];

const moreCards = [
    { image: influencer, name: 'Jane D.', description: 'Photographer' },
    { image: influencer, name: 'Lisa M.', description: 'Designer' },
    { image: influencer, name: 'Emily R.', description: 'Actress' },
];

const AuthenticityPage = () => {

    const [visibleCards, setVisibleCards] = useState(initialCards);
    const [visibleCert, setVisibleCert] = useState(certificatesData);
    const [showAll, setShowAll] = useState(false);
    const [showAllCert , setShowAllCert] = useState(false);

    const handleToggleView = () => {
        if (showAll) {
            setVisibleCards(initialCards);
        } else {
            setVisibleCards([...initialCards, ...moreCards]);
        }
        setShowAll(!showAll);
    };

    const handleToggleViewCert = () => {
        if (showAllCert) {
            setVisibleCert(certificatesData);
        } else {
            setVisibleCert([...certificatesData , ...moreCertificates]);
        }
        setShowAllCert(!showAllCert);
    }

    return (
        <div className='w-full p-4 md:p-16 md:my-10 my-6'>
            {/* Banner */}
            <div className="w-full min-h-[150px] md:min-h-80 relative flex justify-center items-center">
                <img src="src/assets/AuthenticityPage/banner.jpg" className='absolute w-full h-full -z-10' />
                <div className='w-full h-full bg-white absolute inset-0 opacity-30 -z-10' />
                <div className='font-bold text-sm md:text-3xl'>100% Safe, Genuine And Trustable</div>
            </div>
            {/* Authenticity Badge */}
            <div className="flex md:justify-between justify-center gap-4 flex-col md:flex-row items-center md:my-20 my-10 w-full">
                <div className="flex flex-col md:w-1/2 w-full gap-5">
                    <p className='font-semibold md:text-3xl text-xl w-fit mx-auto md:mx-0'>Authenticity Badge <hr className='border-black mt-2' /></p>
                    <p className='font-medium text-center md:text-left text-sm md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos sequi reiciendis neque, consectetur, nobis quod, nostrum temporibus error eum obcaecati? Iusto pariatur nostrum ex autem quidem amet suscipit nisi? Nisi, aspernatur non ipsa nulla iusto molestiae velit, nemo, tenetur praesentium error expedita cumque nam tempora! Consequuntur corrupti dicta deserunt!</p>
                </div>
                <img src="src/assets/AuthenticityPage/badge.png" alt="" className='md:w-1/5 w-1/3' />
            </div>
            {/* Authenticity Certification */}
            <div className="flex flex-col gap-10 my-20">
                {/* Heading */}
                <div className='flex flex-col md:flex-row md:justify-between gap-4 items-center'>
                    <div className='flex flex-row md:gap-5 gap-3 md:mx-0 mx-auto items-center'>
                        <img src="src/assets/AuthenticityPage/icon.png" alt="" className='md:w-[50px] w-1/6' />
                        <p className='font-semibold md:text-3xl text-xl w-fit'>Authenticity Certificates <hr className='border-black mt-2' /></p>
                    </div>
                    <button className='font-bold text-xs text-blue-600 w-fit mx-auto md:mx-0'
                    onClick={handleToggleViewCert}
                    >{showAllCert ? 'See Less Certificates' : 'See All Certificates'}
                    </button>
                </div>
                {/* Cards */}
                <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-3">
                    {visibleCert.map((data, index) => (
                        <div className="w-full h-full cursor-pointer" key={index}><img src={data.img} /></div>
                    ))}
                </div>
            </div>
            {/* Verification and Authentication */}
            <div className="flex flex-col w-full my-20">
                {/* Why Verify? */}
                <div className="flex flex-col md:pl-20 gap-4 md:w-[90%]">
                    <p className='font-semibold md:text-2xl text-lg'>Why Verify ?</p>
                    <p className='font-medium md:text-lg text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima quaerat aliquam excepturi natus ducimus voluptate, ut nihil delectus quia? Facilis accusantium, eveniet laborum quos corporis aut optio deserunt temporibus incidunt qui officia laudantium debitis delectus blanditiis illum dolorum doloribus esse aliquid obcaecati. Illo cumque commodi cum, rem, aspernatur tempora minus fugit minima tenetur dignissimos vitae. Magni architecto minima eius, deleniti voluptas adipisci corrupti cupiditate, fugiat, saepe impedit cum reprehenderit?
                    </p>
                </div>
                {/* How to Spot Fake */}
                <div className="flex md:pl-20 my-10 justify-between flex-col md:flex-row gap-5">
                    <div className="flex flex-col justify-start items-center gap-4">
                        <p className='font-semibold md:text-2xl text-lg'>How to Spot Fake ?</p>
                        <div >
                            <ol style={{ listStyleType: "integer" }}>
                                <li>Packaging Differences</li>
                                <li>Tip 2 </li>
                                <li>Tip 3 </li>
                            </ol>
                        </div>
                    </div>
                    <img src="src/assets/AuthenticityPage/howto.png" alt="" className='w-full md:w-1/2' />
                </div>
                {/* Verif. and Auth. */}
                <div className="flex flex-col gap-8 my-10">
                    {/* Heading */}
                    <div className='flex flex-row md:gap-5 gap-3 mx-auto items-center'>
                        <p className='font-semibold md:text-xl text-sm w-fit'>Verification and Authentication <hr className='border-black mt-2' /></p>
                    </div>
                    {/* Instruction */}
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center flex-col md:flex-row gap-y-10">
                        {/* Product Registration */}
                        <div className="flex flex-col justify-center items-center md:w-1/2 gap-2 mx-auto">
                            <img src="src/assets/AuthenticityPage/product.png" alt="" className='w-1/5' />
                            <p className='text-center text-md font-semibold'>Product Registration</p>
                            <p className='text-center text-sm font-medium '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, iste?
                            </p>
                        </div>
                        {/* Verification Tools */}
                        <div className='flex flex-row justify-evenly gap-20'>
                            <div className="flex flex-col justify-center items-center md:w-1/2 gap-2">
                                <img src="src/assets/AuthenticityPage/tools.png" alt="" className='w-1/5' />
                                <p className='text-center text-md font-semibold'>Verification Tools</p>
                                <p className='text-center text-sm font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, iste?
                                </p>
                            </div>
                            {/* Lets try*/}
                            <div className='font-semibold inline-flex items-center md:gap-2 text-md md:w-1/4'>Let's Check <img src="src/assets/AuthenticityPage/arrow.png" alt="" className='md:w-1/5 w-1/2' /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Company History Section */}
            <div className="flex flex-col items-center w-full gap-10 my-10">
                <p className='font-semibold md:text-3xl text-lg w-fit'>Company History <hr className='border-black mt-2' /></p>
                <div className="flex flex-col md:flex-row md:justify-between w-full items-center gap-8">
                    <div className="flex flex-col md:w-1/2 w-full gap-4">
                        <p className="text-md md:text-lg font-semibold">Company History</p>
                        <p className="text-base md:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <img
                        src={two}
                        alt="Company History"
                        className="md:w-1/3"
                    />
                </div>
            {/* Sustainability & Ethics Section */}
            <div className="flex flex-col md:flex-row-reverse justify-between w-full items-center my-10 gap-8">
                    <div className="flex flex-col w-full md:w-1/2 gap-4">
                        <p className="text-md md:text-lg font-semibold">Sustainability & Ethics</p>
                        <p className="text-base md:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <img
                        src={ethics}
                        alt="Sustainability and Ethics"
                        className="md:w-1/3"
                    />
                </div>
            </div>
            {/* Celebrity Partnerships Section */}
            <div className="flex flex-col gap-10 text-center w-full my-20">
                <p className="font-semibold md:text-3xl text-xl w-fit mx-auto">Celebrity Partnerships <hr className='border-black mt-2' /></p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-y-10">
                    {visibleCards.map((card, index) => (
                        <CelebrityCard
                            key={index}
                            image={card.image}
                            name={card.name}
                            description={card.description}
                        />
                    ))}
                </div>
                <button
                    className="w-1/6 text-black rounded bg-transparent transition mx-auto font-semibold"
                    onClick={handleToggleView}
                >
                    {showAll ? 'View Less' : 'View All'}
                </button>
            </div>
            {/* Testimonials */}
            <div className="w-full my-20 flex flex-col gap-10 items-center">
                {/* Heading */}
                <p className="font-semibold md:text-3xl text-lg w-fit mx-auto">Testimonials <hr className='border-black mt-2' /></p>
                <TestimonialCarousel />
            </div>
            {/* Experts */}
            <div className="w-full my-20 flex flex-col gap-10">
            <ExpertSlider />
            </div>
        </div>
    )
}

export default AuthenticityPage;