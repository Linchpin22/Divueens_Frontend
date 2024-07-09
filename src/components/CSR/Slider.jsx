import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/scrollbar'
import { FreeMode, Pagination, Scrollbar, Mousewheel } from 'swiper/modules'
import dummy from '../../assets/CSR/dummy.jpg'

const Slider = () => {

    const ServiceData = [
        {
            title: "Lorem Ipsum",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat facilis aliquid voluptatibus sit dolores ad beatae nesciunt itaque vel?",
            backgroundImage: dummy,
        },
        {
            title: "Lorem Ipsum",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat facilis aliquid voluptatibus sit dolores ad beatae nesciunt itaque vel?",
            backgroundImage: dummy,
        },
        {
            title: "Lorem Ipsum",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat facilis aliquid voluptatibus sit dolores ad beatae nesciunt itaque vel?",
            backgroundImage: dummy,
        }, {
            title: "Lorem Ipsum",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat facilis aliquid voluptatibus sit dolores ad beatae nesciunt itaque vel?",
            backgroundImage: dummy,
        }, {
            title: "Lorem Ipsum",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat facilis aliquid voluptatibus sit dolores ad beatae nesciunt itaque vel?",
            backgroundImage: dummy,
        },
        {
            title: "Lorem Ipsum",
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero fugiat facilis aliquid voluptatibus sit dolores ad beatae nesciunt itaque vel?",
            backgroundImage: dummy,
        },
    ];

    return (
        <div className="slideBar flex items-center justify-center gap-6 flex-col min-h-60 p-3 lg:p-6 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/images/cardBgmobile.png)' }}>
            <h1 className="headingText text-4xl font-bold text-center">Our CSR</h1>
            <h3 className="subHeadingText text-wrap w-3/5 text-center text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum perspiciatis architecto, excepturi quas delectus tempore laboriosam quaerat harum magnam dignissimos?</h3>
            <Swiper
                breakpoints={{
                    340: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    700: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    }
                }}
                
                modules={[FreeMode, Pagination, Scrollbar, Mousewheel]}
                freeMode={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                mousewheel={{ forceToAxis: true }}
                className='max-w-[90%] lg:max-w[80%]'>

                {ServiceData.map((item, i) => (
                    <SwiperSlide key={i} className='p-4'>
                        <div className="flex flex-col gap-6 group relative shadow-md shadow-black rounded-xl h-[280px] w-[170px] lg:h-[400px] lg:w-[310px] overflow-hidden">
                            <div className="bbg-zoom-out absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.backgroundImage})` , transition:'transform 0.3s ease-in-out'}} />
                            <div className="relative flex flex-col gap-3 h-full">
                            <div className="absolute inset-0 bg-[#FBBDBB] opacity-0 hover:opacity-50 transition-all duration-200 tint" />
                                <h1 className='text-xl lg:text-2xl font-extrabold text-shadow-md-white p-3 lg:px-5 lg:py-8 z-10'>{item.title}</h1>
                                <div className="text-sm lg:text-[18px] absolute w-full bottom-0 bg-white bg-opacity-70 p-3 lg:px-5 lg:py-8 z-10">{item.content}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}

export default Slider