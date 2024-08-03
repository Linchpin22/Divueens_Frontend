import React from "react";

const DeliveryTracking = ({ orderStatus }) => {
  const trackingSteps = {
    Delivered: [
      { stepName: 'Order Received', estimatedDnT: { date: '26 July 2024', time: '3:00PM' } },
      { stepName: 'Order Picked Up', estimatedDnT: { date: '26 July 2024', time: '3:00PM' } },
      { stepName: 'Out For Delivery', estimatedDnT: { date: '26 July 2024', time: '3:00PM' } },
      { stepName: 'Delivered', estimatedDnT: { date: '26 July 2024', time: '3:00PM' } },
    ],
    "In Progress": [
      { stepName: 'Order Received', estimatedDnT: { date: '26 July 2024', time: '3:00PM' } },
      { stepName: 'Order Picked Up', estimatedDnT: { date: '26 July 2024', time: '3:00PM' } },
      { stepName: 'Out For Delivery', estimatedDnT: { date: '26 July 2024', time: '3:00PM' } },
    ],
    Cancelled: [
      { stepName: 'Order Cancelled', estimatedDnT: { date: 'N/A', time: 'N/A' } },
    ],
  };

  const steps = trackingSteps[orderStatus] || [];

  return (
    <div className="mt-4">
      <div className="relative pl-8">
        <div className="absolute top-0 left-3 h-full border-l-2 border-gray-300"></div>
        {steps.map((step, index) => (
          <div key={index} className="flex items-center mb-4">
            <div
              className={`w-6 h-6 rounded-full border-4 border-white ${
                index === steps.length - 1 ? 'bg-pink-600' : 'bg-gray-300'
              }`}
            ></div>
            <div className="ml-4">
              <p className="font-bold">{step.stepName}</p>
              <p className="text-gray-500">
                {step.estimatedDnT.date} at {step.estimatedDnT.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryTracking;
