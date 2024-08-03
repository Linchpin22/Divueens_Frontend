import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';
import Trash from '../../../assets/trash.png';
import Share from '../../../assets/share.png';
import productData from '../../ProductList/ProductListItemData';
import { CartContext } from '../../../context/CartContext';
import { WishlistContext } from '../../../context/WishlistContext';

const Wishlist = () => {
  const { addCartItemNumber, subCartItemNumber } = useContext(CartContext);
  const { addWishItemNumber, subWishItemNumber } = useContext(WishlistContext);
  const [wishlist, setWishlist] = useState([]);
  const [wishListItem, setWishListItem] = useState([]);
  const [cardItem, setCardItem] = useState([]);

  useEffect(() => {
    // Load wishlist and cart items from local storage on mount
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);

    // const storedCartItems = JSON.parse(localStorage.getItem('Item-Id')) || [];
    // setCardItem(storedCartItems);

    // Filter product data to only include items in the wishlist
    const filteredProducts = productData.filter(product => storedWishlist.includes(product.id));
    setWishListItem(filteredProducts);
  }, []);

  const handleRemoveFromWishlist = (id) => {
    subWishItemNumber();
    const updatedWishlist = wishlist.filter(item => item !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));

    // Remove the item from wishListItem state
    setWishListItem(prevItems => prevItems.filter(item => item.id !== id));
  };

  const addingItemToCart = (ItemId) => {
    let updatedItems;
    if (cardItem.includes(ItemId)) {
      updatedItems = cardItem.filter(id => id !== ItemId);
      subCartItemNumber();
    } else {
      updatedItems = [...cardItem, ItemId];
      addCartItemNumber();
    }
    setCardItem(updatedItems);
    localStorage.setItem("Item-Id", JSON.stringify(updatedItems));

    // Remove from wishlist if added to cart
    if (!cardItem.includes(ItemId)) {
      handleRemoveFromWishlist(ItemId);
    }
  };

  return (
    <div className="mx-auto p-8 w-full max-w-screen-lg">
      <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">Wishlist <FaHeart className='text-pink-400' /></h1>
      <div>
        {wishListItem.length ? (
          wishListItem.map((item) => {
            
            return (
              <div key={item.id} className="rounded-xl shadow-xl mb-4 flex flex-col sm:flex-row">
                <div className="p-3 my-5 w-full sm:w-64 flex justify-center">
                  <img
                    src={item.image}
                    alt="image"
                    className="lg:h-40 md:h-40 md:w-40 lg:w-36 sm:h-auto sm:w-auto rounded-md shadow-lg object-center object-cover transition duration-200 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between w-full p-4">
                  <div className='mt-6'>
                    <Link to="/product-description" className="hover:text-gray-800 tracking-tighter transition duration-100 font-semibold md:text-lg lg:text-xl">
                      {item.name} - {item.category} - {item.shade} - {item.material} - {item.brands}
                    </Link>
                    <div className="flex items-center gap-4 mt-2">
                      <p className="text-sm sm:text-base lg:text-lg">
                        {item.rating} / <span className="text-[#00000077]">5</span>
                      </p>
                      <div className="text-[#ffa200] flex items-center gap-1.5">
                        <FaHeart />
                        <FaHeart />
                        <FaHeart />
                        <FaHeart />
                      </div>
                    </div>
                    <div className="font-semibold text-sm sm:text-base lg:text-lg my-3">
                      MRP: ₹ {item.price}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <button
                        className="bg-rose-800 font-bold text-white rounded-xl text-sm sm:text-base px-6 py-2"
                        onClick={() => addingItemToCart(item.id)}
                      >
                         Add to Cart
                      </button>
                      <button className="p-1 rounded-md flex items-center justify-center">
                        <img src={Share} className='h-5' alt="Share" />
                      </button>
                    </div>
                  </div>
                  <div className="flex text-white px-3 mt-2 sm:mt-0">
                    <div
                      className="text-sm cursor-pointer"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      <img src={Trash} className='h-5' alt="Delete" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>No Data!</div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
