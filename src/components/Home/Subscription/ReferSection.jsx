import React from "react";
import { ref_pic } from "../../../assets/assets";

const ReferSection = () => {
  return (
    <>
      <div className="heading pt-16 pb-8">
        <hr className="bg-gradient-to-l from-rose-700" />
        <h2 className="text-nowrap">Refer your Friend</h2>
        <hr className="bg-gradient-to-r from-rose-700" />
      </div>
      <br />
      <div className="refer-section">
        <img
          src={ref_pic}
          className="image1 h-[32em] w-[1200px] block m-auto shadow-[0px_0px_5px_#808080]"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <br />
    </>
  );
};

export default ReferSection;
