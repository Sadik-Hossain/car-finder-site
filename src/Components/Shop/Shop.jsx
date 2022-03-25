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
  const click = (id) => {
    // console.log("clicked", id);
    console.log(id.name);
    let newName = [...carts, id.name];
    setCarts(newName);
  };
  return (
    <div className="shop">
      <div className="product">
        {products.map((pd) => (
          <Products pd={pd} key={pd.id} click={click} />
        ))}
      </div>
      <div className="cart">
        <Carts data={carts} />
      </div>
    </div>
  );
};

export default Shop;
