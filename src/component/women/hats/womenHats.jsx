import beachHat from "../../../image/hats/beach cap.jpg";
import femaleCorpCap from "../../../image/hats/f-corp cap.jpg";
import femaleFaceCap from "../../../image/hats/f-face cap.jpg";
import roundCap from "../../../image/hats/f-round cap.jpg";
import vacationCap from "../../../image/hats/f-vacation cap.jpg";
import faceCaps from "../../../image/hats/face caps.jpg";
import roundHat from "../../../image/hats/round cap.jpg";
import FilteredStore from "../../hats/hat.component";

const WomenHats = () => {
  const womenHatStore = [
    { id: 1, imageUrl: beachHat, price: "$24", name: "Beach Hat" },
    { id: 2, imageUrl: femaleFaceCap, price: "$15", name: "Face Cap" },
    { id: 3, imageUrl: roundCap, price: "$19", name: "Round Hat" },
    { id: 4, imageUrl: vacationCap, price: "$14", name: "Vacation Hat" },
    { id: 5, imageUrl: femaleCorpCap, price: "$15", name: "Corporate Hat" },
    { id: 6, imageUrl: faceCaps, price: "$13", name: "Face Cap" },
    { id: 7, imageUrl: roundHat, price: "$12", name: "Round Hat" },
  ];

  return <FilteredStore heading={"HATS"} store={womenHatStore} />;
};

export default WomenHats;
