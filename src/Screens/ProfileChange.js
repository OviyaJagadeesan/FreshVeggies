import React from "react";
import "../Styles/EditProfile.css"

const ProfileChange = () => {
  return (
    <div className="right-div">
      <p className="name">Hello XYZ</p>
      <div className="card personal-details">
        <p className="text">Personal Details</p>
        <input
          type="text"
          className="input-personal-details"
          placeholder="Name"
        ></input>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            type="tel"
            className="input-personal-details"
            placeholder="Mobile Number"
          ></input>
          <input
            type="email"
            className="input-personal-details"
            id="exampleInputEmail1"
            placeholder="Email address"
          ></input>
        </div>
        <button className="buttons">Update</button>
      </div>
      <div className="card personal-details">
        <p className="text">Default Delivery Address</p>
        <input
          type="text"
          className="input-personal-details"
          placeholder="Enter Address"
        ></input>
        <button className="buttons">Change Default Address</button>
      </div>
    </div>
  );
};

export default ProfileChange;
