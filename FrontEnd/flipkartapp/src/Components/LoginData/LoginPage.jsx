import React, { useState } from "react";
import { Dialog, TextField } from "@mui/material";
import "./LoginPage.css";
import axios from "axios";
import { createContext } from "react";

const Firstname = createContext(null);

const LoginPage = (props) => {

  const acountInial = {
    login: {
      view: "login",
      heading: "Login",
      subHeading: "Get access to your Orders, Wishlist and Recommendations",
    },
    signin: {
      view: "signin",
      heading: "Looks like you are new here!",
      subHeading: "sign up with your mobile number to get started",
    },
  };

  const [acount, setAcount] = useState(acountInial.login);

  const toggleAccount = () => {
    setAcount(acountInial.signin);
  };

  const handleClose = () => {
    setAcount(acountInial.login);
    props.closeFun(false);
  };

  // take all Entered values in signin TextFields

  const signinInitalValues = {
    firstName: "",
    lastName: "",
    userName: "",
    emailId: "",
    passWord: "",
    phone: "",
  };

  const [signinRecord, setSignInRecord] = useState(signinInitalValues);

  const inputVal = (e) => {
    setSignInRecord({ ...signinRecord, [e.target.name]: e.target.value });
  };

  const signinUser = (e) => {
    e.preventDefault();
    try {
      axios.post("http://localhost:5500/user", signinRecord);
      alert("User signed in Successfully!");
      props.setName(signinRecord.firstName);
      handleClose();
    }
    catch (err) {
      alert("User sigin Failed!");
    }
    handleClose();
  };

  return (
    <>
        <Dialog open={props.checkOpen} onClose={handleClose}>
          <div className="dmain">
            {/* Left Part */}
            <div className="left">
              <div>
                <h5>{acount.heading}</h5>
                <br />
                <p>{acount.subHeading}</p>
              </div>

              <img
                src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"
                alt=""
              />
            </div>

            {/* Right Part */}
            <div className="right">
              {acount.view === "login" ? (
                <>
                <form style={{width:"100%"}}>
                <div className="d">
                    <TextField
                      required
                      variant="standard"
                      label="Enter Email/Mobile Number"
                      fullWidth
                    />
                  </div>
                  <br />
                  <div className="d">
                    <TextField
                      required
                      type="password"
                      variant="standard"
                      label="Enter Password"
                      fullWidth
                    />
                  </div> 
                  <br />
                  <p>
                    By continuing, you agree to Flipkart's Terms of Use and
                    Privacy Policy.
                  </p>
                  <br />
                  <button className="login" type="submit">Login</button>
                  <p>OR</p>
                  <button className="otp">Request OTP</button>
                </form>
                  <h5
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={toggleAccount}
                  >
                    New to Flipkart? Create an account
                  </h5>
                </>
              ) : (
                <>
                <form style={{width:"100%"}} onSubmit={e=>signinUser(e)}>
                <div className="d">
                    <TextField
                      required
                      variant="standard"
                      onChange={inputVal}
                      name="firstName"
                      label="Enter Firstname"
                      fullWidth
                    />
                  </div>
                  <div className="d">
                    <TextField
                      required
                      variant="standard"
                      onChange={inputVal}
                      name="lastName"
                      label="Enter Lastname"
                      fullWidth
                    />
                  </div>
                  <div className="d">
                    <TextField
                      required
                      variant="standard"
                      onChange={inputVal}
                      name="userName"
                      label="Enter Username"
                      fullWidth
                    />
                  </div>
                  <div className="d">
                    <TextField
                      required
                      type="email"
                      variant="standard"
                      onChange={inputVal}
                      name="emailId"
                      label="Enter Email"
                      fullWidth
                    />
                  </div>
                  <div className="d">
                    <TextField
                      required
                      type="password"
                      variant="standard"
                      onChange={inputVal}
                      name="passWord"
                      label="Enter Password"
                      fullWidth
                    />
                  </div>
                  <div className="d">
                    <TextField
                      required
                      variant="standard"
                      onChange={inputVal}
                      name="phone"
                      label="Enter Phone"
                      fullWidth
                    />
                  </div>
                  <button type="submit" className="login" >
                    Contiune
                  </button>
                </form>
                </>
              )}
            </div>
          </div>
        </Dialog>
    </>
  );
};

export default LoginPage;
export { Firstname };
