import React from "react";
import "../Styles/Home.css";
import Header from "../Screens/Header";
import Carousel from "react-elastic-carousel";
import Footer from "./Footer";
import Poultry from "./Poultry";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 800, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  const breakPoints2 = [
    { width: 1, itemsToShow: 2 },
    { width: 800, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 },
    { width: 1200, itemsToShow: 5 },
  ];

  const PoultryHandler = () => {
    navigate("/poultry");
  };

  const DairyHandler = () => {
    navigate("/dairy");
  };

  const allCategoriesHandler=()=>{
    navigate("/allcategories")
  }

  return (
    <div>
      <div className="whole-home">
        <div>
          <Header />
        </div>
        <div className="veg-products-div">
          <div className="veg-products-frame"></div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p className="featured-promos">Featured Promos</p>
          <p className="view-all-text">View all</p>
        </div>
        <Carousel breakPoints={breakPoints}>
          <div className="organic-veg"></div>
          <div className="fruit"></div>
          <div className="sweet"></div>
          <div className="organic-veg"></div>
          <div className="fruit"></div>
          <div className="sweet"></div>
        </Carousel>
        <div className="milk-products-div">
          <div className="milk-products-frame"></div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p className="top-categories">Top Categories</p>
          <p className="view-all-text3" onClick={allCategoriesHandler}>View all</p>
        </div>
        <Carousel breakPoints={breakPoints2}>
          <div className="dairy-promo">
            <div className="promo-text" onClick={DairyHandler}>
              Dairy
            </div>
          </div>
          <div className="poultry-promo" onClick={PoultryHandler}>
            <div className="promo-text">Poultry</div>
          </div>
          <div className="seafood-promo">
            <div className="promo-text">Sea Food</div>
          </div>
          <div className="vegetables-promo">
            <div className="promo-text">Vegetables</div>
          </div>
          <div className="fresh-fruits-promo">
            <div className="promo-text">Fresh Fruits</div>
          </div>
          <div className="flowers-promo">
            <div className="promo-text">Flowers</div>
          </div>
          <div className="herbs-promo">
            <div className="promo-text">Herbs</div>
          </div>
          <div className="seasoning-promo">
            <div className="promo-text">Seasoning</div>
          </div>
        </Carousel>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <p className="title">Explore Farms</p>
          <p className="view-all-text2">View all</p>
        </div>
        <Carousel breakPoints={breakPoints2}>
          <div>
            <div className="farm1-promo"></div>
            <div className="farm1-text">George Farm</div>
          </div>
          <div>
            <div className="farm2-promo"></div>
            <div className="farm2-text">Martha's Farm</div>
          </div>
          <div>
            <div className="farm3-promo"></div>
            <div className="farm3-text">Mathew Farm</div>
          </div>
          <div>
            <div className="farm4-promo"></div>
            <div className="farm4-text">Joseph Farm</div>
          </div>
          <div>
            <div className="farm5-promo"></div>
            <div className="farm5-text">Kay's Chick Farm</div>
          </div>
          <div>
            <div className="farm6-promo"></div>
            <div className="farm6-text">AI-Orgo Farm</div>
          </div>
        </Carousel>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
