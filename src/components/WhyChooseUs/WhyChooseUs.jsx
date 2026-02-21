import React from "react";
import "./WhyChooseUs.css";
import Heading from "../ui/Heading/Heading";
import whyChooseCoverImage from "../../assets/why-choose-us-cover.png";
import WcuStatsCard from "./WcuStatsCard";

function WhyChooseUs() {
  return (
    <div className="wcu-container">
      <Heading heading="Why Choose Our Products ?" />
      <div className="wcu-wrapper">
        <div className="left-container">
          <div className="text-container">
            <Heading subHeading="Pure millets, powerful nutrition, naturally crafted for healthier living." />
          </div>
          <div className="image-container">
            <img
              src={whyChooseCoverImage}
              alt="Why Choose our Product cover image"
            />
          </div>
        </div>
        <div className="right-container">
          <div className="wcu-stats-container">
            <div className="filler2">
              <WcuStatsCard
                image={"ecoFoods"}
                desc="Made from carefully sourced traditional millets"
              />
              <WcuStatsCard
                image={"hygeneFoods"}
                desc="Hygienically processed in a modern facility"
              />
            </div>
            <div className="filler2">
              <WcuStatsCard
                image={"safePackage"}
                desc="Export-ready packaging"
              />
              <WcuStatsCard
                image={"globalHealth"}
                desc="Suitable for health-conscious global consumers"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
