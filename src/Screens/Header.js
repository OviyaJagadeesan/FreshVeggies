import React, { useState } from "react";
import "../Styles/Header.css";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import Categories from "./Categories";

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

  const goHome = () => {
    navigate("/home");
  };

  const goCart = () => {
    navigate("/mycart");
  };
  const [viewcategory, setViewCategory] = useState(false);

  const CategoriesHandler = () => {
    setViewCategory(!viewcategory);
  };

  return (
    <div>
      <div className="whole-home-div">
        <div className="header">
          <div className="logo" onClick={goHome}></div>
          <p class="shop-by-category" onClick={CategoriesHandler}>
            Shop By Category <RiArrowDropDownLine style={{height:"30px",width:"30px"}}/>
          </p>
          <p className="farms">Explore Farms</p>
          <div className="other-sec">
            <div className="search">
              <div className="search-icon"></div>
              <div className="search-text">Search</div>
            </div>
            <div className="location-text">
              <form>
                <div className="form-group col-md-4 align">
                  <div className="location-icon" />
                  <select className="form-control" id="inputDistrict">
                    <option value="">Location</option>
                    <option value="">Ariyalur</option>
                    <option value="">Chennai</option>
                    <option value="">Coimbatore</option>
                    <option value="">Cuddalore</option>
                    <option value="">Dharmapuri</option>
                    <option value="">Dindigul</option>
                    <option value="">Erode</option>
                    <option value="">Kanchipuram</option>
                    <option value="">Kanyakumari</option>
                    <option value="">Karur</option>
                    <option value="">Krishnagiri</option>
                    <option value="">Madurai</option>
                    <option value="">Nagapattinam</option>
                    <option value="">Namakkal</option>
                    <option value="">Nilgiris</option>
                    <option value="">Perambalur</option>
                    <option value="">Pudukkottai</option>
                    <option value="">Ramanathapuram</option>
                  </select>
                </div>
              </form>
            </div>
            {/* <div className="location">
              <div className="location-icon" />
              <div className="location-text">Chennai</div>
              <RiArrowDropDownLine className="location-arrow" />
            </div> */}
            <div className="profile" onClick={onclick}>
              <div className="profile-icon" />
            </div>
            <div className="notify">
              <div className="notify-icon" />
            </div>
            <div className="cart" onClick={goCart}>
              <div className="cart-icon" />
            </div>
          </div>

          <div className="other-sec1" onClick={handleClick}>
            {show && (
              <div className="demo">
                <div className="demo-card">Search</div>
                <div className="demo-card">Location</div>
                <div className="demo-card">Profile</div>
                <div className="demo-card">Notification</div>
                <div className="demo-card" onClick={goCart}>
                  Cart
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {viewcategory && <Categories />}
    </div>
  );
};

export default Home;
