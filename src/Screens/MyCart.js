import React, { useEffect, useState } from "react";
import "../Styles/MyCart.css";
import { useSelector } from "react-redux";
import Header from "../Screens/Header";
import { useDispatch } from "react-redux";
import { additem } from "../Redux/Action";
import { removeitem } from "../Redux/Action";
import { deleteitem } from "../Redux/Action";
import Footer from "../Screens/Footer";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  const navigate=useNavigate();
  
  const [deleteHandler,setDeleteHandler]=useState(false);

  let value = useSelector((payload) => payload);
  const dispatch = useDispatch();

  const addItemHandler = (name, farm, weight, notkd, kd) => {
    dispatch(additem({ name, farm, weight, notkd, kd }));
  };

  const removeItemHandler = (name, farm, weight, notkd, kd) => {
    dispatch(removeitem({ name, farm, weight, notkd, kd }));
  };


  const deleteItemHandler = (name, farm, weight, notkd, kd) => {
    dispatch(deleteitem({ name, farm, weight, notkd, kd }));
    setDeleteHandler(true);
    console.log("deletehandler",deleteHandler);
  };

  const goHomeHandler=()=>{
    navigate("/home");
  }


  if (value.length>0) {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="cart-page-div">
          <div className="cart-header">
            <h1>My Cart</h1>
          </div>
          <div className="card page">
            <div className="card details-div-head">
              <div className="row cart-body">
                <div className="col-lg-4 col-md-3 item-details-header">
                  Item Description
                </div>
                <div className="col-lg-2 item-details-header">Qty</div>
                <div className="col-lg-3 item-details-header"></div>
                <div className="col-lg-2 item-details-header">Price(KD)</div>
              </div>
            </div>
            <div>
              {value.map((item) => {
                return (
                  <div className="card details-div">
                    <div className="row cart-details">
                      <div className="col-lg-3 name-farmname">
                        <div className="col item-name">{item.name}</div>
                        <div className="col farm-name">{item.farm}</div>
                      </div>
                      <div className="col-lg-3 weight-item">{item.weight}</div>
                      <div className="col-lg-2 delete-add-remove">
                        <div
                          className="col delete-item-img"
                          onClick={() =>
                            deleteItemHandler(
                              item.name,
                              item.farm,
                              item.weight,
                              item.notkd,
                              item.kd
                            )
                          }
                        ></div>
                        <div className="col add-remove-item-box">
                          <div
                            className="col remove-item"
                            onClick={() =>
                              removeItemHandler(
                                item.name,
                                item.farm,
                                item.weight,
                                item.notkd,
                                item.kd
                              )
                            }
                          >
                            -
                          </div>
                          <div className="col quantity-item">
                            {item.quantity}
                          </div>
                          <div
                            className="col add-item"
                            onClick={() =>
                              addItemHandler(
                                item.name,
                                item.farm,
                                item.weight,
                                item.notkd,
                                item.kd
                              )
                            }
                          >
                            +
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 price-item">
                        <div className="col item-notkd">{item.notkd}</div>
                        <div className="col item-kd">{item.kd}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
else{
return (
  <div>
    <div className="whole-empty-div">
      <div className="empty-cart-img"></div>
      <p className="empty-cart-text">Your Cart is Empty</p>
      <button className="go-home-button" onClick={goHomeHandler}>GO HOME</button>
    </div>
  </div>
);
}
}

export default MyCart;
