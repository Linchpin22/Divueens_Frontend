import React, { useState } from 'react';
import TeamMemberCard from '../components/OurTeam/TeamMemberCard';
import Banner from '../components/OurTeam/Banner';
import WorkTogetherBanner from '../components/OurTeam/WorkTogetherBanner';
import work from '../assets/OurTeam/work.avif';
import background from '../assets/OurTeam/1.jpg';
import SimpleText from '../components/OurTeam/SimpleText';

const teamMembers = [
  { name: 'Samuel Robinson', role: 'Frontend Developer', image: work, linkedin: '#', twitter: '#', speech: 'Hello! I am Sam, creating beautiful interfaces is my passion. I love reading, nature and music.', bgColor: 'bg-rose-100' },
  { name: 'Ron Lee', role: 'UX Designer', image: work, linkedin: '#', twitter: '#', speech: 'Hello! I am Ron, UX Designer at StudioID. I like traveling and eating with my friends on free times.', bgColor: 'bg-rose-100' },
  { name: 'Terry Gomez', role: 'Product Manager', image: work, linkedin: '#', twitter: '#', speech: 'Hi! I’m Terry. I own a doggy day care and most of the time I spend time with animals.', bgColor: 'bg-rose-100' },
  { name: 'William Stewart', role: 'Head Chef', image: work, linkedin: '#', twitter: '#', speech: 'Hi! I’m William. I am the head chef at my own restaurant. I love to explore new tastes and food recipes.', bgColor: 'bg-rose-100' },
  { name: 'Alyssa Silva', role: 'Fashion Designer', image:work, linkedin: '#', twitter: '#', speech: 'Hi! I’m Alyssa. I am studying about Fashion Design and running a startup fashion design studio.', bgColor: 'bg-rose-100' },
  { name: 'Suzy Cole', role: 'Freelancer', image: work, linkedin: '#', twitter: '#', speech: 'Hi! I’m Suzy. A UX/UI Designer and working as a full time freelancer. Nature photography is my hobby.', bgColor: 'bg-rose-100' },
  { name: 'Donald Richardson', role: 'Journalist', image: work, linkedin: '#', twitter: '#', speech: 'Hello! My name is Donald. I’m writing articles for newspapers. Sometimes I do illustrations for magazines.', bgColor: 'bg-rose-100' },
  { name: 'Melinda Cole', role: 'Interior Designer', image: work, linkedin: '#', twitter: '#', speech: 'Hello! My name is Melinda. I’m an interior designer. I always search for inspiration on the web.', bgColor: 'bg-rose-100' },
];

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.ceil(teamMembers.length / 3) - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === Math.ceil(teamMembers.length / 3) - 1 ? 0 : prevIndex + 1));
  };

  const currentTeamMembers = teamMembers.slice(currentIndex * 3, currentIndex * 3 + 3);

  return (
    <div className="our_team relative py-12 min-h-screen bg-cover bg-center animate-gradient" style={{ backgroundImage: `url(${background})` }}>
            
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <SimpleText />
        <div className="relative flex items-center justify-between mb-12">
          <button
            onClick={handlePrev}
            className="p-4 pl-6 pr-6 bg-gradient-to-r from-pink-500 to-pink-700 text-white font-bolder hover:text-pink-700  hover:bg-none hover:bg-white border-2 hover:border-pink-700 shadow-lg rounded-full"
          >
            &#10094;
          </button>
          <div className="flex space-x-8 justify-center">
            {currentTeamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
          <button
            onClick={handleNext}
             className="p-4 pl-6 pr-6 bg-gradient-to-r from-pink-500 to-pink-700 text-white font-bolder hover:text-pink-700  hover:bg-none hover:bg-white border-2 hover:border-pink-700 shadow-lg rounded-full"
          >
            &#10095;
          </button>
        </div>
        <Banner message="Important Information: Our Team is the Best!" />
        <WorkTogetherBanner />
      </div>
    </div>
  );
};

export default TeamSection;
