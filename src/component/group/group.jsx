import { Link } from "react-router-dom";
const Group = ({ storage, heading }) => {
  return (
    <div className="display-container">
      <h2 className="component-heading">{heading}</h2>
      {storage.map((items) => (
        <Link
          key={items.id}
          className="category-container"
          to={`/${items.route}`}
        >
          <div
            className="background-image"
            style={{ backgroundImage: `url(${items.imageUrl})` }}
          />
          <div className="category-body-container">
            <h2>{items.title}</h2>
            <p>Shop Now</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Group;
