import { createContext, useState } from 'react';

export const WishlistContext = createContext(null);

export const WishCountProvider = (props) => {
  const [numWishItem, setNumWishItem] = useState(() => {
    const storedCount = localStorage.getItem('wishItemCount');
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  const addWishItemNumber = () => {
    const newCount = Math.max(numWishItem + 1, 0);
    setNumWishItem(newCount);
    localStorage.setItem('wishItemCount', newCount.toString());
  };

  const subWishItemNumber = () => {
    const newCount = Math.max(numWishItem - 1, 0);
    setNumWishItem(newCount);
    localStorage.setItem('wishItemCount', newCount.toString());
  };

  return (
    <WishlistContext.Provider value={{
      numWishItem,
      setNumWishItem,
      addWishItemNumber,
      subWishItemNumber
    }}>
      {props.children}
    </WishlistContext.Provider>
  );
};