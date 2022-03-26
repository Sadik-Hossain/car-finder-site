import React from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import "./Carts.css";

const Carts = (props) => {
  const { data, reset } = props;
  const myArr = data;
  const random = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    const random = myArr[randomNumber];
    if (random) {
      alert(random);
    } else {
      alert('select 4 items');
    }
  };
  return (
    <div className="cart-info">
      <h2>selected Item</h2>
      {data.map((product, index) => (
        <Cart data={product} key={index}></Cart>
      ))}

      <button onClick={random}>Choose one for me</button>
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
