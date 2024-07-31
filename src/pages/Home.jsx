import React from "react";
import TopBrands from "../components/Home/TopBrands/TopBrands";
import BestSeller from "../components/Home/BestSeller/BestSeller";
import ExclusiveDiscount from "../components/Home/Exclusive_discount/ExclusiveDiscount";
import ShopByCategory from "../components/Home/ShopByCategory/ShopByCategory";
import Subscription from "../components/Home/Subscription/Subscription";
import NewArrivals from "../components/Home/NewArrivals/NewArrivals";
import BrandProducts from "../components/Home/BrandsProduct/BrandProducts";
import Gallery from "../components/Home/Gallery/Gallery";

const Home = () => {
  return (
    <>
      <BestSeller />
      <TopBrands />
      <ExclusiveDiscount />
      <Gallery />
      <ShopByCategory />
      <NewArrivals />
      <BrandProducts />
      <Subscription />

    </>
  );
};

export default Home;
