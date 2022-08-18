import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import { Navigate, useNavigate } from "react-router-dom";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckOutPage from "../../routes/checkout.component/checkout.component";
////////////////////////////////////

const CartDropDown = () => {
  const { cartItem } = useContext(CartContext);
  const nav = useNavigate();

  const toggleCheckOutHandler = () => {
    nav("./checkout");
  };

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItem.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button buttonType='inverted' onClick={toggleCheckOutHandler}>
        Go To CheckOut
      </Button>
    </div>
  );
};

export default CartDropDown;
