import React from 'react';
import "../Styles/dokmen-collection.css";
import { Link } from 'react-router-dom';

export default function Dokmencollection() {
    return (
        <div className="dokmen-collection">
        <h2 className="collection-txt">Dokmen Top selling</h2>

        <div className="container">
         <div className="container-items">

            <img src="Images/pic2.jpg" alt=""  />
         </div>
         
         <div className="container-items">
           
            <img src="Images/pic3.jpg" alt=""   />
         </div>
        
         <div className="container-items">
           
            <img src="Images/pic5.jpg" alt=""  />
           </div>
         
           <div className="container-items">
           
            <img src="Images/Pic6.jpg" alt=""   />
           </div>
        
           <div className="container-items">
           
            <img src="Images/pic4.jpg" alt=""  />
           </div>
          
           <div className="container-items">
           
            <img src="Images/Pic1.jpg" alt=""   />
           </div>
          
        </div>

        <div className="product-btn">
           <Link to="/products">

          <button >view all products</button>
           </Link>
        </div>
        <hr />
      </div>
    )
}
