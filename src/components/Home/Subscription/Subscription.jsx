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
          <hr className="bg-gradient-to-l from-rose-700" />
          <h2 className="text-nowrap text-center">Exclusive Combos</h2>
          <hr className="bg-gradient-to-r from-rose-700" />
        </div>
        <Slider />
      </div>

      <ReferSection />
      <BlogCards />
      <ContactSection />

      <div className="flex items-center w-full px-8">
        <div className="w-[60%] flex flex-col gap-4">
          <h3 className="text-2xl font-medium">Lorem ipsum dolor sit amet.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sint est deserunt quibusdam placeat autem. Iste blanditiis odit, expedita ab similique architecto numquam dolorum eligendi?</p>
        </div>
        <div className="w-[40%] h-96">
          <img src={Mobile_app} className="w-full h-full" alt="" />
        </div>
      </div>
    </>
  );
}

export default Subscription;
