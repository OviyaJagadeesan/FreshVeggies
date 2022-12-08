import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Footer.css";

const Footer = () => {

  const navigate=useNavigate();

  const homeHandler=()=>{
    navigate("/home");
  }

  const dairyHandler=()=>{
    navigate('/dairy');
  }

  const poultryHandler=()=>{
    navigate('/poultry');
  }

  const seaFoodHandler=()=>{
    navigate('/seafood');
  }

  return (
    <div>
      <div className="footer-div">
        <div className="app-logo-div">
          <div className="app-logo"></div>
          <div className="color-font">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </div>
        </div>
        <div className="shop-div">
          <div className="color-font ">Shop by Category</div>
          <div className="color-font2" onClick={dairyHandler}>Dairy</div>
          <div className="color-font2" onClick={poultryHandler}>Poultry</div>
          <div className="color-font2" onClick={seaFoodHandler}>Sea Food</div>
          <div className="color-font2">Vegetables</div>
          <div className="color-font2">Fresh Fruits</div>
          <div className="color-font2">Flowers</div>
        </div>
        <div className="shop-div3">
          <div className="color-font">Quick Links</div>
          <div className="color-font2" onClick={homeHandler}>Home</div>
          <div className="color-font2">About Us</div>
          <div className="color-font2">FAQs</div>
          <div className="color-font2">Sell with Us</div>
          <div className="color-font2">Privacy Policy</div>
          <div className="color-font2">Terms & Conditions</div>
        </div>
        <div className="shop-div2">
          <p>Login to your account</p>
          <p>Register with us</p>
          <p className="app-download-platform">
            <div className="google-play-store"></div>
            <div className="apple-store"></div>
          </p>
          <p>Follow Us</p>
        </div>
      </div>
      <div className="copyright">Copyright 2020. All Right Reserved.</div>
    </div>
  );
};

export default Footer;
