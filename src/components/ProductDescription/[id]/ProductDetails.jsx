import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productDetails from "../../ProductList/ProductListItemData";
import productData from "../productData";
import QuantitySelector from "../QuantitySelector";
import SizeSelector from "../SizeSelector";
import RelatedProducts from "../RelatedProducts";
import StarRating from "../StarRating";
import ProductsYouMightLike from "../ProductsYouMightLike";

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
        <div className="mx-auto w-fit">
          

          <div class="font-sans">
            <div class="p-4 lg:max-w-6xl max-w-2xl max-lg:mx-auto">
              <div class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-16">
                <div class="w-full lg:sticky top-0 flex gap-3">
                  <img
                    src={productDetail.image}
                    alt="Product"
                    class="w-3/4 rounded-lg object-cover"
                  />

                  <div class="w-20 flex flex-col max-sm:mb-4 gap-3">
                    {["", "", "", ""].map((item, i) => {
                      return (
                        <img
                          src={productDetail.image}
                          alt="Product1"
                          onClick={(e) => {
                            setProductImage(e.target.src);
                          }}
                          class="w-full cursor-pointer rounded-lg"
                        />
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div class="flex flex-wrap items-start gap-4">
                    <div>
                      <h2 class="text-2xl font-bold text-gray-800">
                        {productDetail.name}
                      </h2>
                      <div className="">
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
                      </div>
                    </div>

                    <div class="ml-auto flex flex-wrap gap-4">
                      <button
                        type="button"
                        class="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          fill="currentColor"
                          class="mr-1"
                          viewBox="0 0 64 64"
                        >
                          <path
                            d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                            data-original="#000000"
                          ></path>
                        </svg>
                        100
                      </button>
                      <button
                        type="button"
                        class="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12px"
                          fill="currentColor"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M453.332 85.332c0 38.293-31.039 69.336-69.332 69.336s-69.332-31.043-69.332-69.336C314.668 47.043 345.707 16 384 16s69.332 31.043 69.332 69.332zm0 0"
                            data-original="#000000"
                          />
                          <path
                            d="M384 170.668c-47.063 0-85.332-38.273-85.332-85.336C298.668 38.273 336.938 0 384 0s85.332 38.273 85.332 85.332c0 47.063-38.27 85.336-85.332 85.336zM384 32c-29.418 0-53.332 23.938-53.332 53.332 0 29.398 23.914 53.336 53.332 53.336s53.332-23.938 53.332-53.336C437.332 55.938 413.418 32 384 32zm69.332 394.668C453.332 464.957 422.293 496 384 496s-69.332-31.043-69.332-69.332c0-38.293 31.039-69.336 69.332-69.336s69.332 31.043 69.332 69.336zm0 0"
                            data-original="#000000"
                          />
                          <path
                            d="M384 512c-47.063 0-85.332-38.273-85.332-85.332 0-47.063 38.27-85.336 85.332-85.336s85.332 38.273 85.332 85.336c0 47.059-38.27 85.332-85.332 85.332zm0-138.668c-29.418 0-53.332 23.938-53.332 53.336C330.668 456.063 354.582 480 384 480s53.332-23.938 53.332-53.332c0-29.398-23.914-53.336-53.332-53.336zM154.668 256c0 38.293-31.043 69.332-69.336 69.332C47.043 325.332 16 294.293 16 256s31.043-69.332 69.332-69.332c38.293 0 69.336 31.039 69.336 69.332zm0 0"
                            data-original="#000000"
                          />
                          <path
                            d="M85.332 341.332C38.273 341.332 0 303.062 0 256s38.273-85.332 85.332-85.332c47.063 0 85.336 38.27 85.336 85.332s-38.273 85.332-85.336 85.332zm0-138.664C55.914 202.668 32 226.602 32 256s23.914 53.332 53.332 53.332c29.422 0 53.336-23.934 53.336-53.332s-23.914-53.332-53.336-53.332zm0 0"
                            data-original="#000000"
                          />
                          <path
                            d="M135.703 245.762c-7.426 0-14.637-3.864-18.562-10.774-5.825-10.218-2.239-23.254 7.98-29.101l197.95-112.852c10.218-5.867 23.253-2.281 29.1 7.977 5.825 10.218 2.24 23.254-7.98 29.101L146.238 242.965a21.195 21.195 0 0 1-10.535 2.797zm197.93 176c-3.586 0-7.211-.899-10.54-2.797L125.142 306.113c-10.22-5.824-13.801-18.86-7.977-29.101 5.8-10.239 18.856-13.844 29.098-7.977l197.953 112.852c10.219 5.824 13.8 18.86 7.976 29.101-3.945 6.91-11.156 10.774-18.558 10.774zm0 0"
                            data-original="#000000"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <hr class="my-8" />

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

                    <div class="flex flex-wrap  gap-4 ml-auto">
                      <button
                        type="button"
                        class="px-2.5 py-1.5 bg-pink-100 text-xs text-pink-600 rounded-md flex items-center"
                      >
                        <svg
                          class="w-3 mr-1"
                          fill="currentColor"
                          viewBox="0 0 14 13"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        {productDetail.rating}
                      </button>
                      <button
                        type="button"
                        class="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-3 mr-1"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                        >
                          <path
                            d="M14.236 21.954h-3.6c-.91 0-1.65-.74-1.65-1.65v-7.201c0-.91.74-1.65 1.65-1.65h3.6a.75.75 0 0 1 .75.75v9.001a.75.75 0 0 1-.75.75zm-3.6-9.001a.15.15 0 0 0-.15.15v7.2a.15.15 0 0 0 .15.151h2.85v-7.501z"
                            data-original="#000000"
                          />
                          <path
                            d="M20.52 21.954h-6.284a.75.75 0 0 1-.75-.75v-9.001c0-.257.132-.495.348-.633.017-.011 1.717-1.118 2.037-3.25.18-1.184 1.118-2.089 2.28-2.201a2.557 2.557 0 0 1 2.17.868c.489.56.71 1.305.609 2.042a9.468 9.468 0 0 1-.678 2.424h.943a2.56 2.56 0 0 1 1.918.862c.483.547.708 1.279.617 2.006l-.675 5.401a2.565 2.565 0 0 1-2.535 2.232zm-5.534-1.5h5.533a1.06 1.06 0 0 0 1.048-.922l.675-5.397a1.046 1.046 0 0 0-1.047-1.182h-2.16a.751.751 0 0 1-.648-1.13 8.147 8.147 0 0 0 1.057-3 1.059 1.059 0 0 0-.254-.852 1.057 1.057 0 0 0-.795-.365c-.577.052-.964.435-1.04.938-.326 2.163-1.71 3.507-2.369 4.036v7.874z"
                            data-original="#000000"
                          />
                          <path
                            d="M4 31.75a.75.75 0 0 1-.612-1.184c1.014-1.428 1.643-2.999 1.869-4.667.032-.241.055-.485.07-.719A14.701 14.701 0 0 1 1.25 15C1.25 6.867 7.867.25 16 .25S30.75 6.867 30.75 15 24.133 29.75 16 29.75a14.57 14.57 0 0 1-5.594-1.101c-2.179 2.045-4.61 2.81-6.281 3.09A.774.774 0 0 1 4 31.75zm12-30C8.694 1.75 2.75 7.694 2.75 15c0 3.52 1.375 6.845 3.872 9.362a.75.75 0 0 1 .217.55c-.01.373-.042.78-.095 1.186A11.715 11.715 0 0 1 5.58 29.83a10.387 10.387 0 0 0 3.898-2.37l.231-.23a.75.75 0 0 1 .84-.153A13.072 13.072 0 0 0 16 28.25c7.306 0 13.25-5.944 13.25-13.25S23.306 1.75 16 1.75z"
                            data-original="#000000"
                          />
                        </svg>
                        87 Reviews
                      </button>
                    </div>
                  </div>

                  <hr class="my-8" />

                  <div>
                    <h3 class="text-xl md:text-start text-center font-bold text-gray-800">
                      Choose a Size
                    </h3>
                    <div class="flex flex-wrap gap-4 mt-4">
                      <SizeSelector
                        selectedSize={selectedSize}
                        onSizeChange={handleSizeChange}
                      />
                    </div>
                  </div>

                  <hr class="my-8" />

                  <div>
                    <h3 class="text-xl md:text-start text-center font-bold text-gray-800">
                      Choose a Shade
                    </h3>
                    <div class="flex  mx-auto md:mx-0 w-fit flex-wrap gap-4 mt-4">
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

                  <hr class="my-8" />
                  <QuantitySelector
                    quantity={quantity}
                    onQuantityChange={handleQuantityChange}
                  />
                  <hr class="my-8" />

                  <div class="flex w-fit  mx-auto md:mx-0 flex-wrap gap-4">
                    <Link
                      type="button"
                      to={`/order-now/${productDetail.id}`}
                      class="min-w-[200px]  w-fit text-center mx-auto md:mx-0 px-4 py-3 bg-rose-700 hover:bg-rose-900 text-white text-sm font-semibold rounded-md"
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
                      class="min-w-[200px]  w-fit  mx-auto md:mx-0 px-4 py-2.5 border border-rose-800 bg-transparent hover:bg-rose-50 text-rose-800 text-sm font-semibold rounded-md"
                    >
                      Add to cart
                    </button>
                  </div>
                  {/* Tabs */}
                  <div className="w-full max-w-5xl mt-10">
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
                </div>
              </div>
            <RelatedProducts />
            <ProductsYouMightLike/>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
