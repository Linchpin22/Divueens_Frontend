import React, { useState } from 'react';
import TeamMemberCard from '../components/OurTeam/TeamMemberCard';
import Banner from '../components/OurTeam/Banner';
import WorkTogetherBanner from '../components/OurTeam/WorkTogetherBanner';
import work from '../assets/OurTeam/work.avif';
import background from '../assets/OurTeam/1.jpg';
import SimpleText from '../components/OurTeam/SimpleText';
import '../components/OurTeam/global.css';

const teamMembers = [
  { name: 'Samuel Robinson', role: 'Frontend Developer', image: work, linkedin: '#', twitter: '#', speech: 'Hello! I am Sam, creating beautiful interfaces is my passion. I love reading, nature and music.', bgColor: 'bg-rose-300' },
  { name: 'Ron Lee', role: 'UX Designer', image: work, linkedin: '#', twitter: '#', speech: 'Hello! I am Ron, UX Designer at StudioID. I like traveling and eating with my friends on free times.', bgColor: 'bg-rose-300' },
  { name: 'Terry Gomez', role: 'Product Manager', image: work, linkedin: '#', twitter: '#', speech: 'Hi! I’m Terry. I own a doggy day care and most of the time I spend time with animals.', bgColor: 'bg-rose-300' },
  { name: 'William Stewart', role: 'Head Chef', image: work, linkedin: '#', twitter: '#', speech: 'Hi! I’m William. I am the head chef at my own restaurant. I love to explore new tastes and food recipes.', bgColor: 'bg-rose-300' },
  { name: 'Alyssa Silva', role: 'Fashion Designer', image: work, linkedin: '#', twitter: '#', speech: 'Hi! I’m Alyssa. I am studying about Fashion Design and running a startup fashion design studio.', bgColor: 'bg-rose-300' },
  { name: 'Suzy Cole', role: 'Freelancer', image: work, linkedin: '#', twitter: '#', speech: 'Hi! I’m Suzy. A UX/UI Designer and working as a full time freelancer. Nature photography is my hobby.', bgColor: 'bg-rose-300' },
];

const TeamSection = () => {
  return (
    <div className="relative min-h-screen bg-cover bg-center bg-white">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <main className="container  w-[90%] mx-auto text-center mb-4">
        <div className="heading flex justify-center items-center">
        <hr className="bg-gradient-to-l from-rose-700" data-aos="fade-right" />
        <h2 className="text-xl text-nowrap text-center" data-aos="fade-up">Our Team</h2>
        <hr className="bg-gradient-to-r from-rose-700" data-aos="fade-left" />
      </div>
      <p className='text-center text-lg font-normal text-slate-400'>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, quasi modi. Deserunt repudiandae provident rem aut incidunt quam enim corporis?
      </p>
        </main>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(3,_0.3fr)] gap-8 justify-center items-center mb-36">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
       
        <SimpleText />
        <WorkTogetherBanner />
      </div>
    </div>
  );
};

export default TeamSection;