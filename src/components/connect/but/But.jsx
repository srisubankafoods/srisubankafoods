import React from "react";
import "./But.css";
function But({ link, content }) {
  return (
    <>
      <div className="button-container">
        <a href={link}>
          <button>{content}</button>
        </a>
      </div>
    </>
  );
}

export default But;
