import React, { useEffect } from "react"; 
import "./Footer.css";
import LOGO from "../../assets/logo.png";
import { IoMail, IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

function Footer() {
  const navItems = ["Home", "Products", "About", "Contact"];
  const handleRouteChange = (item) => {
    switch (item) {
      case "Home":
        document.getElementById("Home-page").scrollIntoView({ behavior: "smooth", block: "start" }).then( window.scrollBy({ top: 300, behavior: "smooth" })
        );
        
        break;
      case "Products":
        document.getElementById("Products-page").scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "About":
        document.getElementById("About-page").scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "Contact":
          document.getElementById("Contact-page").scrollIntoView({ behavior: "smooth", block: "start" });
        break;
    }
  };
  return (
    <>
      <hr className="footer-divider" />
      <div className="footer-container">
        <div className="company-details">
          <div className="logo">
            <img src={LOGO} alt="" className="logo-image" />
          </div>
          <div class="company-name">
            <h1>Sri Subanka Foods Pvt Ltd</h1>
            <h2>Manufactures of Value Added Natural Food Products</h2>
          </div>
        </div>
        <div className="navigators">
          <ul>
            <li>
              <a onClick={() => handleRouteChange("Home")}>Home</a>
            </li>
            <li>
              <a onClick={() => handleRouteChange("Products")}>Products</a>
            </li>
            <li>
              <a onClick={() => handleRouteChange("About")}>About</a>
            </li>
            <li>
              <a onClick={() => handleRouteChange("Contact")}>Contact</a>
            </li>
          </ul>
        </div>
        <div class="social-links">
          <ul>
            <li>
              <a href="mailto:srisubankafoods@gmail.com">
                <IoMail size={30} color="#4662ab" />
              </a>
            </li>
            <li>
              <a href="tel:+919976043034">
                <IoCall size={30} color="#4662ab" />
              </a>
            </li>
            <li>
              <a href="https://maps.app.goo.gl/gpPZYWxG16oUmefz9">
                <FaMapMarkerAlt size={30} color="#4662ab" />
              </a>
            </li>
            <li>
              <a href="https://www.srisubankafoods.com">
                <RiGlobalLine size={30} color="#4662ab" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer-divider2" />
      <p className="copyright-text">
        Copyrights {new Date().getFullYear()} &copy; Sri Subanks Foods
      </p>
    </>
  );
}

export default Footer;
