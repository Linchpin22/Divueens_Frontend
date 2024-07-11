import React from "react";
import {
  background,
  Brush,
  Eyes,
  Lips,
  SkinCare,
  Nails,
  Face,
} from "../../../assets/assets";
import "./ShopByCategory.css";

const ShopByCategory = () => {
  return (
    <>
      <section className="Shop_By_Category">
        <div
          style={{
            backgroundImage: `url(${background})`,
          }}
          className="main w-screen h-[80vh] bg-[#fff] my-[20px] mx-0 box-border p-[15px] flex flex-col bg-center bg-cover"
        >
          <div className="heading pt-16 pb-8">
            <hr className="bg-gradient-to-l from-rose-700" />
            <h2 className="text-nowrap">Shop By Categories</h2>
            <hr className="bg-gradient-to-r from-rose-700" />
          </div>
          <div className="content w-full h-full box-border flex justify-center items-center">
            <div className="categories-container grid justify-center items-center w-[75%] h-full grid-cols-2 grid-rows-3 md:grid-cols-3 md:grid-rows-2 md:gap-[50px] md:w-1/2 md:h-[90%] box-border place-content-center z-[2]">
              <div
                style={{ backgroundImage: `url(${Eyes})` }}
                className="categories-item w-full h-full rounded-[5px] text-[1rem] md:text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline eyes"
              >
                <a href="https://">
                  <div className="label bg-[#fb799196] w-full h-full max-h-[25px] md:max-h-[40px] text-center text-[#fff] absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">
                    Eyes
                  </div>
                </a>
              </div>
              <div
                style={{
                  backgroundImage: `url(${Face})`,
                }}
                className="categories-item w-full h-full rounded-[5px] text-[1rem] md:text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline face"
              >
                <a href="http://">
                  <div className="label bg-[#fb799196] w-full h-full max-h-[25px] md:max-h-[40px] text-center text-[#fff] absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">
                    Face
                  </div>
                </a>
              </div>
              <div
                style={{
                  backgroundImage: `url(${Lips})`,
                }}
                className="categories-item w-full h-full rounded-[5px] text-[1rem] md:text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline lips"
              >
                <a href="http://">
                  <div className="label bg-[#fb799196] w-full h-full max-h-[25px] md:max-h-[40px] text-center text-[#fff] absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">
                    Lips
                  </div>
                </a>
              </div>
              <div
                style={{
                  backgroundImage: `url(${SkinCare})`,
                }}
                className="categories-item w-full h-full rounded-[5px] text-[1rem] md:text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline skincare"
              >
                <a href="http://">
                  <div className="label bg-[#fb799196] w-full h-full max-h-[25px] md:max-h-[40px] text-center text-[#fff] absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">
                    Skincare
                  </div>
                </a>
              </div>
              <div
                style={{
                  backgroundImage: `url(${Nails})`,
                }}
                className="categories-item w-full h-full rounded-[5px] text-[1rem] md:text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline nails"
              >
                <a href="http://">
                  <div className="label bg-[#fb799196] w-full h-full max-h-[25px] md:max-h-[40px] text-center text-[#fff] absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">
                    Nails
                  </div>
                </a>
              </div>
              <div
                style={{
                  backgroundImage: `url(${Brush})`,
                }}
                className="categories-item w-full h-full rounded-[5px] text-[1rem] md:text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline brush"
              >
                <a href="http://">
                  <div className="label bg-[#fb799196] w-full h-full max-h-[25px] md:max-h-[40px] text-center text-[#fff] absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">
                    Brush
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByCategory;
