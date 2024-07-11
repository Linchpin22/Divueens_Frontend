import React from "react";
import TopBrands from "../components/Home/TopBrands/TopBrands";
import BestSeller from "../components/Home/BestSeller/BestSeller";
import ExclusiveDiscount from "../components/Home/Exclusive_discount/ExclusiveDiscount";
import ShopByCategory from "../components/Home/ShopByCategory/ShopByCategory";
import Subscription from "../components/Home/Subscription/Subscription";

const Home = () => {
  return (
    <>
      <BestSeller />
      <TopBrands />
      <ExclusiveDiscount />
      <ShopByCategory />
      <Subscription />
    </>
  );
};

export default Home;
