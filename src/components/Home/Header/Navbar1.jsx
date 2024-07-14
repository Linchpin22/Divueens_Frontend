import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiSearch, FiShoppingCart, FiHeart, FiUser, FiTrendingUp } from 'react-icons/fi';
import SearchBox from './SearchBox';
import { Link } from 'react-router-dom';
import Auth from '../../Auth/Auth';
import { IoIosArrowDown } from 'react-icons/io';
import { FaBars } from 'react-icons/fa6';
import { Divueens } from '../../../assets/assets';

const Navbar1 = ({navItemText}) => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [displayAuth, setDisplayAuth] = useState(false)
    const [isDrop, setIsDrop] = useState(false)
    const [displayOnScroll, setDisplayOnScroll] = useState('')

    useEffect(() => window.addEventListener("scroll", () => setDisplayOnScroll(scrollY >= 50 ? 'shadow-md' : '')), []);


    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Auth show={displayAuth} changeView={setDisplayAuth} />
            <nav className={`flex bg-white font-montserrat sticky top-0 z-40 w-full items-center justify-between lg:gap-8 ${displayOnScroll}`}>
                <Link to="/">
                    <img className=" w-[4.5rem] h-[4rem] md:w-28 md:h-22 lg:h-24 ml-4" src={Divueens} alt="Description" />
                </Link>
                <div className="lg:w-full">
                    <div className="w-full flex justify-between items-center">
                        <div className="w-full hidden lg:flex items-center justify-between text-base xl:text-lg">
                            <Link to="/products" className="text-gray-800 hover:text-gray-900 font-semibold">Categories</Link>
                            <Link to="/" className="text-gray-800 hover:text-gray-900 font-semibold">Brands</Link>
                            <Link to="/" className="text-gray-800 hover:text-gray-900 font-semibold">Div Fashion</Link>
                            <Link to="/blogs" className="text-gray-800 hover:text-gray-900 font-semibold">Beauty Advice</Link>
                            <div className="relative mt-3"><SearchBox /></div>
                        </div>
                        <div className="hidden lg:flex space-x-6 mt-3 text-gray-800">
                            <button className="transition-colors duration-300 md:pl-7 hover:text-rose-500"><FiShoppingCart size={24} /></button>
                            <button className="transition-colors duration-300 md:hover:text-rose-500"><FiHeart size={24} /></button>
                            <button className="transition-colors duration-300 hover:text-rose-500" onClick={() => setDisplayAuth(true)}><FiUser size={24} /></button>
                        </div>
                        <div className="pr-8 lg:hidden">
                            <button onClick={toggleMenu} className="text-gray-800">  <FaBars size={22} /></button>
                        </div>
                    </div>
                    {isOpen && (
                        <div className="absolute top-0 right-0 h-screen bg-white/80 min-w-[15rem] sm:min-w-[20rem] z-50 w-[30%] backdrop-blur-sm shadow-[-2px_0_5px_rgba(173,65,65,0.5)] py-4 pl-4 transition-[transform] duration-[0.5s] ease-in-out lg:hidden">
                            <div>
                                <div className='flex items-center justify-between pr-4'>
                                    <button
                                        type="button"
                                        className="btn-close border-none px-[1rem] text-[#fff] rounded-[3rem] bg-rose-700 text-[2rem] cursor-pointer"
                                        onClick={toggleMenu}
                                    >
                                        &times;
                                    </button>

                                    <div className="flex space-x-4 justify-center my-2">
                                        <FiShoppingCart className="text-gray-800" /><FiHeart className="text-gray-800" /><FiUser onClick={() => setDisplayAuth(true)} className="text-gray-800" />
                                    </div>
                                </div>

                                <div className="relative my-4 pr-4">
                                    <SearchBox />
                                </div>


                                <div className='flex flex-col w-full gap-4 overflow-auto max-h-screen scroll-smooth'>
                                    <Link to="/products" className="px-2 py-1 text-gray-800 font-semibold border-b border-rose-700 w-[13rem] sm:w-[17rem] shadow-sm rounded-l-md shadow-rose-700/70"> Categories </Link>
                                    <Link to="/" className="px-2 py-1 text-gray-800 font-semibold border-b border-rose-700 w-[13rem] sm:w-[17rem] shadow-sm rounded-l-md shadow-rose-700/70">  Brands </Link>
                                    <Link to="/" className="px-2 py-1 text-gray-800 font-semibold border-b border-rose-700 w-[13rem] sm:w-[17rem] shadow-sm rounded-l-md shadow-rose-700/70">  Div Fashion  </Link>
                                    <Link to="/blogs" className="px-2 py-1 text-gray-800 font-semibold border-b border-rose-700 w-[13rem] sm:w-[17rem] shadow-sm rounded-l-md shadow-rose-700/70">  Beauty Advice  </Link>
                                    <Link to="/" className="px-2 py-1 text-gray-800 font-medium" >Face</Link>
                                    <Link to="/" className="px-2 py-1 text-gray-800 font-medium" >Hair</Link>
                                    <Link to="/" className="px-2 py-1 text-gray-800 font-medium" >MakeUp</Link>
                                    <Link to="/" className="px-2 py-1 text-gray-800 font-medium" >Body</Link>
                                    <Link to="/" className="px-2 py-1 text-gray-800 font-medium" >Baby</Link>
                                    <Link to="/" className="px-2 py-1 text-gray-800 font-medium" >Fragrance</Link>
                                    <Link to="/" className="px-2 py-1 text-gray-800 font-medium" >Combos</Link>
                                    <Link to="/" className="px-2 py-1 text-gray-800 font-medium" >Natural</Link>
                                    <Link to="/" className="px-2 py-1 text-gray-800 font-medium" >Tools and Accessories</Link>
                                </div>

                            </div>
                        </div>
                    )}
                </div>
            </nav>
            <div className="bg-white border-t hidden lg:flex">
                <div className="w-full py-2 px-4 ">
                    <ul className="w-full flex gap-12 justify-center">
                        <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500" onMouseLeave={() => navItemText('')} onMouseEnter={() => navItemText('Skin Care')}>Face</Link></li>
                        <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500" onMouseLeave={() => navItemText('')} onMouseEnter={() => navItemText('Hair Care')}>Hair</Link></li>
                        <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500" onMouseLeave={() => navItemText('')} onMouseEnter={() => navItemText('Makeup')}>MakeUp</Link></li>
                        <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500" onMouseLeave={() => navItemText('')} onMouseEnter={() => navItemText('Body Care')}>Body</Link></li>
                        <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500" onMouseLeave={() => navItemText('')} onMouseEnter={() => navItemText('')}>Baby</Link></li>
                        <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500" onMouseLeave={() => navItemText('')} onMouseEnter={() => navItemText('')}>Fragrance</Link></li>
                        <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500" onMouseLeave={() => navItemText('')} onMouseEnter={() => navItemText('')}>Combos</Link></li>
                        <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500" onMouseLeave={() => navItemText('')} onMouseEnter={() => navItemText('')}>Natural</Link></li>
                        <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500" onMouseLeave={() => navItemText('')} onMouseEnter={() => navItemText('')}>Tools and Accessories</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar1;