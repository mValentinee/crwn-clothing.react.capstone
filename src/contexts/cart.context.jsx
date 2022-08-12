import { createContext, useEffect, useState } from "react";
////////////////////////////

const addCartItem = (cartItems, product) => {
  const exisitingCartItem = cartItems.find(
    (cartItem) => cartItem.id === product.id
  );
  //
  if (exisitingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === product.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // if not return new Items
  return [...cartItems, { ...product, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const newQuantity = cartItem.reduce(
      (totalQunatity, cartItem) => totalQunatity + cartItem.quantity,
      0
    );
    setTotalQuantity(newQuantity);
  }, [cartItem]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItem, product));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItem,
    totalQuantity,
    setTotalQuantity,
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
