import React, { useState } from "react";

function OrderTrackingStepper({ stepConfig = [] }) {
  const [currStep, setCurrStep] = useState(5);
  if (!stepConfig.length) {
    return <></>;
  }
  // function calculateProgressbarHeight() {
  //     return (
  //         (currStep-1)/(stepConfig.length-1)*100
  // )

  // }
  return (
    <div className="relative flex  flex-col-reverse justify-end gap-5 w-56 items-center my-10">
      <div
        className={`bg-gray-500 h-[85%] mb-4 w-1 absolute rounded-md bottom-0 `}
      ></div>
      {stepConfig.map((step, index) => {
        return (
          <div
            key={index}
            className={`grid grid-cols-3  items-center relative`}
          >
            <div className="text-wrap md:text-lg -order-first text-center ">
              {step.stepName}
            </div>
            <div
              className={`rounded-full max-w-min mx-auto p-2 m-4  ${
                currStep >= index + 1 ? "bg-green-500" : ""
              } ${currStep === index + 1 ? "bg-rose-600" : ""}`}
            >
              <div
                className={`rounded-full p-2 bg-gray-500 ${
                  currStep >= index + 1 ? "bg-white" : ""
                } ${currStep === index + 1 ? "bg-white" : ""} `}
              ></div>
            </div>
            <div className="text-wrap  text-sm order-first text-gray-500 text-center">
              estimated by{" "}
              <span className="text-nowrap">{step.estimatedDnT.date}</span> At{" "}
              <span className="text-nowrap">{step.estimatedDnT.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OrderTrackingStepper;
