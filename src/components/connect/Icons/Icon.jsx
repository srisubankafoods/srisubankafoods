import React from "react";
import "./Icon.css";

function Icon({ iconImg, iconText ,anchor}) {
  return (
    <>
      <div className="iconSet">
        <a style={{textDecoration:"none"}} href={anchor}>
        <button>
          <div className="icon">{iconImg }</div>
          <div className="icon-text">{iconText}</div>
        </button>
        </a>
      </div>
    </>
  );
}

export default Icon;
