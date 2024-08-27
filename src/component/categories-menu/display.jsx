import CategoryItem from "../caterogy-items/categories";

import "./display.scss";
const CategoryMenu = ({ categories }) => {
  return (
    <div className="display-container">
      {categories.map((items) => (
        <CategoryItem
          image={items.imageUrl}
          title={items.title}
          key={items.id}
        />
      ))}
    </div>
  );
};

export default CategoryMenu;
