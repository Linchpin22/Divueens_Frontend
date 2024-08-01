import React from 'react'
import { coll1, coll10, coll2, coll3, coll4, coll5, coll6, coll7, coll8, coll9 } from '../../../assets/assets'

const Gallery = () => {
    return (
        <>
            <div className="heading md:pt-16 pt-8 md:pb-8">

                <hr className="bg-gradient-to-l from-rose-700" />
                <h2 className="text-nowrap">Product Gallery</h2>
                <hr className="bg-gradient-to-r from-rose-700" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 mt-8">

                <div className="grid gap-4">
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll5} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll6} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll3} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll1} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll7} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll8} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll10} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                </div>
                <div className="grid gap-4">
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll2} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll4} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                    <div className='group h-auto max-w-full overflow-hidden relative'>
                        <img className="rounded-lg transition group-hover:scale-110 duration-75" src={coll9} alt="" />
                        <p className='absolute top-0 bottom-0 left-0 right-0 group-hover:bg-black/60 hidden text-center items-center justify-center group-hover:text-white group-hover:flex'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quod?
                        </p>
                    </div>
                </div>
               
            </div>

        </>
    )
}

export default Gallery