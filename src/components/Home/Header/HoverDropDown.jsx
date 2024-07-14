/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import navItemData from "./NavDropDownItems";

// const [headingIndex , setHeadingIndex] = useState()
// const [hoverTargetValue , setHoverTargetValue] = useState()

export default function HoverDropDown({ navItemText }) {
  if (navItemText !== '') return (
    <div onMouseEnter={() => setItemData} className={`w-full h-auto p-12 absolute rounded-b-[20px] top-[9.5em] bg-white shadow-xl font-mono l-[30px] z-30 navItemMultipage`}>
      <div className=" mx-auto ">
        {Object.entries(navItemData).map(([key, val]) => {
          // console.log(typeof key);
          if (key === navItemText) {
            return (
              <>
                <h2 className="text-2xl border-b-[4px] border-rose-500 w-fit font-bold text-black mb-2">{key}</h2>
                <div>
                  {/* Column 1 */}
                  {val.map((column) => {
                    return (
                      <div
                        key={column}
                        className="grid grid-cols-3 gap-x-5 gap-y-4"
                      >
                        {Object.entries(column).map(
                          ([subHeading, subHeadingArray]) => {
                            return (
                              <div className="shadow-md p-2 rounded-md" key={subHeading}>
                                <h3 className="font-[900] text-black my-2">
                                  {subHeading}
                                </h3>
                                {subHeadingArray.map((subHeadVal, idx) => {
                                  return (
                                    <ul className=" list-inside" key={idx}>
                                      <li className="my-1 font-thin text-[15px]">{subHeadVal}</li>
                                    </ul>
                                  );
                                })}
                              </div>
                            );
                          }
                        )}
                      </div>
                    );
                  })}
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
  else return (<></>);
}
