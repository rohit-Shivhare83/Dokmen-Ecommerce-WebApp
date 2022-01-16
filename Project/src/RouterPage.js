import React from 'react';
import Home from "./Pages/Home";
import TheJourney from "./Pages/TheJourney";
import Products from "./Pages/Products";
import Checkout from "./Pages/Checkout";
import ContactUs from "./Pages/ContactUs";
import {Routes, Route} from "react-router-dom";


const RouterPage = () => {
    return (
        <main>
            <Routes>
        <Route path="" component={<Home/>}></Route>
        <Route path="/journey" component={<TheJourney/>}></Route>
        <Route path="/contactus" component={<ContactUs/>}></Route>
        <Route path="/products" component={<Products/>}></Route>
        <Route path="/checkout"  component={<Checkout/>}></Route>
      </Routes>
        </main>
    )
}

export default Routes
