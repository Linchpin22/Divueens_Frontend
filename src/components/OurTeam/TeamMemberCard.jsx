import React, { useState } from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';


const TeamMemberCard = ({ name, role, image, linkedin, twitter, speech, bgColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`p-4 w-80 h-96 mx-auto bg-rose-100 rounded-xl shadow-md space-y-4 transform transition duration-500 hover:scale-105 ${bgColor}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div className="text-center relative  space-y-2 h-full w-full">
      <img className="h-32 w-32 rounded-full mx-auto " src={image} alt={`${name}'s profile`} />
        <div className="space-y-0.5">
          <p className="text-xl font-bold">{name}</p>
          <p className="text-gray-700">{role}</p>
          <p className="text-gray-600">{speech}</p>
        </div>
        <div className={`flex absolute left-[50%] bottom-[-5%] translate-x-[-50%] translate-y-[-50%]  pt-5  ${isHovered ? 'block' : 'hidden'}`}>
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-pink-400">
          <FaLinkedin className='w-7 h-7' />
          </a>
          <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-pink-700 hover:text-pink-400 ml-5">
          <FaTwitter className='w-7 h-7'/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
