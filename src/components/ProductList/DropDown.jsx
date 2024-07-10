import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';

const DropDown = () => {
    const [showMenu, setShowMenu] = useState(false);
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

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

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
            <div className='hidden lg:flex items-center justify-between w-full'>
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
                                                <Link
                                                    href={''}
                                                    className="text-gray-800  hover:text-gray-900"
                                                >
                                                    {p}
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
                                        href={''}
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
            <button
                className="w-fit px-4 py-1 text-left rounded-full border lg:hidden"
                onClick={toggleMenu}
            >
                Filters
            </button>

            {showMenu && (
                <div
                    className="fixed bottom-0 left-0 overflow-auto w-full h-[29rem] bg-white shadow-md p-4 z-[1000]"
                >
                    <div className="flex justify-between items-center">
                        <h5 className="text-lg font-bold">Filters</h5>
                        <button type="button" className="text-[3rem] cursor-pointer" onClick={toggleMenu}>&times;</button>
                    </div>

                    <div className="navbar-nav">
                        {dropdown.map((d) => {
                            return <div key={d.id} className="py-2">
                                <details className="group rounded-lg border-[1px] hover:shadow-md">
                                    <summary className="flex justify-between items-center font-medium cursor-pointer list-none px-3 py-4">
                                        <span className="">
                                            {d.name}
                                        </span>
                                        <span className="transition group-open:rotate-180">
                                            <IoIosArrowDown />
                                        </span>
                                    </summary>
                                    <hr className="border-[1px] border-[#D3D3D3]" />
                                    {d.options.map((p, i) => {
                                        return <p key={i} className="group-open:animate-fadeIn px-3 py-4">
                                            {p}
                                        </p>
                                    })}
                                </details>
                            </div>
                        })}
                    </div>
                </div>
            )}
        </>
    )
}

export default DropDown