export default function Lower() {
  return (
    <div className="bg-rose-100 h-auto w-auto bottom-0 mb-0 pb-8 mr-5 ml-5">
      {/* grid - hidden on small screens */}
      <div className="hidden sm:grid grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 py-3 max-w-4xl mx-auto">
        {['Free shipping', 'High quality', '24/7 Support', 'Warranty Protection'].map((title, index) => (
          <div key={index} className="text-center group">
            <h5 className="font-bold text-xl mb-1 transition-transform duration-300 ease-in-out group-hover:transform group-hover:scale-110">
              {title}
            </h5>
            <p className="text-gray-500">
              {index === 0 && "Order over 150$"}
              {index === 1 && "Crafted from top materials"}
              {index === 2 && "Dedicated support"}
              {index === 3 && "Over two years"}
            </p>
          </div>
        ))}
      </div>
      {/* title */}
      <h1 className="text-center font-extrabold text-1xl md:text-2xl lg:text-3xl text-black mb-3 mt-6">
        Hey, how can we help you?
      </h1>
      <div className="w-full sm:w-[70%] md:w-[60%] lg:w-[50%] mx-auto shadow-xl">
      <form>  
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="outline-none block w-full p-2 sm:p-4 pl-10 pr-24 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-rose-500 focus:border-rose-500 placeholder-gray-400 focus:placeholder-gray-500"
            placeholder="Type here"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 transition-colors duration-300 ease-in-out"
          >
            Subscribe
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}