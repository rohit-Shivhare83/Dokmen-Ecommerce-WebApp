import { React, useState } from "react";
import "../Styles/Navbar.css";
import "../Styles/Whatsapp.css";
import { Link } from "react-router-dom";
import { BsHandbag, BsSearch } from "react-icons/bs";
import Cart from "./Cart";
import { CartState } from "../Context/Context";

import { BiMenu } from "react-icons/bi";

export default function Navbar() {
  const [showSearch, setshowSearch] = useState(false);
  const searchBar = () => setshowSearch(!showSearch);

  const [showCart, setshowCart] = useState(false);
  const cartBar = () => setshowCart(!showCart);

  function closeMenu() {
    const toggle = document.getElementById("togglerTrigger");
    toggle.checked = false;
  }

  const {
    state: { cart },
    productDispatch
  } = CartState();

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
                    <Link to="#" onClick={closeMenu}>
                      ALL
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeMenu}>
                      MEN
                    </Link>
                  </li>
                  <li>
                    <Link to="#" onClick={closeMenu}>
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
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill" style={{backgroundColor:'black'}}>
                    {cart.length}
                    
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        <div className="search" style={{ top: showSearch ? "106px" : "0" }}>
          <form action="" className="search-form">
            <input type="text" name="" id="" placeholder="Search..." onChange={(e)=>{
              productDispatch({
                type:'FILTER_BY_SEARCH',
                payload:e.target.value
              })
            }} />
          </form>
        </div>
      </header>
      <Cart showCart={showCart} />
    </>
  );
}
