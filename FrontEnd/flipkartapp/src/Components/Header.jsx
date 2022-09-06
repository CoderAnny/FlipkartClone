import React, { useState } from "react";
import "./Header.css";
import ImageDiv from "./ImageDiv";
import LoginPage from "./LoginData/LoginPage";

const Header = (props) => {
  
    const [isOpen, setOpen] = useState(false);

    const[fname,setFname] = useState("");

  const OpenOrNot = () => {
    setOpen(!isOpen);
  };

  const setName = (fname) =>{
    setFname(fname);    
  }



  return (
    <>
      <header>
        <div className="main_div dFlex">
          <section className="dFlex">
            <div style={{ margin: "0px 15px" }}>
              <h2>Flipkart</h2>

              <p>
                Explore
                <span style={{ color: "gold" }}>
                  {" "}
                  plus
                  <sup>
                    <img
                      src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                      alt="star_img"
                      style={{ height: "15px" }}
                    />
                  </sup>
                </span>
              </p>
            </div>

            <div>
              <input
                type="text"
                placeholder="Search for Products,brands and more"
              />

              <span className="search">
                <i className="fa fa-search"></i>
              </span>
            </div>
          </section>

          {/* Login Button */}
          {
            fname
            ?
            <h2>{fname}</h2>
            :
            <button onClick={OpenOrNot}>Login</button>
        }

          {/* More text */}

          <h4>More</h4>

          {/* Cart */}

          <h4>
            <span style={{ cursor: "pointer", padding: "0px 10px" }}>
              <i className="fas fa-solid fa-shopping-cart"></i>
            </span>
            Cart
          </h4>
        </div>
      </header>

      <ImageDiv />

      <LoginPage checkOpen={isOpen} closeFun={setOpen} setName={setName}/>
    </>
  );
};

export default Header;
