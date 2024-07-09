import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom'
import Filter from '../components/ProductList/Filter'
import CardItem from '../components/ProductList/CardItem';

const ProductList = () => {

    const [isCategory, setcategory] = useState(false);
    const [isPrice, setPrice] = useState(false);
    const [isReview, setReview] = useState(false);
    const [isColor, setColor] = useState(false);
    const [isMaterial, setMaterial] = useState(false);
    const [isOffer, setOffer] = useState(false);

    const [isPrices, setPrices] = useState(false);

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

    const handlePrices = () => {
        setPrices(!isPrices)
    }

    const dropdown = [
        {
            id: 1,
            name: 'Category',
            func: handleCate,
            isOpen: isCategory,
            options: ['option1', 'option2']
        },
        {
            id: 2,
            name: 'Price',
            func: handlePrice,
            isOpen: isPrice,
            options: ['option1', 'option2']
        },
        {
            id: 3,
            name: 'Review',
            func: handleReview,
            isOpen: isReview,
            options: ['option1', 'option2']
        },
        {
            id: 4,
            name: 'Color',
            func: handleColor,
            isOpen: isColor,
            options: ['option1', 'option2']
        },
        {
            id: 5,
            name: 'Material',
            func: handleMaterial,
            isOpen: isMaterial,
            options: ['option1', 'option2']
        },
        {
            id: 6,
            name: 'Offer',
            func: handleOffer,
            isOpen: isOffer,
            options: ['option1', 'option2']
        },

    ]

    return (
        <>
            <div className='flex flex-col items-center w-full h-full'>
                {/* Home > Skin */}
                <div className='flex flex-col gap-8 w-full px-[3rem] mb-4'>
                    <div className='flex items-center'>
                        <ol className="inline-flex items-center gap-3">
                            <li className='inline-flex items-center'>
                                <Link to={'/'} className='inline-flex items-center tracking-tighter text-lg font-medium'>
                                    Home
                                </Link>
                            </li>
                            <IoIosArrowForward size={22} />
                            <li className='inline-flex items-center'>
                                <Link to={'/products'} className='inline-flex items-center tracking-tighter text-lg font-medium'>
                                    Skin care
                                </Link>
                            </li>
                        </ol>
                    </div>

                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-2'>
                            {dropdown.map((d) => {
                                return <div key={d.id} className='flex items-center relative'>
                                    <button onClick={d.func} className='bg-[#d4d4d4] px-4 py-2 rounded-full flex items-center gap-2 font-medium'>
                                        {d.name} <IoIosArrowDown size={15} />
                                    </button>

                                    {d.isOpen && (
                                        <div className="absolute top-10 left-0 rounded-md shadow-lg bg-[#fff] w-48 z-50">
                                            <ul className="py-2 text-sm">
                                                {d.options.map((p, index) => {
                                                    return <li key={index} className="px-4 py-2 hover:bg-gray-100">
                                                        <Link to="/" className="text-gray-800  hover:text-gray-900"> {p}
                                                        </Link>
                                                    </li>
                                                })}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            })}

                        </div>
                        <div className='relative'>
                            <button onClick={handlePrices} className='border border-[#d4d4d4] px-4 py-2 rounded-full flex items-center gap-2'>
                                <span>Prices</span> <IoIosArrowDown size={15} />
                            </button>

                            {isPrices && (
                                <div className="absolute top-10 left-0 rounded-md shadow-lg bg-[#fff] w-48 z-50">
                                    <ul className="py-2 text-sm">
                                        <li className="px-4 py-2 hover:bg-gray-100">
                                            <Link
                                                to="/"
                                                className="text-gray-800  hover:text-gray-900"
                                            >
                                                p
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Filters and Cards */}
                <div className='flex'>
                    {/* Filters */}
                    <div className='w-[25%]'>
                        <Filter />
                    </div>

                    {/* Cards */}
                    <div className='flex flex-col items-center w-[70%]'>
                        <div className="makeup flex justify-between w-full">
                            <div className='flex items-center gap-2'>
                                <span className="a font-medium text-[1.3rem] text-gray-600">MakeUp</span>
                                <IoIosArrowForward size={22} />
                                <span className="aa font-semibold text-[1.3rem] text-black">Lipstick</span>
                            </div>
                            <div className="prodline flex font-normal items-center gap-5">
                                <div className="show text-[1.1rem] text-gray-600">Showing 1-10 of 100 Products</div>
                                <div className="sortby text-[18px]">
                                    <label htmlfor="sort" className='text-gray-600'>Sort by: </label>
                                    <select className="select bg-transparent border-none text-[16px]" name="products" id="sort">
                                        <option value="a" selected>Most popular</option>
                                        <option value="b">b</option>
                                        <option value="c">c</option>
                                        <option value="d">d</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Cards*/}
                        <div>
                            <CardItem />
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList