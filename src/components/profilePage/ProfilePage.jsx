import React, { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import MyProfilePage from './GauravAndMahak/MyProfilePage';
import Wishlist from './Arpana/Wishlist';
import MyOrder from './Jatin/myOrder';

function ProfilePage() {
    const [isTabActive, setIsTabActive] = useState('myprofile');
    const navigate = useNavigate();

    useEffect(() => {
        const name = localStorage.getItem('name') || "";
        const email = localStorage.getItem('email') || "";
        const contact = localStorage.getItem('contact') || "";
        const birthday = localStorage.getItem('birthday') || "";
        const gender = localStorage.getItem('gender') || "";

        if (name === "" || email === "" || contact === "" || birthday === "" || gender === "") {
            setIsTabActive('myprofile');
        }
    }, []);

    const handleTabActiveState = (tab) => {
        setIsTabActive(tab);
    }

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/"); 
    }

    const renderContent = (tab) => {
        switch (tab) {
            case 'myprofile':
                return <MyProfilePage />;
            case 'wishlist':
                return <Wishlist />;
            case 'myorders':
                return <MyOrder />;
            default:
                return <MyProfilePage />;
        }
    }

    return (
        <div className='bg-slate-100 flex my-10 h-auto'>
            <div className='flex flex-col justify-center items-start bg-slate-100 text-center px-3 gap-6 min-w-10 sm:w-[20%] h-[100%]'>
                <h2 className='hidden sm:block sm:font-extrabold sm:p-3 md:p-5 md:text-[20px]'>My Account</h2>
                <div
                    onClick={() => handleTabActiveState("myprofile")}
                    className={`flex justify-center items-center sm:gap-3 hover:border-b-[2px] border-b-rose-700 p-2 cursor-pointer ${isTabActive === 'myprofile' ? 'border-b-[2px] border-b-rose-700' : ''}`}>
                    <div className='text-[20px] sm:text-[30px]'><CgProfile /></div>
                    <h3 className='hidden md:block'>My Profile</h3>
                </div>
                <div
                    onClick={() => handleTabActiveState("wishlist")}
                    className={`flex justify-center items-center sm:gap-3 hover:border-b-[2px] border-b-rose-700 p-2 cursor-pointer ${isTabActive === 'wishlist' ? 'border-b-[2px] border-b-rose-700' : ''}`}>
                    <div className='text-[20px] sm:text-[30px]'><FaRegHeart /></div>
                    <h3 className='hidden md:block'>Wishlist</h3>
                </div>
                <div
                    onClick={() => handleTabActiveState("myorders")}
                    className={`flex justify-center items-center sm:gap-3 hover:border-b-[2px] border-b-rose-700 p-2 cursor-pointer ${isTabActive === 'myorders' ? 'border-b-[2px] border-b-rose-700' : ''}`}>
                    <div className='text-[20px] sm:text-[30px]'><RiShoppingCartLine /></div>
                    <h3 className='hidden md:block'>My Orders</h3>
                </div>
                <div
                    onClick={handleLogout}
                    className='flex justify-center items-center sm:gap-3 hover:border-b-[2px] border-b-rose-700 p-2 cursor-pointer'>
                    <div className='text-[20px] sm:text-[30px]'><MdLogout /></div>
                    <h3 className='hidden md:block'>Logout</h3>
                </div>
            </div>
            <div className='w-[80%] h-[full] bg-white'>
                {renderContent(isTabActive)}
            </div>
        </div>
    );
}

export default ProfilePage;