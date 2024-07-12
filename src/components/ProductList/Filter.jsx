import React from 'react';
import { useState } from 'react';
import data from './ProductListItemData'
import { BiReset } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { MdFilterList } from 'react-icons/md';


const Filter = ({ itemData, changedFunction, small }) => {

    const [item, setItem] = useState(itemData)
    const menuItem = [... new Set(itemData.map(val => val.category))]
    const menuColor = [... new Set(itemData.map(val => val.color))]
    const menuDressStyle = [... new Set(itemData.map(val => val.dresStyle))]

    const [selectedItem, setSelectedItem] = useState([])
    let arrValue = []
    let newItems = itemData

    const AllItemsCategory = () => {
        changedFunction(newItems)
    }

    const filterItems = (userChoiceOption) => {
        arrValue = selectedItem.push(userChoiceOption)
    }

    const filterSubmitbtn = () => {
        setSelectedItem(arrValue)
        let newItems = itemData.filter((newval) => {
            return selectedItem.includes(newval.category) && selectedItem.includes(newval.dresStyle) && selectedItem.includes(newval.color)
        })
        setItem(newItems)
        changedFunction(newItems)
    }
    const menuBrands = [... new Set(data.map(val => val.brands))]

    const [showPrice, setShowPrice] = useState(false);
    const priceButtonClick = () => {
        setShowPrice(!showPrice);
    };

    const [showShades, setShowShades] = useState(false);
    const shadesButtonClick = () => {
        setShowShades(!showShades);
    };

    const [showDressStyle, setShowDressStyle] = useState(false);
    const dressStyleButtonClick = () => {
        setShowDressStyle(!showDressStyle);
    };
    const [showBrands, setShowBrands] = useState(false);
    const brandsButtonClick = () => {
        setShowBrands(!showBrands);
    };



    return (
        <>
            {small ? (
                <>
                    {/* Filters Category Small device */}
                    <div className="w-full mt-5 flex flex-col gap-2">
                        <ul className="text-[15px] leading-[30px] text-rose-700 font-medium">
                            <label htmlFor='all'><li onClick={() => AllItemsCategory()} className="flex justify-between items-center cursor-pointer">All <BiReset size={22} /> </li></label>
                            {
                                menuItem.map(val =>
                                    <label htmlFor='categ'><li onClick={() => filterItems(val)} className="flex justify-between items-center my-2"><p>{val}</p> <input type="checkbox" id='categ' name='categ' /></li></label>
                                )
                            }
                        </ul>

                        <div className="w-full flex flex-col">
                            {/* Price Heading */}
                            <div className="flex justify-between items-center">
                                <p className="text-[15px] leading-[30px] text-rose-700 font-medium">Price</p>

                                {showPrice && (
                                    <div className="mt-2">
                                        <input type="range" name="" id="" />
                                    </div>)}
                            </div>
                        </div>

                        {/* Shades */}
                        <div className='w-full flex flex-col'>
                            <div className="flex justify-between items-center" onClick={shadesButtonClick}>
                                <p className="text-[15px] leading-[30px] text-rose-700 font-medium">Shades</p> <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out text-rose-700 ${showShades ? 'rotate-180' : 'rotate-0'}`} />
                            </div>
                            {/* Shades Category */}
                            {showShades && (
                                <div className='w-full flex flex-wrap gap-6 border-2 px-4 py-2 rounded-lg'>
                                    {
                                        menuColor.map(val =>
                                            <div onClick={() => filterItems(val)} className={` h-[30px] w-[30px] ${val} rounded-full border-b-slate-600 border-[2px] cursor-pointer`}></div>
                                        )}
                                </div>
                            )}
                        </div>

                        {/* Dress Styles */}
                        <div className='w-full flex flex-col'>
                            {/* Dress Styles Heading */}
                            <div className="flex justify-between items-center" onClick={dressStyleButtonClick}>
                                <p className="text-[15px] leading-[30px] text-rose-700 font-medium">Dress Styles</p>
                                <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out text-rose-700 ${showDressStyle ? 'rotate-180' : 'rotate-0'}`} />
                            </div>
                            {/* Dress Styles Category */}
                            {showDressStyle && (
                                <div className='flex flex-col border-2 px-4 py-2 rounded-lg'>
                                    {
                                        menuDressStyle.map(val =>
                                            <label htmlFor='categd'><li onClick={() => filterItems(val)} className={`flex justify-between items-center text-[15px] leading-[30px]`}><p>{val}</p><input type="checkbox" name='categd' id='categd' /></li></label>
                                        )}

                                </div>)}
                        </div>

                        {/* Brands */}
                        <div className="w-full flex flex-col">
                            <div className="">
                                {/* Brands Heading */}
                                <div className="flex justify-between items-center" onClick={brandsButtonClick} >
                                    <p className="text-[15px] leading-[30px] text-rose-700 font-medium">Brands</p>
                                    <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out text-rose-700 ${showBrands ? 'rotate-180' : 'rotate-0'}`} />
                                </div>
                                {/* Brands Category */}
                                {showBrands && (
                                    <div className='flex flex-col border-2 px-4 py-2 rounded-lg'>
                                        {
                                            menuBrands.map(val =>
                                                <label htmlFor="categb"><li onClick={() => filterItems(val)} className={`flex justify-between items-center text-[15px] leading-[30px]`}><p>{val}</p><input type="checkbox" name='categb' id='categb' /></li></label>
                                            )}

                                    </div>)}
                            </div>
                        </div>

                        <button onClick={() => filterSubmitbtn()} className='applyFilter mx-auto text-center hover:bg-rose-700 hover:text-white py-2 px-5 rounded-full bg-transparent border-[2px] border-rose-700 text-rose-700 font-semibold trasnsition-all duration-200'>Apply Filter</button>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center m-8 h-fit w-[25%] rounded-xl border-[2px] border-gray-200 px-6 py-9 lg:min-w-56 xl:min-w-80">
                    {/* Filters */}
                    <div className="w-full flex flex-col">
                        {/* Filters Heading */}
                        <div className="flex justify-between items-center w-full">
                            <p className="text-[20px] font-semibold text-black">Filters</p>
                            <MdFilterList size={22} />
                        </div>
                        <hr className="my-4 w-full" />
                        {/* Filters Category */}
                        <div className="w-full">
                            <ul className="text-[15px] leading-[30px] 
                    text-gray-600">
                                <label htmlFor='all'><li onClick={() => AllItemsCategory()} className="flex justify-between items-center text-[1.1rem] cursor-pointer">All <BiReset size={24} /> </li></label>
                                {
                                    menuItem.map(val =>
                                        <label htmlFor='categ'><li onClick={() => filterItems(val)} className="flex justify-between items-center text-[1.1rem] my-1"><p>{val}</p> <input type="checkbox" className='w-5 h-5' id='categ' name='categ' /></li></label>
                                    )
                                }
                            </ul>
                        </div>
                        <hr className="my-4 w-full" />
                    </div>
                    {/* Price */}
                    <div className="w-full flex flex-col">
                        {/* Price Heading */}
                        <div className="flex justify-between items-center" onClick={priceButtonClick}>
                            <p className="font-semibold text-[20px]">Price</p>
                            <IoIosArrowDown size={22} className={`transition-all duration-[0.3s] ease-in-out ${showPrice ? 'rotate-180' : 'rotate-0'}`} />
                        </div>
                        {/* Price Range Slider */}
                        {showPrice && (
                            <div className="relative w-full mt-3">
                                <input type="range" name="" id="" />
                            </div>)}
                        <hr className='my-4 w-full' />
                    </div>
                    {/* Shades */}
                    <div className='w-full flex flex-col'>
                        <div className="flex justify-between items-center" onClick={shadesButtonClick}>
                            <p className="font-semibold text-[20px]">Shades</p>
                            <IoIosArrowDown size={22} className={`transition-all duration-[0.3s] ease-in-out ${showShades ? 'rotate-180' : 'rotate-0'}`} />
                        </div>
                        {/* Shades Category */}
                        {showShades && (
                            <div className='min-h-[100px] w-full flex flex-wrap gap-6 mt-4'>
                                {
                                    menuColor.map(val =>
                                        <div onClick={() => filterItems(val)} className={` h-[30px] w-[30px] ${val} rounded-full border-b-slate-600 border-[2px] cursor-pointer`}></div>
                                    )}
                            </div>)}
                        <hr className='my-4 w-full' />
                    </div>
                    {/* Dress Styles */}
                    <div className='w-full flex flex-col'>
                        {/* Dress Styles Heading */}
                        <div className="flex justify-between items-center" onClick={dressStyleButtonClick}>
                            <p className="font-semibold text-[20px]">Dress Styles</p>
                            <IoIosArrowDown size={22} className={`transition-all duration-[0.3s] ease-in-out ${showDressStyle ? 'rotate-180' : 'rotate-0'}`} />
                        </div>
                        {/* Dress Styles Category */}
                        {showDressStyle && (
                            <div className='my-4 flex flex-col'>
                                {
                                    menuDressStyle.map(val =>
                                        <label htmlFor='categd'><li onClick={() => filterItems(val)} className={`flex justify-between items-center text-[15px] leading-[30px] text-gray-600`}><p>{val}</p><input type="checkbox" name='categd' id='categd' /></li></label>
                                    )}

                            </div>)}
                        <hr className="my-4 w-full" />
                    </div>
                    {/* Brands */}
                    <div className="w-full flex flex-col">
                        <div className="">
                            {/* Brands Heading */}
                            <div className="flex justify-between items-center" onClick={brandsButtonClick} >
                                <p className="font-semibold text-[20px]">Brands</p>
                                <IoIosArrowDown size={22} className={`transition-all duration-[0.3s] ease-in-out ${showBrands ? 'rotate-180' : 'rotate-0'}`} />
                            </div>
                            {/* Brands Category */}
                            {showBrands && (
                                <div className='my-4 flex flex-col'>
                                    {
                                        menuBrands.map(val =>
                                            <label htmlFor="categb"><li onClick={() => filterItems(val)} className={`flex justify-between items-center text-[15px] leading-[30px] text-gray-600`}><p>{val}</p><input type="checkbox" name='categb' id='categb' /></li></label>
                                        )}

                                </div>)}
                        </div>
                    </div>
                    <button onClick={() => filterSubmitbtn()} className='applyFilter my-8  hover:bg-rose-700 hover:text-white py-2 px-5 rounded-[50px] bg-white border-[2px] border-rose-700 text-rose-700 trasnsition-all duration-200'>Apply Filter</button>
                </div>
            )}
        </>
    );
};

export default Filter

