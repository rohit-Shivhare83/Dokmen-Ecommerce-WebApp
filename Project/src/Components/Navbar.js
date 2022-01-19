import { React, useState } from "react";
import "../Styles/Navbar.css";
import "../Styles/Whatsapp.css";
// import Products from "../Pages/Products";
import { Link } from "react-router-dom";
import { BsHandbag, BsSearch } from "react-icons/bs";
import Cart from "./Cart";
import { CartState } from "../Context/Context";

import { BiMenu } from "react-icons/bi";
import ProductItems from "./ProductItems";

export default function Navbar() {
  const [showSearch, setshowSearch] = useState(false);
  const searchBar = () => {
    setshowSearch(!showSearch);
    setSearchTerm("");
  };

  const [showCart, setshowCart] = useState(false);
  const cartBar = () => setshowCart(!showCart);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function closeMenu() {
    const toggle = document.getElementById("togglerTrigger");
    toggle.checked = false;
  }
  // const {
  //   state: { products },
  //   productState: { category },
  //   productDispatch,
  // } = CartState();

  const {
    state: { cart, products },
    // productState: { category },
    productDispatch,
  } = CartState();

  const transformProducts = () => {
    // let sortedProducts = products;
    console.log(searchTerm);
    // if(searchTerm){
    //   sortedProducts= sortedProducts.filter((prod)=>prod.title.toLowercase().includes(searchTerm));
    // }
    // return sortedProducts;
  };

  const getSearhTerm = (search) => {
    setSearchTerm(search.target.value);
    if (searchTerm !== "") {
      const sortedProducts = products.filter((product) => {
        return Object.values(product)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm);
      });
      // console.log(sortedProducts);
      setSearchResults(sortedProducts);
      console.log(searchResults);
    }
  };

  return (
    <>
      <header>
        <div className="whatsapp-container">
          <a
            target="blank"
            href="https://api.whatsapp.com/send?phone=+919867348169&text=Hi, I want to place my order at Dokmen"
          >
            <img
              src="https://img.icons8.com/color/50/000000/whatsapp.png"
              alt="whatsapp"
              className="w-img"
            />
            <span className="w-text">
              Place Order on Whatsapp +91 9867348169
            </span>
          </a>
        </div>

        <div className="navbar">
          <label className="toggle-btn" htmlFor="togglerTrigger">
            <BiMenu id="toggler"></BiMenu>
          </label>
          <input type="checkbox" name="" id="togglerTrigger" />
          <div className="nav-menu left">
            <ul>
              <li>
                <button className="login-btn menu">Log In</button>
              </li>
              <li>
                <Link to="/" onClick={closeMenu}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/">SHOP</Link>
                <ul>
                  <li>
                    <Link to="/products" onClick={closeMenu}>
                      ALL
                    </Link>
                    
                  </li>
                  <li>
                    <>
                    
                    <Link to="/products" onClick={closeMenu}>
                      MEN
                    </Link>
                    </>
                  </li>
                  <li>
                    <Link to="/products" onClick={closeMenu}>
                      WOMEN
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" onClick={closeMenu}>
                  COMBOS
                </Link>
              </li>
              <li>
                <Link to="#" onClick={closeMenu}>
                  SALE
                </Link>
              </li>
              <li>
                <Link to="#">THE BRAND</Link>
                <ul>
                  <li>
                    <Link to="/journey" onClick={closeMenu}>
                      JOURNEY
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeMenu}>
                      WHY DOKMEN
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeMenu}>
                      BLOG
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeMenu}>
                      BECOME AN AFFILIATE
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeMenu}>
                      CORPORATE GIFTING
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">HELP</Link>
                <ul>
                  <li>
                    <Link to="#" onClick={closeMenu}>
                      RETURNS / EXCHANGE
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeMenu}>
                      TRACK YOUR ORDER
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeMenu}>
                      RETURN POLICY
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeMenu}>
                      CARE YOUR PPRODUCT
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeMenu}>
                      #ASK DOKMEN
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="logo">
            <img src="Images/Logo.png" alt="logo" />
            <br />A BRAND BY <span>EMPIRE</span> FOOTWEAR
          </div>

          <button className="login-btn">Log In</button>

          <nav className="nav-menu right">
            <ul>
              <li>
                <button onClick={searchBar}>
                  <BsSearch className="menu-items-img" />
                  <span className="icon-title">SEARCH</span>
                </button>
              </li>
              <li>
                <button onClick={cartBar}>
                  <BsHandbag className="menu-items-img" alt="bag" id="bag" />
                  <span className="icon-title">BAG</span>
                  <span
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill"
                    style={{ backgroundColor: "black" }}
                  >
                    {cart.length}
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className="search"
          style={{
            transform: showSearch ? "translateY(0)" : "translateY(-120%)",
          }}
        >
          <form action="" className="search-form">
            <input
              type="text"
              name="search"
              value={searchTerm}
              id="search"
              placeholder="Search..."
              onChange={getSearhTerm}
            />
          </form>
        </div>

        <div
          className="search-container"
          style={{ display: searchTerm ? "block" : "none" }}
        >
          <div className="search-items">
            {searchResults.map((item) => {
              return (
                <ProductItems
                  key={item.title}
                  title={item.title}
                  imgUrl={item.image}
                  price={item.price}
                />
              );
            })}
          </div>
        </div>
      </header>
      <Cart showCart={showCart} />
    </>
  );
}
