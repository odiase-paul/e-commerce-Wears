import { useContext } from "react";
import CartItem from "../cart-item/cart.item";
import "./cart-dropdown.scss";
import { CartContext } from "../../context/cart.context";

const CartDropDowm = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <button className="button">GO TO CHECKOUT</button>
    </div>
  );
};

export default CartDropDowm;
