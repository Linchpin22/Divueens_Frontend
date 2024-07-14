import React, { useState } from 'react';
import { divLogo, Profile_Pic } from '../assets/assets';
import { Link } from 'react-router-dom';
import { FaRegEdit, FaRegHeart } from 'react-icons/fa';
import { MdOutlineLocalShipping, MdOutlineShoppingBag } from 'react-icons/md';
import { LuLogOut, LuWallet2 } from 'react-icons/lu';
import { TbMailFilled } from 'react-icons/tb';
import bg from '../assets/HelpCenter/bg.jpg';

const Profile = () => {
  const [activeTAb,setActiveTab] = useState("");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className='flex gap-10 m-10 xl:items-center md:w-auto'>
      {/* Sidebar for larger screens */}
      {/* <SidebarLarge /> */}
      <div className='border border-black w-[20%] md:w-[15%] lg:w-[20%] h-[45rem] rounded-full flex items-center flex-col py-8'>
      {/* Profile Pic */}
      <div className='w-40 h-40 md:w-24 md:h-24 lg:w-40 lg:h-40'>
        <img src={Profile_Pic} alt="profile" className='w-full h-full object-cover rounded-full' />
      </div>

      {/* Profile Settings link */}
      <div className='mt-8 w-full'>
        <ul className="flex flex-col gap-2">
          <li className="hover:bg-rose-200 hover:text-rose-800 w-full md:px-2 lg:px-8 py-4">
            <Link to={'/profile'} className="flex items-center md:justify-center lg:justify-start gap-4 rounded-lg font-medium text-[1rem]" onClick={()=>handleTabChange("editProfile")}>
              <FaRegEdit size={24} /> <span className="md:hidden lg:inline">Edit Profile</span>
            </Link>
          </li>
          <li className="hover:bg-rose-200 hover:text-rose-800 w-full md:px-2 lg:px-8 py-4">
            <Link to={'/profile'} className="flex items-center md:justify-center lg:justify-start gap-4 rounded-lg font-medium text-[1rem]">
              <MdOutlineShoppingBag size={24} /><span className="md:hidden lg:inline">My Orders</span>
            </Link>
          </li>
          <li className="hover:bg-rose-200 hover:text-rose-800 w-full md:px-2 lg:px-8 py-4">
            <Link to={'/profile'} className="flex items-center md:justify-center lg:justify-start gap-4 rounded-lg font-medium text-[1rem]">
              <FaRegHeart size={24} /> <span className="md:hidden lg:inline">Wishlist</span>
            </Link>
          </li>
          <li className="hover:bg-rose-200 hover:text-rose-800 w-full md:px-2 lg:px-8 py-4">
            <Link to={'/profile'} className="flex items-center md:justify-center lg:justify-start gap-4 rounded-lg font-medium text-[1rem]">
              <MdOutlineLocalShipping size={24} /> <span className="md:hidden lg:inline">Shipping Address</span>
            </Link>
          </li>
          <li className="hover:bg-rose-200 hover:text-rose-800 w-full md:px-2 lg:px-8 py-4">
            <Link to={'/profile'} className="flex items-center md:justify-center lg:justify-start gap-4 rounded-lg font-medium text-[1rem]">
              <LuLogOut size={24}/> <span className="md:hidden lg:inline">Logout</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Logo */}
      <div className='w-full md:w-auto lg:w-full mb-5 mt-auto'>
        <img src={divLogo} alt="logo" className='w-full h-full object-contain'/>
      </div>
    </div>

      {/* Profile Inputs */}
      {activeTAb === "editProfile" && (
        <div className='border border-black w-full h-[45rem] rounded-[5rem] xl:w-[80%] flex items-center justify-start flex-col relative overflow-hidden pt-0'>

        {/* Background overlay */}
        <div style={{ backgroundImage: `url(${bg})` }} className='absolute top-0 left-0 w-full h-[10rem] bg-cover bg-center mb-24 opacity-30'></div>

        {/* Profile image and boxes div */}
        <div className="absolute top-24 left-0 right-0 flex flex-col md:flex-row items-center justify-between px-8 z-10">

          {/* Profile image */}
          <div className="w-36 h-36 rounded-full bg-gray-300 border-8 border-white shadow-2xl overflow-hidden relative group transition duration-300 ease-in-out transform hover:scale-105 mb-4 md:mb-0">
            <img src={Profile_Pic} alt="Profile" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-semibold text-xl">Edit</span>
            </div>
          </div>

          {/* Cards */}
          <div className="flex flex-col md:flex-row md:space-x-12 w-full md:w-auto md:px-aut">

            {/* First card */}
            <div className="w-48 h-32 bg-rose-300 rounded-3xl shadow-gray-500 shadow-2xl flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 mb-4 md:mb-auto md:w-auto px-8 ">
              <div className='flex flex-row gap-5 items-center'>
                <div className='text-4xl mt-4 mr-3 font-bold text-white'><LuWallet2 /></div>
                <div className='flex flex-col'>
                  <div className="text-base font-bold text-black">$0</div>
                  <div className="text-lg font-bold text-black">Div coins</div>
                  <div className='text-base text-gray-900'>Available</div>
                </div>
              </div>
            </div>

            {/* Second card */}
            <div className="w-48 h-32 bg-rose-300 rounded-3xl shadow-gray-500 shadow-2xl flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 md:w-auto px-8 ">
              <div className='flex flex-row gap-5 items-center'>
                <div className='text-6xl font-bold text-white'>6</div>
                <div className='flex flex-col'>
                  <div className="text-xl font-bold text-black">Div coins</div>
                  <div className='text-base text-gray-900'>Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 gap-y-5 w-full max-w-4xl px-4 sm:px-8 mt-12 md:mt-64">

          {/* Inputs */}
          <div className="flex flex-col">
            <label htmlFor="input1" className="mb-2 ml-3 text-sm font-medium">First Name</label>
            <input id="input1" type="text" placeholder="Enter your first name" className="input outline-none w-full text-base text-gray-600 py-2 px-4 border border-gray-800 rounded-lg focus:border-rose-500 hover:border-rose-500 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 transform transition-transform duration-100 ease-in-out focus:scale-[1.02]" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="input2" className="mb-2 ml-3 text-sm font-medium">Last Name</label>
            <input id="input2" type="text" placeholder="Enter your last name" className="input w-full outline-none text-base text-gray-600 py-2 px-4 border border-gray-800 rounded-lg focus:border-rose-500 hover:border-rose-500 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 transform transition-transform duration-100 ease-in-out focus:scale-[1.02]" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="input3" className="mb-2 ml-3 text-sm font-medium">Gender</label>
            <select id="input3" className="input w-full text-base text-gray-600 py-2 outline-none px-4 border bg-white border-gray-800 rounded-lg focus:border-rose-500 hover:border-rose-500 focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 appearance-none transform transition-transform duration-100 ease-in-out focus:scale-[1.02]">
              <option value="" disabled selected hidden className="text-gray-600 text-base">Select your gender</option>
              <option value="male" className='text-base text-gray-600'>Male</option>
              <option value="female" className='text-base text-gray-600'>Female</option>
              <option value="other" className='text-base text-gray-600'>Other</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="input4" className="mb-2 ml-3 text-sm font-medium">Country</label>
            <select id="input4" className="input w-full text-base text-gray-600 py-2 px-4 outline-none border bg-white border-gray-800 rounded-lg focus:border-rose-500 hover:border-rose-500 focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 appearance-none transform transition-transform duration-100 ease-in-out focus:scale-[1.02]">
              <option value="" disabled selected hidden className="text-gray-600 text-base">Select your country</option>
              <option value="in" className='text-base text-gray-600'>India</option>
              <option value="uk" className='text-base text-gray-600'>United Kingdom</option>
              <option value="ca" className='text-base text-gray-600'>Canada</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="input5" className="mb-2 ml-3 text-sm font-medium">Mobile number</label>
            <input id="input5" type="number" placeholder="Enter your mobile no." className="input w-full text-base text-gray-600 py-2 outline-none px-4 border border-gray-800 rounded-lg focus:border-rose-500 hover:border-rose-500 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 transform transition-transform duration-100 ease-in-out focus:scale-[1.02]" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="input6" className="mb-2 ml-3 text-sm font-medium">Date of birth</label>
            <input id="input6" type="date" placeholder="Enter your date of birth" className="input w-full outline-none text-base text-gray-600 py-2 px-4 border border-gray-800 rounded-lg focus:border-rose-500 hover:border-rose-500 placeholder:text-gray-400 focus:ring-2 focus:ring-rose-500 focus:ring-opacity-50 transform transition-transform duration-100 ease-in-out focus:scale-[1.02]" />
          </div>
        </div>

        {/* Email section and Save button */}
        <div className="flex flex-col md:flex-row justify-between items-start sm:items-center w-full max-w-4xl px-4 sm:px-8 mt-12 space-y-4 sm:space-y-0">

          {/* Email section */}
          <div className="flex flex-col w-full sm:w-auto">
            <h5 className="text-lg font-semibold mb-1">My email Address</h5>
            <div className="flex items-center flex-wrap">
              <TbMailFilled size={34} className='px-2 mx-2 text-red-700 bg-pink-200 rounded-2xl hover:bg-pink-300 hover:text-white mb-2 sm:mb-0'/>
              <a href="mailto:contact@example.com" className="text-sm text-grey-600 hover:underline mb-2 sm:mb-0">contact@example.com</a>
            </div>
            <button className="bg-slate-200 mt-3 hover:bg-sky-300 text-gray-800 font-semibold py-2 px-4 rounded text-sm transition duration-300 ease-in-out transform hover:scale-105">
              + Add Email address
            </button>
          </div>

          {/* Save button */}
          <button className="bg-rose-500 hover:bg-rose-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto">
            Save and continue
          </button>
        </div>
      </div>
      )}
    </div>
  )
}

export default Profile;
