import blueNativeCap from "../../../image/hats/blue native cap.jpg";
import darkFaceCap from "../../../image/hats/dark face-cap.jpg";
import faceCap from "../../../image/hats/face cap.jpg";
import roundHat from "../../../image/hats/round cap.jpg";
import FilteredStore from "../../hats/hat.component";

const MenHats = () => {
  const menHatStore = [
    { id: 2, imageUrl: blueNativeCap, price: "$20", name: "Native Cap" },
    { id: 3, imageUrl: darkFaceCap, price: "$17", name: "Baseball Cap" },
    { id: 8, imageUrl: faceCap, price: "$12", name: "Face Cap" },
    { id: 9, imageUrl: roundHat, price: "$12", name: "Round Hat" },
  ];
  return <FilteredStore heading={"HATS"} store={menHatStore} />;
};

export default MenHats;
