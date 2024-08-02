import React, { useState } from "react";
import Slider from "./Slider";
import ReferSection from "./ReferSection";
import ContactSection from "./ContactSection";
import BlogCards from '../BlogCards/BlogCards'
import "./Subscription.css";
import { Mobile_app } from "../../../assets/assets";

function Subscription() {
  return (
    <>
      <div className="combos_here md:pt-8">
        <div className="heading">
          <hr className="bg-gradient-to-l from-rose-700" data-aos="fade-right" />
          <h2 className="text-nowrap text-center" data-aos="fade-up">Exclusive Combos</h2>
          <hr className="bg-gradient-to-r from-rose-700" data-aos="fade-left" />
        </div>
        <Slider />
      </div>

      <ReferSection />
      <BlogCards />
      {/* <ContactSection /> */}

      {/* <div className="flex items-center flex-col md:flex-row w-full px-8">
        <div className="w-full lg:w-1/2 xl:w-[60%] flex flex-col py-4 gap-4">
          <h3 className="text-lg lg:text-2xl font-medium">Lorem ipsum dolor sit amet.</h3>
          <p className="text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sint est deserunt quibusdam placeat autem. Iste blanditiis odit, expedita ab similique architecto numquam dolorum eligendi?</p>
        </div>
        <div className="h-64 max-[321px]:h-48 w-full md:h-full lg:h-96 lg:w-1/2 xl:w-[40%]">
          <img src={Mobile_app} className="w-full h-full" alt="" />
        </div>
      </div> */}
    </>
  );
}

export default Subscription;
