import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode} from 'swiper/modules';

// Import Swiper styles


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MaintennacePage from '../pages/MaintennacePage'; 
import {Link} from 'react-router-dom';
import img1 from './../assets/SpecialOffers/img1.png'
import img2 from './../assets/SpecialOffers/img2.png'
import img3 from './../assets/SpecialOffers/img3.png'
import img4 from './../assets/SpecialOffers/img4.png'
import img5 from './../assets/SpecialOffers/img5.png'
import img6 from './../assets/SpecialOffers/img6.png'
import img7 from './../assets/SpecialOffers/img7.png'
import img8 from './../assets/SpecialOffers/img8.png'
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
import sp26 from './../assets/SpecialOffers/sp26.avif'
import sp27 from './../assets/SpecialOffers/sp27.avif'
import sp28 from './../assets/SpecialOffers/sp28.avif'
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
  
  
    return(
        <>
       
    <h2 className="text-[1.1rem] font-bold sm:mt-[2%] md:text-[1.3rem] lg:text-[1.6rem] xl:mt-[2%] xl:text-[1.9rem] lg:mt-[2%] md:mt-[2%] sm:text-[1.1rem] mb-[1rem] ml-[10%] sm:ml-[10%]  md:ml-[10%] lg:ml-[10%] xl:ml-[10%]   mt-[2%]">Summer Special</h2>

<div className="w-[80%] mx-[10%] mt-[2%] mb-[3rem]">
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={sp40} className='w-full h-[27rem]' alt="img" /></SwiperSlide>
        <SwiperSlide><img src={sp41} className='w-full h-[27rem]' alt="img" /></SwiperSlide>
        <SwiperSlide><img src={sp42} className='w-full h-[27rem]' alt="img" /></SwiperSlide>
        <SwiperSlide><img src={sp14} className='w-full h-[27rem]' alt="img" /></SwiperSlide>
        <SwiperSlide><img src={sp15} className='w-full h-[27rem]' alt="img" /></SwiperSlide>
       
      </Swiper>






</div>

    <h2 className="text-[1.1rem] sm:text-[1.1rem] font-bold md:text-[1.3rem] md:mt-4 lg:text-[1.6rem] xl:text-[1.9rem] lg:mt-4 ml-[10%] sm:ml-[10%]  md:ml-[10%] lg:ml-[10%] xl:ml-[10%] sm:mt-4 mt-[7%]"> Grab It or Miss It Offer </h2>

    <div
      className="container w-[87%]  my-0 mx-auto p-[20px] bg-white rounded-[5px] sm:w-[87%] md:w-[87%] lg:w-[87%] md:grid md:grid-cols-4 md:grid-rows-2 sm:grid sm:grid-cols-2 sm:grid-rows-4 shadow-md  grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-6"
    >


      <div
        className="column transition  duration-200 sm:w-full md:w-full lg:w-full bg-white border-0 cursor:pointer hover:bg-white rounded-xl hover:shadow-md hover:border-0 hover:scale-102"
      >
        <img src={sp11} alt="Nivea sun products" className="w-full sm:h-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] rounded-xl" />
        <div className="title font-normal text-[0.8rem] text-center md:px-2 md-text-sm lg:text-lg xl:text-xl sm:px-2 sm:text-[1rem] text-black mt-[10px]">Up to 51 ℅ off on all the products</div>
        
      </div>


      <div
        className="bg-white curser:pointer sm:w-full lg:w-full border-0 column transition duration-200 hover:bg-white rounded-xl hover:shadow-md hover:border-0 hover:scale-102"
      >
        <img src={sp12} alt="Tresemme hair products" className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] rounded-xl" />
        <div className="title text-center xl:text-xl font-normal sm:text-[1rem]  lg:text-lg md:text-sm sm:px-2 text-black text-[0.8rem] mt-1">Up to 51 ℅ off on all the products</div>
        
      </div>


      <div
        className="bg-white sm:w-full lg:w-full hover:shadow-md curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
      >
        <img
          src={sp13}
          alt="Victoria secret perfume and body care"
          className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] rounded-xl"
        />
        <div className="title font-normal text-center xl:text-xl lg:text-lg sm:px-2 sm:text-[1rem] md:text-sm text-[0.8rem] text-black mt-[10px]">Up to 51 ℅ off on all the products</div>
       
      </div>


      <div
        className="bg-white hover:shadow-md lg:w-full sm:w-full curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
      >
        <img src={sp15} alt="Loreal hair care products" className="w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-xl" />
        <div className="title text-center sm:text-[1rem] xl:text-xl lg:text-lg text-[0.8rem]  sm:px-2 md:text-sm font-normal text-black mt-[10px]">Up to 51 ℅ off on all the products</div>
        
      </div>


      
      <div
        className="column transition  duration-200 sm:w-full md:w-full lg:w-full bg-white border-0 cursor:pointer hover:bg-white rounded-xl hover:shadow-md hover:border-0 hover:scale-102"
      >
        <img src={sp16} alt="Nivea sun products" className="w-full sm:h-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] rounded-xl" />
        <div className="title font-normal text-[0.8rem] text-center md:px-2 md-text-sm lg:text-lg xl:text-xl sm:px-2 sm:text-[1rem] text-black mt-[10px]">Up to 51 ℅ off on all the products</div>
        
      </div>


      <div
        className="bg-white curser:pointer sm:w-full lg:w-full border-0 column transition duration-200 hover:bg-white rounded-xl hover:shadow-md hover:border-0 hover:scale-102"
      >
        <img src={sp17} alt="Tresemme hair products" className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] rounded-xl" />
        <div className="title text-center xl:text-xl font-normal sm:text-[1rem]  lg:text-lg md:text-sm sm:px-2 text-black text-[0.8rem] mt-1">Up to 51 ℅ off on all the products</div>
        
      </div>


      <div
        className="bg-white sm:w-full lg:w-full hover:shadow-md curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
      >
        <img
          src={sp12}
          alt="Victoria secret perfume and body care"
          className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[100%] rounded-xl"
        />
        <div className="title font-normal text-center xl:text-xl lg:text-lg sm:px-2 sm:text-[1rem] md:text-sm text-[0.8rem] text-black mt-[10px]">Up to 51 ℅ off on all the products</div>
       
      </div>


      <div
        className="bg-white hover:shadow-md lg:w-full sm:w-full curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
      >
        <img src={sp11} alt="Loreal hair care products" className="w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-xl" />
        <div className="title text-center sm:text-[1rem] xl:text-xl lg:text-lg text-[0.8rem] sm:px-2 md:text-sm font-normal text-black mt-[10px]">Up to 51 ℅ off on all the products</div>
        
      </div>

      <div className="title font-bold mt-[15px] text-sm text-center xl:mt-12 lg:relative xl:w-21 md:w-[100px] md:h-[17px] xxl:relative xxl:left-[180%] xl:h-15 lg:left-[180%] lg:mb-4 lg:h-[25px] lg:w-[150px]  sm:mb-1 sm:relative sm:mt-[5px] xl:relative xl:left-[180%] md:relative md:left-[180%] sm:left-[80%] sm:h-[17px]  sm:w-[100px] relative left-[60%]">
    <Link to={"/maintennace"}
      className="bg-rose-700 text-white text-sm py-2  xl:text-xl  md:mb-5 md:text-sm px-3 sm:hover:py-2 sm:py-2 sm:px-3 sm:text-xs hover:text-white hover:border-[2px] hover:bg-rose-600 rounded-lg hover:py-[15px]"    >
      Explore
    </Link>
    </div>
</div>













<Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper w-[80%] p-[2rem] mt-[4rem]"
      >
        <SwiperSlide>  <div
        className="bg-white hover:shadow-md lg:w-full sm:w-full curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
      >
        <img src={sp11} alt="Loreal hair care products" className="w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-xl" />
        <div className="title text-center sm:text-[1rem] xl:text-xl lg:text-lg text-[1rem] sm:px-2 md:text-sm font-medium text-black mt-[10px]">Up to 51 ℅ off on all the products</div>
        
      </div></SwiperSlide>


       <SwiperSlide>  <div
        className="bg-white hover:shadow-md lg:w-full sm:w-full curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
      >
        <img src={sp12} alt="Loreal hair care products" className="w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-xl" />
        <div className="title text-center sm:text-[1rem] xl:text-xl lg:text-lg text-[1rem] sm:px-2 md:text-sm font-medium text-black mt-[10px]">Up to 51 ℅ off on all the products</div>
        
      </div></SwiperSlide>

       
        <SwiperSlide>  <div
        className="bg-white hover:shadow-md lg:w-full sm:w-full curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
      >
        <img src={sp13} alt="Loreal hair care products" className="w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-xl" />
        <div className="title text-center sm:text-[1rem] xl:text-xl lg:text-lg text-[1rem] sm:px-2 md:text-sm font-medium text-black mt-[10px]">Up to 51 ℅ off on all the products</div>
        
      </div></SwiperSlide>



        <SwiperSlide>  <div
        className="bg-white hover:shadow-md lg:w-full sm:w-full curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
      >
        <img src={sp14} alt="Loreal hair care products" className="w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-xl" />
        <div className="title text-center sm:text-[1rem] xl:text-xl lg:text-lg text-[1rem] sm:px-2 md:text-sm font-medium text-black mt-[10px]">Up to 51 ℅ off on all the products</div>
        
      </div></SwiperSlide>




        <SwiperSlide>  <div
        className="bg-white hover:shadow-md lg:w-full sm:w-full curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
      >
        <img src={sp11} alt="Loreal hair care products" className="w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-xl" />
        <div className="title text-center sm:text-[1rem] xl:text-xl lg:text-lg text-[1rem] sm:px-2 md:text-sm font-medium text-black mt-[10px]">Up to 51 ℅ off on all the products</div>
        
      </div></SwiperSlide>


        <SwiperSlide>  <div
        className="bg-white hover:shadow-md lg:w-full sm:w-full curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
      >
        <img src={sp12} alt="Loreal hair care products" className="w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-xl" />
        <div className="title text-center sm:text-[1rem] xl:text-xl lg:text-lg text-[1rem] sm:px-2 md:text-sm font-medium text-black mt-[10px]">Up to 51 ℅ off on all the products</div>
        
      </div></SwiperSlide>



        <SwiperSlide>  <div
        className="bg-white hover:shadow-md lg:w-full sm:w-full curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
      >
        <img src={sp13} alt="Loreal hair care products" className="w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-xl" />
        <div className="title text-center sm:text-[1rem] xl:text-xl lg:text-lg text-[1rem] sm:px-2 md:text-sm font-medium text-black mt-[10px]">Up to 51 ℅ off on all the products</div>
        
      </div></SwiperSlide>


        <SwiperSlide>  <div
        className="bg-white hover:shadow-md lg:w-full sm:w-full curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
      >
        <img src={sp14} alt="Loreal hair care products" className="w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-xl" />
        <div className="title text-center sm:text-[1rem] xl:text-xl lg:text-lg text-[1rem] sm:px-2 md:text-sm font-medium text-black mt-[10px]">Up to 51 ℅ off on all the products</div>
        
      </div></SwiperSlide>



        <SwiperSlide>  <div
        className="bg-white hover:shadow-md lg:w-full sm:w-full curser:pointer border-0 column transition duration-200 rounded-xl hover:bg-white hover:border-0 hover:scale-102"
      >
        <img src={sp16} alt="Loreal hair care products" className="w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] rounded-xl" />
        <div className="title text-center sm:text-[1rem] xl:text-xl lg:text-lg text-[1rem] sm:px-2 md:text-sm font-medium text-black mt-[10px]">Up to 51 ℅ off on all the products</div>
        
      </div></SwiperSlide>
      </Swiper>







      <h2 className="text-[1.1rem] font-bold sm:text-[1rem] md:text-[1.3rem] xl:text-[1.9rem] xl:mt-24 lg:text-[1.6rem] lg:mt-[55px] md:mt-[60px] ml-[10%] sm:ml-[10%]  md:ml-[10%] lg:ml-[10%] xl:ml-[10%] sm:mt-16 mt-[8%]">Brands</h2>
    <div className='flex justify-evenly mx-[10%] gap-x-[1rem] mb-[4rem] w-[80%] md:mx-[10%] md:gap-x-[3rem] md:my-[7rem] lg:mx-[10%] lg:gap-x-[3rem] lg:my-[7rem] xl:mx-[10%] xl:gap-x-[3rem] xl:my-[7rem]'>

   <div><img className='border-2 border-rose-700 rounded-xl' src={sp24} alt="img" /></div>
   <div><img className='border-2 border-rose-700 rounded-xl' src={sp25} alt="img" /></div>
   <div><img className='border-2 border-rose-700 rounded-xl' src={sp26} alt="img" /></div>
   <div><img className='border-2 border-rose-700 rounded-xl' src={sp27} alt="img" /></div>
   <div><img className='border-2 border-rose-700 rounded-xl' src={sp28} alt="img" /></div>

   </div> 




    <h2 className="text-[1.1rem] font-bold sm:mt-4 md:text-[1.3rem] md:mt-[60px] xl:text-[1.9rem] lg:text-[1.6rem] ml-[10%] sm:ml-[10%]  md:ml-[10%] lg:ml-[10%] xl:ml-[10%] lg:mt-[50px] sm:text-[1.1rem] mt-[8%]">Hurry Up & Grab The Deal Now. </h2>

    <div className="container w-[87%] my-0 mx-auto p-[25px] sm:w-[87%]  md:w-[87%] md:grid md:grid-cols-4 md:grid-rows-2 sm:grid sm:grid-cols-2 sm:grid-rows-4 bg-white rounded-[15px] shadow-md grid grid-cols-2 grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 gap-5">


      <div className="product border-[1px] border-solid lg:w-full md:w-full sm:w-full bg-white p-4 md:pb-3 sm:p-0 transition duration-200 hover:bg-white hover:shadow-md hover:border-0 hover:scale-102 rounded-xl">
        <img src={sp11} alt="Neutrogena Hydro Boost Hyaluronic Acid Water Gel" className="max-w-[100%] lg:w-[100%] sm:w-full rounded-xl h-auto"/>
        <div className="rating text-center lg:text-lg xl:text-xl text-[0.8rem] md:text-sm font-medium sm:px-2 sm:text-[1rem] text-black mt-2">4.4 / 5 <span className='text-yellow-400'>&#9733;</span> <span className='text-gray-400'>(58.8k)</span></div>
        <div className="title font-normal lg:text-lg xl:text-xl mt-[10px] md:text-sm text-[0.8rem] sm:px-2 text-black sm:text-[1rem] sm:mb-2 text-center">Neutrogena Hydro Boost Hyaluronic Acid Water Gel...</div>
       
      </div>


      <div className="product  border-[1px]  lg:w-full border-solid-#ddd md:w-full p-[20px] sm:w-full md:pb-3 text-center sm:p-0 bg-white rounded-xl transition duration-200 hover:bg-white hover:shadow-md hover:border-0 hover:scale-102 ">
        <img src={sp12} alt="Neutrogena Hydro Boost Hyaluronic Acid Water Gel" className="w-full lg:w-[100%] sm:w-full rounded-xl"/>
        <div className="rating color-yellow xl:text-xl lg:text-lg md:text-sm text-[0.8rem] sm:px-2 sm:text-[1rem] text-black text-center font-medium mt-2">4.4  / 5<span className='text-yellow-400'>&#9733;</span> <span className='text-gray-400'>(58.8k)</span></div>
        <div className="title font-normal xl:text-xl lg:text-lg md:text-sm mt-[10px] sm:px-2 sm:text-[1rem] sm:mb-2 text-[0.8rem] text-black text-center ">Neutrogena Hydro Boost Hyaluronic Acid Water Gel...</div>
       
      </div>


      <div className="product border-[1px] lg:w-full  border-solid-#ddd p-[20px] sm:w-full text-center md:pb-3 md:w-full sm:p-0 bg-white transition duration-200 hover:bg-white hover:shadow-md hover:border-0 hover:scale-102 rounded-xl">
        <img src={sp13} alt="Wella Professionals INVIGO Nutri Enrich Deep Nourishing Conditioner" className="w-full lg:w-[100%] sm:w-full rounded-xl"/>
        <div className="rating color-yellow xl:text-xl lg:text-lg md:text-sm sm:px-2 sm:text-[1rem] text-center text-black text-[0.8rem] font-medium mt-2">4.4  / 5<span className='text-yellow-400'>&#9733;</span> <span className='text-gray-400'>(4k)</span></div>
        <div className="title font-normal xl:text-xl lg:text-lg sm:px-2 md:text-sm sm:text-[1rem] sm:mb-2 mt-[10px] text-[0.8rem] text-black text-center">Wella Professionals INVIGO Nutri Enrich Deep...</div>
        
      </div>


    


      <div className="product border-[1px] border-solid-#ddd lg:w-full sm:w-full p-[20px] md:w-full md:pb-3 text-center sm:p-0 bg-white transition duration-200 hover:bg-white hover:shadow-md hover:border-0 hover:scale-102 rounded-xl">
        <img src={sp14} alt="Schwarzkopf Professional Bonacure Repair Rescue Conditioner" className="w-full sm:w-full rounded-xl"/>
        <div className="rating lg:text-lg xl:text-xl color-yellow md:text-sm sm:px-2 sm:text-[1rem] text-[0.8rem] text-black text-center font-medium mt-2">4.3  / 5<span className='text-yellow-400'>&#9733;</span> <span className='text-gray-400'>(3.2k)</span></div>
        <div className="title lg:text-lg xl:text-xl font-normal md:text-sm sm:px-2 sm:text-[1rem] sm:mb-2 text-[0.8rem] mt-[10px] text-black text-center">Schwarzkopf Professional Bonacure Repair Rescue...</div>
        
      </div>

     
      <div className="product border-[1px] border-solid lg:w-full md:w-full sm:w-full bg-white p-4 md:pb-3 sm:p-0 transition duration-200 hover:bg-white hover:shadow-md hover:border-0 hover:scale-102 rounded-xl">
        <img src={sp16} alt="Neutrogena Hydro Boost Hyaluronic Acid Water Gel" className="max-w-[100%] lg:w-[100%] sm:w-full rounded-xl h-auto"/>
        <div className="rating text-center lg:text-lg xl:text-xl text-[0.8rem] md:text-sm font-medium sm:px-2 sm:text-[1rem] text-black mt-2">4.4  / 5<span className='text-yellow-400'>&#9733;</span> <span className='text-gray-400'>(58.8k)</span></div>
        <div className="title font-normal lg:text-lg xl:text-xl mt-[10px] md:text-sm text-[0.8rem] sm:px-2 text-black sm:text-[1rem] sm:mb-2 text-center">Neutrogena Hydro Boost Hyaluronic Acid Water Gel...</div>
       
      </div>


      <div className="product  border-[1px]  lg:w-full border-solid-#ddd md:w-full p-[20px] sm:w-full md:pb-3 text-center sm:p-0 bg-white rounded-xl transition duration-200 hover:bg-white hover:shadow-md hover:border-0 hover:scale-102 ">
        <img src={sp15} alt="Neutrogena Hydro Boost Hyaluronic Acid Water Gel" className="w-full lg:w-[100%] sm:w-full rounded-xl"/>
        <div className="rating color-yellow xl:text-xl lg:text-lg md:text-sm text-[0.8rem] sm:px-2 sm:text-[1rem] text-black text-center font-medium mt-2">4.4  / 5<span className='text-yellow-400'>&#9733;</span> <span className='text-gray-500'>(58.8k)</span></div>
        <div className="title font-normal xl:text-xl lg:text-lg md:text-sm mt-[10px] sm:px-2 sm:text-[1rem] sm:mb-2 text-[0.8rem] text-black text-center ">Neutrogena Hydro Boost Hyaluronic Acid Water Gel...</div>
       
      </div>


      <div className="product border-[1px] lg:w-full  border-solid-#ddd p-[20px] sm:w-full text-center md:pb-3 md:w-full sm:p-0 bg-white transition duration-200 hover:bg-white hover:shadow-md hover:border-0 hover:scale-102 rounded-xl">
        <img src={sp17} alt="Wella Professionals INVIGO Nutri Enrich Deep Nourishing Conditioner" className="w-full lg:w-[100%] sm:w-full rounded-xl"/>
        <div className="rating color-yellow xl:text-xl lg:text-lg md:text-sm sm:px-2 sm:text-[1rem] text-center text-black text-[0.8rem] font-medium mt-2">4.4 / 5 <span className='text-yellow-400'>&#9733;</span> <span className='text-gray-500'>(4k)</span></div>
        <div className="title font-normal xl:text-xl lg:text-lg sm:px-2 md:text-sm sm:text-[1rem] sm:mb-2 mt-[10px] text-[0.8rem] text-black text-center">Wella Professionals INVIGO Nutri Enrich Deep...</div>
        
      </div>


    


      <div className="product border-[1px] border-solid-#ddd lg:w-full sm:w-full p-[20px] md:w-full md:pb-3 text-center sm:p-0 bg-white transition duration-200 hover:bg-white hover:shadow-md hover:border-0 hover:scale-102 rounded-xl">
        <img src={sp11} alt="Schwarzkopf Professional Bonacure Repair Rescue Conditioner" className="w-full sm:w-full rounded-xl"/>
        <div className="rating lg:text-lg xl:text-xl color-yellow md:text-sm sm:px-2 sm:text-[1rem] text-[0.8rem] text-black text-center font-medium mt-2">4.3  / 5&#9733; <span className='text-gray-500'>(3.2k)</span></div>
        <div className="title lg:text-lg xl:text-xl font-normal md:text-sm sm:px-2 sm:text-[1rem] sm:mb-2 text-[0.8rem] mt-[10px] text-black text-center">Schwarzkopf Professional Bonacure Repair Rescue...</div>
        
      </div>





    <div className="title font-bold mt-[15px] text-sm text-center xl:mt-12 lg:relative xl:w-21 md:w-[100px] md:h-[17px] xxl:relative xxl:left-[180%] xl:h-15 lg:left-[180%] lg:mb-4 lg:h-[25px] lg:w-[150px]  sm:mb-1 sm:relative sm:mt-[5px] xl:relative xl:left-[180%] md:relative md:left-[180%] sm:left-[80%] sm:h-[17px]  sm:w-[100px] relative left-[60%]">
    <Link to={"/maintennace"}
      className="bg-rose-700 text-white text-sm py-2  xl:text-xl  md:mb-5 md:text-sm px-3 sm:hover:py-2 sm:py-2 sm:px-3 sm:text-xs hover:text-white hover:border-[2px] hover:bg-rose-600 rounded-lg hover:py-[15px]"    >
      Explore
    </Link>
    </div>
   </div>
   







    <h2 className="text-[1.1rem] font-bold sm:text-[1rem] md:text-[1.3rem] xl:text-[1.9rem] xl:mt-24 lg:text-[1.6rem] lg:mt-[55px] md:mt-[60px] ml-[10%] sm:ml-[10%]  md:ml-[10%] lg:ml-[10%] xl:ml-[10%] sm:mt-16 mt-[8%]">Trending Designs</h2>

    <div className="container md:grid md:grid-cols-2 md:grid-rows-3 w-[87%] p-[20px] sm:grid sm:grid-cols-1 sm:grid-rows-6 sm:gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-3 grid grid-rows-6 grid-cols-1 bg-white rounded-[5px] shadow-md mx-auto mt-[1%]">
      
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
          <div className="swiper-slide">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src={sp21} alt="Concealer" className="w-full" />
            </div>
          </div>
          <div className="swiper-slide">
            <div className="card bg-white p-4 shadow-md rounded-lg">
              <img src={sp22} alt="Concealer" className="w-full" />
            </div>
          </div>
</div>










    
        
        
        </>
    )
}