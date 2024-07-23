import React, { useState } from 'react';
import { LuDoorOpen } from "react-icons/lu";

const PaymentOptions = () => {
  const [pinCode, setPinCode] = useState('');
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardHolderName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });
  const [message, setMessage] = useState('');
  const [showCOD, setShowCOD] = useState(false);

  const codAvailableZones = {
    '110001': true,
    '400001': true,
    '700001': true,
    '281001': true,
    // Add more pin codes as needed
  };

  const handlePinCodeChange = (e) => {
    const value = e.target.value;
    setPinCode(value);
    setMessage(''); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (codAvailableZones[pinCode]) {
      setShowCOD(true);
      setMessage('COD is available in your area!');
    } else {
      setShowCOD(false);
      setMessage('Sorry, COD is not available in your area.');
    }
  };

  const handleCreditCardButtonClick = () => {
    setShowCreditCardForm(true);
    setShowCOD(false); 
  };

  const handleCreditCardFormSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Credit Card Details:', cardDetails);
    setCardDetails({
      cardHolderName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    });
    setMessage('Credit card details submitted successfully.');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value
    });
  };

  const handleBackToPaymentMethod = () => {
    setShowCreditCardForm(false);
    setMessage(''); 
  };

  return (
    <div className="w-full p-4 sm:p-6 md:p-8 bg-rose-300 rounded-lg shadow-lg relative">
      {showCreditCardForm ? (
        <div>
          <button
            onClick={handleBackToPaymentMethod}
            className="absolute top-1 right-2 p-2 text-slate-50"
          >
            <LuDoorOpen size={25} />
          </button>

          <h2 className="text-lg sm:text-xl font-semibold mb-4">Credit/Debit Card Payment:</h2>
          
          <form onSubmit={handleCreditCardFormSubmit} className="mb-4">
            <label htmlFor="cardHolderName" className="block text-base sm:text-lg font-medium">Card Holder Name:</label>
            <input
              type="text"
              id="cardHolderName"
              name="cardHolderName"
              className="w-full bg-white rounded-md px-3 py-2 mt-1 border-b-[1.6px] border-l-0 border-r-0 border-slate-100 focus:outline-none shadow-lg"
              placeholder="Enter card holder name"
              value={cardDetails.cardHolderName}
              onChange={handleInputChange}
            />

            <label htmlFor="cardNumber" className="block text-base sm:text-lg font-medium mt-4">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="w-full bg-white rounded-md px-3 py-2 mt-1 border-b-[1.6px] border-l-0 border-r-0 border-slate-100 focus:outline-none shadow-lg"
              placeholder="Enter card number"
              value={cardDetails.cardNumber}
              onChange={handleInputChange}
            />

            <label htmlFor="expiryDate" className="block text-base sm:text-lg font-medium mt-4">Expiry Date:</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              className="w-full bg-white rounded-md px-3 py-2 mt-1 border-b-[1.6px] border-l-0 border-r-0 border-slate-100 focus:outline-none shadow-lg"
              placeholder="MM/YYYY"
              value={cardDetails.expiryDate}
              onChange={handleInputChange}
            />

            <label htmlFor="cvv" className="block text-base sm:text-lg font-medium mt-4">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              className="w-full bg-white rounded-md px-3 py-2 mt-1 border-b-[1.6px] border-l-0 border-r-0 border-slate-100 focus:outline-none shadow-lg"
              placeholder="Enter CVV"
              value={cardDetails.cvv}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="mt-4 w-full bg-white rounded-md px-4 py-2 text-rose-400 font-medium shadow-lg hover:bg-slate-100 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Payment Method:</h2>
          
          <form onSubmit={handleSubmit} className="mb-4">
            <label htmlFor="pinCode" className="block text-base sm:text-lg font-medium">Check COD in your zone:</label>
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <input
                type="text"
                id="pinCode"
                className="w-full sm:flex-grow bg-white rounded-md px-3 py-2 border-b-[1.6px] border-l-0 border-r-0 border-slate-100 focus:outline-none shadow-lg"
                placeholder="Enter your PIN code"
                value={pinCode}
                onChange={handlePinCodeChange}
              />
              <button 
                type="submit"
                className="w-full sm:w-auto px-4 py-2 bg-white rounded-md text-rose-400 font-medium shadow-lg hover:bg-slate-100 transition-colors outline-none"
              >
                Submit
              </button>
            </div>
          </form>

          {message && (
            <p className={`mb-4 font-medium text-center ${showCOD ? 'text-white' : 'text-red-700'}`}>
              {message}
            </p>
          )}

          <div className="flex flex-col items-center sm:items-start">
            <button
              onClick={handleCreditCardButtonClick}
              className="bg-white mb-2 h-12 w-full sm:w-48 rounded-full flex justify-center items-center text-base transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md active:scale-95"
            >
              Credit/Debit Card
            </button>
            <button className="bg-white mb-2 h-12 w-full sm:w-48 rounded-full flex justify-center items-center text-base transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md active:scale-95">
              UPI
            </button>
            {showCOD && (
              <button className="bg-white h-12 w-full sm:w-48 rounded-full flex justify-center items-center text-base transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-md active:scale-95">
                COD
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentOptions;
