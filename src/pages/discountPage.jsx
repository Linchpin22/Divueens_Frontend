import I1 from './../assets/Discount/d1.png';
import I2 from './../assets/Discount/d2.png';
import I3 from './../assets/Discount/d3.png';
import I4 from './../assets/Discount/d4.png';
import I5 from './../assets/Discount/I8.jpg';
import I6 from './../assets/Discount/d6.png';

function Discount() {
  
    return (
        <div>

            <div className='w-[90%] max-sm:w-[95%] m-auto my-10'>
                <div>
                    <img src={I1} className='rounded-2xl w-full max-h-[500px]'/>
                </div>
            </div>

            <div className='w-[80%] m-auto flex items-center justify-center my-24 max-sm:my-16 max-sm:w-[95%]'>
                <div className='w-[60%]'>
                    <p className='text-3xl max-md:text-xl max-sm:text-lg font-semibold'>Refer a Friend, Get 20% Off</p>
                    <p className='text-xl max-md:text-base max-sm:text-sm my-8 pr-[10%]'>Share the love of beauty with your friends and
                        enjoy a 20% discount on your next purchase.
                    </p>
                    <button className='bg-rose-300 py-3 px-8 font-semibold rounded-2xl'>Refer Now</button>
                </div>
                <div className='w-[40%]'>
                    <img src={I6} className='w-full min-h-[150px] ml-[10%] max-sm:ml-0 max-sm:w-[200px]'/>
                </div>
            </div>

            <div className='w-[80%] m-auto my-24 max-sm:my-16 max-sm:w-[95%]'>
                <div className='w-full grid grid-cols-2 gap-x-[6%]'>
                    <img src={I2} className='rounded-2xl w-full max-h-[400px] min-h-[200px]'/>
                    <img src={I3} className='rounded-2xl w-full max-h-[400px] min-h-[200px]'/>
                </div>
            </div>

            <div className='w-[80%] m-auto flex items-center  my-24 max-sm:my-16 max-sm:w-[95%]'>
                <div className='w-[50%] mr-[6%]'>
                    <img src={I4} className='w-full rounded-2xl max-sm:ml-0 min-h-[180px]'/>
                </div>
                <div className='w-[50%]'>
                    <p className='text-3xl max-md:text-xl max-sm:text-lg font-semibold'>Flat 50% Off on Select Items</p>
                    <p className='text-xl max-md:text-base max-sm:text-sm my-10 max-[500px]:my-4'>Upgrade your beauty collection with our
                                handpicked selection of products available at
                                half the price.
                    </p>
                    <button className='bg-rose-300 py-3 px-8 font-semibold rounded-2xl max-sm:px-4'>Shop Now</button>
                </div>                
            </div>

            <div className='w-[80%] m-auto flex items-center  my-24 max-sm:my-16 max-sm:w-[95%]'>
                <img src={I5} className='w-full rounded-2xl'/>
            </div>

            <div className='w-[80%] m-auto items-center  my-24 max-sm:my-16 max-sm:w-[95%]'>
                <p className='text-center text-3xl font-bold'>Stay Updated</p>
                <p className='mt-10 max-sm:mt-5 text-center'>Subscribe to our newsletter to stay updated on the latest</p>
                <p className='mb-10 max-sm:mb-5 text-center'>deals, offers, and beauty news.</p>
                <input type='text' className='border ml-[30%] max-lg:ml-[25%] border-rose-600 w-[30%] min-w-[250px] max-sm:ml-[20%] max-[500px]:ml-[10%] max-[400px]:min-w-[200px] max-[400px]:ml-[10%] max-[350px]:ml-[5%] max-[320px]:ml-1 h-10'/>
                <button className='text-white font-bold p-2 bg-rose-600'>Subscribe</button>
            </div>

        </div>
    );
  
  }
  
  export default Discount;
  
  
  
  
