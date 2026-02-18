import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Header.css";
import logo from  './../../assets/logo.png'
import Heading from "../ui/Heading/Heading";
const Header = () => {
  const [active, setActive] = useState("Home");
  const navItems = ["Home", "Products", "About", "Contact"];

  return (
    <nav className="nav-wrapper">
      <div className="one">
      <img src={logo} alt="" />
      </div>
        <div className="shopName">
            <h1>Sri Subanka Foods Pvt Ltd</h1>
            <h5>Manufactures of Value Added Natural Food Products</h5>
        </div>
      <ul className="nav-container">
        {navItems.map((item) => (
          <li
            key={item}
            className={`nav-item ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            {active === item && (
              <motion.div
                layoutId="active-pill"
                className="active-bg"
                transition={{ type: "spring", stiffness: 400, damping: 40 }}
              />
            )}
            <div className="nav-text">{item}</div>
          </li>
        ))} 
      </ul>
    </nav>
  );
};

export default Header;
