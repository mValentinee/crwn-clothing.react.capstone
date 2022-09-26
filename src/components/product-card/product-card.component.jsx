import "./product-card.scss";
import Button from "../button/button.component";
import { useSelector, useDispatch } from "react-redux";
import { addProductToCartItemState } from "../../redux-store/cart/ cart.action";
import { selectCartItems } from "../../redux-store/cart/cart.selector";
///////////////////////////////

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItems);

  const addProductToCartHandler = () =>
    dispatch(addProductToCartItemState(cartItem, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProductToCartHandler}>
        Add To Cart
      </Button>
    </div>
  );
};

export default ProductCard;
