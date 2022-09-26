import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../redux-store/user/user.selector";
import CartDropDown from "../../components/cart-drop-down/cart-dropdown.component";
import { useSelector } from "react-redux";
import { signOutUser } from "../../utilis/firebase/firebase-user.utilis";
import { selectIsCartOpen } from "../../redux-store/cart/cart.selector";
/////////////////////////////////////

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
          <CartIcon />
          {isCartOpen && <CartDropDown />}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
