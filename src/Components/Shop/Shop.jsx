import React from "react";

import { useState, useEffect } from "react";
import Carts from "../Carts/Carts";
import Products from "../Products/Products";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("cardb.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  //* handle Click===============================
  const click = (data) => {
    let newName = [...carts, data.name];
    if (newName.length < 5) {
      setCarts(newName);
    } else {
      alert("cannot choose more than 4");
    }
  };
  //* random button ==============================================
  const random = (data) => {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomItem = data[randomNumber];
    if (randomItem) {
      console.log(randomItem);
      setCarts([randomItem]);
    } else {
      alert("select 4 items");
    }
  };

  //* reset/choose again button=====================================
  const reset = (data) => {
    setCarts(data);
  };
  return (
    <div className="shop">
      <div className="product-container">
        {products.map((product) => (
          <Products product={product} key={product.id} click={click} />
        ))}
      </div>
      <div className="cart-container">
        <Carts data={carts} reset={reset} random={random} />
      </div>
    </div>
  );
};

export default Shop;
