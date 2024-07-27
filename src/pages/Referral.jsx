import React, { useState } from 'react';
import { FaRegCircleQuestion, FaWhatsapp, FaInstagram, FaLinkedin, FaSnapchat, FaClipboard, FaCheck } from 'react-icons/fa6';
import { FaCircleMinus, FaCirclePlus } from 'react-icons/fa6';
import refer from './../assets/Referral/refer.jpg';

export const Faqs = ({ question, active, answer, onClick }) => {
    const toggle = () => {
        onClick(question);
    }

    return (
        <li className='py-3  w-full h-fit '>
            <div className='flex justify-between items-center mx-6 ' onClick={toggle}>
                <h2 className={`w-70% max-sm:w-72 font-semibold hover:text-rose-500 cursor-pointer ${active ? 'text-rose-500' : 'text-[#1d1b1b]'}`} >{question}</h2>
                <button className="text-rose-500 ml-auto md:ml-0 md:order-2">
                    {active ? <FaCircleMinus /> : <FaCirclePlus />}
                </button>
            </div>
            <p className={`text-start py-3 mb-3 leading-tight ${active ? 'block' : 'hidden'} text-[#3f3c3e]`}>{answer}</p>
        </li>
    )
}

const ReferralPopup = ({ isOpen, onClose, referralCode }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(referralCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset the icon after 2 seconds
    };

    return isOpen ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
            <div className="bg-white p-8 rounded-lg shadow-lg relative border-2 border-dashed border-gray-300 ">
                <h2 className="text-2xl font-bold mb-4">Your Referral Code</h2>
                <div className="flex items-center mb-4 border-2 border-dashed border-gray-400 py-1 px-2 rounded-md">
                    <p className="text-xl flex-1">{referralCode}</p>
                    <button 
                        className="bg-rose-600 hover:bg-rose-500 text-white py-2 px-4 rounded-md ml-4"
                        onClick={copyToClipboard}
                    >
                        {copied ? <FaCheck /> : <FaClipboard />}
                    </button>
                </div>
                <h3 className="text-xl font-bold mt-4 mb-2">Other Sharing Options</h3>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href={`https://api.whatsapp.com/send?text=Use my referral code: ${referralCode}`} target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="text-3xl text-green-500 hover:text-green-700" />
                    </a>
                    <a href={`https://www.instagram.com/direct/new/?text=Use my referral code: ${referralCode}`} target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="text-3xl text-pink-500 hover:text-pink-700" />
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=Referral Code&summary=Use my referral code: ${referralCode}`} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-3xl text-blue-500 hover:text-blue-700" />
                    </a>
                    <a href={`https://www.snapchat.com/`} target="_blank" rel="noopener noreferrer">
                        <FaSnapchat className="text-3xl text-yellow-500 hover:text-yellow-700" />
                    </a>
                </div>
                <div className='text-center pt-4'>
                    <button 
                        className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-12 font-semibold text-[18px] rounded-md"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    ) : null;
};

function FaqsPage() {
    const faqs = [
        {
            question: "What are the best makeup products for sensitive skin?",
            answer: "For sensitive skin, it's best to use hypoallergenic and fragrance-free makeup products. Look for brands that specialize in sensitive skin, such as Clinique, BareMinerals, and Almay."
        },
        {
            question: "How can I make my makeup last all day?",
            answer: "To make your makeup last all day, start with a primer to create a smooth base. Use long-wearing foundations and powders, and set your makeup with a setting spray. Additionally, consider using waterproof mascara and eyeliner."
        },
        {
            question: "What is the best way to remove makeup?",
            answer: "The best way to remove makeup is to use a gentle makeup remover or cleansing oil. Follow up with a facial cleanser to ensure all residue is removed. It's important to be gentle, especially around the eye area, to avoid irritation."
        },
        {
            question: "How often should I clean my makeup brushes?",
            answer: "You should clean your makeup brushes at least once a week to prevent the buildup of bacteria and ensure your makeup application is smooth and hygienic. Use a gentle brush cleaner or a mixture of baby shampoo and water."
        },
        {
            question: "What are the essential makeup products for a beginner?",
            answer: "For a beginner, the essential makeup products include foundation or BB cream, concealer, mascara, eyebrow pencil, blush, and a neutral eyeshadow palette. These basics will help you create a variety of looks without overwhelming you."
        },
        {
            question: "How do I choose the right foundation shade?",
            answer: "To choose the right foundation shade, match the foundation to your jawline in natural light. The right shade should blend seamlessly into your skin without leaving a noticeable line. You can also ask for samples or test shades at a makeup counter."
        },
        {
            question: "What are some tips for achieving a natural makeup look?",
            answer: "For a natural makeup look, use a lightweight foundation or tinted moisturizer, and opt for neutral eyeshadows and blush. Define your brows and apply a coat of mascara. Finish with a nude or pink lip color for a fresh, effortless look."
        },
        {
            question: "How can I prevent my lipstick from smudging?",
            answer: "To prevent your lipstick from smudging, start by applying a lip liner to define your lips and create a base. Apply your lipstick and blot with a tissue. You can also dust a light layer of translucent powder over your lips to set the color."
        },
        {
            question: "What is the difference between bronzer and contour?",
            answer: "Bronzer is used to add warmth and a sun-kissed glow to your skin, typically applied to areas where the sun naturally hits. Contour is used to create shadows and define your facial features, often applied under the cheekbones, along the jawline, and the sides of the nose."
        },
        {
            question: "How do I care for my skin before applying makeup?",
            answer: "Before applying makeup, ensure your skin is clean and well-moisturized. Use a gentle cleanser, followed by a toner and moisturizer suitable for your skin type. Applying a primer can also help create a smooth base for your makeup."
        }
    ];

    const [active, setActive] = useState(false);
    const handleActive = (question) => {
        setActive((prev) => (prev === question ? null : question));
    }
    return (
        <div className="w-full ">
            <div className="flex flex-col justify-center w-full ">
                <div className="bg-white mb-12 px-12 py-8 max-sm:px-5 rounded-xl w-full max-sm:w-full h-fit">
                    <div className="flex flex-row md:text-2xl text-xl pb-10 gap-3  ">
                        <FaRegCircleQuestion className='relative top-2'/>
                        <h1 className="md:text-4xl text-2xl font-bold relative top-0 ">FAQs</h1>
                    </div>
                    <ul className="flex flex-col md:text-[20px] ">
                        {faqs.map((item, index) => (
                            <Faqs key={index} question={item.question} answer={item.answer} active={active === item.question} onClick={handleActive} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

function ReferralPage() {
    const [isReferralOpen, setIsReferralOpen] = useState(false);

    const openReferralPopup = () => {
        setIsReferralOpen(true);
    };

    const closeReferralPopup = () => {
        setIsReferralOpen(false);
    };

    const referralCode = "REF12345";

    return (
        <>
            <div className='px-5 py-3'>
                <img src={refer} className='h-fit' alt="Refer Image" />
                <div className='lg:px-12 pt-16 sm:px-8'>
                    <ul><h2 className='md:text-3xl text-2xl  my-4 font-semibold px-3 md:px-1'>How it Works?</h2></ul>
                    <div className='text-gray-600 font-bold md:text-2xl text-base px-6'>
                        <li className='md:py-3 py-2'>Share a link with your friend and family of your favourite item</li>
                        <li className='md:py-3 py-2'>Tell them to shop from the same link</li>
                        <li className='md:py-3 py-2'>You will get flat RS 20 cash back after your friends and family shop</li>
                        <li className='md:py-3 py-2'>Your friend will also get RS 20 in their wallet too. YAY!</li>
                    </div>
                </div>
                <div className='text-center pt-8'>
                    <button 
                        className='bg-rose-600 hover:bg-rose-900 rounded-md md:px-14 md:py-8 px-12 py-4 text-white md:text-[35px] text-base font-semibold'
                        onClick={openReferralPopup}
                    >
                        Refer Now
                    </button>
                </div>
                <ReferralPopup 
                    isOpen={isReferralOpen} 
                    onClose={closeReferralPopup} 
                    referralCode={referralCode}
                />
                <FaqsPage/>
            </div>
        </>
    )
}

export default ReferralPage;