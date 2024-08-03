import React from 'react'

const Productcomp = () => {
  return (
    <>
    <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">Nike Air Max Pro 8888 - Super Light</span>
          <span className="float-right text-gray-400">42EU - 8.5US</span>
          <p className="mt-auto text-lg font-bold">$238.99</p>
        </div>
      </div>
    </>
  )
}

export default Productcomp
