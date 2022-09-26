import { ReactComponent as ShoppingIcon } from "../../assets/shoppingIcon.svg";
import "./cart-icon.styles.scss";
import { setIsCartOpen } from "../../redux-store/cart/ cart.action";
import { useSelector, useDispatch } from "react-redux";
import {
  selectIsCartOpen,
  selectCartQuantity,
} from "../../redux-store/cart/cart.selector";
///////////////////////

const CartIcon = () => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(selectCartQuantity);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{`${totalQuantity}`}</span>
    </div>
  );
};

export default CartIcon;
