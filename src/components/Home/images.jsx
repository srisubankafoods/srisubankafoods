import React from "react";
import "./images.css";
import logo from "./pics/logo2.png";
import flour from "./.././Products/images/flour.jpeg";
import flour2 from "./.././Products/images/flour2.jpeg";
import idly from "./.././Products/images/idly.jpeg";
import milletrava from "./.././Products/images/milletrava.jpeg";
import dosaidly from "./.././Products/images/dosaidly.jpeg";
import dosa from "./.././Products/images/dosa.jpeg";
import chappathi from "./.././Products/images/chappathi.jpeg";
function Images() {
  const logos = [
    { name: "flour", img: flour },
    { name: "flour2", img: flour2 },
    { name: "idly", img: idly },
    { name: "milletrava", img: milletrava },
    { name: "dosaidly", img: dosaidly },
    { name: "dosa", img: dosa },
    { name: "chappathi", img: chappathi },
  ];
  return (
    <>
      <div className="orbit-scene">
        <div className="orbit-container">
          <div className="orbit-center">
            <div className="center-card">
              <img src={logo} alt="LOGO" />
            </div>
          </div>

          <div className="orbit-rotation">
            {logos.map((logo, index) => {
              const angle = (360 / logos.length) * index;
              return (
                <div
                  key={index}
                  className="orbit-item"
                  style={{ "--angle": `${angle}deg` }}
                >
                  <div className="logo-circle">
                    <img src={logo.img} alt={logo.name} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default Images;
