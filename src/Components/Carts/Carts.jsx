import React from "react";
import { useState, useEffect } from "react";
import "./Carts.css";
const Cart = ({ data }) => {
  console.log(data);

  return (
    <div className="cart">
      <h2>hello im from cart</h2>
      {data.map((d, index) => (
        <p key={index}>{d}</p>
      ))}
    </div>
  );
};

export default Cart;
