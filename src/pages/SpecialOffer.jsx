import React from "react";

const SpecialOffer = () => {
  return (
    <>
    <div className="container mx-auto py-8 mt-20">
      <div className="image-container">
        <img src="sp 20.avif" alt="Splurge Worthy Beauty" className="w-full" />
      </div>
    </div>

    <h2 className="text-[30px] font-bold text-center my-8">Brands To Bag</h2>

    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <div className="column transition duration-200 bg-white border-0 cursor:pointer hover:bg-white hover:shadow-lg hover:shadow-gray-400 hover:border-0 hover:scale-102">
        <img src="sp 13.avif" alt="Nivea sun products" className="w-full" />
        <div className="title text-center mt-1">Min 40% off</div>
        <div className="size text-center text-gray-500 mt-1">On Entrie Range</div>
      </div>
      <div className="bg-white curser:pointer border-0 column transition duration-200 hover:bg-white hover:shadow-lg hover:shadow-gray-400 hover:border-0 hover:scale-102">
        <img src="sp 12.avif" alt="Tresemme hair products" className="w-full" />
        <div className="title text-center mt-1">Min7457
           40% off</div>
        <div className="size text-center text-gray-500 mt-1">On Entrie Range</div>
      </div>
      <div className="bg-white curser:pointer border-0 column transition duration-200 hover:bg-white hover:shadow-lg hover:shadow-gray-400 hover:border-0 hover:scale-102">
        <img src="sp 11.avif" alt="Victoria secret perfume and body care" className="w-full" />
        <div className="title text-center mt-1">Up To 65% off</div>
        <div className="size text-center text-gray-500 mt-1">Semi Annual Sale</div>
      </div>
      <div className="bg-white curser:pointer border-0 column transition duration-200 hover:bg-white hover:shadow-lg hover:shadow-gray-400 hover:border-0 hover:scale-102">
        <img src="sp 14.avif" alt="Loreal hair care products" className="w-full" />
        <div className="title text-center mt-1">Min 30% off</div>
        <div className="size text-center text-gray-500 mt-1">On Entrie Range</div>
      </div>
      <div className="bg-white curser:pointer border-0 column transition duration-200 hover:bg-white hover:shadow-lg hover:shadow-gray-400 hover:border-0 hover:scale-102">
        <img src="sp 15.avif" alt="Another product" className="w-full" />
        <div className="title text-center mt-1">Up To 45% off</div>
        <div className="size text-center text-gray-500 mt-1">
          Free Pouch On 2 Products
        </div>
      </div>
    </div>
    <div className="title text-center my-[18px]">
      <button className="bg-rose-600 text-white py-4 px-6 hover:bg-white hover:text-rose-600 hover:border-[2px] hover:border-rose-600 rounded-lg hover:py-[15px]"    >ow
      </button>
    </div>

    <h2 className="text-[30px] font-bold text-center my-8">Deals Of The Day</h2>

    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
      <div className="product bg-white p-4 transition duration-200 hover:bg-white hover:shadow-lg hover:shadow-gray-400 hover:border-0 hover:scale-102 rounded-lg">
        <img src="sp 15.avif" alt="Neutrogena Hydro Boost Hyaluronic Acid Water Gel" className="w-full" />
        <div className="rating text-center text-lg font-semibold mt-2">4.4 &#9733; / 5 (58.8k)</div>
        <div className="title text-center mt-1">Neutrogena Hydro Boost Hyaluronic Acid Water Gel...</div>
        <div className="size text-center text-gray-500 mt-1">50g</div>
      </div>
      <div className="product bg-white p-4 transition duration-200 hover:bg-white hover:shadow-lg hover:shadow-gray-400 hover:border-0 hover:scale-102 rounded-lg">
        <img src="sp 16.avif" alt="Neutrogena Hydro Boost Hyaluronic Acid Water Gel" className="w-full" />
        <div className="rating text-center text-lg font-semibold mt-2">4.4 &#9733; / 5 (58.8k)</div>
        <div className="title text-center mt-1">Neutrogena Hydro Boost Hyaluronic Acid Water Gel...</div>
        <div className="size text-center text-gray-500 mt-1">15g</div>
      </div>
      <div className="product bg-white p-4 transition duration-200 hover:bg-white hover:shadow-lg hover:shadow-gray-400 hover:border-0 hover:scale-102 rounded-lg">
        <img src="sp 17.avif" alt="Wella Professionals INVIGO Nutri Enrich Deep Nourishing Conditioner" className="w-full" />
        <div className="rating text-center text-lg font-semibold mt-2">4.4 &#9733; / 5 (4k)</div>
        <div className="title text-center mt-1">Wella Professionals INVIGO Nutri Enrich Deep...</div>
        <div className="size text-center text-gray-500 mt-1">200ml</div>
      </div>
      <div className="product bg-white p-4 transition duration-200 hover:bg-white hover:shadow-lg hover:shadow-gray-400 hover:border-0 hover:scale-102 rounded-lg">
        <img src="sp 18.avif" alt="Wella Professionals Elements Renewing Shampoo" className="w-full" />
        <div className="rating text-center text-lg font-semibold mt-2">4.4 &#9733; / 5 (3.2k)</div>
        <div className="title text-center mt-1">Wella Professionals Elements Renewing...</div>
        <div className="size text-center text-gray-500 mt-1">250ml</div>
      </div>
      <div className="product bg-white p-4 transition duration-200 hover:bg-white hover:shadow-lg hover:shadow-gray-400 hover:border-0 hover:scale-102 rounded-lg">
        <img src="sp 11.avif" alt="Schwarzkopf Professional Bonacure Repair Rescue Conditioner" className="w-full" />
        <div className="rating text-center text-lg font-semibold mt-2">4.3 &#9733; / 5 (3.2k)</div>
        <div className="title text-center mt-1">Schwarzkopf Professional Bonacure Repair Rescue...</div>
        <div className="size text-center text-gray-500 mt-1">200ml</div>
      </div>
    </div>
    <div className="title text-center my-[18px]">
      <button className="bg-rose-600 text-white py-4 px-6 hover:bg-white hover:text-rose-600 hover:border-[2px] hover:border-rose-600 rounded-lg hover:py-[15px]"    >w
    </button>
    </div>

    <h2 className="text-[30px] font-bold text-center my-8">Affordable Makeup Picks</h2>

    <div className="container mx-auto my-8">
      <div className="swiper-container">
        <div className="swiper-wrapper overflow-x-auto whitespace-nowrap no-scrollbar">
          <div className="swiper-slide transform">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src="sp 21.avif" alt="Eyeshadow Palette" className="w-full" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src="sp 22.avif" alt="Blush & Tint" className="w-full" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src="sp 23.avif" alt="Concealer" className="w-full" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src="sp 24.avif" alt="Lipstick" className="w-full" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src="sp 25.avif" alt="Foundation" className="w-full" />
            </div>
          </div>
        </div>
        {/* <!-- Add Pagination -->
        <!-- <div className="swiper-pagination"></div> -->
        <!-- Add Navigation -->
        <!-- <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div> --> */}
      </div>
    </div>
    <h2 className="text-[30px] font-bold text-center my-8">Skincare On A Budget</h2>

    <div className="container mx-auto my-8">
      <div className="swiper-container">
        <div className="swiper-wrapper overflow-x-auto whitespace-nowrap no-scrollbar">
          <div className="swiper-slide">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src="sp 40.avif" alt="Eyeshadow Palette" className="w-full" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src="sp 41.avif" alt="Blush & Tint" className="w-full" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src="sp 42.avif" alt="Concealer" className="w-full" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src="sp 43.avif" alt="Lipstick" className="w-full" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src="sp 44.avif" alt="Foundation" className="w-full" />
            </div>
          </div>
        </div>
        {/* <!-- Add Pagination -->
        <!-- <div className="swiper-pagination"></div> -->
        <!-- Add Navigation -->
        <!-- <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div> --> */}
      </div>
    </div>
    {/* <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-4 gap-8">
        <div className="col-span-1">
          <div className="flex items-center">
            <Link to="#" className="font-bold text-gray-800 text-xl">Divueen</Link>
          </div>
          <ul className="mt-4 list-none ml-6">
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Who are we?</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800">Careers</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Authenticity</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800">Press</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Testimonials</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Divueen CSR</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Responsible Disclosure</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Investor Relations</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Link to Smart ODR</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="font-bold text-gray-800 text-lg mb-4">Help</h3>
          <ul className="mt-4 list-none ml-6">
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Contact Us</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Frequently asked questions</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Store Locator</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Cancellation & Return</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Shipping & Delivery</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Sell on Nykaa</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="font-bold text-gray-800 text-lg mb-4">Inspire Me</h3>
          <ul className="mt-4 list-none ml-6">
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Beauty Book</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Divueen Network</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Buying Guides</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="font-bold text-gray-800 text-lg mb-4">Quick Links</h3>
          <ul className="mt-4 list-none ml-6">
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Offer Zone</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >New Launches</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Divueen Man</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Divueen Fashion</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Divueen Pro</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800">Sitemap</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="font-bold text-gray-800 text-lg mb-4">Top Categories</h3>
          <ul className="mt-4 list-none ml-6">
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800">Makeup</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800">Skin</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800">Hair</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Bath & Body</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Appliances</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Mom and Baby</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Health & Wellness</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800"
                >Fragrance</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800">Natural</Link>
            </li>
            <li>
              <Link to="#" className="text-gray-600 hover:text-gray-800">Luxe</Link>
            </li>
          </ul>
        </div>
      </div>
    </div> */}
    </>
      )
    }

export default SpecialOffer;