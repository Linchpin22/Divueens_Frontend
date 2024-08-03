// import React, { useState } from "react";
// import orderData from "./orderData";
// import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
// import DeliveryTracking from "./DeliveryTracking";

// export default function MyOrder2() {
//   const [activeButton, setActiveButton] = useState("All");
//   const [filteredOrders, setFilteredOrders] = useState(orderData);
//   const [showTracking, setShowTracking] = useState(null);


//   const handleButtonClick = (value) => {
//     setActiveButton(value);
//     if (value === "All") {
//       setFilteredOrders(orderData);
//     } else {
//       const filteredData = orderData.filter((order) => order.status === value);
//       setFilteredOrders(filteredData);
//     }
//   };

//   const toggleTracking = (index) => {
//     setShowTracking(showTracking === index ? null : index);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <nav className="mb-6">
//         <ol className="flex flex-wrap space-x-2 text-black font-bold">
//           <li>Home</li>
//           <li>&gt;</li>
//           <li>My Account</li>
//           <li>&gt;</li>
//           <li>My Orders</li>
//         </ol>
//       </nav>
//       <div className="flex flex-col gap-2 md:flex-row justify-between items-start my-4">
//         <div className="flex flex-wrap w-full md:w-fit flex-col gap-2 md:flex-row">
//           {/* Buttons for filtering orders */}
//           <button
//             onClick={() => handleButtonClick("All")}
//             className={`py-2.5 px-5 text-sm font-medium text-black rounded-full border border-black ${activeButton === "All" ? "bg-rose-200" : "hover:bg-rose-300"
//               }`}
//           >
//             All
//           </button>
//           <button
//             onClick={() => handleButtonClick("In Progress")}
//             className={`py-2.5 px-5 text-sm font-medium text-black rounded-full border border-black ${activeButton === "In Progress"
//               ? "bg-rose-200"
//               : "hover:bg-rose-300"
//               }`}
//           >
//             In Progress
//           </button>
//           <button
//             onClick={() => handleButtonClick("Delivered")}
//             className={`py-2.5 px-5 text-sm font-medium text-black rounded-full border border-black ${activeButton === "Delivered" ? "bg-rose-200" : "hover:bg-rose-300"
//               }`}
//           >
//             Delivered
//           </button>
//           <button
//             onClick={() => handleButtonClick("Cancelled")}
//             className={`py-2.5 px-5 text-sm font-medium text-black rounded-full border border-black ${activeButton === "Cancelled" ? "bg-rose-200" : "hover:bg-rose-300"
//               }`}
//           >
//             Cancelled
//           </button>
//         </div>
//         <div className="flex w-full md:w-fit items-center">
//           <button className="py-2.5 px-5 w-full md:w-fit text-sm font-medium text-white bg-rose-400 rounded-full border border-black hover:bg-rose-300 flex items-center">
//             <span className="mx-auto">Track Order</span>
//           </button>
//         </div>
//       </div>
//       <div className="space-y-4">
//         {filteredOrders.map((order, index) => (
//           <div key={index} className="bg-white shadow-md rounded-md p-8">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center">

//                 <div className="text-black font-medium text-xs bg-rose-200 rounded-full py-1.5 px-5">
//                   {order.status}
//                 </div>
//                 {order.date && (
//                   <div className="text-sm font-semibold text-black ml-4">
//                     {order.date}
//                   </div>
//                 )}
//               </div>
//               <button
//                 onClick={() => toggleTracking(index)}
//                 className="mt-4 text-rose-400 hover:underline"
//               >
//                 {showTracking === index ? (
//                   <MdKeyboardArrowDown className="inline" />
//                 ) : (
//                   <MdKeyboardArrowRight className="inline" />
//                 )}
//                 {showTracking === index ? " Hide Tracking" : " Show Tracking"}
//               </button>
//             </div>
//             <div className="flex flex-col sm:flex-row items-center">
//               <img
//                 src={order.imageUrl}
//                 alt="Product Image"
//                 className="w-28 h-28 object-cover rounded-md mb-4 sm:mb-0 sm:mr-4"
//               />
//               <div className="flex-1">
//                 <div className="text-gray-500 mb-2">
//                   Order ID: {order.orderId}
//                 </div>
//                 <div className="text-black font-semibold text-xs mb-1">
//                   {order.description}
//                 </div>
//                 <div
//                   className={`text-${order.rating >= 4 ? "yellow" : "gray"
//                     }-500 flex items-center`}
//                 >
//                   <div className="text-black text-xs font-semibold mr-1">
//                     Rating:
//                   </div>
//                   {"★".repeat(order.rating)}
//                   {"☆".repeat(5 - order.rating)}
//                 </div>
//                 <div className="font-semibold">{order.price}</div>
//               </div>
//             </div>
//             {showTracking === index && (
//               <DeliveryTracking orderStatus={order.status} />
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

