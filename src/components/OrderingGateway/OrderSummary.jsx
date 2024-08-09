// src/components/OrderSummary.jsx
import { Link } from 'react-router-dom';
import { MdDeleteOutline } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const OrderSummary = ({ subtotal, tax, shipping, total }) => {
    return (
        <div className="bg-gray-100 rounded-md p-4 h-max">
            <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">Order Summary</h3>
            <div className='flex justify-between'>
                <h4 className="font-medium">Address:</h4>
                <div className='flex mt-1.5 gap-x-2'>
                    <span className='text-lg'><MdDeleteOutline /></span>
                    <span><FaEdit /></span>
                </div>
            </div>
            <div>
                <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, sed?</p>
            </div>
            <div className='mt-6 text-rose-600 text-center border-2 border-rose-700'>
                <button><Link to="/Checkoutnewaddress" >Add New Address</Link></button>
            </div>
            <ul className="text-gray-800 mt-6 space-y-3">
                <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">₹{subtotal.toFixed(2)}</span></li>
                <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-bold">₹{shipping.toFixed(2)}</span></li>
                <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-bold">₹{tax.toFixed(2)}</span></li>
                <hr className="border-gray-300" />
                <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">₹{total.toFixed(2)}</span></li>
            </ul>
            <div className="mt-6 space-y-3">
                <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-rose-600 hover:bg-rose-700 text-white rounded-md">
                    <Link to="/Paymentnow" >Payment Now</Link>
                </button>
                <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">
                    <Link to="/products">Continue Shopping</Link>
                </button>
            </div>
        </div>
    );
}

export default OrderSummary;
