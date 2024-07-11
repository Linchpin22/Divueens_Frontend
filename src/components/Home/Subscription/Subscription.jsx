import React from "react";
import Slider from "./Slider";
import ReferSection from "./ReferSection";
import ContactSection from "./ContactSection";
import "./Subscription.css";

function Subscription() {
  return (
    <>
    <div className="combos_here md:pt-16">
      <div className="heading md:pb-8">
        <hr className="bg-gradient-to-l from-rose-700" />
        <h2 className="text-nowrap">Exclusive Combos</h2>
        <hr className="bg-gradient-to-r from-rose-700" />
      </div>
      <Slider />
    </div>
    <ReferSection />
    <ContactSection />
    </>
  );
}

export default Subscription;
