import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop_container">
      <div className="product_container">
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>

      <div className="cart_container">
        <h3>This is Cart</h3>
      </div>
    </div>
  );
};

export default Shop;
