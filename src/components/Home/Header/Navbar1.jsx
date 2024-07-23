import React, { useState, useEffect, useRef } from "react";
import {
  FiMenu,
  FiSearch,
  FiShoppingCart,
  FiHeart,
  FiUser,
  FiTrendingUp,
} from "react-icons/fi";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";
import Auth from "../../Auth/Auth";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { Divueens } from "../../../assets/assets";
import navItemData from "./NavDropDownItems";

const Navbar1 = ({ navItemText }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [displayAuth, setDisplayAuth] = useState(false);
  const [isDrop, setIsDrop] = useState(false);
  const [displayOnScroll, setDisplayOnScroll] = useState("");
  const mainNavItems = [
    "Categories",
    "Top Brands",
    "Div Fashion",
    "Beauty Advice",
    "Tools & Accessories",
    "Offers"
  ];
  const subNavItems = [
    "Face care",
    "Skin care",
    "Hair care",
    "MakeUp",
    "Body care",
    "Fragrance",
    "Combos",
    "Natural",
    "Health & Wellness",
  ];

  useEffect(
    () =>
      window.addEventListener("scroll", () =>
        setDisplayOnScroll(
          scrollY >= 50
            ? "shadow-md border-b border-rose-200 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30"
            : ""
        )
      ),
    []
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [hoveredCategory, setHoveredCategory] = useState(null);


  return (
    <>
      <Auth show={displayAuth} changeView={setDisplayAuth} />
      <nav
        className={`flex font-montserrat pl-4 xl:pl-10 sticky top-0 z-40 w-full items-center justify-between ${displayOnScroll}`}
      >
        <div className="">
          <Link to="/">
            <img
              className="w-[100%] h-[70px] md:h-[90px] lg:h-[100px] py-1 md:py-2"
              src={Divueens}
              alt="Description"
            />
          </Link>
        </div>
        <div
          className=" flex flex-col gap-3 lg:px-8 xl:pr-20"
        // style={{fontFamily: 'Josefin Sans'}}
        >
          <div className="w-full flex lg:justify-center justify-end items-center ">
            <div className="hidden lg:w-[70%] lg:block">
              <SearchBox />
            </div>
            <div className="hidden lg:flex space-x-6 text-slate-500">
              <button className="md:pl-7 hover:text-rose-800">
                <FiShoppingCart size={20} />
              </button>
              <button className=" md:hover:text-rose-800">
                <FiHeart size={20} />
              </button>
              <button
                className=" hover:text-rose-800"
                onClick={() => setDisplayAuth(true)}
              >
                <FiUser size={20} />
              </button>
            </div>

            <div className="pr-8 lg:hidden">
              <button onClick={toggleMenu} className="text-gray-800">
                <FaBars size={22} />
              </button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center gap-x-6 xl:gap-x-10 xl:pr-6 font-semibold text-slate-600  tracking-wider">
            {mainNavItems.map((item, index) => (
              <Link
                key={index}
                to="/products"
                className="hover:underline-offset-2 text-nowrap hover:underline hover:text-rose-800"
              >
                {item}
              </Link>
            ))}
          </div>
          {isOpen && (
            <div className="absolute max-h-screen top-0 bg-white/95 right-0 w-[80%] md:w-[60%] z-50 backdrop-blur-lg shadow-lg shadow-slate-600 py-4 pl-4 transition-[transform] duration-[0.5s] ease-in-out lg:hidden">
              <div>
                <div className="flex items-center justify-between pr-4">
                  <button
                    type="button"
                    className="btn-close font-medium text-3xl cursor-pointer"
                    onClick={toggleMenu}
                  >
                    &times;
                  </button>

                  <div className="flex space-x-4 justify-center my-2">
                    <FiShoppingCart className="text-gray-800" />
                    <FiHeart className="text-gray-800" />
                    <FiUser
                      onClick={() => setDisplayAuth(true)}
                      className="text-gray-800"
                    />
                  </div>
                </div>

                <div className="relative my-4 pr-4">
                  <SearchBox />
                </div>

                <div className="flex text-sm flex-col w-full gap-4 overflow-auto max-h-screen scroll-smooth">
                  {mainNavItems.map((item, index) => (
                    <Link
                      to="/products"
                      className="px-2 py-1 text-gray-800 font-medium shadow"
                    >
                      {item}
                    </Link>
                  ))}
                  <div className="flex text-sm flex-col w-full gap-4 ">
                    {Object.keys(navItemData).map((category, index) => {
                      const categoryData = navItemData[category];
                      if (!categoryData) return null;

                      return (
                        <div className="flex-shrink-0 " key={index}>
                          <button
                            className="hover:underline text-sm font-medium flex items-center justify-between px-2 text-slate-500 hover:text-rose-800 relative"
                            onClick={() => {
                              setOpenDropdown(!openDropdown)
                              setHoveredCategory(category);
                            }}
                          >
                            {category} <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out ${openDropdown && hoveredCategory === category && 'rotate-180'}`} />
                          </button>
                          {openDropdown && hoveredCategory === category && (
                            <div onMouseEnter={() => {
                              setOpenDropdown(true);
                              setHoveredCategory(category);
                            }} className="w-full h-auto px-8 py-4 rounded-[20px] bg-white/50 shadow-xl l-[30px] z-30 navItemMultipage">
                              {categoryData.map((subcategory) => {
                                const subcategoryLabel = Object.keys(subcategory)[0];
                                const subcategoryItems = subcategory[subcategoryLabel];
                                if (!subcategoryItems) return null;

                                return (
                                  <div className="w-full" key={subcategoryLabel}>
                                    <h3 className="text-black font-semibold text-sm leading-tight py-2 tracking-tight">{subcategoryLabel}</h3>
                                    <ul>
                                      {subcategoryItems.map((item) => (
                                        <li className="text-slate-500 text-[0.8rem] hover:text-rose-800" key={item}>{item}</li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* -------------------------- Remove line below after this ------------------------------- */}
              <Link to="/membership"
                className="hover:underline text-sm font-medium flex items-center pt-1 justify-between px-2 text-slate-500 hover:text-rose-800 relative"
              >Membership</Link>
              <Link to="/virtual-try-on"
                className="hover:underline text-sm font-medium flex items-center pt-1 justify-between px-2 text-slate-500 hover:text-rose-800 relative"
              >Virtual TryOn</Link>

            </div>
          )}


        </div>
      </nav>
      <div className="bg-white w-full mx-auto border border-t hidden shadow-md lg:flex">
        <div className="w-full py-2 px-4 ">
          <ul className="w-full flex gap-6 justify-end lg:justify-center xl:gap-8 tracking-wide">

            {/* {subNavItems.map((item, index) => (
              <>
                <li className="flex-shrink-0 " key={index}>
                  <Link
                    className="hover:underline text-sm font-medium text-slate-500 hover:text-rose-800 relative"
                    onMouseEnter={() => setIsDrop(true)}
                    onMouseLeave={() => setIsDrop(false)}
                  >
                    {item}
                    {isDrop && (
                      <div className="w-[80vw] h-auto p-12 absolute left-[50%] translate-x-[-50%] rounded-b-[20px] top-8 bg-white border shadow-xl font-mono l-[30px] z-30 navItemMultipage">
                      </div>
                    )}
                  </Link>
                </li>
              </>
            ))} */}

            {Object.keys(navItemData).map((category, index) => {
              const categoryData = navItemData[category];
              if (!categoryData) return null;

              return (
                <li className="flex-shrink-0 " key={index}>
                  <Link
                    className="hover:underline text-sm font-medium text-slate-500 hover:text-rose-800 relative"
                    onMouseEnter={() => {
                      setIsDrop(true);
                      setHoveredCategory(category);
                    }}
                    onMouseLeave={() => {
                      setIsDrop(false);
                      setHoveredCategory(null);
                    }}
                  >
                    {category}
                    {isDrop && hoveredCategory === category && (
                      <div onMouseEnter={() => {
                        setIsDrop(true);
                        setHoveredCategory(category);
                      }} className={"w-[30rem] h-auto px-8 py-4 absolute rounded-b-[20px] top-4 bg-white shadow-xl l-[30px] z-30 navItemMultipage grid grid-cols-3 gap-5"}>
                        {categoryData.map((subcategory) => {
                          const subcategoryLabel = Object.keys(subcategory)[0];
                          const subcategoryItems = subcategory[subcategoryLabel];
                          if (!subcategoryItems) return null;
                          console.log(categoryData);

                          return (
                            <div className="w-full" key={subcategoryLabel}>
                              <h3 className="text-black font-semibold text-sm leading-tight py-2 tracking-tight">{subcategoryLabel}</h3>
                              <ul>
                                {subcategoryItems.map((item) => (
                                  <li className="text-slate-500 text-[0.8rem] hover:text-rose-800" key={item}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </Link>
                </li>
              );
            })}

            {/* --------------------- Remove line below after this --------------------------- */}
            <Link to="/membership"
              className="hover:underline text-sm font-medium flex items-center justify-between px-2 text-slate-500 hover:text-rose-800 relative"
            >Membership</Link>
            <Link to="/virtual-try-on"
              className="hover:underline text-sm font-medium flex items-center justify-between px-2 text-slate-500 hover:text-rose-800 relative"
            >Virtual TryOn</Link>
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar1;
