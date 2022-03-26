import React from "react";
import Cart from "../Cart/Cart";
import "./Carts.css";

const Carts = (props) => {
  const { data, reset, random } = props;

  return (
    <div className="cart-info">
      <h2>selected Item</h2>
      {data.map((product, index) => (
        <Cart data={product} key={index}></Cart>
      ))}
      {}

      <button
        onClick={() => {
          random(data);
        }}
      >
        Choose one for me
      </button>
      <button
        onClick={() => {
          reset([]);
        }}
      >
        Choose again
      </button>
    </div>
  );
};

export default Carts;
