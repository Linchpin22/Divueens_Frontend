import React, { useEffect, useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { Link, useParams } from 'react-router-dom'
import { MdFilterList } from 'react-icons/md';
import Filter from '../components/ProductList/Filter'
import CardItem from '../components/ProductList/CardItem'
import productDetails from '../components/ProductList/ProductListItemData';

const ProductList = () => {
    const { category, subcategory } = useParams()
    console.log(subcategory,': subcategory to be used later')

    console.log(category, subcategory , 'subcategory Product List')
    const [openDropdown, setOpenDropdown] = useState(null);
    const handleDropdownClick = (dropdownId) => {
        if (openDropdown === dropdownId) {
            setOpenDropdown(null);
        } else {
            setOpenDropdown(dropdownId);
        }
    };

    const filterItemsCategory = (cat) => {
        const newItems = productDetails.filter((newval) => newval.category === cat)
        setItem(newItems)
    }

    const checkDName = (p, dname) => {
        if (dname === 'Review') {
            const newItems = productDetails.filter((newval) => newval.rating == p)
            setItem(newItems)
        }
        else if (dname === 'Price') {
            const newItems = productDetails.filter((newval) => newval.price == p)
            setItem(newItems)
        }
        else if (dname === 'Color') {
            const newItems = productDetails.filter((newval) => newval.shade == p)
            setItem(newItems)
        }
        else if (dname === 'Material') {
            const newItems = productDetails.filter((newval) => newval.material == p)
            setItem(newItems)
        }
        else {
            const newItems = productDetails.filter((newval) => newval.discount == p)
            setItem(newItems)
        }
    }
    const [item, setItem] = useState(productDetails)
    const [isCategory, setcategory] = useState(false);
    const [isPrice, setPrice] = useState(false);
    const [isReview, setReview] = useState(false);
    const [isColor, setColor] = useState(false);
    const [isMaterial, setMaterial] = useState(false);
    const [isOffer, setOffer] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth > 1024);

    const handleCate = () => {
        setcategory(!isCategory)
    }
    const handlePrice = () => {
        setPrice(!isPrice)
    }
    const handleReview = () => {
        setReview(!isReview)
    }
    const handleColor = () => {
        setColor(!isColor)
    }
    const handleMaterial = () => {
        setMaterial(!isMaterial)
    }
    const handleOffer = () => {
        setOffer(!isOffer)
    }

    const changeData = (val) => {
        setItem(val)
    }


    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };



    return (
        <>
            <div className='flex flex-col items-center w-full h-full my-6'>
                {/* Home > Skin */}
                <div className='flex flex-col gap-4 w-full px-5'>
                    <div className='flex flex-wrap items-center justify-between gap-4 sm:gap-0'>
                        <ol className="inline-flex items-center gap-3">
                            <li className='inline-flex items-center'>
                                <Link to={'/'} className='inline-flex items-center tracking-tighter text-[0.8rem] font-medium'>
                                    Home
                                </Link>
                            </li>
                            <IoIosArrowForward size={15} />
                            <li className='inline-flex items-center'>
                                <Link to={'/products'} className='inline-flex items-center tracking-tighter text-[0.8rem] font-medium'>
                                    {/* Skin care */} { category }
                                </Link>
                            </li>
                            
                            <IoIosArrowForward size={15} />
                            <li className='inline-flex items-center'>
                                <Link to={'/products'} className='inline-flex items-center tracking-tighter text-[0.8rem] font-medium'>
                                    {/* Skin care */} { subcategory }
                                </Link>
                            </li>

                            <div className='flex items-center gap-1 md:gap-2 lg:hidden'>
                                <IoIosArrowForward size={15} />
                                <span className="tracking-tighter text-[0.8rem] md:text-[0.9rem] font-medium">MakeUp</span>
                                <IoIosArrowForward size={15} />
                                <span className="tracking-tighter text-[0.8rem] md:text-[0.9rem] font-medium">Lipstick</span>
                            </div>
                        </ol>
                        <button
                            className="text-[0.8rem] sm:text-[0.9rem] flex items-center justify-between gap-2 px-2 text-left rounded-full border md:px-4 md:py-1 lg:hidden"
                            onClick={toggleMenu}
                        >
                            Filters
                            <MdFilterList size={15} />
                        </button>

                        {showMenu && (
                            <div
                                className="fixed bottom-0 left-0 overflow-auto w-full h-[29rem] bg-rose-200 shadow-md z-[1001]"
                            >
                                <div className="flex justify-between h-16 items-center px-4 bg-rose-200 text-rose-700 sticky top-0 left-0 right-0 z-50">
                                    <h5 className="text-lg font-semibold">Filters</h5>
                                    <button type="button" className="text-[3rem] cursor-pointer" onClick={toggleMenu}>&times;</button>
                                </div>

                                <div className="navbar-nav p-4">
                                    <Filter itemData={productDetails} changedFunction={changeData} small={true} />
                                </div>
                            </div>
                        )}
                    </div>

                </div>

                {/* Filters and Cards */}
                <div className='flex flex-col w-full lg:flex-row '>
                    {/* Filters */}
                    <div className='hidden lg:inline-flex'>
                        <Filter itemData={productDetails} changedFunction={changeData} />
                    </div>

                    {/* Cards */}
                    <div className='flex flex-col items-center w-full py-5 px-4 sm:px-10 lg:pr-6 lg:pl-4'>
                        <div className="makeup flex flex-col gap-3 md:flex-row justify-between w-full">
                            <div className='hidden lg:flex items-center gap-2'>
                                <span className="a font-medium text-[0.9rem] text-gray-600">MakeUp</span>
                                <IoIosArrowForward size={18} />
                                <span className="aa font-semibold text-[0.9rem] text-black">Lipstick</span>
                            </div>
                            <div className="prodline flex font-normal items-center gap-5">
                                <div className="show text-[0.7rem] md:text-[0.8rem] text-gray-600">Showing 1-10 of 100 Products</div>
                                <div className="sortby text-[0.7rem] md:text-[0.8rem]">
                                    <label htmlFor="sort" className='text-gray-600'>Sort by: </label>
                                    <select className="select bg-transparent border-none text-[0.7rem] md:text-[0.8rem]" name="products" id="sort">
                                        <option defaultValue={'a'}>Most popular</option>
                                        <option value="b">Ascending A to Z</option>
                                        <option value="c">Descending Z to A</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Cards*/}
                        <CardItem item={item} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList