import { React, useState, useEffect, useRef } from "react";
import "../Styles/Navbar.css";
import "../Styles/Whatsapp.css";
import { Link } from "react-router-dom";
import { BsHandbag, BsSearch } from "react-icons/bs";
import Cart from "./Cart";
import { CartState } from "../Context/Context";

import { BiMenu } from "react-icons/bi";
import ProductItems from "./ProductItems";
import { MdClear } from "react-icons/md";

var x = window.matchMedia('(max-width:1200px)')

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

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

  const [showMenu, setShowMenu] = useState(false);

  const {
    state: { cart, products },
    productDispatch,
  } = CartState();

  const getSearhTerm = (search) => {
    setSearchTerm(search.target.value);
    if (searchTerm !== "") {
      const sortedProducts = products.filter((product) => {
        return Object.values(product)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(sortedProducts);
    }
  };

  let domNode = useClickOutside(() => {
    setShowMenu(false);
    // console.log(showMenu);
  });

  console.log(x.matches);

  return (
    <div>
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
            <BiMenu
              id="toggler"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            ></BiMenu>
          </label>

          <div
            className="nav-menu left"
            style={{transform: x.matches ? showMenu?"translateX(0)":"translateX(-100%)":null}}
            id="navMenuLeft"
            ref={domNode}
          >
            <div className="closeMenu">
              <MdClear
                onClick={() => setShowMenu(!showMenu)}
                style={{ cursor: "pointer" }}
              />
            </div>
            <ul>
              <li>
                <Link to="/">SHOP</Link>
                <ul>
                  <li>
                    <Link
                      to="/products"
                      onClick={() => {
                        setShowMenu(!showMenu);
                        productDispatch({
                          type: "FILTER_BY_CATEGORY",
                          payload: "all",
                        });
                      }}
                    >
                      ALL
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                      onClick={() => {
                        setShowMenu(!showMenu);
                        productDispatch({
                          type: "FILTER_BY_CATEGORY",
                          payload: "men",
                        });
                      }}
                    >
                      MEN
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                      onClick={() => {
                        setShowMenu(!showMenu);
                        productDispatch({
                          type: "FILTER_BY_CATEGORY",
                          payload: "women",
                        });
                      }}
                    >
                      WOMEN
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" onClick={() => setShowMenu(!showMenu)}>
                  COMBOS
                </Link>
              </li>
              <li>
                <Link to="#" onClick={() => setShowMenu(!showMenu)}>
                  SALE
                </Link>
              </li>
              <li>
                <Link to="#">THE BRAND</Link>
                <ul>
                  <li>
                    <Link to="/journey" onClick={() => setShowMenu(!showMenu)}>
                      JOURNEY
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => setShowMenu(!showMenu)}>
                      WHY DOKMEN
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => setShowMenu(!showMenu)}>
                      BLOG
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => setShowMenu(!showMenu)}>
                      BECOME AN AFFILIATE
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => setShowMenu(!showMenu)}>
                      CORPORATE GIFTING
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#">HELP</Link>
                <ul>
                  <li>
                    <Link to="#" onClick={() => setShowMenu(!showMenu)}>
                      RETURNS / EXCHANGE
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => setShowMenu(!showMenu)}>
                      TRACK YOUR ORDER
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => setShowMenu(!showMenu)}>
                      RETURN POLICY
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => setShowMenu(!showMenu)}>
                      CARE YOUR PPRODUCT
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={() => setShowMenu(!showMenu)}>
                      #ASK DOKMEN
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <button className="login-btn menu">Log In</button>
              </li>
            </ul>
          </div>

          <div className="logo">
            <Link to="/">
            <img src="Images/Logo.png" alt="logo" />
            <br /><span className="logo-text"> A BRAND BY <span className="empire-text">EMPIRE</span> FOOTWEAR</span> 
            </Link>
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

      <Cart setshowCart={setshowCart} showCart={showCart} />
    </div>
  );
}
