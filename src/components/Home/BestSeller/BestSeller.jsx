import React, { useEffect, useState } from "react";
import styles from "./BestSeller.module.css";
import { imageUrls } from "../../../assets/assets";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowsRotate,
  FaCartShopping,
  FaHeart,
  FaMagnifyingGlass,
  FaRegStar,
  FaRegStarHalfStroke,
  FaStar,
  FaStarHalf,
} from "react-icons/fa6";

const trending = [...imageUrls].slice(0, imageUrls.length / 2);
const newArrivals = [...imageUrls].slice(
  imageUrls.length / 2,
  imageUrls.length
);

const BestSeller = () => {
  const [selectedCategory, setSelectedCategory] = useState("trending");
  // slider
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [offset, setOffset] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // buttons
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);

  // Hover effect
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  // color of BestSeller
  const [ButtonBg, ButtonCng] = useState('rose-700');
  const [CardBg, CardCng] = useState('rose-100');


  //    slider begin
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      // console.log(screenWidth, 'screen width')
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  // const totalImages = imageUrls.length;
  const imagesToShow = Math.floor((screenWidth - 240) / 210); //extra(140,100,10) -100 for margin each image takes approximately 200px, extra 10px was added to ensure we get to hte end of the image other we'll get halfImage and a gap of 140px is reduced from the screen width

  // console.log(maxOffset, 'maxoffset', imagesToShow)
  // const maxOffset = 100 * (totalImages - imagesToShow);
  const totalImages = [trending.length, newArrivals.length];

  const nextSlide = () => {
    if (selectedCategory === "trending") {
      const maxOffset = 100 * (totalImages[0] - imagesToShow);

      setOffset((prevOffset) => {
        const newOffset = prevOffset + 100;
        return newOffset > maxOffset ? 0 : newOffset;
      });
      // console.log(maxOffset, imagesToShow, ' state;', offset)
    } else {
      const maxOffset = 100 * (totalImages[1] - imagesToShow);
      setOffset((prevOffset) => {
        const newOffset = prevOffset + 100;
        return newOffset > maxOffset ? 0 : newOffset;
      });
      // console.log(maxOffset, imagesToShow, ' state;', offset)
    }
  };

  const prevSlide = () => {
    if (selectedCategory === "trending") {
      const maxOffset = 100 * (totalImages[0] - imagesToShow);
      setOffset((prevOffset) => {
        const newOffset = prevOffset - 100;
        return newOffset < 0 ? 0 : newOffset;
      });
    } else {
      const maxOffset = 100 * (totalImages[1] - imagesToShow);
      setOffset((prevOffset) => {
        const newOffset = prevOffset - 100;
        return newOffset < 0 ? 0 : newOffset;
      });
    }
  };

  // slider end

  // top buttons
  const HandleBtnClicked = (cat) => {
    setSelectedCategory(cat);

    // console.log(e.target)
    setIsClicked2(false);
    setIsClicked(true);
  };
  const HandleBtnClicked2 = (cat) => {
    setSelectedCategory(cat);
    setIsClicked(false);
    // console.log(e.target)
    setIsClicked2(true);
  };
  // top buttons end

  // hover functionality
  const hoverStartHandler = (index) => {
    // console.log("hoverstart", index, styles.hover)
    setHoveredIndex(index);
  };
  const hoverEndHandler = () => {
    // console.log("hoverend")
    setHoveredIndex(null);
  };

  const scaleImagehandler = (index) => {
    setHoveredImageIndex(index);
  };
  const endScaleImagehandler = (index) => {
    setHoveredImageIndex(null);
  };

  // select category logic
  const RenderProducts = () => {
    if (selectedCategory === "trending") {
      return trending.map((list, index) => {
        return (
          <>
            <div
              onMouseLeave={hoverEndHandler}
              onMouseEnter={() => {
                hoverStartHandler(index);
              }}
              key={index}
              style={{ transform: `translateX(-${offset}%)` }}
              className={`${
                styles["product-card"]
              } bg-rose-50 rounded-[10px] shadow-[0_4px_8px_#bbb] overflow-hidden my-[10px] mx-0 md:min-w-[300px] cursor-pointer w-[37%] text-center transition-[0.3s_ease] ${
                hoveredIndex === index ? styles.hover : ""
              }`}
            >
              <div className={`${styles["image-wrapper"]} overflow-hidden`}>
                <img
                  className="w-full h-[15rem] md:h-80 object-cover"
                  // onMouseLeave={hoverEndHandler} onMouseEnter={()=>{hoverStartHandler(index)}}
                  onMouseEnter={() => {
                    scaleImagehandler(index);
                  }}
                  onMouseLeave={endScaleImagehandler}
                  style={{
                    transform:
                      hoveredImageIndex === index ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                  src={list.Image}
                  alt={`product ${index + currentIndex}`}
                />
              </div>
              {/* animated icons */}
              <div
                className={`${styles["cart-info"]} absolute left-[93%] top-1/2 -translate-x-[50%] -translate-y-[50%] flex flex-col justify-around w-[min-content] h-[40%] p-[10px] cursor-auto z-10 transition-[.3s]`}
              >
                <button
                  title="Add to cart"
                  className=" text-[#ddd] cursor-pointer translate-x-[100px] hover:text-darkerColor"
                  style={{ transition: ".2s" }}
                >
                  <FaCartShopping className="text-rose-500" />
                </button>
                <a
                  title="Add to Wishlist"
                  className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-darkerColor"
                  style={{ transition: ".3s" }}
                >
                  <FaHeart className="text-rose-500" />
                </a>
                <a
                  title="Quick View"
                  className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-darkerColor"
                  style={{ transition: ".4s" }}
                >
                  <FaMagnifyingGlass className="text-rose-500" />
                </a>
                <a
                  title="Compare"
                  className="border-none bg-none no-underline text-[#ddd] cursor-pointer translate-x-[100px] hover:text-darkerColor"
                  style={{ transition: ".5s" }}
                >
                  <FaArrowsRotate className="text-rose-500" />
                </a>
              </div>
              {/* product description */}
              <div
                className={`${styles["product-info"]} flex justify-around items-center rounded-b-[10px] p-3`}
              >
                <div className="flex flex-col my-[10px] mx-0 items-start">
                  {/* ratings */}
                  <div className={`${styles["rating"]} flex items-center`}>
                    {[...Array(Math.floor(list.Rating))].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    {list.Rating % 1 !== 0 ? (
                      list.Rating % 1 <= 0.5 ? (
                        <FaRegStarHalfStroke />
                      ) : (
                        <FaRegStar />
                      )
                    ) : (
                      <></>
                    )}
                    {[...Array(5 - Math.ceil(list.Rating))].map((_, i) => (
                      <FaRegStar key={i} />
                    ))}
                  </div>
                  <h2 className="text-rose-950 my-[5px] text-[12px] md:text-[20px]">
                    {list.Name}
                  </h2>
                  <h4 className="text-[12px] md:text-[16px] text-rose-700 font-semibold">
                    ₹ {list.Price}/-
                    <del className="ml-[10px] text-[11px] md:text-[14px] text-green-500 font-normal">
                      <span className={styles["money"]}>
                        ₹{list.Original_Price}/-
                      </span>
                    </del>
                  </h4>
                </div>
                <button
                  className={`${styles["buy-now"]} bg-rose-700 text-[12px] md:text-[16px] rounded-[8px] py-3 px-2 cursor-pointer shadow-[0px_1px_2px_#000] text-white hover:bg-rose-500`}
                >
                  Buy Now
                </button>
              </div>

            </div>
          </>
        );
      });
    } else if (selectedCategory === "newArrivals") {
      return newArrivals.map((list, index) => {
        return (
          <>
            <div
              onMouseLeave={hoverEndHandler}
              onMouseEnter={() => {
                hoverStartHandler(index);
              }}
              key={index}
              style={{ transform: `translateX(-${offset}%)` }}
              className={`${
                styles["product-card"]
              } rounded-[10px] shadow-[0_4px_8px_#bbb] overflow-hidden my-[10px] mx-0 md:min-w-[300px] cursor-pointer text-center bg-rose-100 w-[37%] transition-[0.3s_ease] ${
                hoveredIndex === index ? styles.hover : ""
              }`}
            >
              <div
                className={styles["image-wrapper"]}
                style={{ overflow: "hidden" }}
              >
                <img
                  className="w-full h-[15rem] md:h-80 object-cover"
                  // onMouseLeave={hoverEndHandler} onMouseEnter={()=>{hoverStartHandler(index)}}
                  onMouseEnter={() => {
                    scaleImagehandler(index);
                  }}
                  onMouseLeave={endScaleImagehandler}
                  style={{
                    transform:
                      hoveredImageIndex === index ? "scale(1.2)" : "scale(1)",
                    transition: "transform 0.3s ease",
                  }}
                  src={list.Image}
                  alt={`product ${index + currentIndex}`}
                />
              </div>
              <div
                className={`${styles["cart-info"]} absolute left-[93%] top-1/2 -translate-x-[50%] -translate-y-[50%] flex flex-col justify-around w-[min-content] h-[40%] p-[10px] cursor-auto z-10 transition-[.3s]`}
              >
                <button
                  title="Add to cart"
                  className="border-none bg-none no-underline text-rose-500 cursor-pointer translate-x-[100px] hover:text-darkerColor"
                  style={{ transition: ".2s" }}
                >
                  <FaCartShopping />
                </button>
                <a
                  title="Add to Wishlist"
                  className="border-none bg-none no-underline text-rose-500 cursor-pointer translate-x-[100px] hover:text-darkerColor"
                  style={{ transition: ".3s" }}
                >
                  <FaHeart />
                </a>
                <a
                  title="Quick View"
                  className="border-none bg-none no-underline text-rose-500 cursor-pointer translate-x-[100px] hover:text-darkerColor"
                  style={{ transition: ".4s" }}
                >
                  <FaMagnifyingGlass />
                </a>
                <a
                  title="Compare"
                  className="border-none bg-none no-underline text-rose-500 cursor-pointer translate-x-[100px] hover:text-darkerColor"
                  style={{ transition: ".5s" }}
                >
                  <FaArrowsRotate />
                </a>
              </div>
              <div
                className={`${styles["product-info"]} flex justify-around items-center p-2`}
              >
                <div className="flex flex-col my-[10px] mx-0 items-start">
                  <div className={`${styles["rating"]} flex items-center`}>
                    {[...Array(Math.floor(list.Rating))].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                    {list.Rating % 1 !== 0 ? (
                      list.Rating % 1 <= 0.5 ? (
                        <FaRegStarHalfStroke />
                      ) : (
                        <FaRegStar />
                      )
                    ) : (
                      <></>
                    )}
                    {[...Array(5 - Math.ceil(list.Rating))].map((_, i) => (
                      <FaRegStar key={i} />
                    ))}
                  </div>
                  <h3 className="text-rose-950 my-[5px] mx-0 text-[12px] md:text-[18px] font-medium">
                    {list.Name}
                  </h3>
                  <h4 className="text-[12px] md:text-[16px] text-rose-700 font-bold">
                    ₹{list.Price}/-
                    <del className="ml-[10px] text-[11px] md:text-[14px] text-green-600 font-normal">
                      <span className={styles["money"]}>
                        ₹{list.Original_Price}/-
                      </span>
                    </del>
                  </h4>
                </div>
                <div>
                  <button
                    className={`${styles["buy-now"]} bg-rose-700 text-[12px] md:text-[16px] rounded-[8px] py-3 px-2 cursor-pointer shadow-[0px_1px_2px_#000] text-white hover:bg-rose-500`}
                  >
                    Buy Now
                  </button>
                </div>
              </div> 
            </div>
          </>
        );
      });
    }
  };

  return (
    <>
      <div className="heading flex justify-center items-center w-full h-[10vh]">
        <hr className="bg-gradient-to-l from-rose-700 " />
        <h2 className="text-xl text-nowrap">Best Seller</h2>
        <hr className="bg-gradient-to-r from-rose-700 " />
      </div>
      <div
        className={`${styles["subheading"]} text-center text-lg font-normal text-slate-400`}
      >
        <p>Your Cosmetics and Skincare Products</p>
      </div>

      <div
        className={`${styles["slideBtn"]} mt-16 mb-10 mx-auto ${styles["bestseller_container"]} text-center`}
      >
        <button
          onClick={() => {
            HandleBtnClicked2("trending");
          }}
          style={{
            backgroundColor: isClicked ? "#ffff" : "#be123c",
            color: isClicked ? "#be123c" : "#fff",
          }}
          className={`${styles["first"]} transition-[all_0.8s_ease] py-2 lg:px-12 md:px-6 font-semibold border border-rose-600 rounded-s-full shadow-xl`}
        >
          Trending Now
        </button>

        <button
          onClick={() => {
            HandleBtnClicked("newArrivals");
          }}
          style={{
            backgroundColor: isClicked ? "#be123c" : "#ffff",
            color: isClicked ? "#fff" : "#be123c",
          }}
          className={`${styles["second"]} py-2 lg:px-12 md:px-6 font-semibold rounded-e-full shadow-xl border border-rose-600 transition-[all_0.8s_ease]`}
        >
          New Arrivals
        </button>
      </div>

      <div
        className={`${styles["products"]} px-2 md:px-8 lg:mx-10 overflow-hidden relative`}
      >
        <div
          className={`${styles["product-container"]} relative flex  gap-6 p-10`}
        >
          <RenderProducts  />
        </div>
        <div className={`${styles["controllers"]}`}>
          <button
            className="absolute w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex ml-[5px] mr-[5px] items-center justify-center rounded-[50%] bg-rose-700 text-white border-none shadow-[2px_2px_10px_#888] left-[0%] top-1/2 -translate-y-[50%] "
            onClick={prevSlide}
          >
            <FaAngleLeft />
          </button>
          <button
            className="absolute w-[30px] h-[30px] md:w-[50px] md:h-[50px] flex ml-[5px] mr-[5px] items-center justify-center rounded-[50%] bg-rose-700 text-white border-none shadow-[2px_2px_10px_#888] right-[0%] top-1/2 -translate-y-[50%] "
            onClick={nextSlide}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
      {/* <div className={`${styles["see-all"]} my-[20px] mx-auto`}>
        <button className="text-darkerColor bg-[#fff] border-[2px] border-darkerColor rounded-[5px] py-[10px] px-[40px] md:px-[20px] cursor-pointer text-[10px] md:text-[18px] font-semibold block m-auto transition-[.2s] hover:text-[#fff] hover:bg-darkestColor">
          View More
        </button>
      </div> */}
    </>
  );
};

export default BestSeller;
