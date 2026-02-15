import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Header.css";

const Header = () => {
  const [active, setActive] = useState("Home");
  const navItems = ["Home", "Products", "About", "Contact"];

  return (
    <nav className="nav-wrapper">
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
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="nav-text">{item}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
