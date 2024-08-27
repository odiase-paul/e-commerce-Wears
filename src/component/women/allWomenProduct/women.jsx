import hats from "../../../image/display/hats.jpg";
import jackets from "../../../image/display/jacket.jpg";
import shoes from "../../../image/display/shoes2.jpg";
import Group from "../../group/group";

const Women = () => {
  const store = [
    {
      id: 1,
      title: "Hats",
      route: "WomenHats",
      imageUrl: hats,
    },
    {
      id: 2,
      title: "Jackets",
      route: "WomenJackets",
      imageUrl: jackets,
    },
    {
      id: 3,
      title: "Shoes",
      route: "WomenShoes",
      imageUrl: shoes,
    },
  ];

  return <Group storage={store} />;
};

export default Women;
