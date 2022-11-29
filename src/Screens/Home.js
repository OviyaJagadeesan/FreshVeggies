import React from "react";
import "../Styles/Home.css";
import Header from "../Screens/Header";
import Carousel from "react-elastic-carousel";

const Home = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 800, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

  return (
    <div>
        <Header />
      <div className="veg-div">
        <div className="veg-frame"></div>
      </div>
      <Carousel breakPoints={breakPoints}>
        <div className="organic-veg"></div>
        <div className="fruit"></div>
        <div className="sweet"></div>
        <div className="organic-veg"></div>
        <div className="fruit"></div>
        <div className="sweet"></div>
      </Carousel>
    </div>
  );
};

export default Home;
