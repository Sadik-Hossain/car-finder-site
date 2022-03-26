import React from "react";
import "./Products.css";
const Products = (props) => {
  const { price, name, picture } = props.product;

  return (
    <div className="products">
      <div className="info">
        <img src={picture} />
        <h2>{name}</h2>
        <h3>{price}</h3>
        <button
          onClick={() => {
            props.addToCart(props.product);
          }}
        >
          <p>Add to Cart</p>
        </button>
      </div>
    </div>
  );
};

export default Products;
