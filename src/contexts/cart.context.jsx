import { createContext, useReducer } from "react";
////////////////////////////

// 🗒 Adding cart item / updating cart item quantity
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
}; // 🔚

// 🗒 Removing cart item / updating cart item quantity
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
}; // 🔚

// 🗒 Clearing Cart
const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id); // 🔚

//🗒
const CART_ACTION_TYPES = {
  SET_ITEM: "SET_ITEM",
  SET_CART_OPEN: "SET_CART_OPEN",
}; //🔚

// 🗒 Initial Cart States
const INITIAL_STATE = {
  isCartOpen: false,
  cartItem: [],
  totalQuantity: 0,
  totalPrice: 0,
};

// might cause BUG
export const CartContext = createContext({
  INITIAL_STATE,
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemInCart: () => {},
}); // 🔚

//🗒
const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_ITEM:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in useReducer`);
  }
}; //🔚

// 🗒 Cart Provider For App Tree
export const CartProvider = ({ children }) => {
  const [{ cartItem, totalPrice, totalQuantity, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const setIsCartOpen = (boolean) => {
    dispatch({ type: CART_ACTION_TYPES.SET_CART_OPEN, payload: boolean });
  };

  const updateCartItemReducer = (newCartItem) => {
    const newQuantity = newCartItem.reduce(
      (totalQuantity, cartItem) => totalQuantity + cartItem.quantity,
      0
    );
    const newTotalPrice = newCartItem.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch({
      type: CART_ACTION_TYPES.SET_ITEM,
      payload: {
        cartItem: newCartItem,
        totalQuantity: newQuantity,
        totalPrice: newTotalPrice,
      },
    });
  };

  // 🗒 adding item to cart - useState
  const addItemToCart = (product) => {
    const addedCartItem = addCartItem(cartItem, product);
    updateCartItemReducer(addedCartItem);
  }; //🔚
  // 🗒 removing item from cart - useState
  const removeItemInCart = (cartItemToRemove) => {
    const removedCartItem = removeCartItem(cartItem, cartItemToRemove);
    updateCartItemReducer(removedCartItem);
  }; //🔚
  // 🗒 clearing cart - useState
  const clearItemInCart = (cartItemToClear) => {
    const clearedItemInCart = clearCartItem(cartItem, cartItemToClear);
    updateCartItemReducer(clearedItemInCart);
  }; //🔚

  // 🗒 values as object literal to be passed to provider
  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItem,
    totalQuantity,
    totalPrice,
    removeItemInCart,
    clearItemInCart,
  }; //🔚

  return (
    <CartContext.Provider value={value}> {children} </CartContext.Provider>
  );
};
