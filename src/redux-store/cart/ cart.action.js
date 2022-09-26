import { createAction } from "../../utilis/firebase/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";
import { addCartItem, clearCartItem, removeCartItem } from "./cart.helper";
//////////////////////

export const setIsCartOpen = (isCartOpen) =>
  createAction(CART_ACTION_TYPES.SET_CART_OPEN, isCartOpen);

export const addProductToCartItemState = (cartItem, product) => {
  const newCartItem = addCartItem(cartItem, product);
  return createAction(CART_ACTION_TYPES.SET_ITEM, newCartItem);
};

export const removeFromCartItemState = (cartItem, cartItemToRemove) => {
  const newCartItem = removeCartItem(cartItem, cartItemToRemove);
  return createAction(CART_ACTION_TYPES.SET_ITEM, newCartItem);
};

export const clearFromCartItemState = (cartItem, cartItemToClear) => {
  const newCartItem = clearCartItem(cartItem, cartItemToClear);
  return createAction(CART_ACTION_TYPES.SET_ITEM, newCartItem);
};

/*
SET_CART_COUNT: "cart/SET_CART_COUNT",
SET_CART_TOTAL: "cart/SET_CART_TOTAL",
*/
