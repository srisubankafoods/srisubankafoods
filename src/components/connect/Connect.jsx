import React from "react";
import "./Connect.css";

import Heading from "../ui/Heading/Heading";
import connectImage from "./../../assets/images/connect3.jpeg";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SlGlobe } from "react-icons/sl";
import But from "./but/But";
function Connect() {
  return (
    <>
    <div id="Connect-page">
      <Heading heading="Connect With Us" subHeading="Your taste, our passion" />
      <div className="main">
        <div className="main1">
          <span className="ConnectPara">
            <p>
              <em>
              Partner with Sri Subanka Foods Pvt Ltd to bring high-quality
              traditional food products to market under your own brand. Our
              advanced manufacturing capabilities allow you to scale your
              business without the need for costly infrastructure or production
              investments.</em>
            </p>
          </span>
          <span className="button-main">
         <But link={"tel:+919976043034"} content={"Call Us: +919976043034"} />
         <But link={"mailto:srisubankafoods@gmail.com"} content={"Mail Us"} />
         <But link={"https://www.srisubankafoods.com"} content={"www.srisubankafoods.com"} />
         </span>  

        </div>
        <div className="image">
          <img src={connectImage} alt="connection" />
        </div>
      </div>
      </div>
    </>
  );
}

export default Connect;
