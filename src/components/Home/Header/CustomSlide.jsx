import React from "react";

const CustomSlide = ({ background, image, text, buttonText, buttonLink }) => {
  return (
    <div className="min-w-full " style={{ background }}>
      <div className=" flex flex-row-reverse items-center md:justify-between lg:px-40 ">
        <div className="w-1/2 sm:px-6">
          <div
            className="text-black mb-2 md:mb-3 text-sm sm:text-lg lg:text-xl leading-4 sm:leading-6 lg:leading-[2.1rem] text-start font-['']"
            dangerouslySetInnerHTML={{ __html: text }}
          ></div>
          <a
            href={buttonLink}
            className="slide-button float-start py-2 px-6 bg-black/80 text-[#fff] no-underline rounded-[0.5vw]"
          >
            {buttonText}
          </a>
        </div>
        <div className="mr-2">
        <img src={image} alt="slide content" className="object-cover object-right md:h-[20rem] h-[10rem] sm:h-[12rem]" />
        </div>
      </div>
    </div>
  );
};

export default CustomSlide;
