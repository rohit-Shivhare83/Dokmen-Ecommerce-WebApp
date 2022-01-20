import React from 'react'
import "../Styles/footer.css";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-1">
                            <h4 className='footer-col-1'>Have A Question?</h4>
                            <ul>
                                <li><Link to='/contactus' className='contact-us'>Contact Us</Link></li>
                                <li><a href='mailto:empirefootwear@gmail.com' className='contact-1'>empirefootwear@gmail.com</a></li>
                                <li><a href='tel:+919867348169' className='contact-1'>
                                    <p>+91 9867348169 <br /> (11:00 AM to 6PM on weekdays)</p>
                                    </a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Shop</h4>
                            <ul>
                                <li><a href='/'>All</a></li>
                                <li><a href='/'>Men</a></li>
                                <li><a href='/'>Women</a></li>
                                <li><a href='/'>Accessories</a></li>
                               
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Know</h4>
                            <ul>
                                <li><Link to='/journey'>The Journey</Link></li>
                                <li><a href='/'>Why Dokmen</a></li>
                                <li><a href='/'>Blog</a></li>
                                <li><a href="/">FAQ</a></li>
                                <li><a href="/">Become an Affiliate</a></li>
                                <li><a href="/">Corporate Gifting</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Guides</h4>
                            <ul>
                            <li><a href='/'>Track Your Order</a></li>
                                <li><a href='/'>Schedule a Return / Exchange</a></li>
                                <li><a href='/'>Care your product</a></li>
                                <li><Link to="/returnpolicy">Returns Policy</Link></li>
                                <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                                <li><a href="/">Cookie Policy</a></li>
                                <li><Link to="/terms&condition">Terms & Conditions</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div className="icons-link">
                    <span>Icons By <a href="https://icons8.com/" target='_blank' rel='noreferrer'>Icons8</a></span>
                </div>
            </footer>
        </div>
    )
}

export default Footer