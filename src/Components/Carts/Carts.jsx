import React from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import "./Carts.css";
const random = () => {
  const randomNumber = Math.floor(Math.random() * 4);
  console.log(randomNumber);
  alert();
};


const Carts = (props) => {
  const { data, reset } = props;
  return (
    <div className="cart-info">
      <h2>selected Item</h2>
      {data.map((product, index) => (
        <Cart data={product} key={index}></Cart>
      ))}

      <button>Choose one for me</button>
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
