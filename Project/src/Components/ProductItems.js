import React from "react";
import { CartState } from "../Context/Context";
import "../Styles/ProductItems.css";

export default function ProductItems(props) {

  const {
    state:
    { cart, },
    dispatch
  }= CartState();


  

  return (
    <div className="product-items">
      <div className="container-items">
        <img src={props.imgUrl} alt="img" />
        <div className="items-details">
          
          <p>{props.title}</p>
          <span>Rs. {props.price}</span>
        </div>
        
      </div>
      <div className="cart-btn">
        {
          cart.some((p)=>p.id===props.id)?(
            <button  onClick={()=>{
              dispatch({
                type:'REMOVE_FROM_CART',
                payload:props
              })
            }} >
            REMOVE FROM CART
          </button>
          ):(
            <button onClick={()=>{
              dispatch({
                type:'ADD_TO_CART',
                payload:props
              })
            }} >
            ADD TO CART
          </button>
          )
        }
         
        </div>
    </div>
  );
}
