import React from "react";
import "./Heading.css";

function Heading({ heading, subHeading = "" }) {
  return (
    <div className="heading-container">
      <h1 className="heading">{heading}</h1>
      {subHeading && <h2 className="sub-heading">{subHeading}</h2>}
    </div>
  );
}

export default Heading;
