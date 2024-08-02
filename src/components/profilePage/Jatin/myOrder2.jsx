import React, { useState } from "react";
import orderData from "./orderData2";
import rightarrow from "../../../assets/myOrders/right-arrow.png";
import Delete from "../../../assets/myOrders/bin.png";
import DeliveryTracking from "./DeliveryTracking";
import { MdKeyboardArrowDown, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
export default function MyOrder2() {
  const [activeButton, setActiveButton] = useState("All");
  const [filteredOrders, setFilteredOrders] = useState(orderData);
  const [showTracking, setShowTracking] = useState(false);

  const handleButtonClick = (value) => {
    setActiveButton(value);
    if (value === "All") {
      setFilteredOrders(orderData);
    } else {
      const filteredData = orderData.filter((order) => order.status === value);
      setFilteredOrders(filteredData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <nav className="mb-6">
        <ol className="flex flex-wrap space-x-2  text-black font-bold">
          <li>Home</li>
          <li>&gt;</li>
          <li>My Account</li>
          <li>&gt;</li>
          <li>My Orders</li>
        </ol>
      </nav>
      <div className="flex flex-col gap-2 md:flex-row justify-between items-start my-4">
        <div className="flex flex-wrap w-full md:w-fit flex-col gap-2 md:flex-row">
          <button 
            onClick={() => handleButtonClick("All")}
            className={`py-2.5 px-5 text-sm font-medium text-black rounded-full border border-black ${
              activeButton === "All" ? "bg-rose-200" : "hover:bg-rose-300"
            }`}
          >
            All
          </button>
          <button 
            onClick={() => handleButtonClick("In Progress")}
            className={`py-2.5 px-5 text-sm font-medium text-black rounded-full border border-black ${
              activeButton === "In Progress"
                ? "bg-rose-200"
                : "hover:bg-rose-300"
            }`}
          >
            In Progress
          </button>
          <button 
            onClick={() => handleButtonClick("Delivered")}
            className={`py-2.5 px-5 text-sm font-medium text-black rounded-full border border-black ${
              activeButton === "Delivered" ? "bg-rose-200" : "hover:bg-rose-300"
            }`}
          >
            Delivered
          </button>
          <button 
            onClick={() => handleButtonClick("Cancelled")}
            className={`py-2.5 px-5 text-sm font-medium text-black rounded-full border border-black ${
              activeButton === "Cancelled" ? "bg-rose-200" : "hover:bg-rose-300"
            }`}
          >
            Cancelled
          </button>
        </div>
        <div className="flex w-full md:w-fit items-center">
          <button className="py-2.5 px-5 w-full md:w-fit  text-sm font-medium text-white bg-rose-400 rounded-full border border-black hover:bg-rose-300 flex items-center">
            <span className="mx-auto">Track Order</span>
          </button>
        </div>
      </div>
      <div className="flex justify-between ">
        {filteredOrders.map((order, index) => (
          <div key={index} className="bg-white shadow-md w-full rounded-md md:p-12 p-8">
            <div className="flex justify-end w-full">
              <img
                className=" top-2 right-4 w-[20px] h-[20px] cursor-pointer"
                src={Delete}
                alt="Bin Icon"
              />
            </div>
            <div className="flex flex-col gap-8 md:flex-row px-12 items-center">
                <img
                  src={order.imageUrl}
                  alt="Product Image"
                  className="md:w-28 w-40 object-cover rounded-md mb-4 sm:mb-0 sm:mr-4"
                />
              <div className="flex items-start justify-between flex-col md:flex-row mr-12 w-full gap-8 md:items-center">
                <div className="">
                  <div className="text-gray-500 mb-2">
                    Order ID: {order.orderId}
                  </div>
                  <div className="text-black font-semibold text-xs mb-1">
                    {order.description}
                  </div>
                  <div
                    className={`text-${
                      order.rating >= 4 ? "yellow" : "gray"
                    }-500 flex items-center`}
                  >
                    <div className="text-black text-xs font-semibold mr-1">
                      Rating:
                    </div>
                    {"★".repeat(order.rating)}
                    {"☆".repeat(5 - order.rating)}
                  </div>
                  <div className="font-semibold">{order.price}</div>
                </div>
                <div className="">
                  <div className="font-medium text-[10px] sm:text-xs lg:text-base text-gray-400">
                    Status
                  </div>
                  <div className="font-bold text-[10px] sm:text-sm lg:text-lg">
                    {order.status}
                  </div>
                </div>
                <div className=" ">
                  <div className="font-medium text-[8px] sm:text-xs lg:text-sm text-gray-400">
                    {order.datetitle}
                  </div>
                  <div className="font-bold text-[10px] sm:text-sm lg:text-lg">
                    {order.date}
                  </div>
                </div>
              </div>
              {/* <img
                className=" right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
                src={rightarrow}
                alt="Right Arrow Icon" 
                
              /> */}
              {showTracking?<MdKeyboardArrowDown
                className="text-5xl cursor-pointer"
                onClick={() => {
                  setShowTracking((old) => !old);
                }}
              />:<MdKeyboardArrowRight
              className="text-5xl cursor-pointer"
              onClick={() => {
                setShowTracking((old) => !old);
              }}
            />}
            </div>
            {/* <div className="flex "> */}
            {showTracking && <DeliveryTracking order={orderData}/>}
            {/* </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
