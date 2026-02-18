import React, { useEffect } from "react";
import "./Footer.css";
import LOGO from "../../assets/logo.png";
import { IoMail, IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

function Footer() {
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
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Products</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
        <div class="social-links">
          <ul>
            <li>
              <a href=""><IoMail size={30} color="#4662ab"/></a>
            </li>
            <li>
              <a href=""><IoCall size={30} color="#4662ab"/></a>
            </li>
            <li>
              <a href=""><FaMapMarkerAlt size={30} color="#4662ab"/></a>
            </li>
            <li>
              <a href=""><RiGlobalLine size={30} color="#4662ab"/></a>
            </li>
          </ul>
        </div>

        <p className="copyright-text">
          Copyrights {new Date().getFullYear()} &copy; Sri Subanks Foods
        </p>
      </div>
    </>
  );
}

export default Footer;
