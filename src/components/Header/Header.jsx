import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Header.css";
import Heading from "../ui/Heading/Heading";
const Header = () => {
  const [active, setActive] = useState("Home");
  const navItems = ["Home", "Products", "About", "Contact"];

  return (
    <nav className="nav-wrapper">
        <div className="shopName">
            <Heading heading={"Sri Subanka Foods Pvt Ltd"} subHeading={"Manufactures of Value Added Natural Food Products"}/>
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
