import { useEffect, useRef, useState } from 'react';
import product1 from '../../../assets/product-1.jpg';
import product2 from '../../../assets/product-2.jpeg';
import product3 from '../../../assets/product-3.jpeg';
import product4 from '../../../assets/product-4.jpg';
import product5 from '../../../assets/product-5.jpeg';
import product6 from '../../../assets/product-6.jpeg';
import { FiSearch, FiTrendingUp } from 'react-icons/fi';

const SearchBox = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);

    const [recentSearches, setRecentSearches] = useState([
        'sunscreen',
        'moisturizer',
        'baby cream',
        'facewash',
        'scrub',
        'shampoo',
        'conditioner',
    ]);

    const defaultRecommendations = [
        'sunscreen',
        'moisturizer',
        'baby cream',
        'facewash',
        'shampoo',
        'conditioner',
    ];

    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const popularProducts = [
        { name: 'Face Wash', price: 'Rs 200/-', image: product1 },
        { name: 'Face Care', price: 'Rs 300/-', image: product2 },
        { name: 'Shampoo', price: 'Rs 400/-', image: product3 },
        { name: 'Moisturizer', price: 'Rs 500/-', image: product4 },
        { name: 'Sunscreen', price: 'Rs 600/-', image: product5 },
        { name: 'Conditioner', price: 'Rs 700/-', image: product6 },
    ];

    const handleChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if (value) {
            const filtered = recentSearches.filter((search) =>
                search.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredSuggestions(filtered);

            const filteredProds = popularProducts.filter((product) =>
                product.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredProducts(filteredProds);
        } else {
            setFilteredSuggestions([]);
            setFilteredProducts([]);
        }
    };

    const handleFocus = () => {
        setShowDropdown(true);
    };

    const handleBlur = () => {
        setTimeout(() => {
            setShowDropdown(false);
        }, 200);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative w-full max-w-md mx-auto">
            <input type="text" value={searchTerm} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="Search any product" className="w-full pl-4 pr-20 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-gray-400" />
            <FiSearch className="absolute top-3 right-3 text-gray-400" />
            {showDropdown && (<div ref={dropdownRef} className="absolute w-full mt-0.5 bg-white border rounded-lg shadow-lg z-10">
                <div className="p-4"> <h3 className="text-lg font-semibold mb-2 flex items-center text-gray-800 text-left"><FiTrendingUp size={23} className="mr-2" />Trending Searches</h3>
                    <div className="grid grid-cols-2 text-base text-gray-600 text-left pl-6">
                        {searchTerm === '' && defaultRecommendations.map((recommendation, index) => (
                            <div key={index} className="m-2 p-1 hover:bg-rose-200 cursor-pointer rounded-lg pl-1"> {recommendation}</div>
                        ))}
                        {filteredSuggestions.map((suggestion, index) => (<div key={index} className="m-2 p-1 hover:bg-rose-200 cursor-pointer rounded-lg pl-1"> {suggestion}</div>
                        ))}
                    </div>
                    <div className="border-t border-gray-400 w-full my-4"></div>
                    <h3 className="text-lg font-semibold mb-2 text-left">Popular Products</h3>
                    <div className="grid grid-cols-3 gap-4">
                        {searchTerm === '' && popularProducts.map((product, index) => (
                            <div key={index} className="flex flex-col items-center mb-4 p-2 hover:bg-rose-200 cursor-pointer rounded-lg"><img src={product.image} alt={product.name} className="w-16 h-16 mb-2" /><div className="text-sm font-medium text-gray-800 text-center">{product.name}</div><div className="text-sm text-gray-600">{product.price}</div></div>
                        ))}
                        {filteredProducts.map((product, index) => (
                            <div key={index} className="flex flex-col items-center mb-4 p-2 hover:bg-rose-200 cursor-pointer rounded-lg"><img src={product.image} alt={product.name} className="w-16 h-16 mb-2" /><div className="text-sm font-medium text-gray-800 text-center">{product.name}</div><div className="text-sm text-gray-600">{product.price}</div></div>
                        ))}
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default SearchBox;