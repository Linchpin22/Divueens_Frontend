import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TeamMemberCard = ({ name, role, image, linkedin, twitter, speech, bgColor }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col items-center justify-between p-4 w-full bg-rose-200 h-96 mx-auto rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:bg-rose-300`}
    >
      <div className="text-center space-y-2">
        <img className="h-32 w-32 rounded-full mx-auto" src={image} alt={`${name}'s profile`} />
        <div className="space-y-0.5">
          <p className="text-2xl font-bold mb-3">{name}</p>
          <p className=" text-xl font-semibold">{role}</p> 
          <p className="px-2 text-black">{speech}</p>
        </div>
      </div>
      <div className="flex space-x-4 mt-4"> 
        <a onClick={()=> navigate("/linkedin")} target="_blank" rel="noopener noreferrer" className="text-black hover:text-zinc-700">
          <FaLinkedin className="text-2xl" />
        </a>
        <a onClick={()=> navigate("/twitter")} target="_blank" rel="noopener noreferrer" className="text-black hover:text-zinc-700">
          <FaTwitter className="text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default TeamMemberCard;
