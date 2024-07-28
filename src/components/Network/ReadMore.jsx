import React, { useState } from "react";
const ReadMore = ({ text, fullText }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="text-center p-4 w-full mx-auto">
        {/* <h3 className="text-lg md:text-xl font-semibold mt-4">{name}</h3> */}
        <button onClick={toggleExpand} className="text-nowrap bg-rose-700 text-white hover:bg-rose-600 hover:text-white rounded-lg shadow-md hover:shadow-inner py-1 px-2  font-semibold">
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
        <div className={`text-gray-700 w-full mt-2`}>
          {isExpanded && text}
        </div>
        
      </div>
    )
  };
  
  export default ReadMore;