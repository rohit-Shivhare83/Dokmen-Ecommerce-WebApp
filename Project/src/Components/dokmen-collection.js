import React from "react";
import "../Styles/dokmen-collection.css";
import { Link } from "react-router-dom";
import { CartState } from "../Context/Context";
import data from "../collection.json";
import ProductItems from "./ProductItems";

export default function Dokmencollection() {
  const {
    state: { products },
  } = CartState();

  const random = products[Math.floor(Math.random() * products.length)];
  console.log(random);

  return (
    <div className="dokmen-collection">
      <h2 className="collection-txt">Dokmen Top selling</h2>

      <div className="product-container">
        {data.map((item) => {
          return (
            <ProductItems
              key={item.title}
              imgUrl={item.imageUrl}
              title={item.title}
              price={item.price}
            />
          );
        })}
      </div>

      <div className="product-btn">
        <Link to="/products">
          <button>view all products</button>
        </Link>
      </div>
      <hr />
    </div>
  );
}
