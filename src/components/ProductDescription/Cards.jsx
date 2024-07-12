import React from 'react';
import img from '../../assets/pictures/img1.jpg';
import { CiHeart } from "react-icons/ci";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
// import '../input.css';
import { FreeMode, Navigation,} from 'swiper/modules';
import { LuShoppingCart } from "react-icons/lu";
function Cards() {
  const relatedProducts = [
    { id: 1, src: img, title: 'Sony BRAVIA XR Android Tv', price: '$800.22', buttonText: 'Add to cart',},
    { id: 2, src: img, title: 'Mi P1 Smart Android HD TV', price: '$400.22', buttonText: 'Add to cart',},
    { id: 3, src: img, title: 'Konka OLED of Android Tv', price: '$700.22', buttonText: 'Add to cart',},
    { id: 4, src: img, title: 'CL Roku Smart Android Tv', price: '$800.22', buttonText: 'Out of Stock',},
    { id: 5, src: img, title: 'Sony BRAVIA XR Android Tv', price: '$800.22', buttonText: 'Add to cart',},
    { id: 6, src: img, title: 'Mi P1 Smart Android HD TV', price: '$400.22', buttonText: 'Add to cart',},
    { id: 7, src: img, title: 'Konka OLED of Android Tv', price: '$700.22', buttonText: 'Add to cart',},
    { id: 8, src: img, title: 'CL Roku Smart Android Tv', price: '$800.22', buttonText: 'Out of Stock',},
  ];
  return (
    <div className='w-[60vh] h-[400px] sm:w-full sm:min-h-[600px] mx-auto box-border overflow-hidden'>
      <Swiper
        breakpoints={{
          200: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          376: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1240: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
        }}
        modules={[FreeMode,Navigation]}
        navigation={true}
        freeMode={true}
        className='w-full mx-auto'
      >
        {relatedProducts.map((product) => (
          <SwiperSlide className='p-4 flex justify-center items-center' key={product.id}>
            <div className="text-center">
              <div className="lg:h-[370px] lg:w-[280px] sm:h-[270px] sm:w-[200px] w-[200px] h-[300px] relative product-box transition duration-200 bg-white shadow-lg hover:shadow-lg hover:scale-102 mx-auto">
                <img src={product.src} alt={product.title} className="w-full h-full object-cover" />
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[70%] bg-rose-600 text-white flex hover:bg-rose-900 justify-center items-center py-3 gap-4 rounded-[10px]">
                  <LuShoppingCart />
                  <button className="text-white">{product.buttonText}</button>
                </div>
                <div className='absolute top-[10px] right-[10px] p-[5px] border-[1px] border-slate-200 rounded-full'>
                  <CiHeart size={25} />
                </div>
                </div>
               <div className="product-info mt-2">
                <div className="title text-center">{product.title}</div>
                <div className="rating text-center text-[16px] font-semibold mt-2">{product.price}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Cards;
