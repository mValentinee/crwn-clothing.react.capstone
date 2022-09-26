import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux-store/cart/cart.selector";
////////////////////////////////////

const CartDropDown = () => {
  const cartItem = useSelector(selectCartItems);
  const nav = useNavigate();

  const toggleCheckOutHandler = () => {
    nav("./checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItem.length ? (
          cartItem.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <div className="empty-message">cart is empty</div>
        )}
      </div>
      <Button buttonType="inverted" onClick={toggleCheckOutHandler}>
        CheckOut
      </Button>
    </div>
  );
};

export default CartDropDown;
