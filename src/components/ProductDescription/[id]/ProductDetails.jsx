import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productDetails from "../../ProductList/ProductListItemData";
import productData from "../productData";
import QuantitySelector from "../QuantitySelector";
import SizeSelector from "../SizeSelector";
import RelatedProducts from "../RelatedProducts";
import StarRating from "../StarRating";
import ProductsYouMightLike from "../ProductsYouMightLike";
import { BiArrowFromRight } from "react-icons/bi";
import { TbArrowNarrowLeft, TbArrowNarrowRight } from "react-icons/tb";
import profileImg from "./../../../assets/DivueenNetwork/Ellipse.png";
import { FaStar } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const ProductDetails = () => {
  const { id } = useParams();
  const products = productDetails;
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    const filterData = products.filter((p) => p.id == id);
    setProductDetail(filterData[0]);
  }, [id]);

  console.log(productDetail);

  const [selectedSize, setSelectedSize] = useState("106 cm (42)");
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(productData[0]);
  const [productImage, setProductImage] = useState(productDetail.image);
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (newQuantity) => {
    if (selectedProduct.availability === "Out of Stock") {
      alert("Out of Stock");
      return;
    }
    setQuantity(newQuantity);
  };

  // const handleThumbnailChange = (product) => {
  //     setSelectedProduct(product);
  // };

  const [activeTab, setActiveTab] = useState("description");
  const [view, changeview] = useState(false);

  useEffect(() => changeview(false), [activeTab]);

  const RenderContent = ({ val }) => {
    return (
      <div>
        <h3 class="text-xl font-bold text-gray-800">
          Product <span className="capitalize">{val}</span>
        </h3>
        <div className="text-sm text-gray-500 mt-4">
          {view
            ? selectedProduct[val]
            : selectedProduct[val].slice(0, 300) + " ..."}
          <button className="text-rose-600 " onClick={() => changeview(!view)}>
            {view ? "Less" : "More"}
          </button>
        </div>
      </div>
    );
  };

  // console.log(selectedProduct);

  return (
    <div>
      {productDetail && (
        <div className="mx-auto w-80 md:w-fit  ">
          <div class="font-sans ">
            <div class="p-4 lg:max-w-6xl max-w-2xl max-lg:mx-auto">
              <div class="grid  items-start justify-items-center grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-16">
                <div className="w-80 mx-auto  lg:sticky top-0">
                  <div class="  flex gap-3">
                    <div class="w-20 mx-auto flex flex-col max-sm:mb-4 gap-3">
                      {["", "", "", ""].map((item, i) => {
                        return (
                          <img
                            src={productDetail.image}
                            alt="Product1"
                            onClick={(e) => {
                              setProductImage(e.target.src);
                            }}
                            class="cursor-pointer rounded-lg"
                          />
                        );
                      })}
                    </div>
                    <img
                      src={productDetail.image}
                      alt="Product"
                      class="w-3/4 rounded-lg object-cover"
                    />
                  </div>
                  <div class="mt-6 max-w-2xl">
                    <h3 class="text-xl font-bold text-gray-800">
                      Product Features
                    </h3>

                    <ul class="grid sm:grid-cols-2 gap-3 mt-4">
                      {[
                        "UV Protection",
                        "Stylish Design",
                        "Lightweight Frame",
                        "Scratch-Resistant Lenses",
                        "Polarized Lenses",
                        "Comfortable Fit",
                      ].map((featureName) => {
                        return (
                          <li class="grid grid-cols-8 items-center text-sm text-gray-600">
                            <FaCheckCircle className="text-base text-rose-600 col-span-1 sm:col-span-2 gap-1" />
                            <h1 className="col-span-7 sm:col-span-6">{featureName}</h1>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div>
                  <div class="flex flex-wrap items-start gap-4">
                    <div>
                      <h2 class="text-2xl font-bold text-gray-800">
                        {productDetail.name}
                      </h2>
                      {/* <div className="">
                        {[
                          {
                            title: "Brand",
                            value: `${productDetail.brands}`,
                          },
                          {
                            title: "Model",
                            value: `${productDetail.model}`,
                          },
                          {
                            title: "Availability",
                            value: `${productDetail.availability}`,
                          },
                        ].map((item) => {
                          return (
                            <p className="text-sm">
                              <span className="text-gray-500 mt-2">
                                {item.title}:
                              </span>{" "}
                              {item.value}
                            </p>
                          );
                        })}
                      </div> */}
                      <div class="flex space-x-2 mt-4">
                        <FaStar className="text-orange-400 mx-1" />
                        <FaStar className="text-orange-400 mx-1" />
                        <FaStar className="text-orange-400 mx-1" />
                        <FaStar className="text-orange-400 mx-1" />
                        <FaStar className="text-gray-300 mx-1" />
                      </div>
                    </div>
                  </div>

                  <hr class="my-6" />

                  <div class="flex flex-wrap gap-4 items-start">
                    <div>
                      <p class="text-gray-800 text-4xl font-bold">
                        ₹ {productDetail.price}
                      </p>
                      <p class="text-gray-500 text-sm mt-2">
                        <strike>₹ {productDetail.price * 1.5}</strike>{" "}
                        <span class="text-sm ml-1">Tax included</span>
                      </p>
                    </div>
                  </div>

                  <hr class="my-6" />

                  {/* <div>
                    <h3 class="text-xl md:text-start text-center font-bold text-gray-800">
                      Choose a Size
                    </h3>
                    <div class="flex flex-wrap gap-4 mt-4">
                      <SizeSelector
                        selectedSize={selectedSize}
                        onSizeChange={handleSizeChange}
                      />
                    </div>
                  </div> */}

                  {/* <hr class="my-6" /> */}

                  <div>
                    <h3 class="text-xl md:text-start  font-bold text-gray-800">
                      Choose a Shade
                    </h3>
                    <div class="flex  w-fit flex-wrap gap-4 mt-4">
                      <button
                        type="button"
                        class="w-10 h-10 bg-rose-400 border border-white hover:border-gray-800 rounded-md shrink-0"
                      ></button>
                      <button
                        type="button"
                        class="w-10 h-10 bg-rose-600 border border-white hover:border-gray-800 rounded-md shrink-0"
                      ></button>
                      <button
                        type="button"
                        class="w-10 h-10 bg-rose-800 border border-white hover:border-gray-800 rounded-md shrink-0"
                      ></button>
                      <button
                        type="button"
                        class="w-10 h-10 bg-rose-950 border border-white hover:border-gray-800 rounded-md shrink-0"
                      ></button>
                    </div>
                  </div>

                  <hr class="my-6" />
                  <QuantitySelector
                    quantity={quantity}
                    onQuantityChange={handleQuantityChange}
                  />
                  <hr class="my-6" />

                  <div class="flex flex-wrap gap-4">
                    <Link
                      type="button"
                      to={`/order-now/${productDetail.id}`}
                      class="min-w-[200px] text-center px-4 py-3 bg-rose-700 hover:bg-rose-900 text-white text-sm font-semibold rounded-md"
                    >
                      Buy now
                    </Link>
                    {/* <Link
                      to={`/order-now/${productDetail.id}`}
                      className="bg-rose-700 text-white px-5 py-2 hover:bg-rose-500 rounded-xl"
                    >
                      Buy Now */}
                    {/* </Link> */}
                    <button
                      type="button"
                      class="min-w-[200px] px-4 py-2.5 border border-rose-800 bg-transparent hover:bg-rose-50 text-rose-800 text-sm font-semibold rounded-md"
                    >
                      Add to cart
                    </button>
                  </div>
                  <hr class="my-6" />

                  <div class="mt-8">
                    <div className="flex  flex-row justify-between">
                      <h3 class="text-xl font-bold text-gray-800">
                        Reviews(10)
                      </h3>
                      <button
                        type="button"
                        class="w-fit text-gray-800 font-semibold flex gap-1 items-center md:flex-nowrap text-sm"
                      >
                        Read all reviews <TbArrowNarrowRight />
                      </button>
                    </div>
                    <div class="space-y-3 mt-4">
                      <div class="flex items-center">
                        <p class="text-sm text-gray-800 font-bold">5.0</p>
                        <FaStar className="text-orange-400 mx-1" />

                        <div class="bg-gray-300 rounded w-full h-2 ml-3">
                          <div class="w-2/3 h-full rounded bg-orange-400"></div>
                        </div>
                        <p class="text-sm text-gray-800 font-bold ml-3">66%</p>
                      </div>

                      <div class="flex items-center">
                        <p class="text-sm text-gray-800 font-bold">4.0</p>
                        <FaStar className="text-orange-400 mx-1" />

                        <div class="bg-gray-300 rounded w-full h-2 ml-3">
                          <div class="w-1/3 h-full rounded bg-orange-400"></div>
                        </div>
                        <p class="text-sm text-gray-800 font-bold ml-3">33%</p>
                      </div>

                      <div class="flex items-center">
                        <p class="text-sm text-gray-800 font-bold">3.0</p>
                        <FaStar className="text-orange-400 mx-1" />

                        <div class="bg-gray-300 rounded w-full h-2 ml-3">
                          <div class="w-1/6 h-full rounded bg-orange-400"></div>
                        </div>
                        <p class="text-sm text-gray-800 font-bold ml-3">16%</p>
                      </div>

                      <div class="flex items-center">
                        <p class="text-sm text-gray-800 font-bold">2.0</p>
                        <FaStar className="text-orange-400 mx-1" />

                        <div class="bg-gray-300 rounded w-full h-2 ml-3">
                          <div class="w-1/12 h-full rounded bg-orange-400"></div>
                        </div>
                        <p class="text-sm text-gray-800 font-bold ml-3">8%</p>
                      </div>

                      <div class="flex items-center">
                        <p class="text-sm text-gray-800 font-bold">1.0</p>
                        <FaStar className="text-orange-400 mx-1" />

                        <div class="bg-gray-300 rounded w-full h-2 ml-3">
                          <div class="w-[6%] h-full rounded bg-orange-400"></div>
                        </div>
                        <p class="text-sm text-gray-800 font-bold ml-3">6%</p>
                      </div>
                    </div>

                    <div class="flex items-start mt-8">
                      <img
                        src={profileImg}
                        class="w-12 h-12 rounded-full border-2 border-white"
                      />
                      <div class="ml-3">
                        <h4 class="text-sm font-bold">Alina Doe</h4>
                        <div class="flex space-x-1 mt-1">
                          <FaStar className="text-orange-400" />

                          <FaStar className="text-orange-400" />

                          <FaStar className="text-orange-400" />

                          <FaStar className="text-gray-300" />
                          <FaStar className="text-gray-300" />
                          <p class="text-xs !ml-2 font-semibold">2 mins ago</p>
                        </div>
                        <p class="text-xs mt-4">
                          The service was amazing. I never had to wait that long
                          for my food. The staff was friendly and attentive, and
                          the delivery was impressively prompt.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tabs */}
              <div className="w-fit mx-auto max-w-5xl mt-10">
                <ul class="flex border-b">
                  <li
                    class={` font-semibold text-sm  py-3 px-8 cursor-pointer transition-all ${
                      activeTab === "description"
                        ? "text-rose-800 bg-rose-100  border-b-2 border-rose-800"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("description")}
                  >
                    Description
                  </li>
                  <li
                    class={`text-gray-500 font-semibold text-sm hover:bg-rose-100 py-3 px-8 cursor-pointer transition-all ${
                      activeTab === "specification"
                        ? "text-rose-800 hover:bg-rose-100  border-b-2 border-rose-800"
                        : "text-gray-500"
                    }`}
                    onClick={() => setActiveTab("specification")}
                  >
                    Specification
                  </li>
                  {/* <li class={`text-gray-500 font-semibold text-sm hover:bg-rose-100 py-3 px-8 cursor-pointer transition-all ${activeTab === "reviews" ? "text-rose-800 bg-rose-100  border-b-2 border-rose-800" : "text-gray-500"}`} onClick={() => setActiveTab("reviews")}>
                    Reviews
                  </li> */}
                </ul>

                <div className="mt-4">
                  <RenderContent val={activeTab} />
                </div>
              </div>
              <hr class="my-6" />

              <div className="mx-auto max-w-5xl">
                <ProductsYouMightLike />
                <hr class="my-6" />
                <RelatedProducts />
              </div>
              <hr class="my-6" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
