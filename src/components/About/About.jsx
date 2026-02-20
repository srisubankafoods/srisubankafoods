import React from "react";
import Heading from "../ui/Heading/Heading";
import aboutImage from "../../assets/about-img.jpg";
import AboutStatsCard from "./AboutStatsCard";
import "./About.css";
import { BsPeopleFill, BsFillCartCheckFill } from "react-icons/bs";
import { GrStatusGood } from "react-icons/gr";
import { FaStore } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

function About() {
  const handleNavToConnect = () =>{
    document.getElementById('connect-page').scrollIntoView({behavior:"smooth"});
  }

  return (
    <div id="About-page">
    <div className="about-container">
      <Heading heading="About" subHeading="Serving Happiness Since Day One." />
      <div className="about-wrapper to-flex">
        <div className="image-wrapper">
          <img
            src={aboutImage}
            alt="About Srisubanka Foods"
            className="about-image"
          />
        </div>
        <div className="text-content-wrapper">
          <div className="text">
            <p>
              For over a decade, we have been passionate about reviving traditional foods and making them relevant for today’s fast-moving world. With more than 10 years of experience, our journey began with a simple belief: heritage foods should not be lost overtime — they should evolve to suit modern lifestyles while preserving their authentic taste and nutritional value.
            </p>{" "}
            <p>
              {" "}
              We specialize in transforming time-honoured recipes into convenient, ready-to-use and ready-to-eat products, enabling consumers to enjoy traditional flavours without the complexity of lengthy preparation. By combining ancestral knowledge with modern food technology, we ensure every product reflects both authenticity and innovation.
            </p>{" "}
            <p>
              {" "}
              Our state-of-the-art manufacturing facility is designed to meet global food safety and quality standards, ensuring hygienic processing, consistent quality, and reliable shelf life. From sourcing quality ingredients to advanced packaging solutions, we are committed to delivering products that are safe, nutritious, and suitable for both domestic and international markets.</p>
          </div>
          <button className="contact-button" onClick={handleNavToConnect}>
            <div className="center-it">
              <FaCircleArrowRight size={30} /> <span>Contact Now</span>
            </div>
          </button>
        </div>
      </div>
      <div className="about-wrapper">
        <h3>Our Vision
        <span className="to-black-and-small">
          {" "}
          is to become a “trusted food contract manufacturing company” that brings
          traditional foods into modern homes, making heritage flavours
          accessible to future generations.
        </span></h3>
        <div className="about-stat-cards">
          <AboutStatsCard
            icon={<BsPeopleFill size={60} color="#4662AB" />}
            statNumber="1000"
            suffix="+"
            statText="Happy Customers"
          />
          <AboutStatsCard
            icon={<BsFillCartCheckFill size={60} color="#4662AB" />}
            statNumber="50"
            suffix="+"
            statText="Products"
          />
          <AboutStatsCard
            icon={<FaStore size={60} color="#4662AB" />}
            statNumber="3"
            suffix="+"
            statText="Years of Experience"
          />
          <AboutStatsCard
            icon={<GrStatusGood size={60} color="#4662AB" />}
            statNumber="100"
            suffix="%"
            statText="Quality Assurance"
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
