import React, { useState, useEffect } from 'react';

export default function Header() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setMessage('Sign in successful!');
      setMessageType('success');
    } else {
      setMessage('Invalid email. Please try again.');
      setMessageType('error');
    }
  };

  return (
    <div>
      <div className="absolute top-[65%] mt-3 w-full z-10">
        <form onSubmit={handleSubmit} className="w-[80%] mx-auto mb-4 mt-4 shadow-xl">
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
            search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <div
                className="w-12 h-12 ps-3 bg-cover bg-center rounded-full"
                style={{ backgroundImage: "url('/assets/avtar.png')" }}
              ></div>
            </div>
            <input
              type="email"
              id="default-search"
              className="outline-none block w-full p-6 ps-16 text-sm text-gray-900 border border-rose-200 rounded-lg bg-white shadow-lg focus:ring-rose-500 focus:border-rose-500 focus:shadow-xl dark:bg-gray-50 dark:border-rose-200 dark:placeholder-gray-500 hover:border-rose-600 dark:text-gray-900 transition-all duration-300 ease-in-out"
              placeholder="Enter your email to sign in"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="text-white mb-2 mr-2 p-1 absolute end-2.5 bottom-2.5 bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-500"
            >
              Sign in
            </button>
          </div>
        </form>
        {message && (
          <div 
            className={`w-[80%] mx-auto p-4 rounded-lg ${
              messageType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            } transition-opacity duration-300 ${message ? 'opacity-100' : 'opacity-0'}`}
          >
            {message}
          </div>
        )}
      </div>
    </div>
  );
}