import React from 'react'
import {
    background,
    Brush,
    Eyes,
    Lips,
    SkinCare,
    Nails,
    Face,
} from '../../../assets/assets';
import './ShopByCategory.css'

const ShopByCategory = () => {
    return (
        <>
            <section className="Shop_By_Category">
                <div style={{
                    backgroundImage: `url(${background})`
                }} className="main w-screen h-[80vh] bg-white my-[20px] mx-0 box-border p-[15px] flex flex-col bg-center bg-cover">
                    <div className="heading">
                        <hr className="hr-left" />
                        <h2>Shop By Categories</h2>
                        <hr className="hr-right" />
                    </div>
                    <div className="content w-full h-[70vh] box-border flex justify-center items-center">
                        <div className="categories-container categ grid justify-center items-center grid-cols-3 grid-rows-2 gap-[50px] w-1/2 h-[90%] box-border place-content-center z-[2]">
                            <div style={{ backgroundImage: `url(${Eyes})` }} className="categories-item w-full h-full rounded-[5px] text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline eyes"><a href="https://">
                                <div className="label bg-[#cc7c7dc9] w-full h-full max-h-[40px] text-center text-white absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">Eyes</div>
                            </a></div>
                            <div style={{
                                backgroundImage: `url(${Face})`
                            }} className="categories-item w-full h-full rounded-[5px] text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline face"><a href="http://">
                                    <div className="label bg-[#cc7c7dc9] w-full h-full max-h-[40px] text-center text-white absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">Face</div>
                                </a></div>
                            <div style={{
                                backgroundImage: `url(${Lips})`
                            }} className="categories-item w-full h-full rounded-[5px] text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline lips"><a href="http://">
                                    <div className="label bg-[#cc7c7dc9] w-full h-full max-h-[40px] text-center text-white absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">Lips</div>
                                </a></div>
                            <div style={{
                                backgroundImage: `url(${SkinCare})`
                            }} className="categories-item w-full h-full rounded-[5px] text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline skincare"><a href="http://">
                                    <div className="label bg-[#cc7c7dc9] w-full h-full max-h-[40px] text-center text-white absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">Skincare</div>
                                </a></div>
                            <div style={{
                                backgroundImage: `url(${Nails})`
                            }} className="categories-item w-full h-full rounded-[5px] text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline nails"><a href="http://">
                                    <div className="label bg-[#cc7c7dc9] w-full h-full max-h-[40px] text-center text-white absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">Nails</div>
                                </a></div>
                            <div style={{
                                backgroundImage: `url(${Brush})`
                            }} className="categories-item w-full h-full rounded-[5px] text-[1.5em] box-border bg-center bg-cover relative overflow-hidden cursor-pointer no-underline brush"><a href="http://">
                                    <div className="label bg-[#cc7c7dc9] w-full h-full max-h-[40px] text-center text-white absolute bottom-0 transition-[max-height_.3s_ease] overflow-hidden cursor-pointer no-underline">Brush</div>
                                </a></div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ShopByCategory
