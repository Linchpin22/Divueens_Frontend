import React, { useState } from 'react'
import { divLogo, Profile_Pic } from '../assets/assets'
import { Link } from 'react-router-dom'
import { FaRegEdit } from 'react-icons/fa'
import { MdOutlineLocalShipping, MdOutlineShoppingBag } from 'react-icons/md'
import { FaRegHeart } from 'react-icons/fa6'
import { LuLogOut } from 'react-icons/lu'

const Profile = () => {

  const [hover, setHover] = useState(false)

  const mouseOn = () => {
    setHover(true)
  }
  const mouseOff = () => {
    setHover(false)
  }

  return (
    <div className='flex gap-10 m-10 xl:items-center'>

      {/* SideBar for Smaller screen */}
      <div className='block relative w-[10%] xl:hidden'>
        <div onMouseEnter={mouseOn} onMouseLeave={mouseOff} className="sidebar absolute top-0 left-0 bg-white border border-black rounded-full w-[4rem] transition-all ease-in-out hover:rounded-[3rem] overflow-hidden border-r hover:w-64 hover:shadow-lg">
          <div className='flex flex-col items-center py-5'>
            <div className={`${hover ? "w-40 h-40" : "w-12 h-12"}`}>
              <img src={Profile_Pic} alt="profile" className='w-full h-full object-cover' />
            </div>

            <div className='mt-8 w-full'>
              <ul className="flex flex-col gap-2 ">
                <li className={`hover:bg-rose-200 hover:text-rose-800 w-full ${hover ? "pl-8 py-4" : "pl-5 py-4"}`}>
                  <Link to={'/profile'} className="flex items-center gap-4 rounded-lg font-medium text-[1rem]">
                    <FaRegEdit size={24} /> {hover ? "Edit Profile" : ""}

                  </Link>
                </li>
                <li className={`hover:bg-rose-200 hover:text-rose-800 w-full ${hover ? "pl-8 py-4" : "pl-5 py-4"}`}>
                  <Link to={'/profile'} className="flex items-center gap-4 rounded-lg font-medium text-[1rem]">
                    <MdOutlineShoppingBag size={24} /> {hover ? "My Orders" : ""}
                  </Link>
                </li>
                <li className={`hover:bg-rose-200 hover:text-rose-800 w-full ${hover ? "pl-8 py-4" : "pl-5 py-4"}`}>
                  <Link to={'/profile'} className="flex items-center gap-4 rounded-lg font-medium text-[1rem]">
                    <FaRegHeart size={24} /> {hover ? "Wishlist" : ""}
                  </Link>
                </li>
                <li className={`hover:bg-rose-200 hover:text-rose-800 w-full ${hover ? "pl-8 py-4" : "pl-5 py-4"}`}>
                  <Link to={'/profile'} className="flex items-center gap-4 rounded-lg font-medium text-[1rem]">
                    <MdOutlineLocalShipping size={24} /> {hover ? "Shipping Address" : ""}
                  </Link>
                </li>
                <li className={`hover:bg-rose-200 hover:text-rose-800 w-full ${hover ? "pl-8 py-4" : "pl-5 py-4"}`}>
                  <Link to={'/profile'} className="flex items-center gap-4 rounded-lg font-medium text-[1rem]">
                    <LuLogOut size={24} /> {hover ? "Logout" : ""}
                  </Link>
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>

      {/* SideBar */}
      <div className='hidden border border-black w-[20%] h-[45rem] rounded-full items-center flex-col py-8 xl:flex'>

        {/* Profile Pic */}
        <div className='w-40 h-40'>
          <img src={Profile_Pic} alt="profile" className='w-full h-full object-cover' />
        </div>

        {/* Profile Settings link */}
        <div className='mt-8 w-full'>
          <ul className="flex flex-col gap-2 ">
            <li className={`hover:bg-rose-200 hover:text-rose-800 w-full ${hover ? "pl-8 py-4" : "pl-5 py-4"}`}>
              <Link to={'/profile'} className="flex items-center gap-4 rounded-lg font-medium text-[1rem]">
                <FaRegEdit size={24} /> Edit Profile
              </Link>
            </li>
            <li className={`hover:bg-rose-200 hover:text-rose-800 w-full ${hover ? "pl-8 py-4" : "pl-5 py-4"}`}>
              <Link to={'/profile'} className="flex items-center gap-4 rounded-lg font-medium text-[1rem]">
                <MdOutlineShoppingBag size={24} /> My Orders
              </Link>
            </li>
            <li className={`hover:bg-rose-200 hover:text-rose-800 w-full ${hover ? "pl-8 py-4" : "pl-5 py-4"}`}>
              <Link to={'/profile'} className="flex items-center gap-4 rounded-lg font-medium text-[1rem]">
                <FaRegHeart size={24} /> Wishlist
              </Link>
            </li>
            <li className={`hover:bg-rose-200 hover:text-rose-800 w-full ${hover ? "pl-8 py-4" : "pl-5 py-4"}`}>
              <Link to={'/profile'} className="flex items-center gap-4 rounded-lg font-medium text-[1rem]">
                <MdOutlineLocalShipping size={24} /> Shipping Address
              </Link>
            </li>
            <li className={`hover:bg-rose-200 hover:text-rose-800 w-full ${hover ? "pl-8 py-4" : "pl-5 py-4"}`}>
              <Link to={'/profile'} className="flex items-center gap-4 rounded-lg font-medium text-[1rem]">
                <LuLogOut size={24} /> Logout
              </Link>
            </li>
          </ul>

        </div>

        {/* Logo */}
        <div className='w-full mb-5'>
          <img src={divLogo} alt="logo" className='w-full h-full object-cover' />
        </div>

      </div>

      {/* Profile Inputs */}
      <div className='border border-black w-full h-[45rem] rounded-[5rem] xl:w-[80%]'>

      </div>
    </div>
  )
}

export default Profile