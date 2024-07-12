import React, { useEffect, useState } from 'react';
import productData from '../components/ProductDescription/productData';
import StarRating from '../components/ProductDescription/StarRating';
import SizeSelector from '../components/ProductDescription/SizeSelector';
import QuantitySelector from '../components/ProductDescription/QuantitySelector';
import RelatedProducts from '../components/ProductDescription/RelatedProducts';

const ProductDetails = () => {
  const [selectedSize, setSelectedSize] = useState('106 cm (42)');
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(productData[0]);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (newQuantity) => {
    if (selectedProduct.availability === 'Out of Stock') {
      alert('Out of Stock');
      return;
    }
    setQuantity(newQuantity);
  };

  const handleThumbnailChange = (product) => {
    setSelectedProduct(product);
  };

  const [activeTab, setActiveTab] = useState('description');
  const [view, changeview] = useState(false);

  useEffect(() => changeview(false), [activeTab]);

  const RenderContent = ({ val }) => {
    return (
      <div>
        <div className="sm:text-left text-center -mr-[107px] sm:-[-mr-0] ">
          {view ? selectedProduct[val] : selectedProduct[val].slice(0, 430) + " ..."}
        </div>
        <div className="text-center">
          <button
            className="text-rose-600 mt-2 2xs:-mr-[150px] 1xs:-mr-[110px] sm:-mr-[100px] xl:-ml-[110px]"
            onClick={() => changeview(!view)}
          >
            {view ? 'Less' : 'More'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center p-8 space-y-8">
      <div className="flex flex-col sm:ml-[90px] 2xs:ml-[120px] 1xs:ml-[70px] xs:ml-[60px] lg:flex-row w-full">
        {/* Product Image and Thumbnails */}
        <div className="flex flex-col  gap-2 w-full lg:w-1/2  items-center lg:items-start">
          <div className="flex justify-center lg:justify-start w-[150%] xs:w-[140%] sm:w-full mb-4">
            <img
              src={selectedProduct.src}
              alt="Product"
              className="w-[120%] h-auto object-cover  lg:h-auto"
            />
          </div>
          <div className="flex justify-center lg:justify-start  gap-2 w-[30%] sm:w-full sls:w-[25%] items-center">
            {productData.map((product) => (
              <img
                key={product.id}
                src={product.src}
                alt={product.alt}
                className={`w-[10rem] h-[6rem] sm:h-[8rem] object-cover cursor-pointer hover:border-rose-500 border-2 ${selectedProduct.src === product.src ? 'border-rose-500' : 'border-gray-300'}`}
                onClick={() => handleThumbnailChange(product)}
              />
            ))}
          </div>
        </div>
        {/* Product Details */}
        <div className="flex-grow w-full lg:w-1/2 text-lg text-center lg:text-left flex flex-col justify-between  lg:pl-8">
          <div className="text-gray-600">
            <p>Brand: {selectedProduct.brand}</p>
            <p>Model: {selectedProduct.model}</p>
            <p>Availability: {selectedProduct.availability}</p>
          </div>
          <h2 className="text-2xl font-bold my-4">{selectedProduct.name}</h2>
          <div className="flex ml-[90px] 1xs:ml-[110px] xs:ml-[140px] sm:ml-0">
            <StarRating rating={4} />
          </div>
          <ul className="list-disc list-inside mt-4 space-y-2 -ml-[40px] text-left sm:text-center- -mr-[40px] sm:-ml-0 sm:-mr-0">
            {selectedProduct.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
          <SizeSelector selectedSize={selectedSize} onSizeChange={handleSizeChange} />
          <div className="mt-4 text-red-500">
            <p>Original Price:<del> ${selectedProduct.originalPrice.toFixed(2)}</del></p>
            <p className="font-bold text-green-500">Discounted Price: ${selectedProduct.discountedPrice.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-start 2xs:-ml-[80px] 1xs:-ml-[55px] xs:-ml-[25px] sm:-ml-0 md:justify-center mt-4 space-x-4">
            <QuantitySelector quantity={quantity} onQuantityChange={handleQuantityChange} />
            <button className="bg-rose-700 text-white px-5 py-2 hover:bg-rose-500 rounded-[13px] flex-shrink-0">
              Buy Now
            </button>
            <button className="bg-rose-700 text-white px-5 py-2 hover:bg-rose-500 rounded-[13px] flex-shrink-0">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      {/* Tabs */}
      <div className="w-full max-w-5xl">
        <div className="flex justify-center 2xs:ml-[140px] 1xs:ml-[100px] xl:ml-0 mr-[20] mb-[35] mt-[45px]">
          <button
            className={`sm:text-2xl text-xl  font-bold mr-4 ${activeTab === 'description' ? 'text-rose-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button
            className={`sm:text-2xl text-xl font-bold mr-4 ${activeTab === 'specification' ? 'text-rose-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('specification')}
          >
            Specification
          </button>
          <button
            className={`sm:text-2xl text-xl font-bold mr-4 ${activeTab === 'reviews' ? 'text-rose-600' : 'text-gray-500'}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>
        <div className="mt-4">
          <RenderContent val={activeTab} />
        </div>
      </div>
      <RelatedProducts />
    </div>
  );
};

export default ProductDetails;
