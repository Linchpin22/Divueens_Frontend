import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sp11 from './../assets/SpecialOffers/sp11.avif'
import sp12 from './../assets/SpecialOffers/sp12.avif'
import sp13 from './../assets/SpecialOffers/sp13.avif'
import sp14 from './../assets/SpecialOffers/sp14.avif'
import sp15 from './../assets/SpecialOffers/sp15.avif'
import sp16 from './../assets/SpecialOffers/sp16.avif'
import sp17 from './../assets/SpecialOffers/sp17.avif'
import sp18 from './../assets/SpecialOffers/sp18.avif'
// import sp19 from './../assets/SpecialOffers/sp19.avif'
import sp20 from './../assets/SpecialOffers/sp20.avif'
import sp21 from './../assets/SpecialOffers/sp21.avif'
import sp22 from './../assets/SpecialOffers/sp22.avif'
import sp23 from './../assets/SpecialOffers/sp23.avif'
import sp24 from './../assets/SpecialOffers/sp24.avif'
import sp25 from './../assets/SpecialOffers/sp25.avif'
// import sp26 from './../assets/SpecialOffers/sp26.avif'
// import sp27 from './../assets/SpecialOffers/sp27.avif'
// import sp28 from './../assets/SpecialOffers/sp28.avif'
// import sp29 from './../assets/SpecialOffers/sp29.avif'
// import sp32 from './../assets/SpecialOffers/sp32.avif'
// import sp33 from './../assets/SpecialOffers/sp33.avif'
// import sp34 from './../assets/SpecialOffers/sp34.avif'
// import sp35 from './../assets/SpecialOffers/sp35.avif'
// import sp36 from './../assets/SpecialOffers/sp36.avif'
import sp40 from './../assets/SpecialOffers/sp40.avif'
import sp41 from './../assets/SpecialOffers/sp41.avif'
import sp42 from './../assets/SpecialOffers/sp42.avif'
import sp43 from './../assets/SpecialOffers/sp43.avif'
import sp44 from './../assets/SpecialOffers/sp44.avif'
// import sp45 from './../assets/SpecialOffers/sp45.avif'
// import sp46 from './../assets/SpecialOffers/sp46.avif'
// import sp47 from './../assets/SpecialOffers/sp47.avif'
// import sp48 from './../assets/SpecialOffers/sp48.avif'


export default function Offer(){
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
    return(
        <>
        {/* //
        //
        //
                           carousel to be added
      //
      //
      // */}
       

    <h2 className="text-[17px] sm:text-[20px] font-bold md:text-[30px] md:mt-4 lg:text-[40px] xl:text-[50px] lg:mt-4 text-center sm:mt-4 mt-[7%]">Brands To Bag</h2>

    <div
      className="container w-[87%] my-0 mx-auto p-[20px] bg-white rounded-[5px] sm:w-[87%] md:w-[87%] lg:w-[87%] md:grid md:grid-cols-5 md:grid-rows-1 sm:grid sm:grid-cols-5 sm:grid-rows-1 shadow-md  grid grid-cols-1 grid-rows-5 lg:grid-cols-5 gap-6"
    >


      <div
        className="column transition  duration-200 sm:w-full md:w-full lg:w-full bg-white border-0 cursor:pointer hover:bg-white rounded-xl hover:shadow-md hover:border-0 hover:scale-102"
      >
        <img src={sp13} alt="Nivea sun products" className="w-full sm:w-[100%] md:w-[100%] lg:w-[100%] rounded-xl" />
        <div className="title font-bold text-lg text-center md:px-2 md-text-sm lg:text-lg xl:text-xl sm:px-2 sm:text-xs mt-[10px]">Min 40% off</div>
        <div className="size text-center text-lg mb-4 sm:text-xs md:text-sm xl:text-xl lg:text-lg sm:px-2 text-gray-500 mt-1">On Entrie Range</div>
      </div>


      <div
        className="bg-white curser:pointer sm:w-full lg:w-full border-0 column transition duration-200 hover:bg-white rounded-xl hover:shadow-md hover:border-0 hover:scale-102"
      >
        <img src={sp12} alt="Tresemme hair products" className="w-full sm:w-full lg:w-[100%] rounded-xl" />
        <div className="title text-center xl:text-xl font-bold sm:text-xs  lg:text-lg md:text-sm sm:px-2 text-lg mt-1">Min7457
           40% off</div>
        <div className="size text-center mb-4 xl:text-xl sm:text-xs text-lg lg:text-lg  md:text-sm sm:px-2 text-gray-500 mt-1">On Entrie Range</div>
      </div>


      <div
        className="bg-white sm:w-full lg:w-full hover:shadow-md curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
      >
        <img
          src={sp11}
          alt="Victoria secret perfume and body care"
          className="w-full sm:w-full lg:w-[100%] rounded-xl"
        />
        <div className="title font-bold text-center xl:text-xl lg:text-lg sm:px-2 sm:text-xs md:text-sm text-xl mt-[10px]">Up To 65% off</div>
        <div className="size text-center mb-4 text-xl xl:text-xl lg:text-lg sm:px-2 sm:text-xs md:text-sm text-gray-500 mt-1">Semi Annual Sale</div>
      </div>


      <div
        className="bg-white hover:shadow-md lg:w-full sm:w-full curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
      >
        <img src={sp14} alt="Loreal hair care products" className="w-full lg:w-[100%] sm:w-full rounded-xl" />
        <div className="title text-center sm:text-xs xl:text-xl lg:text-lg text-lg  sm:px-2 md:text-sm font-bold mt-[10px]">Min 30% off</div>
        <div className="size text-center sm:text-xs xl:text-xl lg:text-lg mb-4 text-lg md:text-sm sm:px-2 text-gray-500 mt-1">On Entrie Range</div>
      </div>


      <div
        className="bg-white hover:shadow-md lg:w-full sm-w-full curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
>
        <img src={sp15} alt="Another product" className="w-full sm:w-full lg:w-[100%] rounded-xl" />
        <div className="title font-bold mt-[10px] xl:text-xl lg:text-lg sm:px-2 sm:text-xs md:text-sm text-center text-lg">Up To 45% off</div>
        <div className="size text-center mb-4 xl:text-xl sm:px-2 lg:text-lg sm:text-xs md:text-sm text-lg text-gray-500 mt-1">
          Free Pouch On 2 Products
        </div>
      </div>
    
      <div className="title font-bold mt-[15px] text-sm text-center xl:mt-12 lg:relative xl:w-21 md:w-[100px] md:h-[17px] xxl:relative xxl:left-[240%] xl:h-15 lg:left-[230%] lg:mb-4 lg:h-[25px] xl:mb-[30px] lg:w-[150px]  sm:mb-1 sm:relative sm:mt-[5px] xl:relative xl:left-[230%] md:relative md:left-[240%] sm:left-[240%] sm:h-[17px]  sm:w-[100px] ml-[6%]">
      <button
      className="bg-rose-600 text-white text-sm py-2  xl:text-xl  md:mb-5 md:text-sm px-3 sm:hover:py-2 sm:py-2 sm:px-3 sm:text-xs hover:bg-white hover:text-rose-600 hover:border-[2px] hover:border-rose-600 rounded-lg hover:py-[15px]"    >
      Buy Now
    </button>
    </div>
    </div>






    <h2 className="text-[17px] font-bold text-center sm:mt-4 md:text-[30px] md:mt-[60px] xl:text-[50px] lg:text-[40px] lg:mt-[50px] sm:text-[20px] mt-[8%]">Deals Of The Day</h2>

    <div className="container w-[87%] my-0 mx-auto p-[25px] sm:w-[87%]  md:w-[87%] md:grid md:grid-cols-5 md:grid-rows-1 sm:grid sm:grid-cols-5 sm:grid-rows-1 bg-white rounded-[15px] shadow-lg grid grid-cols-1 grid-rows-5 lg:grid-cols-5 gap-5">


      <div className="product border-[1px] border-solid lg:w-full md:w-full sm:w-full bg-white p-4 md:pb-3 sm:p-0 transition duration-200 hover:bg-white hover:shadow-md hover:border-0 hover:scale-102 rounded-xl">
        <img src={sp15} alt="Neutrogena Hydro Boost Hyaluronic Acid Water Gel" className="max-w-[100%] lg:w-[100%] sm:w-full rounded-xl h-auto"/>
        <div className="rating text-center lg:text-lg xl:text-xl text-lg md:text-sm font-semibold sm:px-2 sm:text-xs  mt-2">4.4 &#9733; / 5 (58.8k)</div>
        <div className="title font-bold lg:text-lg xl:text-xl mt-[10px] md:text-sm text-lg sm:px-2 sm:text-xs text-center">Neutrogena Hydro Boost Hyaluronic Acid Water Gel...</div>
        <div className="size text-center lg:text-lg xl:text-xl text-lg md:text-sm sm:px-2 sm:text-xs text-gray-500 mt-1">50g</div>
      </div>


      <div className="product  border-[1px]  lg:w-full border-solid-#ddd md:w-full p-[20px] sm:w-full md:pb-3 text-center sm:p-0 bg-white rounded-xl transition duration-200 hover:bg-white hover:shadow-md hover:border-0 hover:scale-102 ">
        <img src={sp16} alt="Neutrogena Hydro Boost Hyaluronic Acid Water Gel" className="w-full lg:w-[100%] sm:w-full rounded-xl"/>
        <div className="rating color-yellow xl:text-xl lg:text-lg md:text-sm text-[1.2em] sm:px-2 sm:text-xs text-center text-lg font-semibold mt-2">4.4 &#9733; / 5 (58.8k)</div>
        <div className="title font-bold xl:text-xl lg:text-lg md:text-sm mt-[10px] sm:px-2 sm:text-xs text-lg text-center ">Neutrogena Hydro Boost Hyaluronic Acid Water Gel...</div>
        <div className="size text-center xl:text-xl lg:text-lg md:text-sm text-lg sm:px-2 sm:text-xs text-gray-500 mt-1">15g</div>
      </div>


      <div className="product border-[1px] lg:w-full  border-solid-#ddd p-[20px] sm:w-full text-center md:pb-3 md:w-full sm:p-0 bg-white transition duration-200 hover:bg-white hover:shadow-md hover:border-0 hover:scale-102 rounded-xl">
        <img src={sp17} alt="Wella Professionals INVIGO Nutri Enrich Deep Nourishing Conditioner" className="w-full lg:w-[100%] sm:w-full rounded-xl"/>
        <div className="rating color-yellow xl:text-xl lg:text-lg md:text-sm sm:px-2 sm:text-xs text-[1.2em] text-center text-lg font-semibold mt-2">4.4 &#9733; / 5 (4k)</div>
        <div className="title font-bold xl:text-xl lg:text-lg sm:px-2 md:text-sm sm:text-xs mt-[10px] text-lg text-center">Wella Professionals INVIGO Nutri Enrich Deep...</div>
        <div className="size text-center xl:text-xl lg:text-lg sm:px-2 md:text-sm sm:text-xs text-lg text-gray-500 mt-1">200ml</div>
      </div>


      <div className="product border-[1px] lg:w-full  border-solid-#ddd sm:w-full p-[20px] md:w-full md:pb-3 text-center sm:p-0 bg-white  transition duration-200 hover:bg-white hover:shadow-md hover:border-0 hover:scale-102 rounded-xl">
        <img src={sp18} alt="Wella Professionals Elements Renewing Shampoo" className="w-full lg:w-[100%] sm:w-full rounded-xl"/>
        <div className="rating text-[1.2em] xl:text-xl lg:text-lg md:text-sm sm:px-2 sm:text-xs text-center text-lg font-semibold mt-2">4.4 &#9733; / 5 (3.2k)</div>
        <div className="title font-bold xl:text-xl lg:text-lg md:text-sm sm:px-2 sm:text-xs text-lg mt-[10px] text-center">Wella Professionals Elements Renewing...</div>
        <div className="size text-center xl:text-xl lg:text-lg md:text-sm sm:px-2 sm:text-xs text-lg text-gray-500 mt-1">250ml</div>
      </div>


      <div className="product border-[1px] border-solid-#ddd lg:w-full sm:w-full p-[20px] md:w-full md:pb-3 text-center sm:p-0 bg-white transition duration-200 hover:bg-white hover:shadow-md hover:border-0 hover:scale-102 rounded-xl">
        <img src={sp11} alt="Schwarzkopf Professional Bonacure Repair Rescue Conditioner" className="w-full sm:w-full rounded-xl"/>
        <div className="rating lg:text-lg xl:text-xl color-yellow md:text-sm sm:px-2 sm:text-xs text-[1.2em] text-center text-lg font-semibold mt-2">4.3 &#9733; / 5 (3.2k)</div>
        <div className="title lg:text-lg xl:text-xl font-bold md:text-sm sm:px-2 sm:text-xs text-lg mt-[10px] text-center">Schwarzkopf Professional Bonacure Repair Rescue...</div>
        <div className="size lg:text-lg xl:text-xl text-center md:text-sm sm:px-2 sm:text-xs text-lg text-gray-500 mt-1">200ml</div>
      </div>


    <div className="title font-bold mt-[15px] text-sm text-center xl:mt-12 lg:relative xl:w-21 md:w-[100px] md:h-[17px] xxl:relative xxl:left-[240%] xl:h-15 lg:left-[230%] lg:mb-4 lg:h-[25px] lg:w-[150px]  sm:mb-1 sm:relative sm:mt-[5px] xl:relative xl:left-[230%] md:relative md:left-[240%] sm:left-[240%] sm:h-[17px]  sm:w-[100px] ml-[6%]">
      <button
      className="bg-rose-600 text-white text-sm py-2  xl:text-xl  md:mb-5 md:text-sm px-3 sm:hover:py-2 sm:py-2 sm:px-3 sm:text-xs hover:bg-white hover:text-rose-600 hover:border-[2px] hover:border-rose-600 rounded-lg hover:py-[15px]"    >
      Buy Now
    </button>
    </div>
   </div>







    <h2 className="text-[17px] font-bold sm:text-[20px] md:text-[30px] xl:text-[50px] xl:mt-24 lg:text-[40px] lg:mt-[55px] md:mt-[60px] text-center sm:mt-16 mt-[8%]">Affordable Makeup Picks</h2>

    <div className="container md:grid md:grid-cols-2 md:grid-rows-2 w-[87%] p-[20px] sm:grid sm:grid-cols-1 sm:grid-rows-4 sm:gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-2 grid grid-rows-4 grid-cols-1 bg-white rounded-[5px] shadow-md mx-auto mt-[1%]">
      
          <div className="swiper-slide transform">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src={sp21} alt="Eyeshadow Palette" className="w-full" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src={sp22} alt="Blush & Tint" className="w-full" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src={sp23} alt="Concealer" className="w-full" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src={sp23} alt="Concealer" className="w-full" />
            </div>
          </div>
</div>










    <h2 className="text-[17px] font-bold sm:mt-16 md:text-[30px] lg:text-[40px] xl:mt-24 xl:text-[50px] lg:mt-[50px] md:mt-[60px] sm:text-[20px] text-center mt-[7%]">Skincare On A Budget</h2>

    <div className="w-[80%] mx-[10%] mt-[2%]"><Slider {...settings}>
    <img src={sp40} />
    <img src={sp41} />
    <img src={sp42} />
    <img src={sp17} className="h-[353px]" />
    <img src={sp13} className="h-[353px]" />


    </Slider></div>
    
        
        
        </>
    )
}