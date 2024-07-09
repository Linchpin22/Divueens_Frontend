import React from 'react'
import { Lipstick } from '../../assets/assets'

const CardItem = () => {

    const productDetails = [
        {
            id: 1,
            name: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            price: 500,
            image: Lipstick,
        },
        {
            id: 2,
            name: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            price: 500,
            image: Lipstick,
        },
        {
            id: 3,
            name: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            price: 500,
            image: Lipstick,
        },
        {
            id: 4,
            name: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            price: 500,
            image: Lipstick,
        },
        {
            id: 5,
            name: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            price: 500,
            image: Lipstick,
        },
        {
            id: 6,
            name: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            price: 500,
            image: Lipstick,
        },
        {
            id: 7,
            name: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            price: 500,
            image: Lipstick,
        },
        {
            id: 8,
            name: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            price: 500,
            image: Lipstick,
        },
        {
            id: 9,
            name: 'Moisture Matte Long Stay Lipstick - 2g | Pink Lemonade',
            price: 500,
            image: Lipstick,
        },
    ]

    return (
        <div className='w-full'>

            <div className='grid grid-cols-3 grid-rows-3 gap-5'>
                {productDetails.map((p) => {
                    return <div key={p.id} className='w-full m-auto relative'>
                        <div className="m-auto bg-[#00000017] mt-[1rem] rounded-2xl">
                            <img src={p.image} alt='image' className='m-auto' />
                        </div>
                        <p className='text-left text-[1.3rem] font-medium leading-[1.5rem] mt-4'>{p.name}</p>
                        <div className='flex mt-1'>
                            <div className="star icon text-white">
                                <span className="fa fa-star checked star text-[1rem] text-[#ffa200]" ></span>
                                <span className="fa fa-star checked star text-[1rem] text-[#ffa200]" ></span>
                                <span className="fa fa-star checked star text-[1rem] text-[#ffa200]" ></span>
                                <span className="fa fa-star sharp-half text-[1rem] text-[#ffa200]"></span>
                            </div>
                            <div>
                                <p className='ml-5'>4/<span className='text-[#00000077]'>5</span></p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between mt-1'>
                            <p className='text-[20px] mt-[6px]'>RS {p.price}</p>
                            <button className='bg-gray-500 text-white w-[120px] p-2 rounded-full ml-[20px]'>Add To Cart</button>
                        </div>
                        <div>
                            <span className="fa fa-heart checked heart text-[25px] text-rose-300 absolute top-8 right-2 bg-white p-2 rounded-full" ></span>
                        </div>
                        <div>
                            <p className=" text-[15px] text-rose-500 absolute top-8 left-2 bg-white p-1 px-4 rounded-full" > 30% off </p>
                        </div>
                    </div>
                })}
            </div>

            <div className='flex my-10 items-center justify-between'>
                <button className='border p-2 px-12 border-gray-400 rounded-xl mr-20'> Prev </button>
                <p className='text-center text-[20px] mt-1'> 1 2 3  ...  8 9 10</p>
                <button className='border p-1 px-12 border-gray-400 rounded-xl ml-20'> Next </button>
            </div>


        </div>
    )
}

export default CardItem
