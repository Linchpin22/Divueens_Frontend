import React, { useState, useEffect } from 'react';
import { FiMenu, FiSearch, FiShoppingCart, FiHeart, FiUser, FiTrendingUp } from 'react-icons/fi';
import SearchBox from './SearchBox';
import { Link } from 'react-router-dom';
import Auth from '../../Auth/Auth';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [displayAuth, setDisplayAuth] = useState(false)
  const [scrollLimit, setLimit] = useState(true);

  const handleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(dropdown);
    }
  };
  useEffect(()=> window.addEventListener("scroll", () => setLimit(window.scrollY < 100 ? true : false)), [])

  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Auth show={displayAuth} changeView={setDisplayAuth} />
      <nav className={`flex bg-white font-montserrat sticky top-0 z-40 ${scrollLimit ? '' : 'shadow-lg'}`}>
        <Link to="/">
          <img className="md:w-40 w-20 h-8 m-2 md:h-16" src="https://www.figma.com/file/6bEbVeHrG8aDIqqx76AElp/image/8a133fe3436fdc169d72e042e2c70e97e5cd6c8a" alt="Description" />
        </Link>
        <div className="container mx-auto">
          <div className="w-full  flex justify-between items-center">
            <div className="w-full hidden md:flex justify-evenly items-center text-lg">
              <Link to="/products" className="text-gray-800 hover:text-gray-900 font-bold ">Categories</Link>
              <Link to="/" className="text-gray-800 hover:text-gray-900 font-bold">Brands</Link>
              <Link to="/" className="text-gray-800 hover:text-gray-900 font-bold">Div Fashion</Link>
              <Link to="/blogs" className="text-gray-800 hover:text-gray-900 font-bold">Beauty Advice</Link>
              <div className="relative mt-3"><SearchBox /></div>
            </div>
            <div className="hidden md:flex space-x-6 mt-3 text-gray-800">
              <button className="transition-colors duration-300 md:pl-7 hover:text-rose-500"><FiShoppingCart size={24} /></button>
              <button className="transition-colors duration-300 md:hover:text-rose-500"><FiHeart size={24} /></button>
              <button className="transition-colors duration-300 hover:text-rose-500" onClick={() => setDisplayAuth(true)}><FiUser size={24} /></button>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-800"> <FiMenu /></button>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden">
              <Link to="/products" className="block px-2 py-1 text-gray-800"> Categories </Link>
              <Link to="/" className="block px-2 py-1 text-gray-800">  Brands </Link>
              <Link to="/" className="block px-2 py-1 text-gray-800">  Div Fashion  </Link>
              <Link to="/blogs" className="block px-2 py-1 text-gray-800">  Beauty Advice  </Link>
              <div className="relative my-4"><SearchBox /><FiSearch className="absolute top-3 right-3 text-gray-400" /></div>
              <div className="flex space-x-4 justify-center my-2"><FiShoppingCart className="text-gray-800" /><FiHeart className="text-gray-800" /><FiUser onClick={() => setDisplayAuth(true)} className="text-gray-800" /></div>
            </div>
          )}
        </div>
      </nav>
      <div className="bg-white border-t">
        <div className="container mx-auto ">
          <ul className="w-full flex justify-evenly">
            <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500">Home</Link></li>
            <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500">Face</Link></li>
            <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500">Hair</Link></li>
            <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500">MakeUp</Link></li>

            {/* <li className=" relative flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500" onClick={() => handleDropdown('home')}>Home</Link>
                {openDropdown === 'home' && (<div className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded p-4 grid grid-cols-2 gap-4">
                    <div><h4 className="font-semibold">Category 1 home</h4>
                      <ul className="pl-4"><li className="py-1 hover:bg-gray-100">Subcategory 1</li><li className="py-1 hover:bg-gray-100">Subcategory 2</li></ul>
                    </div>
                    <div><h4 className="font-semibold">Category 2</h4>
                      <ul className="pl-4"><li className="py-1 hover:bg-gray-100">Subcategory 1</li><li className="py-1 hover:bg-gray-100">Subcategory 2</li></ul>
                    </div>
                  </div>
                )}
            </li>
            <li className="relative flex-shrink-0">
                  <Link to="/" className="text-base text-gray-600 hover:text-gray-500" onClick={() => handleDropdown('face')}>
                    Face
                  </Link>
                  {openDropdown === 'face' && (<div className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded p-4 grid grid-cols-2 gap-4">
                      <div> <h4 className="font-semibold">Category 1</h4><ul className="pl-4"><li className="py-1 hover:bg-gray-100">Subcategory 1</li><li className="py-1 hover:bg-gray-100">Subcategory 2</li></ul></div>
                      <div><h4 className="font-semibold">Category 2</h4><ul className="pl-4"><li className="py-1 hover:bg-gray-100">Subcategory 1</li><li className="py-1 hover:bg-gray-100">Subcategory 2</li></ul></div>
                    </div>
                  )}
            </li>
            <li className="relative flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500" onClick={() => handleDropdown('hair')}>  Hair</Link>
                  {openDropdown === 'hair' && (<div className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded p-4 grid grid-cols-2 gap-4">
                      <div><h4 className="font-semibold">Styling</h4><ul className="pl-4">  <li className="py-1 hover:bg-gray-100">Hair Gel</li>    <li className="py-1 hover:bg-gray-100">Hair Spray</li>  <li className="py-1 hover:bg-gray-100">Serum and Oils</li></ul></div>
                      <div><h4 className="font-semibold">Cleansing</h4><ul className="pl-4">  <li className="py-1 hover:bg-gray-100">Shampoo</li>  </ul></div>
                      <div><h4 className="font-semibold">Conditioner</h4><ul className="pl-4">  <li className="py-1 hover:bg-gray-100">Conditioner</li>  </ul></div>
                    </div>
                  )}
            </li>
                    <li className="relative flex-shrink-0"><Link to="/"className="text-base text-gray-600 hover:text-gray-500"onClick={() => handleDropdown('makeup')}>  Makeup</Link>
                  {openDropdown === 'makeup' && (<div className="absolute left-0 mt-2 w-80 bg-white shadow-lg rounded p-4 grid grid-cols-2 gap-4">
                      <div>  <h4 className="font-semibold">Face Products</h4>  <ul className="pl-4">    <li className="py-1 hover:bg-gray-100">Foundation</li>    <li className="py-1 hover:bg-gray-100">Primer</li>     <li className="py-1 hover:bg-gray-100">Concealer</li>      <li className="py-1 hover:bg-gray-100">Compact Powder</li>           <li className="py-1 hover:bg-gray-100">Loose Powder</li>        <li className="py-1 hover:bg-gray-100">Blush</li>     <li className="py-1 hover:bg-gray-100">Bronzer</li>     <li className="py-1 hover:bg-gray-100">Highlighter</li></ul></div>
                      <div>  <h4 className="font-semibold">Eye Products</h4>  <ul className="pl-4">    <li className="py-1 hover:bg-gray-100">Eye Shadow</li>    <li className="py-1 hover:bg-gray-100">EyeShadow Primer</li>     <li className="py-1 hover:bg-gray-100">Eyeliner</li> <li className="py-1 hover:bg-gray-100">Mascara</li>     <li className="py-1 hover:bg-gray-100">Eyebrow Pencil</li>  <li className="py-1 hover:bg-gray-100">Eyebrow Gel</li></ul></div>
                      <div>  <h4 className="font-semibold">Lip Products</h4>  <ul className="pl-4">    <li className="py-1 hover:bg-gray-100">Lipstick</li>    <li className="py-1 hover:bg-gray-100">Lip Gloss</li>   <li className="py-1 hover:bg-gray-100">Lip Liner</li>       <li className="py-1 hover:bg-gray-100">Lip balm</li></ul></div>
                      <div>  <h4 className="font-semibold">Other Products</h4>  <ul className="pl-4">    <li className="py-1 hover:bg-gray-100">Setting Spray</li>    <li className="py-1 hover:bg-gray-100">Makeup Remover</li>    <li className="py-1 hover:bg-gray-100">Contour Kits</li>      <li className="py-1 hover:bg-gray-100">Eyelashes</li>     <li className="py-1 hover:bg-gray-100">Brushes</li></ul></div>
                    </div>
                  )}
              </li> */}
            {/* <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500" onClick={() => handleDropdown('home')}>Home</Link> */}
            {/* {openDropdown === 'home' && (      <ul className="absolute left-0 mt-2 w-36 bg-white shadow-lg rounded">       <li className="px-4 py-2 hover:bg-gray-100">Option 1</li>         <li className="px-4 py-2 hover:bg-gray-100">Option 2</li>    </ul>     )}</li> */}
            {/* <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500">Face</Link></li> */}
            {/* <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500">Hair</Link></li> */}
            {/* <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500">Makeup</Link></li> */}
            <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500">Body</Link></li>
            <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500">Baby</Link></li>
            <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500">Fragrance</Link></li>
            <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500">Combos</Link></li>
            <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500">Natural</Link></li>
            <li className="flex-shrink-0"><Link to="/" className="text-base text-gray-600 hover:text-gray-500">Tools and Accessories</Link></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;