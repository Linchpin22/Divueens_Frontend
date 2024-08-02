import React, { useState } from "react";
import OrderTrackingStepper from "./OrderTrackingStepper";

const DeliveryTracking = ({order={}}) => {
  const [orderDetails, setOrderDetails] = useState({
    customerName: "XYZ ABC",
    contactNo: "+91 99999XXXXX",
    deliveryAddress:
      "306, North Plaza Near 4D square mall, Sabarmati, Ahemdabad, 38005",
    orderID: "DSQ3Y8798980",
    orderStatus:1,
  });
  const trackingSteps=[
    {
        stepName:'Order Recived',
        estimatedDnT:{
            date:'26 July 2024',
            time:'3:00PM'
        }
    },
    {
        stepName:'Order Picked Up',
        estimatedDnT:{
            date:'26 July 2024',
            time:'3:00PM'
        }
    },
    {
        stepName:'Out For Delivery ',
        estimatedDnT:{
            date:'26 July 2024',
            time:'3:00PM'
        }
    },
    {
        stepName:'Delivered',
        estimatedDnT:{
            date:'26 July 2024',
            time:'3:00PM'
        }
    }
  ]


  return (
    <div className="grid grid-cols-1 justify-center w-full lg:grid-cols-3 mt-16">
      <div className="w-full col-span-1">
        <div className="border-b-2 py-4 text-center">
          <h1 className="md:text-2xl text-lg font-bold text-nowrap ">
            Order Details
          </h1>
        </div>
        <div className="font-semibold flex flex-col mt-20 mx-auto w-fit max-w-96 text-center my-8">
          <div>
            <p className="text-black md:text-lg text-base">Customer Name</p>
            <p className="text-gray-500 mb-8 pb-4  md:text-base mt-2 text-sm">
              {orderDetails.customerName}
            </p>
          </div>
          <div>
            <p className="text-black md:text-lg text-base">Contact Number</p>
            <p className="text-gray-500 mb-8 pb-4  md:text-base mt-2 text-sm">{orderDetails.contactNo}</p>
          </div>
          <div>
            <p className="text-black md:text-lg text-base">Delivery Address</p>
            <p className="text-gray-500 mb-8 pb-4  md:text-base mt-2 text-sm">
              {orderDetails.deliveryAddress}
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className="w-full col-span-2">
        <div className="border-b-2 py-4 text-center">
          <h1 className="md:text-2xl text-lg font-bold text-nowrap">
            Order ID: #{orderDetails.orderID}
          </h1>
        </div>
        <div className="font-semibold mx-auto w-fit text-center my-8">
          <h2 className="md:text-xl text-base font-bold mb-4">Track Your Order</h2>
          {/* <div className="relative pl-8">
            <div className="absolute top-0 left-3 h-full border-l-2 border-gray-300">
            </div>
            <div className="flex items-center mb-8">
              <div className="w-6 h-6 bg-gray-300 rounded-full border-4 border-white"></div>
              <div className="ml-4">
                <p className="font-bold">Order Delivered</p>
                <p className="text-gray-500">
                  Estimated by 10 July 2024 at 3:00 PM
                </p>
              </div>
            </div>
            <div className="flex items-center mb-8">
              <div className="w-6 h-6 bg-gray-300 rounded-full border-4 border-white"></div>
              <div className="ml-4">
                <p className="font-bold">Out For Delivery</p>
                <p className="text-gray-500">
                  Estimated by 10 July 2024 at 3:00 PM
                </p>
              </div>
            </div>
            <div className="flex items-center mb-8">
              <div className="w-6 h-6 bg-gray-300 rounded-full border-4 border-white"></div>
              <div className="ml-4">
                <p className="font-bold">Order Picked Up</p>
                <p className="text-gray-500">
                  Estimated by 10 July 2024 at 3:00 PM
                </p>
              </div>
            </div>
            <div className="flex items-center mb-8">
              <div className="w-6 h-6 bg-pink-600 rounded-full border-4 border-white"></div>
              <div className="ml-4">
                <p className="font-bold">Order Received</p>
                <p className="text-gray-500">10 July 2024 at 3:00 PM</p>
              </div>
            </div>
          </div> */}
          <OrderTrackingStepper stepConfig={trackingSteps}/>
        </div>
      </div>
    </div>
  );
};

export default DeliveryTracking;
