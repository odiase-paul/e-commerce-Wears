import blackWhite from "../../../image/shoes/black&white-sneakers.jpg";
import blueSneakers from "../../../image/shoes/blue sneakers.jpg";
import flatCorpShoe from "../../../image/shoes/flat corp-shoe.jpg";
import greySneakers from "../../../image/shoes/grey sneakers.jpg";
import highCorpShoe from "../../../image/shoes/high corp-shoe.jpg";
import lowFast from "../../../image/shoes/low fast.jpg";
import redSneakers from "../../../image/shoes/red sneakers.jpg";
import FilteredStore from "../../hats/hat.component";

const MenShoes = () => {
  const menShoeStore = [
    { id: 1, imageUrl: blackWhite, price: "$24", name: "Black Sneakers" },
    { id: 2, imageUrl: blueSneakers, price: "$20", name: "Blue Sneakers" },
    { id: 3, imageUrl: flatCorpShoe, price: "$15", name: "Corporate Shoe" },
    { id: 4, imageUrl: greySneakers, price: "$12", name: "Sneakers" },
    { id: 5, imageUrl: highCorpShoe, price: "$13", name: "Corp Shoe" },
    { id: 6, imageUrl: lowFast, price: "$12", name: "Low Fast" },
    { id: 7, imageUrl: redSneakers, price: "$12", name: "Red Sneakers" },
  ];
  return <FilteredStore heading={"SHOES"} store={menShoeStore} />;
};

export default MenShoes;
