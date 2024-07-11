import React from "react";
import Slider from "./Slider";
import ReferSection from "./ReferSection";
import ContactSection from "./ContactSection";
import "./Subscription.css";

function Subscription() {
  return (
    <div className="combos_here">
      <div className="heading pt-16 pb-8 my-5">
        <hr className="bg-gradient-to-l from-rose-700" />
        <h2 className="text-nowrap">Exclusive Combos</h2>
        <hr className="bg-gradient-to-r from-rose-700" />
      </div>
      <Slider />
      <ReferSection />
      <ContactSection />
    </div>
  );
}

export default Subscription;
