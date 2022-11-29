import React from "react";
import "../Styles/EditProfile.css";
import Header from "../Screens/Header";
import { CgProfile } from "react-icons/cg";
import {RiLockPasswordLine} from "react-icons/ri";
import {GoListUnordered} from "react-icons/go";
import {BsFillBookmarkPlusFill} from "react-icons/bs";
import {IoMdNotificationsOutline} from "react-icons/io";
import {RiCustomerService2Fill} from "react-icons/ri";
import {FiSettings} from "react-icons/fi";
import {AiOutlineLogout} from "react-icons/ai";

const EditProfile = () => {
  return (
    <div>
      <div className="edit-profile-div">
        <Header />
        <div className="card edit-profile-side-nav">
          <CgProfile className="profile-change-img" />
          <div>
            <div className="div-profile">
              <CgProfile className="profile-img" />
              <p className="profile-text">Profile</p>
            </div>
            <div className="div-profile">
              <RiLockPasswordLine className="profile-img" />
              <p className="profile-text">Change Password</p>
            </div>
            <div className="div-profile">
              <GoListUnordered className="profile-img" />
              <p className="profile-text">My Orders</p>
            </div>
            <div className="div-profile">
              <BsFillBookmarkPlusFill className="profile-img" />
              <p className="profile-text">Address Book</p>
            </div>
            <div className="div-profile">
              <IoMdNotificationsOutline className="profile-img" />
              <p className="profile-text">Notifications</p>
            </div>
            <div className="div-profile">
              <RiCustomerService2Fill className="profile-img" />
              <p className="profile-text">Customer Support</p>
            </div>
            <div className="div-profile">
              <FiSettings className="profile-img" />
              <p className="profile-text">Settings</p>
            </div>
            <div className="div-profile">
              <AiOutlineLogout className="profile-img" />
              <p className="profile-text">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
