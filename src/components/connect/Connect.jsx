import React from "react";
import "./Connect.css";
import Heading from "../ui/Heading/Heading";
import connectImage from "./images/connect.jpg"
function Connect() {
  return (
    <>
      <Heading heading="Connect With Us" subHeading="Your taste, our passion" />
      <div className="main">
      <span className="ConnectPara">
        <p>
          Partner with Sri Subanka Foods Pvt Ltd and unlock a world of premium,
          authentic traditional food products—crafted to perfection and ready to
          be launched under your own brand. With our state-of-the-art
          manufacturing facilities, strict quality standards, and large-scale
          production capacity, you can grow faster than ever without spending
          lakhs on infrastructure, machinery, or factory setup. We handle the
          production, you focus on building your brand, expanding your market,
          and scaling your business to the next level.
        </p>
      </span>
      <div className="image">
        <img  src={connectImage} alt="connection" />
      </div>
      </div>
    </>
  );
}

export default Connect;
