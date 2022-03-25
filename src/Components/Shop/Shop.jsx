import React from "react";

import { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("cardb.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  //* handle Click===============================
  const click = (id) => {
    console.log("clicked", id);
  };
  return (
    <div className="shop">
      <div className="product">
        {products.map((pd) => (
          <Products pd={pd} key={pd.id} click={click} />
        ))}
      </div>
      <div className="cart">
        <Cart />
      </div>
    </div>
  );
};

export default Shop;
