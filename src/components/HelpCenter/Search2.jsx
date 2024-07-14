export default function Header() {
  return (
    <div>
      <div className="absolute top-[60%] mt-3 w-full z-10">
        <form className="w-[80%] mx-auto mb-4 mt-4 shadow-xl">
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
              type="search"
              id="default-search"
              className="outline-none block w-full p-6 ps-16 text-sm text-gray-900 border border-rose-200 rounded-lg bg-white shadow-lg focus:ring-rose-500 focus:border-rose-500 focus:shadow-xl dark:bg-gray-50 dark:border-rose-200 dark:placeholder-gray-500 hover:border-rose-600 dark:text-gray-900 transition-all duration-300 ease-in-out"
              placeholder="Let's connect"
              required
            />
            <button
              type="submit"
              className="text-white mb-2 mr-2 p-1 absolute end-2.5 bottom-2.5 bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-rose-600 dark:hover:bg-rose-700 dark:focus:ring-rose-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}