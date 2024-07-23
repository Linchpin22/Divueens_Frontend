// eslint-disable-next-line no-unused-vars
import React, { useEffect , useState } from 'react'
import allItemData from './ProductListItemData';

function AddCart() {
    const [arrayOfCartItemId, setArrayOfCartItemId] = useState(JSON.parse(localStorage.getItem("Item-Id")) || []);
    const [cartItemData , setCartItemData] = useState([]);
    

    useEffect(() => {
        
        const modifiedCartData = allItemData.filter((val) => arrayOfCartItemId.includes(val.id));
        setCartItemData(modifiedCartData);
        const gv = JSON.parse(localStorage.getItem("Item-Id")) || []
        if(gv !== arrayOfCartItemId) return setArrayOfCartItemId(JSON.parse(localStorage.getItem("Item-Id")) || []);
        // else return setArrayOfCartItemId(gv)

    },[arrayOfCartItemId]);

    const toRemoveItemFromCart =  (itemId) => {
         setArrayOfCartItemId((prevArray) => {
            const updatedCartArray = prevArray.filter((val) => val !== itemId);
            localStorage.setItem("Item-Id", JSON.stringify(updatedCartArray));
            return updatedCartArray;
        });
    };

    return (
        <div className='cartdropdownpage-2898-AD my-10 px-10 w-[700px] h-[500px] bg-slate-300 text-black overflow-auto rounded-[20px]'>
            {cartItemData && cartItemData.length > 0 ? 
                cartItemData.map((item) => (
                    <div key={item.id} className={`my-5 p-4 border-y-[2px] border-b-slate-500 h-[150px] w-full flex gap-8`}>
                        <div className='h-full'>
                            <img src={item.image} alt="" className='w-full h-full'/>
                            
                        </div>
                        <div>
                        <div>ID : {item.id}</div>
                        <div>Category : {item.category}</div>
                        <div>Dress-Style : {item.dresStyle}</div>
                        <div>Color : {item.color}</div>
                        <button 
                            onClick={() => toRemoveItemFromCart(item.id)} 
                            className='border p-2 px-12 border-gray-400 rounded-xl mr-20'></button>
                    </div> 
                    </div>
                ))
                : <div> No data  </div>
            }
        </div>
    );
}

export default AddCart;
