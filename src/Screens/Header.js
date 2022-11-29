import React, { useState } from "react";
import "../Styles/Header.css";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    console.log("click");
    setShow(!show);
  };

  const navigate = useNavigate();
  const onclick = () => {
    navigate("/editprofile");
  };

  return (
    <div>
      <div className="whole-home-div">
        <div className="header">
          <div className="logo"></div>
          <div className="other-sec">
            <div className="search">
              <div className="search-icon"></div>
              <div className="search-text">Search</div>
            </div>
            <div className="location">
              <div className="location-icon" />
              <div className="location-text">Chennai</div>
              <RiArrowDropDownLine className="location-arrow" />
            </div>
            <div className="profile" onClick={onclick}>
              <div className="profile-icon" />
            </div>
            <div className="notify">
              <div className="notify-icon" />
            </div>
            <div className="cart">
              <div className="cart-icon" />
            </div>
          </div>

          <div className="other-sec1" onClick={handleClick}>
            {show && (
              <div className="demo">
                <div className="demo-card">search</div>
                <div className="demo-card">location</div>
                <div className="demo-card">profile</div>
                <div className="demo-card">notification</div>
                <div className="demo-card">cart</div>
              </div>
            )}
          </div>
        </div>

        {/* <div>
          <div className="card"></div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
