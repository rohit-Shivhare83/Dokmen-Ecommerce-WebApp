import React from "react";
import "../Styles/ContactUs.css";
import {FaPhoneAlt} from "react-icons/fa"
import {MdLocationOn,MdEmail} from "react-icons/md"


export default function ContactUs() {
  return (
    <div className="contactus" >
        <div className="card">
            <h2>Contact Us</h2>
            <div className="container">
                <ul>
                    <li> <p> <MdLocationOn className="icon"/>  4 Railview, R C Marg, Near Railway Crossing, Chembur, Mumbai - 400 071.</p> </li>
                    <li><a href="tel:+919820043813"><FaPhoneAlt className="icon"/>+91 98200 43813    (11:00 AM to 6PM on weekdays)</a></li>
                    <li><a href="mailto:empirefootwear@gmail.com"> <MdEmail className="icon"/> empirefootwear@gmail.com</a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}
