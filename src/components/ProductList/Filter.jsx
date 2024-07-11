/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from 'react';
import { useState } from 'react';
// this is an Onclick function whenever user click on Category this fn triggered.
const Filter = ({itemData , changedFunction}) => {

    const [item , setItem] = useState(itemData)
    const menuItem = [... new Set(itemData.map(val => val.category))]
    const menuColor = [... new Set(itemData.map(val => val.color))]
    const menuDressStyle = [... new Set(itemData.map(val => val.dresStyle))]

    const [selectedItem , setSelectedItem] = useState([])
    let arrValue = []
    let newItems = itemData

    const AllItemsCategory = () =>{
        changedFunction(newItems)
    }

    const filterItems = (userChoiceOption) => {
        arrValue = selectedItem.push(userChoiceOption)
    }
    
    const filterSubmitbtn = () => {
        setSelectedItem(arrValue)
        let newItems = itemData.filter((newval) => {
            return selectedItem.includes(newval.category) && selectedItem.includes(newval.dresStyle) && selectedItem.includes(newval.color)
        } )
        setItem(newItems)
        changedFunction(newItems)
    }
    
    

    return (
        <div className="flex flex-col items-center ml-8 min-h-[600px] w-[250px] rounded-xl border-[2px] border-gray-200 px-6 py-3">
            <div className="flex justify-between items-center w-full">
                <h1 className="text-[20px] font-semibold text-black">Filters</h1>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAa0lEQVR4nGNgGI4gGYqpKUcfC/ygChZAcTJUjGoWJOPAVPcBMvalRRzgA8lDwoJkEg3xIyJxUGRBMhGJgyo+SMaTOCiygGQwIBb4UZjLCSpMpjCXE+2DZDJzOXkKh6QFyYO6wqGbBQxDCgAAaDA4ICxX1IoAAAAASUVORK5CYII=" />
            </div>
            <hr className="my-4" />
            <div className="w-full">
                <ul className="text-[15px] leading-[30px] text-gray-600">
                <li onClick={() => AllItemsCategory()} className="flex justify-between items-center"><h4>All</h4> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALZJREFUSEtjZKAxYKSx+QyjFhAM4cETRD5hKQ1/mP4s2LFiwQOCzkZSQJQPQIb///+/noGB4cFf5r+OpFhClAUeEQkKzH+Z9zMwMCiQaglRFoB8TK4lRFtAriUkWUCOJeRaMJ+BgcEBFB9bV89VxJeqSLIAGg9EGw6ymGgLyDGcaAvINZxoC7xCkxIYGRhBQUMwzNHjg+ggAlmybfW8BaQUE0T7gFRDkdUT7QNyLRm1gGDI0TyIAEB4Vxkms2PsAAAAAElFTkSuQmCC" /></li>
                    {
                        menuItem.map(val =>
                            <li onClick={() => filterItems(val)} className="flex justify-between items-center"><h4>{val}</h4> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALZJREFUSEtjZKAxYKSx+QyjFhAM4cETRD5hKQ1/mP4s2LFiwQOCzkZSQJQPQIb///+/noGB4cFf5r+OpFhClAUeEQkKzH+Z9zMwMCiQaglRFoB8TK4lRFtAriUkWUCOJeRaMJ+BgcEBFB9bV89VxJeqSLIAGg9EGw6ymGgLyDGcaAvINZxoC7xCkxIYGRhBQUMwzNHjg+ggAlmybfW8BaQUE0T7gFRDkdUT7QNyLRm1gGDI0TyIAEB4Vxkms2PsAAAAAElFTkSuQmCC" /></li>
                        )
                    }
                </ul>
            </div>
            <hr className="my-4" />
            <div className="w-full">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-[20px]">Price</h1>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJhJREFUSEvtksENgCAQBJdOtBPtRDuxE+3EVixFNzkSYpA9H7zgEoNR2IE5AipXqJyPDpCG21M0mJNLurEJfxQxfAfAcQbggngBMXxKTuCCeABpeNw1v/FdQhTgHT6aotNGCSkBcuGxt/zngpQAizWVu+TO35VC1udER+5mKUXbs4jPVxHCxmfDuUgBvNf9c14HSIVdUQOKbneJGhmNie+rAAAAAElFTkSuQmCC" />
                </div>
                <div className="relative w-full">
                    <input
                        type="range"
                        min="100"
                        max="1000"
                        className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
                    /></div>
            </div>
            <hr className='my-4' />
            <div className='w-full '>
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-[20px]">Shades</h1>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJhJREFUSEvtksENgCAQBJdOtBPtRDuxE+3EVixFNzkSYpA9H7zgEoNR2IE5AipXqJyPDpCG21M0mJNLurEJfxQxfAfAcQbggngBMXxKTuCCeABpeNw1v/FdQhTgHT6aotNGCSkBcuGxt/zngpQAizWVu+TO35VC1udER+5mKUXbs4jPVxHCxmfDuUgBvNf9c14HSIVdUQOKbneJGhmNie+rAAAAAElFTkSuQmCC" />
                </div>
                <div className='h-[100px] flex flex-wrap gap-6'>
                    {
                        menuColor.map(val => 
                        <div  onClick={() => filterItems(val)} className={` h-[30px] w-[30px] ${val} rounded-full border-b-slate-600 border-[2px]`}></div>
                    )}
                    
                    

                </div>
            </div>
            <hr className='my-4' />
            <div className='w-full '>
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold text-[20px]">Dress Styles</h1>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAJhJREFUSEvtksENgCAQBJdOtBPtRDuxE+3EVixFNzkSYpA9H7zgEoNR2IE5AipXqJyPDpCG21M0mJNLurEJfxQxfAfAcQbggngBMXxKTuCCeABpeNw1v/FdQhTgHT6aotNGCSkBcuGxt/zngpQAizWVu+TO35VC1udER+5mKUXbs4jPVxHCxmfDuUgBvNf9c14HSIVdUQOKbneJGhmNie+rAAAAAElFTkSuQmCC" />
                </div>
                <div className='my-4'>
                    <ul className="text-[15px] leading-[30px] text-gray-600">
                        {
                            menuDressStyle.map(val =>
                                <li  onClick={() => filterItems(val)} className={`flex justify-between items-center`}><h4>{val}</h4><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALZJREFUSEtjZKAxYKSx+QyjFhAM4cETRD5hKQ1/mP4s2LFiwQOCzkZSQJQPQIb///+/noGB4cFf5r+OpFhClAUeEQkKzH+Z9zMwMCiQaglRFoB8TK4lRFtAriUkWUCOJeRaMJ+BgcEBFB9bV89VxJeqSLIAGg9EGw6ymGgLyDGcaAvINZxoC7xCkxIYGRhBQUMwzNHjg+ggAlmybfW8BaQUE0T7gFRDkdUT7QNyLRm1gGDI0TyIAEB4Vxkms2PsAAAAAElFTkSuQmCC" /></li>
                        )}
                        
                    </ul>
                </div>
            </div>
            <button onClick={() => filterSubmitbtn()} className={`applyFilter my-8 bg-black text-white py-3 px-5 rounded-[50px]`}>Apply Filter</button>
        </div>
    );
};

export default Filter

                                