import { ReactComponent as ShoppingIcon } from "../../assets/shoppingIcon.svg";
import "./cart-icon.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
///////////////////////

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalQuantity } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{`${totalQuantity}`}</span>
    </div>
  );
};

export default CartIcon;
