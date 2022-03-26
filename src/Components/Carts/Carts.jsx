import React from "react";
import { useState, useEffect } from "react";
import "./Carts.css";
const Cart = ({ data }) => {
  console.log(data);
  const random =Math.floor(Math.random() * 4) 
  // array[random].name
  return (
    <div className="cart">
      <h2>hello im from cart</h2>
      {data.map((d, index) => (
        <p key={index}>{d}</p>
      ))}
      <button>Choose one for me</button>
      <button>Choose again</button>
    </div>
  );
  
};

export default Cart;
