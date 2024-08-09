import { CartContext } from "../context/CartContext";
import { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { RiDeleteBin6Line, RiDiscountPercentLine } from "react-icons/ri";
import { FaStar, FaChevronRight } from "react-icons/fa6";
import allItemData from '../components/ProductList/ProductListItemData';

export default function Cart() {
// <<<<<<< Deepanshu
  
//   const {open,setOpen} = useContext(CartContext);
  
// =======
  const { subCartItemNumber } = useContext(CartContext);
  const [arrayOfCartItemId, setArrayOfCartItemId] = useState(JSON.parse(localStorage.getItem("Item-Id")) || []);
  const [cartItemData, setCartItemData] = useState([]);
  const [itemData, setItemData] = useState(allItemData);

  useEffect(() => {
    const modifiedCartData = itemData.filter((val) => arrayOfCartItemId.includes(val.id));
    setCartItemData(modifiedCartData);
    const gv = JSON.parse(localStorage.getItem("Item-Id")) || [];
    if (gv !== arrayOfCartItemId) {
      setArrayOfCartItemId(gv);
    }
  }, [itemData]);

  const toRemoveItemFromCart = (itemId) => {
    subCartItemNumber();
    setArrayOfCartItemId((prevArray) => {
      const updatedCartArray = prevArray.filter((val) => val !== itemId);
      localStorage.setItem("Item-Id", JSON.stringify(updatedCartArray));
      return updatedCartArray;
    });
  };

  const handleIncrease = (id) => {
    setItemData((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setItemData((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
      )
    );
  };

  const total = cartItemData.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const { open, setOpen } = useContext(CartContext);

// >>>>>>> main
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />
      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">Shopping cart</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="flow-root">
                      <ul role="list" className="-my-6 divide-y divide-gray-200">
                        {cartItemData && cartItemData.length > 0 ?
                          cartItemData.map((item) => (
                            <li key={item.id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={item.image}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>
                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a>{item.name}</a>
                                    </h3>
                                    <p className="ml-4">₹{item.price}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">{item.color}</p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className="flex items-center gap-2 text-sm">
                                    <button onClick={() => handleDecrease(item.id)} className="border rounded px-2 py-1">-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleIncrease(item.id)} className="border rounded px-2 py-1">+</button>
                                  </div>
                                  <div className="flex">
                                    <button onClick={() => toRemoveItemFromCart(item.id)} type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          )) :
                          <div>No data!</div>
                        }
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>₹{total.toFixed(2)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                  <div className="mt-6">
                    <Link
                      to={"/checkoutpage"}
                      className="flex items-center justify-center rounded-md border border-transparent bg-rose-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-rose-700" onClick={()=>setOpen(false)}

                    >
                      Checkout
                    </Link>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{' '}
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        <Link to="/products">Continue Shopping</Link>
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
