import React from 'react';
import { MdStar } from 'react-icons/md'; 

const SaleHeader = () => {
  const saleText = "Sale Live ";
  let repeatCount = 20; 

  if (window.innerWidth <= 600) { 
    repeatCount = 15; 
  }

  const repeatedTextArray = new Array(repeatCount).fill(saleText);

  return (
    <header className="sale-header bg-[#7c85d2] overflow-hidden">
      <div className="sale-text text-[#fff] p-[0.1rem] font-['Montserrat]">
        <div className="marquee whitespace-nowrap animate-[marquee_10s_linear_infinite]">
          {repeatedTextArray.map((text, index) => (
            <span key={index} className="sale-item inline-flex items-center">
              <span className="sale-live-text mr-2">{text}</span> 
              <MdStar className="sale-icon text-[#000] mr-2" />
            </span>
          ))}
          {repeatedTextArray.map((text, index) => (
            <span key={index + repeatCount} className="sale-item inline-flex items-center">
              <span className="sale-live-text mr-2">{text}</span> 
              <MdStar className="sale-icon text-[#000] mr-2" />
            </span>
          ))}
        </div>
      </div>
    </header>
  );
};

export default SaleHeader;
