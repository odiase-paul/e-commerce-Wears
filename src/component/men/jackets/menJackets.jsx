import baseballJacket from "../../../image/jackets/baseball jacket.jpg";
import brownJacket from "../../../image/jackets/brown jacket.jpg";
import jeanJacket from "../../../image/jackets/jean jacket.jpg";
import leatherJacket from "../../../image/jackets/leather jacket.jpg";
import suitJacket from "../../../image/jackets/suit jacket.jpg";
import FilteredStore from "../../hats/hat.component";
const MenJackets = () => {
  const menJacketStore = [
    { id: 11, imageUrl: baseballJacket, price: "$24", name: "Baseball Jacket" },
    { id: 12, imageUrl: brownJacket, price: "$20", name: "Brown Jacket" },
    { id: 13, imageUrl: jeanJacket, price: "$15", name: "Jean Jacket" },
    { id: 14, imageUrl: leatherJacket, price: "$12", name: "Leather Jacket" },
    { id: 15, imageUrl: suitJacket, price: "$13", name: "Suit Jacket" },
  ];
  return <FilteredStore heading={"JACKETS"} store={menJacketStore} />;
};

export default MenJackets;
