import React from 'react';
import bg from '../../assets/HelpCenter/bg.jpg';

export default function Search() {
    return (
      <div className="relative h-96 w-auto mt-0 ml-5 mr-5">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50 z-[-1]"
          style={{ 
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="flex flex-col items-center justify-start h-full pt-10">
          <h1 className="text-center font-extrabold text-2xl md:text-3xl lg:text-4xl text-black mb-3 mt-6">
            Hey, how can we help you?
          </h1>
          <h4 className="text-center font-extrabold text-sm md:text-base lg:text-lg text-gray-700 mb-6">
            Let us know if you need any assistance
          </h4>

          {/* search */}
          <div className="w-[50%] mx-auto shadow-xl">
            <form> 
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
                <input type="search" id="default-search" className="outline-none block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-rose-500 focus:border-rose-500 placeholder-gray-400 focus:placeholder-gray-500" placeholder="Type here" required />              
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  