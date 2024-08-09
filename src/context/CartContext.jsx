import { createContext, useState } from 'react';

export const CartContext = createContext(null);
export const CartCountProvider = (props) => {
  const [numCartItem, setNumCartItem] = useState(() => {
    const storedCount = localStorage.getItem('cartItemCount');
    return storedCount? parseInt(storedCount, 10) : 0;
  });

  const addCartItemNumber = () => {
    const newCount = Math.max(numCartItem + 1, 0);
    setNumCartItem(newCount);
    localStorage.setItem('cartItemCount', newCount.toString());
  };

  const subCartItemNumber = () => {
    const newCount = Math.max(numCartItem - 1, 0);
    setNumCartItem(newCount);
    localStorage.setItem('cartItemCount', newCount.toString());
  };
  const [open, setOpen] = useState(false);
  const[show,useShow] = useState(false);

  return (
    <CartContext.Provider value={{
      open,setOpen,
      show,useShow,
      numCartItem,
      setNumCartItem,
      addCartItemNumber,
      subCartItemNumber
    }}>
      {props.children}
    </CartContext.Provider>
  );
};