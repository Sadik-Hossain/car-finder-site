import React from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import "./Carts.css";

//* random generator----------------------------------
const random = () => {
  Math.floor(Math.random() * 4);
  // array[random].name
};

//*clear button click------------------------------
const clearBtn = () => {
  setSelectedItems([]);
};
const Carts = ({ data }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <div className="cart-info">
      <h2>selected Item</h2>
      {data.map((d, index) => (
        <Cart data={d} key={index}></Cart>
      ))}
      <button>Choose one for me</button>
      <button>Choose again</button>
    </div>
  );
};

export default Carts;
