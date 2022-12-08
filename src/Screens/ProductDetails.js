import React, { useState } from "react";
// import farms from "../Data/farms";
import { Card } from "react-bootstrap";
import "../Styles/ProductDetails.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { additem } from "../Redux/Action";
import Header from "../Screens/Header";
import Footer from "../Screens/Footer";
import farms from "../Data/farms";

const ProductDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [productdetails, setProductDetails] = useState(location.state);
  const dispatch = useDispatch();
  const MyCartHandler = (name, farm, weight, notkd, kd) => {
    const data = { name, farm, weight, notkd, kd };
    dispatch(additem(data));
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="detials-view">
        <Card className="card-show-small">
          <Card.Img src={require(`../Images/${productdetails.image}`)} />
        </Card>
        <Card className="card-show">
          <Card.Img src={require(`../Images/${productdetails.image}`)} />
        </Card>
        <Card className="card-2nd-style">
          <Card.Body>
            <Card.Title className="product-title-name">
              {productdetails.productname}
            </Card.Title>
            <Card.Text className="card product-farm-text">
              {productdetails.farm}
            </Card.Text>
            <Card.Text className="card product-description-text">
              {productdetails.description}
            </Card.Text>
            <Card.Text className="card product-weight">
              {productdetails.weight}
            </Card.Text>
            <div className="deal-off">
              <div>
                <Card.Img
                  className="product-deal-img"
                  src={require(`../Images/${productdetails.dealImg}`)}
                  alt="oviya"
                ></Card.Img>
                <p className="product-deal-text">{productdetails.deal}</p>
              </div>
              <div>
                <Card.Img
                  className="product-offer-img"
                  src={require(`../Images/${productdetails.offImg}`)}
                />
                <div className="product-offer-text">{productdetails.offer}</div>
              </div>
            </div>
            <div className="product-kd-text">
              <Card.Text className="product-notkd">
                {productdetails.notkd}
              </Card.Text>
              <Card.Text className="product-kd">{productdetails.kd}</Card.Text>
            </div>
            <button
              className="add-to-cart-button"
              onClick={() => {
                MyCartHandler(
                  productdetails.productname,
                  productdetails.farm,
                  productdetails.weight,
                  productdetails.notkd,
                  productdetails.kd
                );
              }}
            >
              Add to Cart
            </button>
          </Card.Body>
        </Card>
      </div>
      <div className="poultry-img-details">
        {farms.map((user) => {
          return (
            <div style={{ padding: "20px" }}>
              <Card>
                <Card.Body>
                  <Card.Text style={{color:"#6B7885", fontSize:"18px"}}>{user.farmabout}</Card.Text>
                  <Card.Text style={{color:"#415162",fontSize:"26px",fontWeight:"1000px"}}>{user.farmname}</Card.Text>
                  <Card.Text style={{color:"#6B7885",fontSize:"16px"}}>{user.description}</Card.Text>
                </Card.Body>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    width: "60%",
                    justifyContent: "space-between",
                  }}
                >
                  <Card.Img
                    style={{ height: "200px", width: "200px", padding: "20px" }}
                    src={require(`../Images/${user.image1}`)}
                  />
                  <Card.Img
                    style={{ height: "200px", width: "200px",padding:"20px"}}
                    src={require(`../Images/${user.image2}`)}
                  />
                  <Card.Img
                    style={{ height: "200px", width: "200px",padding:"20px"}}
                    src={require(`../Images/${user.image3}`)}
                  />
                  <Card.Img
                    style={{ height: "200px", width: "200px",padding:"20px"}}
                    src={require(`../Images/${user.image4}`)}
                  />
                </div>
              </Card>
            </div>
            // <Card className="card-style">
            //   <div
            //     style={{ cursor: "pointer" }}
            //   >
            //     <Card.Img
            //       varient="top"
            //       src={require(`../Images/${user.image}`)}
            //     />
            //     <Card.Body>
            //       <Card.Title className="title-text">
            //         {user.name}
            //       </Card.Title>
            //       <Card.Text className="farm-text">{user.farm}</Card.Text>
            //       <Card.Text className="description-text">
            //         {user.description}
            //       </Card.Text>
            //       <div className="weight-text">
            //         <Card.Text className="weight">{user.weight}</Card.Text>
            //         <Card.Text className="notkd">{user.notkd}</Card.Text>
            //         <Card.Text className="kd">{user.kd}</Card.Text>
            //       </div>
            //     </Card.Body>
            //   </div>
            //   <button
            //     className="cart-button"
            //     // onClick={}
            //     onClick={() => cartHandler(user)}
            //   >
            //     {user.stack}
            //   </button>
            // </Card>
          );
        })}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ProductDetails;
