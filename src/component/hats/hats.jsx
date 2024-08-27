import beachHat from "../../image/hats/beach cap.jpg";
import blueNativeCap from "../../image/hats/blue native cap.jpg";
import darkFaceCap from "../../image/hats/dark face-cap.jpg";
import femaleCorpCap from "../../image/hats/f-corp cap.jpg";
import femaleFaceCap from "../../image/hats/f-face cap.jpg";
import roundCap from "../../image/hats/f-round cap.jpg";
import vacationCap from "../../image/hats/f-vacation cap.jpg";
import faceCap from "../../image/hats/face cap.jpg";
import faceCaps from "../../image/hats/face caps.jpg";
import roundHat from "../../image/hats/round cap.jpg";
import FilteredStore from "./hat.component";
import "./hats.scss";

const Hats = () => {
  const hatStore = [
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
  ];

  return <FilteredStore heading={"HATS"} store={hatStore} />;
};

export default Hats;
