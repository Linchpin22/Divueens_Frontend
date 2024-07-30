import React, { useState } from "react";
const ReadMore = ({ text, fullText }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div className="text-center w-full mx-auto">
        {/* <h3 className="text-lg md:text-xl font-semibold mt-4">{name}</h3> */}

        <button onClick={toggleExpand} className="hover:border-b-2 border-black font-semibold text-nowrap cursor-pointer rounded py-1 px-2">

          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
        <div className={`text-gray-700 text-justify w-full mt-2`}>
          {isExpanded && text}
        </div>
        
      </div>
    )
  };
  
  export default ReadMore;