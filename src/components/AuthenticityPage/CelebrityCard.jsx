// src/components/CelebrityCard.js
import React from 'react';

const CelebrityCard = ({ image, name, description }) => {
  return (

    <div className="bg-rose-100 shadow-lg flex flex-col items-center w-[75%] min-h-60 mx-auto">
      <img src={image} alt={name} className="w-full  mb-4 h-[80%]" />
      <div className='w-full h-[20%] flex items-center flex-col justify-center'>
        <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-center">{description}</p>
      </div>
    </div>
  );
};

export default CelebrityCard;
