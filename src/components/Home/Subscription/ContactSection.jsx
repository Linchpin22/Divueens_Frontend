import React from "react";

const ContactSection = () => {
  const subscribe = () => {
    const email = document.querySelector(".contact-section input").value;
    if (email) {
      alert(`Thank you for subscribing with ${email}`);
    } else {
      alert("Please enter a valid email address");
    }
  };

  return (
    <div className="contact-section pt-2 md:pt-6 pb-20 mx-auto text-center">
      <h2
        className="md:text-3xl text-2xl mt-8 mb-2 md:mb-4 text-rose-950 font-semibold"
        // style={{ fontFamily: "Montserrat" }}
      >
        Stay in Touch
      </h2>
      <p
        className="md:mb-10 mb-8 text-center md:text-lg text-slate-500"
        // style={{ fontFamily: "Montserrat" }}
      >
        Get latest beauty products on Email.
      </p>
      <div className="contact-form flex items-center justify-center">
        <input
          type="email"
          className=" md:py-3 py-2 text-rose-900 md:pl-6 pl-3 w-[60%] md:w-[35%] md:text-base text-xs shadow-sm shadow-slate-400 focus:outline focus:outline-rose-700"

          placeholder="Enter your email address..."
        />
        <button
          className="bg-rose-700 text-white font-semibold hover:bg-rose-500 py-2 md:py-3 md:text-base text-xs md:px-6 px-3 shadow-sm shadow-slate-700 cursor-pointer"
          onClick={subscribe}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
