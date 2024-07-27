import { createContext , useState } from 'react';

export const CartContext = createContext(null);

export const CartCountProvider = (props) => {
   const [numCartItem , setNumCartItem] = useState(Math.max( 0))
   const addCartItemNumber = () => {
    setNumCartItem(Math.max(numCartItem + 1 , 0))
   }
   const subCartItemNumber = () => {
    setNumCartItem(Math.max(numCartItem - 1 , 0))
   }
  return (
    <CartContext.Provider value={{
      numCartItem , 
      setNumCartItem,
      addCartItemNumber,
      subCartItemNumber
    }}>
      {props.children}
    </CartContext.Provider>
  )
}