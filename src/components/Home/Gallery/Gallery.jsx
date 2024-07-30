import React from 'react'
import { coll1, coll10, coll2, coll3, coll4, coll5, coll6, coll7, coll8, coll9 } from '../../../assets/assets'

const Gallery = () => {
    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 mt-8">
               
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll5} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll6} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll3} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll1} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll7} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll8} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll10} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll2} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll4} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll9} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll5} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll6} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll3} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll1} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll7} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll8} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll10} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll2} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll4} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={coll9} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Gallery