import React from "react";
import { ref_pic } from "../../../assets/assets";
import L1 from '../../../assets/WhoWeAre/l1.png'
import L2 from '../../../assets/WhoWeAre/l2.png'
import L3 from '../../../assets/WhoWeAre/l3.png'
import Subscription from '../../Subscription/Subscription'

const ReferSection = () => {
  return (
    <>
      <div className="refer-section h-fit md:pt-16 pt-1">
        <div className="heading md:pb-8">
          <hr className="bg-gradient-to-l from-rose-700 " />
          <h2 className="text-nowrap">Refer your Friend</h2>
          <hr className="bg-gradient-to-r from-rose-700" />
        </div>
        <img
          src={ref_pic}
          className="lg:w-[60%] w-[70%] shadow-xl shadow-slate-400 bg-rose-600 object-contain mx-auto"
        />
      </div>
      <br />

      <div className='bg-[#FECDD3] grid grid-cols-2 gap-x-32 max-md:block mt-8'>
        <div className='ml-[14%] my-[8%] max-md:ml-[10%]'>
          <p className='text-lg lg:text-2xl font-semibold max-sm:text-xl max-sm:pt-4 mb-4'>Don't miss an Update!!</p>
          <p className='text-sm lg:text-[20px] lg:leading-[2rem] font-[400]'>Get the latest beauty trends, exclusive offers, and stories
            straight to your inbox. Subscribe now and enjoy 20% off
            your next purchase!
          </p>
        </div>
        <Subscription />
      </div>
      {/* Last */}
      <div className='w-[90%] m-auto grid grid-cols-3 my-16 max-sm:block max-md:block max-lg:gap-8'>
        <div className='flex items-center justify-center max-sm:my-10'>
          <img src={L1} className='w-[20%]' />
          <div>
            <p className='text-lg font-semibold max-sm:text-base text-center'>100% Original</p>
            <p className='text-lg font-semibold max-sm:text-base text-center'>Product</p>
          </div>
        </div>
        <div className='flex items-center justify-center max-sm:my-10'>
          <img src={L2} className='w-[30%]' />
          <div>
            <p className='text-lg font-semibold max-sm:text-basetext-center'>Free Delivery</p>
            <p className='text-lg font-semibold max-sm:text-base text-center'>on Prepaid</p>
          </div>
        </div>
        <div className='flex items-center justify-center max-sm:my-10'>
          <img src={L3} className='w-[30%]' />
          <div>
            <p className='text-lg font-semibold max-sm:text-base text-center'>Secure</p>
            <p className='text-lg font-semibold max-sm:text-base text-center'>Payments</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferSection;
