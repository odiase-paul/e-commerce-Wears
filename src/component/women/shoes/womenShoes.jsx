import blackWhite from "../../../image/shoes/black&white-sneakers.jpg";
import blueSneakers from "../../../image/shoes/blue sneakers.jpg";
import brownShoe from "../../../image/shoes/f-brown-corp shoe.jpg";
import redCorpShoe from "../../../image/shoes/f-red corp shoe.jpg";
import whiteCorpShoe from "../../../image/shoes/f-white corp shoe.jpg";
import whiteHeels from "../../../image/shoes/f-white heels.jpg";
import greySneakers from "../../../image/shoes/grey sneakers.jpg";
import redSneakers from "../../../image/shoes/red sneakers.jpg";
import FilteredStore from "../../hats/hat.component";

const WomenShoes = () => {
  const womenShoeStore = [
    { id: 1, imageUrl: blackWhite, price: "$24", name: "Black Sneakers" },
    { id: 2, imageUrl: blueSneakers, price: "$20", name: "Blue Sneakers" },
    { id: 3, imageUrl: brownShoe, price: "$17", name: "Block Heels" },
    { id: 4, imageUrl: redCorpShoe, price: "$15", name: "Red Heels" },
    { id: 5, imageUrl: whiteCorpShoe, price: "$19", name: "Grey Heels" },
    { id: 6, imageUrl: whiteHeels, price: "$14", name: "White Heels" },
    { id: 7, imageUrl: greySneakers, price: "$12", name: "Sneakers" },
    { id: 8, imageUrl: redSneakers, price: "$12", name: "Red Sneakers" },
  ];
  return <FilteredStore heading={"SHOES"} store={womenShoeStore} />;
};

export default WomenShoes;
