import React from 'react';

const ExpertCard = ({ image, name, title, description }) => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-col items-center justify-center">
        {/* Image */}
        <div className='lg:w-1/2 w-[93%] lg:h-[50vh] h-[50vh] relative'>
          <img src={image} alt={name} className='lg:w-[90%] w-[85%] lg:h-[90%] h-[82%] absolute inset-y-10 inset-x-4' />
          <div className='-z-10 bg-rose-200 w-full h-[90%] inset-0 flex text-xl flex-col pt-1'><p className='mx-auto'>Expert Review</p><hr className='border-black mx-auto w-36' /></div>
        </div>
        {/* Description */} 
        <div className="w-full flex flex-col justify-center items-center my-8 text-center">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-gray-600 text-lg">{title}</p>
        <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
