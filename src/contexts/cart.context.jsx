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

const removeCartItem = (cartItems, cartItemToRemove) => {
  const exisitingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (exisitingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  // if not return new Items
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemInCart: () => {},
  totalQuantity: 0,
  totalPrice: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItem, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const newQuantity = cartItem.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
      0
    );
    setTotalQuantity(newQuantity);
  }, [cartItem]);

  useEffect(() => {
    const newTotalPrice = cartItem.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setTotalPrice(newTotalPrice);
  }, [cartItem]);

  const addItemToCart = (product) => {
    setCartItems(addCartItem(cartItem, product));
  };

  const removeItemInCart = (cartItemToRemove) => {
    setCartItems(removeCartItem(cartItem, cartItemToRemove));
  };

  const clearItemInCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItem, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItem,
    totalQuantity,
    totalPrice,
    removeItemInCart,
    clearItemInCart,
  };

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
