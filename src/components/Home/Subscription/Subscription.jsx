import React from "react";
import Slider from "./Slider";
import ReferSection from "./ReferSection";
import ContactSection from "./ContactSection";
import BlogCards from '../BlogCards/BlogCards'
import "./Subscription.css";

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
    </>
  );
}

export default Subscription;
