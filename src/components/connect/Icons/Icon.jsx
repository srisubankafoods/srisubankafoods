import React from "react";
import "./Icon.css";

function Icon({ iconImg, iconText }) {
  return (
    <>
      <div className="iconSet">
        <button>
          <div className="icon">{iconImg }</div>
          <div className="icon-text">{iconText}</div>
        </button>
      </div>
    </>
  );
}

export default Icon;
