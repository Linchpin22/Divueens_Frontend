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
    <div className="contact-section py-14 mx-auto text-center">
      <h2
        className="text-3xl mt-8 mb-4 text-rose-900 font-bold"
        style={{ fontFamily: "Montserrat" }}
      >
        Stay in Touch
      </h2>
      <p
        className="mb-10 text-center text-rose-800"
        style={{ fontFamily: "Montserrat" }}
      >
        Get latest beauty products on Email.
      </p>
      <div className="contact-form flex items-center justify-center">
        <input
          type="email"
          className=" py-3 px-4 md:w-96 w-60 rounded-s-xl shadow-xl focus:outline focus:outline-rose-700 text-sm border "

          placeholder="Your Email Address"
        />
        <button
          className="bg-rose-700 text-[#fff] hover:bg-rose-600 py-[0.68rem] px-5 font-bold shadow-xl border rounded-e-lg cursor-pointer"
          onClick={subscribe}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
