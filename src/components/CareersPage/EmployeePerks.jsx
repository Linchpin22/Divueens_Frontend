import React from 'react'
import Carousel from './Carousel'

function EmployeePerks() {
  return (
    <div className='w-11/12 mx-auto py-12 border-b-2'>
        <h1 className="text-2xl font-semibold capitalize mx-auto w-fit ">Employee perks & benefits</h1>
        <div className="slider">
            <Carousel/>
            <div className='text-sm mx-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, rem.</div>
        </div>
    </div>
  )
}

export default EmployeePerks