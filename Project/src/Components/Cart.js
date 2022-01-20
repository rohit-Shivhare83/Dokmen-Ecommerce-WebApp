import React, { useState, useEffect } from "react";
import { CartState } from "../Context/Context";
import "../Styles/Cart.css";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

export default function Cart(props) {

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
 
  

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
  }, [cart]);

  return (
    <div className="cart"
     style={{transform:props.showCart?"translateX(0)":"translateX(100%)"}}
     >
      <div className="cart-title">
        <h3>Your Bag</h3>
      </div>
      <div className="cart-body">
        {cart.length > 0 ? (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.title}>
                <img src={item.imgUrl} alt={item.title} />

                <div className="cart-item-details">
                  <p>{item.title}</p>
                  <p>Rs. {item.price}</p>
                  <div className="qty-title">Qty :</div>
                  <div className="item-btn">
                    <div className="qty-btn">
                      <AiFillMinusCircle
                        className="icon-btn"
                        onClick={() =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: item.title,
                              qty: item.qty - 1,
                            },
                          })
                        }
                      />
                      <span>{item.qty}</span>
                      <AiFillPlusCircle
                        onClick={() =>
                          dispatch({
                            type: "CHANGE_CART_QTY",
                            payload: {
                              id: item.title,
                              qty: item.qty + 1,
                            },
                          })
                        }
                        className="icon-btn"
                      />
                    </div>

                    <div className="delete-btn">
                      <MdDelete
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: item,
                          })
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>No items in your cart</p>
        )}
      </div>
      <div className="total-price">
        <span>
          Total Price : {total}
        </span>
      </div>
      <div className="checkout-btn">

        {
          total === 0?
          <button disabled='true' >CHECKOUT</button>:
          <Link to="/checkout"  >
          <button onClick={()=>props.setshowCart(false)}>CHECKOUT</button>
          </Link>
        }
        
       
      </div>
    </div>
  );
}
