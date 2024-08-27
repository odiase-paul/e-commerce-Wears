import { Fragment } from "react";
import CategoryMenu from "../../component/categories-menu/display";
import hats from "../../image/display/hats.jpg";
import jackets from "../../image/display/jacket.jpg";
import shoes from "../../image/display/shoes2.jpg";
import female from "../../image/display/female.jpg";
import male from "../../image/display/male.jpg";

const LandingPage = () => {
  const store = [
    {
      id: "Hats",
      title: "Hats",
      imageUrl: hats,
    },
    {
      id: 2,
      title: "Jackets",
      imageUrl: jackets,
    },
    {
      id: 3,
      title: "Shoes",
      imageUrl: shoes,
    },
    {
      id: 4,
      title: "Women",
      imageUrl: female,
    },
    {
      id: 5,
      title: "Men",
      imageUrl: male,
    },
  ];

  return (
    <Fragment>
      <CategoryMenu categories={store} />
    </Fragment>
  );
};

export default LandingPage;
