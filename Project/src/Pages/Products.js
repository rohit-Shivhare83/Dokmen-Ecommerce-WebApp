import React, { useState } from "react";
import "../Styles/Products.css";
import { FiFilter } from "react-icons/fi";
import { AiFillAppstore } from "react-icons/ai";
import ProductItems from "../Components/ProductItems";
import { CartState } from "../Context/Context";

export default function Products() {

  const {
    state: { products },
    productState: { sort, category },
    productDispatch,
  } = CartState();

  // category = props.category


  const [showSort, setshowSort] = useState(false);
  const [showFilter, setshowFilter] = useState(false);

  const sortToggle = () => setshowSort(!showSort);
  const filter = () => setshowFilter(!showFilter);

  const filterProducts = () => {
    let filteredProducts = products;

    // if(props.category === "men"){
    //   filteredProducts = filteredProducts.filter((i) => {
    //     return i.category === "Men";
    //   });
    // }

    if (category) {
      if (category === "men")  {
        filteredProducts = filteredProducts.filter((i) => {
          return i.category === "Men";
        });
      } else if (category === "women") {
        filteredProducts = filteredProducts.filter((i) => {
          return i.category === "Women";
        });
      } else {
        filteredProducts = products;
      }
    }

    if (sort) {
      if (sort === "lowToHigh") {
        filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
      } else if (sort === "highToLow") {
        filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
      } else if (sort === "aToZ") {
        filteredProducts = filteredProducts.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      } else {
        filteredProducts = filteredProducts.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      }
    }

    return filteredProducts;
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
                backgroundColor: sort === "aToZ" ? "#032044" : "white",
                color: sort === "aToZ" ? "white" : "gray",
              }}
            >
              <label htmlFor="aToZ">A - Z</label>
              <input
                type="checkbox"
                name="aToZ"
                id="aToZ"
                className="checkbox"
                onChange={() =>
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "aToZ",
                  })
                }
                checked={sort === "aToZ" ? true : false}
              />
            </li>

            <li  style={{
                backgroundColor: sort === "zToA" ? "#032044" : "white",
                color: sort === "zToA" ? "white" : "gray",
              }}>
              <label htmlFor="zToA">Z - A</label>
              <input
                type="checkbox"
                name="zToA"
                id="zToA"
                className="checkbox"
                onChange={() =>
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "zToA",
                  })
                }
                checked={sort === "zToA" ? true : false}
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
            <li   style={{
                
                fontWeight: sort === "aToZ" ? "bold" : "normal",
                color:sort === "aToZ" ? "black" : "gray",
              }}
              onClick={sortToggle}
              ><label htmlFor="aToZ">A - Z</label>
              <input
                type="checkbox"
                name="aToZ"
                id="aToZ"
                className="checkbox"
                onChange={() =>
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "aToZ",
                  })
                }
                checked={sort === "aToZ" ? true : false}
              /></li>


            <li  style={{
                
                fontWeight: sort === "zToA" ? "bold" : "normal",
                color:sort === "zToA" ? "black" : "gray",
              }}
              onClick={sortToggle}
              ><label htmlFor="zToA">Z - A</label>
              <input
                type="checkbox"
                name="zToA"
                id="zToA"
                className="checkbox"
                onChange={() =>
                  productDispatch({
                    type: "SORT_BY_PRICE",
                    payload: "zToA",
                  })
                }
                checked={sort === "zToA" ? true : false}
              /></li>
            <li  onClick={sortToggle}  style={{
                
                fontWeight: sort === "lowToHigh" ? "bold" : "normal",
                color:sort === "lowToHigh" ? "black" : "gray",
              }}>
            <label htmlFor="lowToHigh">Low to High</label>
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
            <li  onClick={sortToggle} style={{
                
                fontWeight: sort === "highToLow" ? "bold" : "normal",
                color:sort === "highToLow" ? "black" : "gray",
              }}>
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
      </div>

      <div className="filter body desktop">
        <div className="heading">
          <span>Filter</span>
          <FiFilter></FiFilter>
        </div>
        <div className="filter-items">
          <input
            type="checkbox"
            name="all"
            id="all"
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "all",
              })
            }
            checked={category === "all" ? true : false}
          />
          <label htmlFor="all">All</label>
          <br />

          <input
            type="checkbox"
            name="men"
            id="men"
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "men" 
              })
            }
            checked={category ==="men" ? true : false}
          />
          <label htmlFor="men">Men</label>
          <br />

          <input
            type="checkbox"
            name="women"
            id="women"
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "women" 
              })
            }
            checked={category ==="women"? true : false}
          />
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
          <ul>
            <li onClick={filter}>
              <input
                type="checkbox"
                name="all"
                id="all"
                onChange={() =>
                  productDispatch({
                    type: "FILTER_BY_CATEGORY",
                    payload: "all",
                  })
                }
                checked={category === "all" ? true : false}
              />
              <label htmlFor="all">All</label>
            </li>
            
            <li onClick={filter}>
              <input
                type="checkbox"
                name="men"
                id="men"
                onChange={() =>
                  productDispatch({
                    type: "FILTER_BY_CATEGORY",
                    payload: "men",
                  })
                }
                checked={category === "men" ? true : false}
              />
              <label htmlFor="men">Men</label>
              </li>
              
              
              <li onClick={filter}>
              
              <input
                type="checkbox"
                name="women "
                id="women"
                onChange={() =>
                  productDispatch({
                    type: "FILTER_BY_CATEGORY",
                    payload: "women",
                  })
                }
                checked={category === "women" ? true : false}
              />
              <label htmlFor="women">Women</label>
            </li>
            <li>
              
            </li>
          </ul>
        </div>
      </div>

      <div className="product-container">
        {filterProducts().map((item) => {
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
