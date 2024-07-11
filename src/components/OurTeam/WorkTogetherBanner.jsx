import React from 'react';
import work from '../../assets/OurTeam/work.avif';

const WorkTogetherBanner = () => {
  return (
    // <div className="flex flex-col lg:flex-row justify-center items-center gradient-to-r from-pink-100 via-pink-200 to-pink-300 py-30 px-18 rounded-lg shadow-md mt-12">
    <div className="flex flex-col lg:flex-row justify-center items-center bg-rose-100 bg-opacity-60 py-30 px-18 rounded-lg shadow-md mt-12">
  <div className="lg:w-1/2 text-center mb-8 lg:mb-0">
    <h2 className="text-3xl font-bold text-gray-800">Let's Work Together</h2>
    <p className="mt-4 text-gray-600">Join our amazing team and be a part of something great.</p>
    <div className="mt-6 flex justify-center">
      <button className="py-2 px-4 bg-gradient-to-r from-pink-400 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:bg-pink-200 hover:text-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-75">
        Join Now
      </button>
    </div>
  </div>
  <div className="lg:w-1/2 flex justify-center">
    <img src={work} alt="Work Together" className="w-1/2 lg:w-full h-auto object-cover rounded-lg shadow-md mt-4 mr-8 mb-4" />
  </div>
</div>

  );
};

export default WorkTogetherBanner;
