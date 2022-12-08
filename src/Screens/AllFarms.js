import React from 'react';
import Header from "../Screens/Header";
import Footer from "../Screens/Footer";

const AllFarms = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          padding: "80px",
        }}
      >
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default AllFarms
