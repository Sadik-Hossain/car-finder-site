import React from "react";
import Item from "../Item/Item";
import "./Carts.css";

const Carts = (props) => {
  const { data, reset, random } = props;

  return (
    <div className="cart-info">
      <h2>selected Item</h2>
      {data.map((product, index) => (
        <Item data={product} key={index}></Item>
      ))}
      {}

      <button
        onClick={() => {
          random(data);
        }}
      >
        <p>Choose one for me</p>
      </button>
      <button
        onClick={() => {
          reset([]);
        }}
      >
      <p>  Choose again</p>
      </button>
    </div>
  );
};

export default Carts;
