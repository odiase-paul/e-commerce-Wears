import hats from "../../../image/display/hats.jpg";
import jackets from "../../../image/display/jacket.jpg";
import shoes from "../../../image/display/shoes2.jpg";
import Group from "../../group/group";

const Men = () => {
  const store = [
    {
      id: 1,
      title: "Hats",
      route: "MenHats",
      imageUrl: hats,
    },
    {
      id: 2,
      title: "Jackets",
      route: "MenJackets",
      imageUrl: jackets,
    },
    {
      id: 3,
      title: "Shoes",
      route: "MenShoes",
      imageUrl: shoes,
    },
  ];

  return <Group storage={store} />;
};

export default Men;
