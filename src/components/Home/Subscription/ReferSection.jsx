import React from "react";
import { ref_pic } from "../../../assets/assets";
import { Link } from "react-router-dom";

const ReferSection = () => {
  return (
    <>
      <div className="refer-section h-fit md:pt-16 pt-1 pb-4">
        <div className="heading md:pb-8">
          <hr className="bg-gradient-to-l from-rose-700 " data-aos="fade-right" data-aos-delay="3000" data-aos-duration="2000" data-aos-easing="ease-in" />
          <h2 className="text-nowrap" data-aos="fade-up" data-aos-delay="3000" data-aos-duration="2000" data-aos-easing="ease-in">Refer your Friend</h2>
          <hr className="bg-gradient-to-r from-rose-700" data-aos="fade-left" data-aos-delay="3000" data-aos-duration="2000" data-aos-easing="ease-in" />
        </div>
        <Link to={'/referral'}>
          <img
            src={ref_pic}
            className="lg:w-[60%] w-[80%] shadow-xl shadow-slate-400 bg-rose-600 object-contain mx-auto"
          />
        </Link>
      </div>

    </>
  );
};

export default ReferSection;
