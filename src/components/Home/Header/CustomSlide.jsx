import React from "react";

const CustomSlide = ({ background, image, text, buttonText, buttonLink }) => {
  return (
    <div className="custom-slide pt-2 min-w-full " style={{ background }}>
      <div className="slide-content flex flex-row items-center justify-center lg:px-40 h-[100%] ">
        <div className="slide-text-content w-1/2">
          <div
            className="slide-text text-rose-900 mb-2 md:mb-8 text-xl lg:text-3xl lg:leading-[2.7rem] text-start  font-['Montserrat']"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
          <a
            href={buttonLink}
            className="slide-button float-start py-2 md:py-3 px-6 bg-rose-900 hover:bg-rose-600 text-[#fff] no-underline rounded-[0.5vw]"
          >
            {buttonText}
          </a>
        </div>
        <div className="pt-10">
        <img src={image} alt="slide content" className="slide-image object-right md:h-[20rem] h-[15rem]" />
        </div>
      </div>
    </div>
  );
};

export default CustomSlide;
