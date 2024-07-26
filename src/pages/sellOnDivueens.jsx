import React, { useState } from 'react';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import P1 from './../assets/SellOnDivueens/p1.png';
import V1 from './../assets/SellOnDivueens/v1.png';
import V2 from './../assets/SellOnDivueens/v2.png';
import V3 from './../assets/SellOnDivueens/v3.png';
import V4 from './../assets/SellOnDivueens/v4.png';
import MaintennacePage from '../pages/MaintennacePage'; 
import {Link} from 'react-router-dom';

const Sell = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'How do I become a seller on Divueens?',
      answer: 'To become a seller, simply sign up for a seller account on our website, complete your profile with the necessary business information, and start listing your products.'
    },
    {
      question: 'What kind of products can I sell on Divueens?',
      answer: 'Ans'
    },
    {
      question: 'Are there any fees to sell on Divueens?',
      answer: 'Ans'
    },
    {
      question: 'How do I list my products?',
      answer: 'Ans'
    },
    {
      question: 'How do I get paid?',
      answer: 'Ans'
    },
    {
      question: 'Can I track my sales performance?',
      answer:'Ans'
    },
  ];

  return (
    <div>
      <div className='flex justify-center items-center m-10 max-lg:mx-5 max-md:mx-2'>
        <div className='bg-rose-100 rounded-xl p-8 max-md:p-4 mx-[5%]'>
          <p className='text-[50px] max-lg:text-3xl font-bold'>Become a</p>
          <p className='text-[50px] max-lg:text-3xl font-bold'>Divueens Seller</p>
          <p className='text-[24px] max-lg:text-lg my-10 max-sm:my-5'>
            Expand your reach and grow your beauty business with our innovative
            ecommerce platform.
          </p>
          <Link to={"/maintennace"} className='text-[24px] max-lg:text-lg font-semibold bg-rose-400 py-3 px-8 rounded-xl'>Register Now</Link>
        </div>

        <div>
          <img src={P1} className='w-[90%] rounded-xl max-lg:w-full'/>
        </div>
      </div>
      <div>
        <p className='text-[50px] text-center max-lg:text-3xl font-bold'>Steps to Get Started</p>
        <div className='grid grid-cols-4 items-center mt-10 pl-[15%] max-md:pl-[8%] max-sm:block max-sm:ml-[30%] max-[500px]:ml-[25%] max-[380px]:ml-[20%]'>
          <div>
            <img src={V1} className='w-[86px] h-[86px] mx-4 max-sm:mt-4'/>
            <p className='font-semibold mt-2'>Create an account</p>
          </div>
          <div>
            <img src={V2} className='mx-4 max-sm:mt-4'/>
            <p className='font-semibold mt-2'>List Your Product</p>
          </div>
          <div>
            <img src={V3} className='mx-4 max-sm:mt-4'/>
            <p className='font-semibold mt-2'>Set Up Your Store</p>
          </div>
          <div>
            <img src={V4} className='mx-4 max-sm:mt-4'/>
            <p className='font-semibold mt-2 mx-4'>Start Selling</p>
          </div>
        </div>
      </div>
      <div style={{backgroundImage: `url(${P1})`}} className='bg-no-repeat bg-cover w-[80%] m-auto py-8 px-12 mt-20'>
        <p className='text-2xl font-semibold text-white'>
          As a seller on Divueens, you'll gain access to a vibrant community of beauty
          enthusiasts and benefit from our robust marketing and sales infrastructure.
        </p>
      </div>
      <div>
        <p className='text-[50px] text-center max-lg:text-3xl font-bold mt-10 mb-20'>Join Us Today</p>
        <div className="flex flex-col items-center bg-white px-4">
          <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-x-10">
            <div className="flex flex-col justify-center">
              <p className="text-lg md:text-xl lg:text-2xl font-semibold max-md:mb-6">
                Ready to elevate your beauty brand and reach more customers? Join Divueens today and start selling on the leading beauty ecommerce platform.
              </p>
            </div>
            <div className="flex justify-center items-center">
              <form className="bg-rose-200 p-6 rounded-lg shadow-md w-full max-w-sm">
                <div className="mb-4">
                  <label className="block text-black mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black mb-2" htmlFor="email">Business Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black mb-2" htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your Phone"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black mb-2" htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Company Name"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 focus:outline-none"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className='text-[50px] text-center max-lg:text-3xl font-bold my-20'>Frequently Asked Questions</p>
        <div className="w-[65%] mx-auto my-10 px-4 sm:px-6 lg:px-8">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleIndex(index)}
                className="w-full text-left p-4 bg-red-100 text-black focus:outline-none flex justify-between items-center"
              >
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">{item.question}</span>
                <span>{openIndex === index ? (<FaAngleUp className="h-8"/>) : (<FaAngleDown className='h-8'/>)}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-red-100 text-sm sm:text-base md:text-lg">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sell;
