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
              Partner with Sri Subanka Foods Pvt Ltd and unlock a world of
              premium, authentic traditional food products—crafted to perfection
              and ready to be launched under your own brand. With our
              state-of-the-art manufacturing facilities, strict quality
              standards, and large-scale production capacity, you can grow
              faster than ever without spending lakhs on infrastructure,
              machinery, or factory setup. We handle the production, you focus
              on building your brand, expanding your market, and scaling your
              business to the next level.
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
