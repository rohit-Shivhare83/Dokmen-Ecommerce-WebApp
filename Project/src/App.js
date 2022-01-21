import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import TheJourney from "./Pages/TheJourney";
import WhatsappFloat from "./Components/WhatsappFloat";
import ScrollButton from "./Components/ScrollButton";
import ContactUs from "./Pages/ContactUs";
import ScrollToTop from "./Components/ScrollToTop";
import Products from "./Pages/Products";
import Checkout from "./Pages/Checkout";
import Policy from "./Pages/privacyPolicy";
import ReturnPolicy from "./Pages/ReturnPolicy";
import TermsnCondition from "./Pages/TermsnCondition";
import swal from "sweetalert";
import { CartState } from "./Context/Context";
import { useEffect } from "react";


function App() {
  const {
    state:
    { cart, }
    
  }= CartState();

  useEffect(() => {
    cart.length===6 && swal({
      title:"Prodct Limit Reached",
      text:"Cart Item cannot exceed 6",
    icon:"warning"})
  
    
  }, [cart]);
  

  return (
    <>
    <Router>
      <ScrollToTop />
      <Navbar />
      <div style={{ height: "108px" }}></div>
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/journey" element={<TheJourney />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/products" element={<Products  />}></Route>
        <Route  path="/checkout" element={<Checkout />}></Route>
        <Route path="/privacypolicy" element={<Policy/>}></Route>
        <Route path="/returnpolicy" element={<ReturnPolicy/>}></Route>
        <Route path="/terms&condition" element={<TermsnCondition/>}></Route>

      </Routes>
      
      <ScrollButton></ScrollButton>
      <WhatsappFloat></WhatsappFloat>
      <Footer></Footer>
    </Router>

    
    </>
  );
}

export default App;
