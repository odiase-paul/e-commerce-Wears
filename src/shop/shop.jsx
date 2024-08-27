import "./shop.scss";
import { ProductContext } from "../context/products.context";
import { useContext } from "react";
import ProductCart from "../component/product-cart/productCart";

import beachHat from "../image/hats/beach cap.jpg";
import blueNativeCap from "../image/hats/blue native cap.jpg";
import darkFaceCap from "../image/hats/dark face-cap.jpg";
import femaleCorpCap from "../image/hats/f-corp cap.jpg";
import femaleFaceCap from "../image/hats/f-face cap.jpg";
import roundCap from "../image/hats/f-round cap.jpg";
import vacationCap from "../image/hats/f-vacation cap.jpg";
import faceCap from "../image/hats/face cap.jpg";
import faceCaps from "../image/hats/face caps.jpg";
import roundHat from "../image/hats/round cap.jpg";
// jacket
import baseballJacket from "../image/jackets/baseball jacket.jpg";
import brownJacket from "../image/jackets/brown jacket.jpg";
import cropJacket from "../image/jackets/crop jacket.jpg";
import femaleBlackJacket from "../image/jackets/f-black jack.jpg";
import femaleBlueJacket from "../image/jackets/f-blue jacket.jpg";
import corpJacket from "../image/jackets/f-corp jacket.jpg";
import jeanJacket from "../image/jackets/jean jacket.jpg";
import leatherJacket from "../image/jackets/leather jacket.jpg";
import suitJacket from "../image/jackets/suit jacket.jpg";
// shoe
import blackWhite from "../image/shoes/black&white-sneakers.jpg";
import blueSneakers from "../image/shoes/blue sneakers.jpg";
import brownShoe from "../image/shoes/f-brown-corp shoe.jpg";
import redCorpShoe from "../image/shoes/f-red corp shoe.jpg";
import whiteCorpShoe from "../image/shoes/f-white corp shoe.jpg";
import whiteHeels from "../image/shoes/f-white heels.jpg";
import flatCorpShoe from "../image/shoes/flat corp-shoe.jpg";
import greySneakers from "../image/shoes/grey sneakers.jpg";
import highCorpShoe from "../image/shoes/high corp-shoe.jpg";
import lowFast from "../image/shoes/low fast.jpg";
import redSneakers from "../image/shoes/red sneakers.jpg";

export const ShopStore = [
  { id: 1, imageUrl: beachHat, price: "$24", name: "Beach Hat" },
  { id: 2, imageUrl: blueNativeCap, price: "$20", name: "Native Cap" },
  { id: 3, imageUrl: darkFaceCap, price: "$17", name: "Baseball Cap" },
  { id: 4, imageUrl: femaleFaceCap, price: "$15", name: "Face Cap" },
  { id: 5, imageUrl: roundCap, price: "$19", name: "Round Hat" },
  { id: 6, imageUrl: vacationCap, price: "$14", name: "Vacation Hat" },
  { id: 7, imageUrl: femaleCorpCap, price: "$15", name: "Corporate Hat" },
  { id: 8, imageUrl: faceCap, price: "$12", name: "Face Cap" },
  { id: 9, imageUrl: faceCaps, price: "$13", name: "Face Cap" },
  { id: 10, imageUrl: roundHat, price: "$12", name: "Round Hat" },

  { id: 11, imageUrl: baseballJacket, price: "$24", name: "Baseball Jacket" },
  { id: 12, imageUrl: brownJacket, price: "$20", name: "Brown Jacket" },
  { id: 13, imageUrl: cropJacket, price: "$17", name: "Crop Jacket" },
  { id: 14, imageUrl: femaleBlackJacket, price: "$15", name: "Black Jacket" },
  { id: 15, imageUrl: femaleBlueJacket, price: "$19", name: "Blue Jacket" },
  { id: 16, imageUrl: corpJacket, price: "$14", name: "Corporate Jacket" },
  { id: 17, imageUrl: jeanJacket, price: "$15", name: "Jean Jacket" },
  { id: 18, imageUrl: leatherJacket, price: "$12", name: "Leather Jacket" },
  { id: 19, imageUrl: suitJacket, price: "$13", name: "Suit Jacket" },

  { id: 20, imageUrl: blueSneakers, price: "$20", name: "Blue Sneakers" },
  { id: 21, imageUrl: blackWhite, price: "$24", name: "Black Sneakers" },
  { id: 22, imageUrl: brownShoe, price: "$17", name: "Block Heels" },
  { id: 23, imageUrl: redCorpShoe, price: "$15", name: "Red Heels" },
  { id: 24, imageUrl: whiteCorpShoe, price: "$19", name: "Grey Heels" },
  { id: 25, imageUrl: whiteHeels, price: "$14", name: "White Heels" },
  { id: 26, imageUrl: flatCorpShoe, price: "$15", name: "Corporate Shoe" },
  { id: 27, imageUrl: greySneakers, price: "$12", name: "Sneakers" },
  { id: 28, imageUrl: highCorpShoe, price: "$13", name: "Corp Shoe" },
  { id: 29, imageUrl: lowFast, price: "$12", name: "Low Fast" },
  { id: 30, imageUrl: redSneakers, price: "$12", name: "Red Sneakers" },
];

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((items) => (
        <ProductCart key={items.id} product={items} />
      ))}
    </div>
  );
};
export default Shop;
