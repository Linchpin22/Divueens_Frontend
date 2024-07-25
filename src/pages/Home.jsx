import React from "react";
import TopBrands from "../components/Home/TopBrands/TopBrands";
import BestSeller from "../components/Home/BestSeller/BestSeller";
import ExclusiveDiscount from "../components/Home/Exclusive_discount/ExclusiveDiscount";
import ShopByCategory from "../components/Home/ShopByCategory/ShopByCategory";
import Subscription from "../components/Home/Subscription/Subscription";
import SwiperProducts from "../components/Home/SwiperCards/SwiperProducts";
import BentoBox from "../components/Home/SwiperCards/BentoBox";
import BlogCards from "../components/Home/SwiperCards/BlogCards";

const Home = () => {
  return (
    <>
      <BestSeller />
      <TopBrands />
      <ExclusiveDiscount />
      <ShopByCategory />
      <SwiperProducts />
      <BentoBox />
      <BlogCards />
      <Subscription />

    </>
  );
};

export default Home;
