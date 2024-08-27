import { Fragment } from "react";

const FilteredStore = ({ store, heading }) => {
  return (
    <Fragment>
      <h2 className="component-heading">{heading}</h2>
      <div className="products-container">
        {store.map((items) => (
          <div key={items.id} className="product-card-container">
            <img src={items.imageUrl} alt="" />
            <div className="footer">
              <span className="name">
                {items.name} | <span className="price-list">{items.price}</span>
              </span>
            </div>
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default FilteredStore;
