import femaleBlackJacket from "../../../image/jackets/f-black jack.jpg";
import femaleBlueJacket from "../../../image/jackets/f-blue jacket.jpg";
import corpJacket from "../../../image/jackets/f-corp jacket.jpg";
import cropJacket from "../../../image/jackets/crop jacket.jpg";

import FilteredStore from "../../hats/hat.component";
const WomenJackets = () => {
  const womenJacketStore = [
    { id: 1, imageUrl: cropJacket, price: "$17", name: "Crop Jacket" },
    { id: 2, imageUrl: femaleBlackJacket, price: "$15", name: "Black Jacket" },
    { id: 3, imageUrl: femaleBlueJacket, price: "$19", name: "Blue Jacket" },
    { id: 4, imageUrl: corpJacket, price: "$14", name: "Corporate Jacket" },
  ];
  return <FilteredStore heading={"JACKETS"} store={womenJacketStore} />;
};

export default WomenJackets;
