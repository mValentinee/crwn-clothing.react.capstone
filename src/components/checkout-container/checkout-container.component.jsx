import "./checkout-container.styles.scss";
import {
  addProductToCartItemState,
  removeFromCartItemState,
  clearFromCartItemState,
} from "../../redux-store/cart/ cart.action";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux-store/cart/cart.selector";
////////////////////////

const CheckOutContainer = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const newPrice = price * quantity;

  const addItemHandler = () =>
    dispatch(addProductToCartItemState(cartItems, cartItem));

  const removeItemHandler = () =>
    dispatch(removeFromCartItemState(cartItems, cartItem));

  const clearItemHandler = () =>
    dispatch(clearFromCartItemState(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{newPrice}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckOutContainer;
