// IMPORTS
import CheckOutContainer from "../../components/checkout-container/checkout-container.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout.styles.scss";

/////////////
const CheckOutPage = () => {
  const { cartItem, totalPrice } = useContext(CartContext);

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItem.map((item) => (
        <CheckOutContainer key={item.id} cartItem={item} />
      ))}
      <div className='totalPrice'>Total Price: ${totalPrice}</div>
    </div>
  );
};

export default CheckOutPage;
