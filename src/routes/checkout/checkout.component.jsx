import CheckOutContainer from "../../components/checkout-container/checkout-container.component";
import "./checkout.styles.scss";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux-store/cart/cart.selector";
////////////////////////////
const CheckOutPage = () => {
  const cartItem = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItem.map((item) => (
        <CheckOutContainer key={item.id} cartItem={item} />
      ))}
      <div className="totalPrice">Total Price: ${totalPrice}</div>
    </div>
  );
};

export default CheckOutPage;
