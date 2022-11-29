import React, { useState } from "react";
import "../Styles/Profile.css";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";
import { SlEnvolope } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import Header from "../Screens/Header";
function Profile() {
  const navigate = useNavigate();

  const [logEmail, setLogEmail] = useState("");
  const [ErrorLogEmail, setErrorLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");
  const [ErrorLogPassword, setErrorLogPassword] = useState("");

  const LoginButton = () => {
    setErrorLogEmail("");
    setErrorLogPassword("");

    if (!logEmail) {
      setErrorLogEmail("Enter email address");
    } else if (
      !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(logEmail)
    ) {
      setErrorLogEmail("Enter the proper email id");
    } else if (!logPassword) {
      setErrorLogPassword("Enter password");
    } else {
      navigate("/home");
    }
  };

  const [regEmail, setRegEmail] = useState("");
  const [ErrorRegEmail, setErrorRegEmail] = useState("");

  const RegisterButton = () => {
    setErrorLogEmail("");
    setErrorLogPassword("");

    if (!regEmail) {
      setErrorRegEmail("Enter email address");
    } else if (
      !/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(regEmail)
    ) {
      setErrorRegEmail("Enter the proper email id");
    } else {
      navigate("/home");
    }
  };

  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <div>
      <Header />
      <div className="profile-div">
        <div className="app-download"></div>
        <div className="login-register">
          <MDBTabs className="mb-3">
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleBasicClick("tab1")}
                active={basicActive === "tab1"}
              >
                LOGIN
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleBasicClick("tab2")}
                active={basicActive === "tab2"}
              >
                REGISTER
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
          <MDBTabsContent>
            <MDBTabsPane show={basicActive === "tab1"}>
              <div className="login">
                <div className="login-text">
                  Please enter your registered email and password to login to
                  your account.
                </div>
                <div className="email-div">
                  <SlEnvolope />
                  <input
                    type="email"
                    class="form-control email-input"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    onChange={(e) => {
                      setLogEmail(e.target.value);
                    }}
                  ></input>
                </div>
                <div className="password-div">
                  <SlEnvolope />
                  <input
                    type="password"
                    class="form-control password-input"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(e) => {
                      setLogPassword(e.target.value);
                    }}
                  ></input>
                </div>
                <button className="login-btn" onClick={LoginButton}>
                  LOGIN
                </button>
                <div className="error-view">
                  {ErrorLogEmail !== "" ? <p>{ErrorLogEmail}</p> : null}
                  {ErrorLogPassword !== "" ? <p>{ErrorLogPassword}</p> : null}
                </div>
              </div>
            </MDBTabsPane>
            <MDBTabsPane show={basicActive === "tab2"}>
              <div className="register-text">Create your Farm2Home account using your email id.</div>
              <div className="email-div">
                <SlEnvolope />
                <input
                    type="password"
                    class="form-control email-input"
                    id="exampleInputPassword1"
                    placeholder="Your email ID"
                  ></input>
              </div>
              <p className="send-code">We will send a code to validate.</p>
              <div className="proceed-btn">PROCEED</div>
            </MDBTabsPane>
          </MDBTabsContent>
        </div>
      </div>
    </div>
  );
}

export default Profile;
