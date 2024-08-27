import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navigation.scss";
import logo from "../../image/logo/blue logo3.png";
import { Search } from "@mui/icons-material";
import CartFolder from "../../component/cart/cart";
import CartDropDowm from "../../component/cart-dropdown/cart-dropdown";
import { CartContext } from "../../context/cart.context";

const NavBar = () => {
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" src={logo} alt="" style={{ width: "50px" }} />
        </Link>

        <div className="nav-links-container">
          <Link className=" form-field">
            <input className="search" typeof="search" />
            <Search className="icon" />
          </Link>

          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/women">
            WOMEN
          </Link>
          <Link className="nav-link" to="/men">
            MEN
          </Link>
          <Link className="nav-link" to="/sign-in">
            SIGN IN
          </Link>

          <CartFolder />
        </div>
        {isCartOpen && <CartDropDowm />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default NavBar;
