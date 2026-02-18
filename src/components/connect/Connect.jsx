import React from "react";
import "./Connect.css";
import Icon from "./Icons/Icon";
import Heading from "../ui/Heading/Heading";
import connectImage from "./images/connect3.jpeg";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { SlGlobe } from "react-icons/sl";
function Connect() {
  return (
    <>
      <Heading heading="Connect With Us" subHeading="Your taste, our passion" />
      <div className="main">
        <div className="main1">
          <span className="ConnectPara">
            <p>
              Partner with Sri Subanka Foods Pvt Ltd to bring high-quality traditional food products to market under your
own brand. Our advanced manufacturing capabilities allow you to scale your business without the need for
costly infrastructure or production investments.
            </p>
          </span>
          <span className="iconPackage">
            <span className="single">
              <Icon iconImg={<FaPhoneVolume />} iconText={"+91 99760 43034"} />
            </span>
            <span className="single">
              <Icon
                iconImg={<IoMdMail />}
                iconText={"srisubankafoods@gmail.com"}
              />
            </span>
            <span className="single">
              <Icon
                iconImg={<SlGlobe />}
                iconText={"www.srisubankafoods.com"}
              />
            </span> 
          </span>
        </div>
        <div className="image   ">
          <img src={connectImage} alt="connection" />
        </div>
      </div>
    </>
  );
}

export default Connect;
