import React from "react";
import "./Connect.css";
import Icon from "./Icons/Icon";
import Heading from "../ui/Heading/Heading";
import connectImage from "./../../assets/images/connect3.jpeg";
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
              Partner with Sri Subanka Foods Pvt Ltd to bring high-quality
              traditional food products to market under your own brand. Our
              advanced manufacturing capabilities allow you to scale your
              business without the need for costly infrastructure or production
              investments.
            </p>
          </span>
          <span className="iconPackage">
            <span className="single">
              <Icon
                iconImg={<FaPhoneVolume />}
                iconText={
                  <p className="make-it-flex" style={{gap:0}}>
                    <span>CALL NOW:&nbsp;</span>
                    <p className="no-break">+91 99760 43034</p>
                  </p>
                }
                anchor={"tel:+919976043034"}
              />
            </span>
            <span className="single">
              <Icon
                iconImg={<IoMdMail />}
                iconText={
                  <p className="make-it-flex" style={{gap:0}}>
                    <span>srisubankafoods</span>
                    <p className="no-break">@gmail.com</p>
                  </p>
                }
                 anchor={"mailto:srisubankafoods@gmail.com"}
              />
            </span>
            <span className="single">
              <Icon
                iconImg={<SlGlobe />}
                iconText={<p className="make-it-flex" style={{gap:0}}>
                    <span>www.srisubanka</span>
                    <p className="no-break">foods.com</p>
                  </p>
                  
                }
                anchor={"https://www.srisubankafoods.com"}
              />
            </span>
          </span>
        </div>
        <div className="image">
          <img src={connectImage} alt="connection" />
        </div>
      </div>
    </>
  );
}

export default Connect;
