import baseballJacket from "../../image/jackets/baseball jacket.jpg";
import brownJacket from "../../image/jackets/brown jacket.jpg";
import cropJacket from "../../image/jackets/crop jacket.jpg";
import femaleBlackJacket from "../../image/jackets/f-black jack.jpg";
import femaleBlueJacket from "../../image/jackets/f-blue jacket.jpg";
import corpJacket from "../../image/jackets/f-corp jacket.jpg";
import jeanJacket from "../../image/jackets/jean jacket.jpg";
import leatherJacket from "../../image/jackets/leather jacket.jpg";
import suitJacket from "../../image/jackets/suit jacket.jpg";
import FilteredStore from "../hats/hat.component";

const Jackets = () => {
  const jacketStore = [
    { id: 1, imageUrl: baseballJacket, price: "$24", name: "Baseball Jacket" },
    { id: 2, imageUrl: brownJacket, price: "$20", name: "Brown Jacket" },
    { id: 3, imageUrl: cropJacket, price: "$17", name: "Crop Jacket" },
    { id: 4, imageUrl: femaleBlackJacket, price: "$15", name: "Black Jacket" },
    { id: 5, imageUrl: femaleBlueJacket, price: "$19", name: "Blue Jacket" },
    { id: 6, imageUrl: corpJacket, price: "$14", name: "Corporate Jacket" },
    { id: 7, imageUrl: jeanJacket, price: "$15", name: "Jean Jacket" },
    { id: 8, imageUrl: leatherJacket, price: "$12", name: "Leather Jacket" },
    { id: 9, imageUrl: suitJacket, price: "$13", name: "Suit Jacket" },
  ];
  return <FilteredStore heading={"JACKETS"} store={jacketStore} />;
};

export default Jackets;
