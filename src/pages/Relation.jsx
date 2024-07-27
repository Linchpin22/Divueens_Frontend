
import React, { useState } from 'react';
import pi from './../assets/pic.jpg';
import { MdOutlineFileDownload } from "react-icons/md";
import { RxCaretDown, RxCaretUp } from "react-icons/rx";
import l1 from './../components/InvestorRelation/year.json';
import l2 from './../components/InvestorRelation/quator.json';
import { BsCart2 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { GrGroup } from "react-icons/gr";
import Swal from 'sweetalert2';

const news = [
  {
    title: 'July 1, 2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo'
  },
  {
    title: 'July 1, 2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo'
  },
  {
    title: 'July 1, 2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo'
  },
  {
    title: 'July 1, 2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo'
  },
  {
    title: 'July 1, 2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo'
  },
];

function Relate() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedYear, setSelectedYear] = useState('2024/25');
  const [selectedQuarter, setSelectedQuarter] = useState('Q1 Apr - Jun');
  const [showAllNews, setShowAllNews] = useState(false);

  const toggleReadMore = () => {
    setShowAllNews(!showAllNews);
  };

  const getDownloadFilePath = (year, quarter) => {
    const yearPart = year.replace('/', '-');
    const quarterPart = quarter.replace(/\s/g, '');
    return `./assets/${yearPart}_${quarterPart}.pdf`;
  };

  const handleDownload = (filePath) => {
    Swal.fire({
      title: 'Download',
      text: 'Your file is being downloaded',
      icon: 'success',
      confirmButtonText: 'Ok'
    })
  };


  const downloadFilePath = getDownloadFilePath(selectedYear, selectedQuarter);

  return (
    // Main Div
    <div className='font-[Montserrat]'>
      <p className='text-[40px] max-md:text-xl font-semibold text-center my-10'>Investor Relations</p>

      <div className='flex items-center justify-center max-sm:block  bg-rose-100'>
        <p className='w-[45%] mr-20 text-[16px] max-md:text-base max-lg:pt-2 text-slate-500 max-sm:mx-[5%] max-sm:w-[90%]'>
          Divueens is a trailblazer in the beauty ecommerce industry,
          driven by a dedicated team focused on providing the best
          customer experience. We are committed to expanding our
          market presence and profitability through strategic
          investments in our people and technology.
        </p>
        <img src={pi} className='w-[35%] max-sm:w-[60%] py-8 max-sm:m-auto' />
      </div>

      {/* Financial Statement */}
      <p className='text-[24px] max-sm:text-lg font-semibold text-center my-10'>Financial Statement</p>
      {/* Dropdown */}
      <div className='relative'>
        <div className='flex justify-center relative'>

          {/* Year */}
          <div className="relative flex flex-col items-center w-[180px] h-[340px] rounded-lg mr-20 max-sm:mr-8 max-sm:w-[130px]">
            <button onClick={() => setIsOpen((prev) => !prev)} className="bg-white px-4 py-2 w-full flex items-center justify-between font-medium text-lg rounded-lg tracking-wider border-gray-400 border-solid border-2 active:border-rose-300 duration-300 active:text-rose-300 ">
              {selectedYear}
              {!isOpen ? (<RxCaretDown className="h-8" />) : (<RxCaretUp className="h-8" />)}
            </button>
            {isOpen && (
              <div className="bg-rose-50 absolute top-20 items-start rounded-lg p-2 w-full z-10">
                {l1.map((item, i) => (
                  <div className='flex justify-between w-full hover:bg-rose-100 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-rose-500 border-l-4' key={i} onClick={() => { setSelectedYear(item.year); setIsOpen(false); }}>
                    <p className='p-3'>{item.year}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quarter */}
          <div className="relative flex flex-col items-center w-[180px] h-[340px] rounded-lg">
            <button onClick={() => setIsOpen2((prev) => !prev)} className="bg-white px-4 py-2 max-[320px]:py-2 max-[330px]:px-2 max-[320px]:p-1 w-full flex items-center justify-between font-medium text-lg rounded-lg tracking-wider border-gray-400 border-solid border-2 active:border-rose-300 duration-300 active:text-rose-300 ">
              {selectedQuarter}
              {!isOpen2 ? (<RxCaretDown className="h-8" />) : (<RxCaretUp className="h-8" />)}
            </button>
            {isOpen2 && (
              <div className="bg-rose-50 absolute top-20 items-start rounded-lg p-2 w-full z-10">
                {l2.map((item, i) => (
                  <div className='flex justify-between w-full hover:bg-rose-100 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-rose-500 border-l-4' key={i} onClick={() => { setSelectedQuarter(item.quartor); setIsOpen2(false); }}>
                    <p className='p-3'>{item.quartor}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        <div className={`mx-[10%] absolute top-24 ${isOpen || isOpen2 ? 'none' : ''}`}>
          <ul className='list-disc'>
            <div className='flex my-4'>
              <li className='text-base text-slate-500'>
                <p className='text-[19px] max-sm:text-base'>Transcript - Analyst / Investor Conference Call {selectedQuarter.substring(0,2)} {selectedYear.substring(0,4)}</p>
              </li>
              <button onClick={() => handleDownload(downloadFilePath)}><a href={downloadFilePath} download><MdOutlineFileDownload className='ml-4 mt-0 text-rose-700 w-6 h-6' /></a></button>
            </div>
            <div className='flex my-4'>
              <li className='text-base text-slate-500'>
                <p className='text-[19px] max-sm:text-base'>Transcript - Analyst / Investor Conference Call {selectedQuarter.substring(0,2)} {selectedYear.substring(0,4)}</p>
              </li>
              <button onClick={() => handleDownload(downloadFilePath)}><a href={downloadFilePath} download><MdOutlineFileDownload className='ml-4 mt-0 text-rose-700 w-6 h-6' /></a></button>
            </div>
            <div className='flex my-4'>
              <li className='text-base text-slate-500'>
                <p className='text-[19px] max-sm:text-base'>Transcript - Analyst / Investor Conference Call {selectedQuarter.substring(0,2)} {selectedYear.substring(0,4)}</p>
              </li>
              <button onClick={() => handleDownload(downloadFilePath)}><a href={downloadFilePath} download><MdOutlineFileDownload className='ml-4 mt-0 text-rose-700 w-6 h-6' /></a></button>
            </div>
            <div className='flex my-4'>
              <li className='text-base text-slate-500'>
                <p className='text-[19px] max-sm:text-base'>Transcript - Analyst / Investor Conference Call {selectedQuarter.substring(0,2)} {selectedYear.substring(0,4)}</p>
              </li>
              <button onClick={() => handleDownload(downloadFilePath)}><a href={downloadFilePath} download><MdOutlineFileDownload className='ml-4 mt-0 text-rose-700 w-6 h-6' /></a></button>
            </div>
          </ul>
        </div>
      </div>

      {/* Company Highlights */}
      <p className='text-[24px] max-sm:text-lg font-semibold text-center my-10 mt-0 max-sm:mt-20 max-[338px]:mt-40'>Company Highlights</p>
      <div className='flex justify-center text-center'>
        <div>
          <div className='border-2 border-rose-400 rounded-full'>
            <BsCart2 className='w-[80px] h-[80px] text-rose-400 p-4' />
          </div>
        </div>
        <div className='mx-[10%]'>
          <div className='border-2 border-rose-400 rounded-full'>
            <GrGroup className='w-[80px] h-[80px] text-rose-400 p-4' />
          </div>
        </div>
        <div>
          <div className='border-2 border-rose-400 rounded-full'>
            <CiDeliveryTruck className='w-[80px] h-[80px] text-rose-400 p-4' />
          </div>
        </div>
      </div>
      <div className='flex justify-center text-center'>
        <div>
          <p className='text-[16px] max-sm:text-base'>10000+ Products</p>
        </div>
        <div>
          <p className='text-[16px] max-sm:text-base max-sm:ml-[10%] max-sm:mr-[10%] mx-28 max-[1400px]:mx-24 max-[1300px]:mx-20 max-lg:mx-16 max-[900px]:mx-8 max-md:mx-14'>10000+ Products</p>
        </div>
        <div>
          <p className='text-[16px] max-sm:text-base'>10000+ Products</p>
        </div>
      </div>
      {/* Press Release */}
      <div className='w-[50%] m-auto'>
        <p className='text-[24px] max-sm:text-xl font-semibold text-center my-20 mb-10 max-sm:my-10'>Press Release</p>
        {news.slice(0, showAllNews ? news.length : 3).map((item, i) => (
          <div className='' key={i}>
            <p className='text-slate-400 text-sm mt-2'>{item.title}</p>
            <p className='max-sm:text-lg max-sm:font-normal mb-4 text-[16px] font-medium'>{item.description}</p>
            <hr />
          </div>
        ))}
        <button onClick={toggleReadMore} className='text-[16px] text-rose-500 my-4'>{showAllNews ? "Show Less" : "All Releases"}</button>
      </div>

    </div>
  );
}

export default Relate;



// import React, { useState } from 'react';
// import pi from './../assets/pic.jpg';
// import { MdOutlineFileDownload } from "react-icons/md";
// import { RxCaretDown, RxCaretUp } from "react-icons/rx";
// import l1 from './../components/InvestorRelation/year.json';
// import l2 from './../components/InvestorRelation/quator.json';
// import { BsCart2 } from "react-icons/bs";
// import { CiDeliveryTruck } from "react-icons/ci";
// import { GrGroup } from "react-icons/gr";
// import Swal from 'sweetalert2';

// const news = [
//   {
//     title: 'July 1, 2024',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo'
//   },
//   {
//     title: 'July 1, 2024',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo'
//   },
//   {
//     title: 'July 1, 2024',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo'
//   },
//   {
//     title: 'July 1, 2024',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo'
//   },
//   {
//     title: 'July 1, 2024',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo'
//   },
// ];

// function Relate() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isOpen2, setIsOpen2] = useState(false);
//   const [selectedYear, setSelectedYear] = useState('2024/25');
//   const [selectedQuarter, setSelectedQuarter] = useState('Q1 Apr - Jun');
//   const [showAllNews, setShowAllNews] = useState(false);

//   const toggleReadMore = () => {
//     setShowAllNews(!showAllNews);
//   };

//   const getDownloadFilePath = (year, quarter) => {
//     const yearPart = year.replace('/', '-');
//     const quarterPart = quarter.replace(/\s/g, '');
//     return `./assets/${yearPart}_${quarterPart}.pdf`;
//   };

//   const downloadFilePath = getDownloadFilePath(selectedYear, selectedQuarter);

//   return (
//     // Main Div
//     <div className='font-[Montserrat]'>
//       <p className='text-[40px] max-md:text-xl font-semibold text-center my-10'>Investor Relations</p>

//       <div className='flex items-center justify-center max-sm:block  bg-rose-100'>
//         <p className='w-[45%] mr-20 text-[16px] max-md:text-base max-lg:pt-2 text-slate-500 max-sm:mx-[5%] max-sm:w-[90%]'>
//           Divueens is a trailblazer in the beauty ecommerce industry,
//           driven by a dedicated team focused on providing the best
//           customer experience. We are committed to expanding our
//           market presence and profitability through strategic
//           investments in our people and technology.
//         </p>
//         <img src={pi} className='w-[35%] max-sm:w-[60%] py-8 max-sm:m-auto' />
//       </div>

//       {/* Financial Statement */}
//       <p className='text-[24px] max-sm:text-lg font-semibold text-center my-10'>Financial Statement</p>
//       {/* Dropdown */}
//       <div className='relative'>
//         <div className='flex justify-center relative'>

//           {/* Year */}
//           <div className="relative flex flex-col items-center w-[180px] h-[340px] rounded-lg mr-20 max-sm:mr-8 max-sm:w-[130px]">
//             <button onClick={() => setIsOpen((prev) => !prev)} className="bg-white px-4 py-2 w-full flex items-center justify-between font-medium text-lg rounded-lg tracking-wider border-gray-400 border-solid border-2 active:border-rose-300 duration-300 active:text-rose-300 ">
//               {selectedYear}
//               {!isOpen ? (<RxCaretDown className="h-8" />) : (<RxCaretUp className="h-8" />)}
//             </button>
//             {isOpen && (
//               <div className="bg-rose-50 absolute top-20 items-start rounded-lg p-2 w-full z-10">
//                 {l1.map((item, i) => (
//                   <div className='flex justify-between w-full hover:bg-rose-100 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-rose-500 border-l-4' key={i} onClick={() => { setSelectedYear(item.year); setIsOpen(false); }}>
//                     <p className='p-3'>{item.year}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Quarter */}
//           <div className="relative flex flex-col items-center w-[180px] h-[340px] rounded-lg">
//             <button onClick={() => setIsOpen2((prev) => !prev)} className="bg-white px-4 py-2 max-[320px]:py-2 max-[330px]:px-2 max-[320px]:p-1 w-full flex items-center justify-between font-medium text-lg rounded-lg tracking-wider border-gray-400 border-solid border-2 active:border-rose-300 duration-300 active:text-rose-300 ">
//               {selectedQuarter}
//               {!isOpen2 ? (<RxCaretDown className="h-8" />) : (<RxCaretUp className="h-8" />)}
//             </button>
//             {isOpen2 && (
//               <div className="bg-rose-50 absolute top-20 items-start rounded-lg p-2 w-full z-10">
//                 {l2.map((item, i) => (
//                   <div className='flex justify-between w-full hover:bg-rose-100 cursor-pointer rounded-r-lg border-l-transparent hover:border-l-rose-500 border-l-4' key={i} onClick={() => { setSelectedQuarter(item.quartor); setIsOpen2(false); }}>
//                     <p className='p-3'>{item.quartor}</p>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//         </div>

//         <div className={`mx-[10%] absolute top-24 ${isOpen || isOpen2 ? 'none' : ''}`}>
//           <ul className='list-disc'>
//             <div className='flex my-4'>
//               <li className='text-base text-slate-500'>
//                 <p className='text-[19px] max-sm:text-base'>Transcript - Analyst / Investor Conference Call {selectedQuarter.substring(0,2)} {selectedYear.substring(0,4)}</p>
//               </li>
//               <a href={downloadFilePath} download><MdOutlineFileDownload className='ml-4 mt-0 text-rose-700 w-6 h-6' /></a>
//             </div>
//             <div className='flex my-4'>
//               <li className='text-base text-slate-500'>
//                 <p className='text-[19px] max-sm:text-base'>Transcript - Analyst / Investor Conference Call {selectedQuarter.substring(0,2)} {selectedYear.substring(0,4)}</p>
//               </li>
//               <a href={downloadFilePath} download><MdOutlineFileDownload className='ml-4 mt-0 text-rose-700 w-6 h-6' /></a>
//             </div>
//             <div className='flex my-4'>
//               <li className='text-base text-slate-500'>
//                 <p className='text-[19px] max-sm:text-base'>Transcript - Analyst / Investor Conference Call {selectedQuarter.substring(0,2)} {selectedYear.substring(0,4)}</p>
//               </li>
//               <a href={downloadFilePath} download><MdOutlineFileDownload className='ml-4 mt-0 text-rose-700 w-6 h-6' /></a>
//             </div>
//             <div className='flex my-4'>
//               <li className='text-base text-slate-500'>
//                 <p className='text-[19px] max-sm:text-base'>Transcript - Analyst / Investor Conference Call {selectedQuarter.substring(0,2)} {selectedYear.substring(0,4)}</p>
//               </li>
//               <a href={downloadFilePath} download><MdOutlineFileDownload className='ml-4 mt-0 text-rose-700 w-6 h-6' /></a>
//             </div>
//           </ul>
//         </div>
//       </div>

//       {/* Company Highlights */}
//       <p className='text-[24px] max-sm:text-lg font-semibold text-center my-10 mt-0 max-sm:mt-20 max-[338px]:mt-40'>Company Highlights</p>
//       <div className='flex justify-center text-center'>
//         <div>
//           <div className='border-2 border-rose-400 rounded-full'>
//             <BsCart2 className='w-[80px] h-[80px] text-rose-400 p-4' />
//           </div>
//         </div>
//         <div className='mx-[10%]'>
//           <div className='border-2 border-rose-400 rounded-full'>
//             <GrGroup className='w-[80px] h-[80px] text-rose-400 p-4' />
//           </div>
//         </div>
//         <div>
//           <div className='border-2 border-rose-400 rounded-full'>
//             <CiDeliveryTruck className='w-[80px] h-[80px] text-rose-400 p-4' />
//           </div>
//         </div>
//       </div>
//       <div className='flex justify-center text-center'>
//         <div>
//           <p className='text-[16px] max-sm:text-base'>10000+ Products</p>
//         </div>
//         <div>
//           <p className='text-[16px] max-sm:text-base max-sm:ml-[10%] max-sm:mr-[10%] mx-28 max-[1400px]:mx-24 max-[1300px]:mx-20 max-lg:mx-16 max-[900px]:mx-8 max-md:mx-14'>10000+ Products</p>
//         </div>
//         <div>
//           <p className='text-[16px] max-sm:text-base'>10000+ Products</p>
//         </div>
//       </div>
//       {/* Press Release */}
//       <div className='w-[50%] m-auto'>
//         <p className='text-[24px] max-sm:text-xl font-semibold text-center my-20 max-sm:my-10'>Press Release</p>
//         {news.slice(0, showAllNews ? news.length : 3).map((item, i) => (
//           <div className='' key={i}>
//             <p className='text-slate-400 text-sm mt-2'>{item.title}</p>
//             <p className='max-sm:text-lg max-sm:font-normal mb-4 text-[16px] font-medium'>{item.description}</p>
//             <hr />
//           </div>
//         ))}
//         <button onClick={toggleReadMore} className='text-[16px] text-rose-500 my-4'>{showAllNews ? "Show Less" : "All Releases"}</button>
//       </div>

//     </div>
//   );
// }

// export default Relate;