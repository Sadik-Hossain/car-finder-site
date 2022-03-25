import React from "react";

import { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import Products from "../Products/Products";
import "./Shop.css"
const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("cardb.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="shop">
    
      <div className="product">
        {products.map((pd) => (
          <Products pd={pd} key={pd.id} />
        ))}
      </div>
      <div className="cart">
        <Cart />
      </div>
    </div>
  );
};

export default Shop;
