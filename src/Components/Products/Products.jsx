import React from "react";
import "./Products.css";
const Products = (props) => {
  const { price, name, id, picture } = props.product;

  return (
    <div className="products">
      <div className="info">
        <img src={picture} />
        <h1>{name}</h1>
        <h2>{price}</h2>
        <button
          onClick={() => {
            props.click(props.product);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Products;
