import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Header.css";
import logo from "./../../assets/logo.png";
import Heading from "../ui/Heading/Heading";
const Header = () => {
  const [active, setActive] = useState("Home");
  const[w,setw] = useState("Home");
  const navItems = ["Home", "Products", "About", "Contact"];
  // const handlew=(item)=>{
  //   switch (item) {
  //     case (item>=window.innerWidth):
  //       setw(window.innerWidth);
  //       break;
  //     case "Products":
  //       setw(window.innerWidth);
  //       break;
  //     case "About":
  //       setw(window.innerWidth);
  //       break;
  //     case "Contact":
  //         setw(window.innerWidth);
  //       break;
  //   }
  // }
  const handleRouteChange = (item) => {
    switch (item) {
      case "Home":
        document.getElementById("Home-page1").scrollIntoView({ behavior: "smooth", block: "start" }).then( window.scrollBy({ top: 300, behavior: "smooth" })
        );
        
        break;
      case "Products":
        document.getElementById("Products-page1").scrollIntoView({ behavior: "smooth", block: "start" });
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
    <nav className="nav-wrapper">
      <div className="one">
        <img src={logo} alt="logo" />
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
            onClick={() => {  setActive(item); handleRouteChange(item);}}
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
