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
  return (
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
              For more than a decade, we have been dedicated to bringing
              traditional foods back to life and making them meaningful in
              today’s fast-paced world. With over 10 years of experience, our
              journey started with a clear vision: heritage recipes should never
              fade away — they should adapt to modern lifestyles while retaining
              their original taste and nutritional richness.
            </p>{" "}
            <p>
              {" "}
              We focus on reinventing age-old recipes into convenient,
              ready-to-cook and ready-to-eat formats, allowing people to savour
              authentic flavours without spending hours in the kitchen. By
              blending time-tested culinary wisdom with contemporary food
              processing techniques, we create products that balance tradition
              with innovation in every bite.
            </p>{" "}
            <p>
              {" "}
              Our advanced manufacturing facility is built to align with
              international food safety and quality standards, ensuring clean
              processing, uniform quality, and dependable shelf stability. From
              carefully selecting premium ingredients to utilizing modern
              packaging methods, we strive to provide products that are safe,
              wholesome, and well-suited for both local and global markets.
            </p>
          </div>
          <button className="contact-button">
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
  );
}

export default About;
