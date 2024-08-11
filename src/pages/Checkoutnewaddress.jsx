import React from 'react'
import {useContext} from 'react';
import { CartContext } from '../context/CartContext';
import { IoClose } from "react-icons/io5";
const Checkoutnewaddress = ({onClose}) => {
  
  return (<>

     <div className="flex py-20 z-50 backdrop-blur-sm  justify-center top-0 left-0 bottom-0 right-0 bg-black/60 absolute">
      



      <div className="flex w-[60%] bg-white sm:w-[50%] md:w-[40%]  lg:w-[30%] xl:w-[30%] leading-relaxed m-2 p-4 border-2 border-gray-400  flex-col">
      <IoClose onClick={onClose} className='text-2xl text-right'/>
        <h1 className='font-bold text-center text-[1.5rem] mb-3'>Address</h1>
       
    <form>
      <div className='flex flex-col mb-4'>
        <label for="house_no">House No.</label>
        <input required type="text" className='border-2 border-gray-400' id="house_no" name="house_no" autocomplete="house_no"/>
      </div>
      <div className='flex flex-col mb-4'>
        <label for="street-address">Street address</label>
        <input type="text" id="street-address" className='border-2 border-gray-400' name="street-address" autocomplete="street-address" required></input>
      
      </div>
      <div  className='flex flex-col mb-4'>
        <label for="postal-code">ZIP or postal code (optional)</label>
        <input className='border-2 border-gray-400' id="postal-code" name="postal-code" autocomplete="postal-code"/>
      </div>
      <div className='flex flex-col mb-4'>
        <label for="city">City</label>
        <input required type="text" className='border-2 border-gray-400' id="city" name="city" autocomplete="address-level2" />
      </div>
      <div className='flex flex-col mb-4'>
        <label for="country">Country or region</label>
        <select id="country" name="country" autocomplete="country" required>
            
          
            <option value="IN">India</option>
           
        </select> 
      </div>
      <button type='button' class="flex items-center justify-center font-semibold mt-10 tracking-wide bg-rose-600 hover:bg-rose-700 px-4 text-lg rounded-md text-white">save address</button>
    </form>
  </div>




    </div></>
  )
}

export default Checkoutnewaddress;
