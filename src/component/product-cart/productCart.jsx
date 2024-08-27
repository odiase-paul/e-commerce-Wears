import "./productCart.scss";

import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

const ProductCart = ({ product }) => {
  const { price, name, imageUrl } = product;
  const addProductToCart = () => addItemToCart(product);
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button onClick={addProductToCart}>Add to cart</button>
    </div>
  );
};

export default ProductCart;
