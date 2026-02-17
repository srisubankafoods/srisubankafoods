import React from "react";
import "./Heading.css";

function Heading({ heading, subHeading = "",para }) {
  return (
    <div className="heading-container">
      <h1 className="heading">{heading}</h1>
      {subHeading && <h2 className="sub-heading">{subHeading}</h2>}
      {para && <p className="paragraph">{para}</p>}
    </div>
  );
}

export default Heading;
