import React, { useState, useEffect } from 'react';
import data from './ProductListItemData';
import { BiReset } from 'react-icons/bi';
import { IoIosArrowDown } from 'react-icons/io';
import { MdFilterList } from 'react-icons/md';

const Filter = ({ itemData, changedFunction, small }) => {
    const [items, setItems] = useState(itemData);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedDressStyle, setSelectedDressStyle] = useState([]);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [priceRange, setPriceRange] = useState([200, 1000, 1000]);
    // hide and show
    const [showShades, setShowShades] = useState(false)
    const [showDressStyle, setShowDressStyle] = useState(false)
    const [showBrands, setShowBrands] = useState(false)

    const menuItem = [...new Set(itemData.map(val => val.category))];
    const menuColor = [...new Set(itemData.map(val => val.color))];
    const menuDressStyle = [...new Set(itemData.map(val => val.dresStyle))];
    const menuBrands = [...new Set(data.map(val => val.brands))];

    const filterItems = () => {
        let filteredItems = itemData.filter(item =>
            (selectedCategory.length === 0 || selectedCategory.includes(item.category)) &&
            (selectedBrands.length === 0 || selectedBrands.includes(item.brands)) &&
            (selectedDressStyle.length === 0 || selectedDressStyle.includes(item.dresStyle)) &&
            (selectedColor === null || item.color === selectedColor) &&
            item.price >= priceRange[0] &&
            item.price <= priceRange[1]
        );
        setItems(filteredItems);
        changedFunction(filteredItems);
    };

    useEffect(() => {
        filterItems();
    }, [selectedCategory, selectedColor, selectedDressStyle, priceRange, selectedBrands]);

    return (
        <>
            {small ? (
                <>
                    {/* Filters Category Small device */}
                    <div className="w-full mt-5 flex flex-col gap-2">
                        <ul className="text-[15px] leading-[30px] text-rose-700 font-medium">
                            <label htmlFor='all'>
                                <li onClick={() => {
                                    setSelectedCategory([]);
                                    setSelectedColor(null);
                                    setSelectedDressStyle([]);
                                }} className="flex justify-between items-center cursor-pointer text-[0.9rem]">All <BiReset size={18} /></li>
                            </label>
                            {menuItem.map((val, index) =>
                                <label htmlFor={`categ-${index}`} key={index}>
                                    <li className="flex justify-between items-center my-2 text-[0.9rem]">
                                        <p>{val}</p>
                                        <input
                                            type="checkbox"
                                            id={`categ-${index}`}
                                            name={`categ-${index}`}
                                            checked={selectedCategory.includes(val)}
                                            onChange={() => {
                                                setSelectedCategory(prev => prev.includes(val) ? prev.filter(item => item !== val) : [...prev, val]);
                                            }}
                                        />
                                    </li>
                                </label>
                            )}
                        </ul>

                        {/* Price Range Slider */}
                        <div className="relative w-full mt-3">
                            <input
                                type="range"
                                className='w-full'
                                min={priceRange[0]}
                                max={priceRange[2]}
                                value={priceRange[1]}
                                onChange={(e) => {
                                    const newValue = e.target.value;
                                    setPriceRange([priceRange[0], newValue, priceRange[2]]);
                                }}
                            />
                            <div className='flex items-center justify-between'>
                                <p className="text-sm text-gray-600">₹{priceRange[0]}</p> -
                                <p className='text-sm text-gray-600'>₹{priceRange[1]}</p> -
                                <p className='text-sm text-gray-600'>₹{priceRange[2]}</p>
                            </div>
                        </div>

                        {/* Shades */}
                        <div className='w-full flex flex-col'>
                            <div className="flex justify-between items-center" onClick={() => setShowShades(!showShades)}>
                                <p className="text-[15px] leading-[30px] text-rose-700 font-medium">Shades</p>
                                <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out text-rose-700 ${showShades ? 'rotate-180' : 'rotate-0'}`} />
                            </div>
                            {showShades && (
                                <div className='w-full flex flex-wrap gap-6 border-2 px-4 py-2 rounded-lg'>
                                    {menuColor.map(val =>
                                        <div
                                            key={val}
                                            onClick={() => setSelectedColor(val)}
                                            className={`h-[30px] w-[30px] ${val} rounded-full cursor-pointer border-2 border-transparent ${selectedColor === val ? 'border-x-black scale-[1.2] transition-all' : ''}`}
                                        ></div>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Dress Styles */}
                        <div className='w-full flex flex-col'>
                            <div className="flex justify-between items-center" onClick={() => setShowDressStyle(!showDressStyle)}>
                                <p className="text-[15px] leading-[30px] text-rose-700 font-medium">Dress Styles</p>
                                <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out text-rose-700 ${showDressStyle ? 'rotate-180' : 'rotate-0'}`} />
                            </div>
                            {showDressStyle && (
                                <div className='flex flex-col border-2 px-4 py-2 rounded-lg'>
                                    {menuDressStyle.map((val, index) =>
                                        <li className="flex justify-between items-center text-[0.9rem] my-1" key={index}>
                                            <label htmlFor={`categd-${index}`}>{val}</label>
                                            <input
                                                type="checkbox"
                                                id={`categd-${index}`}
                                                name={`categd-${index}`}
                                                checked={selectedDressStyle.includes(val)}
                                                onChange={() => {
                                                    setSelectedDressStyle(prev => prev.includes(val) ? prev.filter(item => item !== val) : [...prev, val]);
                                                }}
                                            />
                                        </li>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Brands */}
                        <div className="w-full flex flex-col">
                            <div className="">
                                <div className="flex justify-between items-center" onClick={() => setShowBrands(!showBrands)}>
                                    <p className="text-[15px] leading-[30px] text-rose-700 font-medium">Brands</p>
                                    <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out text-rose-700 ${showBrands ? 'rotate-180' : 'rotate-0'}`} />
                                </div>
                                {showBrands && (
                                    <div className='flex flex-col border-2 px-4 py-2 rounded-lg'>
                                        {menuBrands.map((val, index) =>
                                            <li className="flex justify-between items-center text-[0.9rem] my-1" key={index}>
                                                <label htmlFor={`categb-${index}`}>{val}</label>
                                                <input
                                                    type="checkbox"
                                                    id={`categb-${index}`}
                                                    name={`categb-${index}`}
                                                    checked={selectedBrands.includes(val)}
                                                    onChange={() => {
                                                        setSelectedBrands(prev => prev.includes(val) ? prev.filter(item => item !== val) : [...prev, val]);
                                                    }}
                                                />
                                            </li>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex flex-col items-center m-6 h-fit w-[25%] rounded-xl border-[2px] border-gray-200 px-6 py-9 lg:min-w-56">
                    {/* Filters */}
                    <div className="w-full flex flex-col">
                        <div className="flex justify-between items-center w-full">
                            <p className="text-[1rem] font-semibold text-black">Filters</p>
                            <MdFilterList size={20} />
                        </div>
                        <hr className="my-4 w-full" />
                        <div className="w-full">
                            <ul className="text-[15px] leading-[30px] text-gray-600">
                                <label htmlFor='all'>
                                    <li onClick={() => {
                                        setSelectedCategory([]);
                                        setSelectedColor(null);
                                        setSelectedDressStyle([]);
                                    }} className="flex justify-between items-center text-[0.9rem] cursor-pointer">All <BiReset size={20} /></li>
                                </label>
                                {menuItem.map((val, index) =>
                                    <li className="flex justify-between items-center text-[0.9rem] my-1" key={index}>
                                        <label htmlFor={`categ-${index}`}>{val}</label>
                                        <input
                                            type="checkbox"
                                            id={`categ-${index}`}
                                            name={`categ-${index}`}
                                            checked={selectedCategory.includes(val)}
                                            onChange={() => {
                                                setSelectedCategory(prev => prev.includes(val) ? prev.filter(item => item !== val) : [...prev, val]);
                                            }}
                                        />
                                    </li>
                                )}
                            </ul>

                            {/* Price Range Slider */}
                            <div className="relative w-full mt-3">
                                <input
                                    type="range"
                                    className='w-full'
                                    min={priceRange[0]}
                                    max={priceRange[2]}
                                    value={priceRange[1]}
                                    onChange={(e) => {
                                        const newValue = e.target.value;
                                        setPriceRange([priceRange[0], newValue, priceRange[2]]);
                                    }}
                                />
                                <div className='flex items-center justify-between'>
                                    <p className="text-sm text-gray-600">₹{priceRange[0]}</p> -
                                    <p className='text-sm text-gray-600'>₹{priceRange[1]}</p> -
                                    <p className='text-sm text-gray-600'>₹{priceRange[2]}</p>
                                </div>
                            </div>

                            {/* Shades */}
                            <div className='w-full flex flex-col mt-4'>
                                <div className="flex justify-between items-center" onClick={() => setShowShades(!showShades)}>
                                    <p className="text-[15px] leading-[30px] text-gray-700 font-medium">Shades</p>
                                    <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out text-gray-700 ${showShades ? 'rotate-180' : 'rotate-0'}`} />
                                </div>
                                {showShades && (
                                    <div className='w-full flex flex-wrap gap-6 border-2 px-4 py-2 rounded-lg'>
                                        {menuColor.map(val =>
                                            <div
                                                key={val}
                                                onClick={() => setSelectedColor(val)}
                                                className={`h-[30px] w-[30px] ${val} rounded-full cursor-pointer border-2 border-transparent ${selectedColor === val ? 'border-x-black scale-[1.2] transition-all' : ''}`}
                                            ></div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Dress Styles */}
                            <div className='w-full flex flex-col mt-4'>
                                <div className="flex justify-between items-center" onClick={() => setShowDressStyle(!showDressStyle)}>
                                    <p className="text-[15px] leading-[30px] text-gray-700 font-medium">Dress Styles</p>
                                    <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out text-gray-700 ${showDressStyle ? 'rotate-180' : 'rotate-0'}`} />
                                </div>
                                {showDressStyle && (
                                    <div className='flex flex-col border-2 px-4 py-2 rounded-lg'>
                                        {menuDressStyle.map((val, index) =>
                                            <li className="flex justify-between items-center text-[0.9rem] my-1" key={index}>
                                                <label htmlFor={`categd-${index}`}>{val}</label>
                                                <input
                                                    type="checkbox"
                                                    id={`categd-${index}`}
                                                    name={`categd-${index}`}
                                                    checked={selectedDressStyle.includes(val)}
                                                    onChange={() => {
                                                        setSelectedDressStyle(prev => prev.includes(val) ? prev.filter(item => item !== val) : [...prev, val]);
                                                    }}
                                                />
                                            </li>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Brands */}
                            <div className="w-full flex flex-col mt-4">
                                <div className="">
                                    <div className="flex justify-between items-center" onClick={() => setShowBrands(!showBrands)}>
                                        <p className="text-[15px] leading-[30px] text-gray-700 font-medium">Brands</p>
                                        <IoIosArrowDown size={15} className={`transition-all duration-[0.3s] ease-in-out text-gray-700 ${showBrands ? 'rotate-180' : 'rotate-0'}`} />
                                    </div>
                                    {showBrands && (
                                        <div className='flex flex-col border-2 px-4 py-2 rounded-lg'>
                                            {menuBrands.map((val, index) =>
                                                <li className="flex justify-between items-center text-[0.9rem] my-1" key={index}>
                                                    <label htmlFor={`categb-${index}`}>{val}</label>
                                                    <input
                                                        type="checkbox"
                                                        id={`categb-${index}`}
                                                        name={`categb-${index}`}
                                                        checked={selectedBrands.includes(val)}
                                                        onChange={() => {
                                                            setSelectedBrands(prev => prev.includes(val) ? prev.filter(item => item !== val) : [...prev, val]);
                                                        }}
                                                    />
                                                </li>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Filter;
