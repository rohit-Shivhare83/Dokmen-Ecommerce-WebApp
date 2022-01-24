import React from "react";
import "../Styles/dokmen-icons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSocks,
  faShield,
  faCircleCheck,
  faRecycle,
  faHourglass,
  faIndianRupeeSign,
  faGift,
  faCheckDouble,
  faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

export default function Dokmenicons() {
  return (
    <div>
      <div className="dokmen-icons-1">
        <h3>You will Love Them</h3>

        <div className="dokmen-icons">
          <div className="icons">
            
            <FontAwesomeIcon icon={faSocks} className="fIcon" />
            <h6>Comfort</h6>
          </div>
          <div className="icons">
            
            <FontAwesomeIcon
              icon={faShield}
              className="fIcon"
            ></FontAwesomeIcon>
            <h6>Protection</h6>
          </div>
          <div className="icons">
            <img src="Images/Icons/performance.png" alt="shoes" />
            <h6>Performance</h6>
          </div>
          <div className="icons">
           
            <FontAwesomeIcon icon={faCircleCheck} className="fIcon" />

            <h6>Value</h6>
          </div>
        </div>
      </div>

      <div className="dokmen-icons-2">
        <h3>Why Dokmen</h3>
        <p>Dokmen only sells products made in India, Material used for products are of great quality ,
          we guarantee your 100% satisfaction and we have been in this field Since 1970.
        </p>

        <div className="dokmen-icons">
          <div className="icons">
            <img src="Images/Icons/india-map.png" alt="flag" />
            <h6>Made in India</h6>
          </div>
          <div className="icons">
            

            <FontAwesomeIcon icon={faRecycle} className="fIcon" />
            <h6>Responsible Material</h6>
          </div>
          <div className="icons">
           
            <FontAwesomeIcon icon={faHourglass} className="fIcon" />

            <h6>Unparalleled Quality Since 1970</h6>
          </div>
          <div className="icons">
            <img src="/Images/Icons/100-percent.png" alt="satisfaction" />
            <h6>100% Satisfaction </h6>
          </div>
        </div>
      </div>

      <div className="dokmen-icons-3">
        <h3>A Perfect Deal</h3>

        <div className="dokmen-icons three">
          <div className="icons">
            

            <FontAwesomeIcon icon={faIndianRupeeSign} className="fIcon" />

            <h6>FREE SHIPPING</h6>
            <p>Deals in Rs. 500</p>
          </div>
          <div className="icons">
            
            <FontAwesomeIcon icon={faGift} className="fIcon" />

            <h6>THE PERFECT GIFT</h6>
            <p>
              Gift Cards, Bundles, <br /> Combos and more
            </p>
          </div>
          <div className="icons">
           

            <FontAwesomeIcon icon={faCheckDouble} className="fIcon" />

            <h6>QUALITY</h6>
            <p>
              Reinforced heel & toes <br /> for maximum durability
            </p>
          </div>
          <div className="icons">
            
            <FontAwesomeIcon icon={faArrowTrendUp} className="fIcon" />

            <h6>ON TREND </h6>
            <p>
              Make a statement & show <br /> off your personality
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
