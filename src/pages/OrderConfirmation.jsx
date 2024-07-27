import { useNavigate } from 'react-router-dom';
import order from '../assets/HelpCenter/order.png';

export default function Afterorder() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-100 p-4">
      <div className="h-[95%] w-[97%] bg-rose-200 rounded-lg shadow-lg flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 overflow-auto">
        <div className="w-full lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
          <img src={order} alt="Order Confirmation" className="w-full h-auto" />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:ml-20">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3 lg:mb-5 text-center lg:text-left">Thank you for the purchase!</h1>
          <p className="text-lg mb-6 lg:mb-8 font-semibold text-center lg:text-left">Your order is successfully placed</p>
          <p className="mb-2 mt-6 font-semibold lg:mt-10">Order Number: #123456</p>
          <p className="mb-6 lg:mb-8 font-semibold">Estimated Delivery: 3-5 business days</p>
          <div className="flex flex-col space-y-4 mt-6 lg:mt-10 w-full lg:w-3/4">
            <button 
              className="w-full text-black bg-rose-200 outline-black border font-bold border-black px-4 py-2 rounded-lg md:h-14 lg:h-14 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-rose-200"
              onClick={() => navigate('/')}
            >
              Continue shopping
            </button>
            <button className="w-full bg-black text-white px-4 py-2 rounded-lg font-bold md:h-14 lg:h-14 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-900" onClick={()=> useNavigate("/track-order")}>
              Track Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}