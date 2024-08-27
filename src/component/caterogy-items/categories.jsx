import { Link } from "react-router-dom";
import "./categories.items.scss";
import { Fragment } from "react";

const CategoryItem = ({ title, image }) => {
  return (
    <Fragment>
      <Link className="category-container" to={`/${title.toLowerCase()}`}>
        <div
          className="background-image"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </Link>
    </Fragment>
  );
};

export default CategoryItem;
