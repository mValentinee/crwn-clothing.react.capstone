import { createSelector } from "@reduxjs/toolkit";

const selectCartFromStateObject = (state) => state.cart;

// export const selectCartItems = (state) => state.cart.cartItem;

export const selectIsCartOpen = createSelector(
  [selectCartFromStateObject],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartFromStateObject],
  (cart) => cart.cartItem
);

export const selectCartQuantity = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) => total + cartItem.price * cartItem.quantity,
    0
  )
);
