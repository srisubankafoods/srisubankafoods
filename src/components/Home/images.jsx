import React from "react";
import "./images.css";
import logo from "./../../assets/pics/logo2.png";
import flour from "./../../assets/imagess/flour.jpeg";
import flour2 from "./../../assets/imagess/flour2.jpeg";
import idly from "./../../assets/imagess/idly.jpeg";
import milletrava from "./../../assets/imagess/milletrava.jpeg";
import dosaidly from "./../../assets/imagess/dosaidly.jpeg";
import dosa from "./../../assets/imagess/dosa.jpeg";
import chappathi from "./../../assets/imagess/chappathi.jpeg";
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
