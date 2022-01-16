import React, { useState } from "react";
import "../Styles/Products.css";
import { FiFilter } from "react-icons/fi";
import { AiFillAppstore } from "react-icons/ai";
import ProductItems from "../Components/ProductItems";
import { CartState } from "../Context/Context";

export default function Products() {
  const {

    state: { products },
    productState: { sort, searchQuery, sortByName },
    productDispatch,
    
  } = CartState();

  console.log(sort, searchQuery,sortByName);

  const [showSort, setshowSort] = useState(false);
  const [showFilter, setshowFilter] = useState(false);
  const sortToggle = () => setshowSort(!showSort);
  const filter = () => setshowFilter(!showFilter);

  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }

    if (sortByName) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sortByName === "aToZ"
          ? a.title.localeCompare(b.title)
          : b.title.localeCompare(a.title)
      );
    }

    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod)=>prod.title.toLowercase().includes(searchQuery))
    }
    return sortedProducts;
  };

  return (
    <div className="products">
      <div className="menu">
        <div className="icon">
          <AiFillAppstore />
        </div>

        <div className="filter-text">
          <span onClick={filter} style={{ fontWeight: "500" }}>
            Filter
          </span>
        </div>

        <div className="sort-desktop">
          <span>Sort By</span>
          <ul>
            <li
              style={{
                backgroundColor: sortByName === "aToZ" ? "#032044" : "white",
                color: sortByName === "aToZ" ? "white" : "gray",
              }}
            >
              <label htmlFor="aToZ">A - Z</label>
              <input
                type="checkbox"
                name="aToZ"
                id="aToZ"
                onChange={() =>
                  productDispatch({
                    type: "SORT_BY_NAME",
                    payload: "aToZ",
                  })
                }
                checked={sortByName === "aToZ" ? true : false}
              />
            </li>

            <li>
              <label htmlFor="bToZ">Z - A</label>
              <input
                type="checkbox"
                name="bToz"
                id="bToZ"
                // className="checkbox"
                onChange={() =>
                  productDispatch({
                    type: "SORT_BY_NAME",
                    payload: "bToZ",
                  })
                }
                checked={sortByName === "bToZ" ? true : false}
              />
            </li>
                
            <li
              style={{
                backgroundColor: sort === "lowToHigh" ? "#032044" : "white",
                color: sort === "lowToHigh" ? "white" : "gray",
              }}
            >
              <label htmlFor="lowToHigh"> Low to High</label>
              <input
                type="checkbox"
                name="lowToHigh"
                id="lowToHigh"
                className="checkbox"
                onChange={() =>
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "lowToHigh",
                  })
                }
                checked={sort === "lowToHigh" ? true : false}
              />
            </li>

            <li
              style={{
                backgroundColor: sort === "highToLow" ? "#032044" : "white",
                color: sort === "highToLow" ? "white" : "gray",
              }}
            >
              <label htmlFor="highToLow">High to Low</label>
              <input
                type="checkbox"
                name="highToLow"
                id="highToLow"
                className="checkbox"
                onChange={() =>
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "highToLow",
                  })
                }
                checked={sort === "highToLow" ? true : false}
              />
            </li>
          </ul>
        </div>

        <div className="sort-mobile">
          <span onClick={sortToggle} style={{ fontWeight: "500" }}>
            Sort By
          </span>
          <ul
            style={{
              visibility: showSort ? "visible" : "hidden",
              opacity: showSort ? "1" : "0",
            }}
          >
            <li>Best Selling</li>
            <li>A - Z</li>
            <li>Z - A</li>
            <li>Low to High</li>
            <li>High to Low</li>
          </ul>
        </div>
      </div>

      <div className="filter body desktop">
        <div className="heading">
          <span>Filter</span>
          <FiFilter></FiFilter>
        </div>
        <div className="filter-items">
          <input type="checkbox" name="all" id="all" />
          <label htmlFor="all">All</label>
          <br />
          <input type="checkbox" name="men" id="men" />
          <label htmlFor="men">Men</label>
          <br />
          <input type="checkbox" name="women" id="women" />
          <label htmlFor="women">Women</label>
        </div>
      </div>

      <div
        className="filter body mobile"
        style={{
          transform: showFilter ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        <div className="heading">
          <span> Filter</span>
          <FiFilter></FiFilter>
        </div>
        <div className="filter-items">
          <input type="checkbox" name="all" id="all" />
          <label htmlFor="all">All</label>
          <br />
          <input type="checkbox" name="men" id="men" />
          <label htmlFor="men">Men</label>
          <br />
          <input type="checkbox" name="women" id="women" />
          <label htmlFor="women">Women</label>
        </div>
      </div>

      <div className="product-container">
        {products.map((item) => {
          return (
            <ProductItems
              key={item.id}
              imgUrl={item.image}
              title={item.title}
              price={item.price}
              item={item}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
