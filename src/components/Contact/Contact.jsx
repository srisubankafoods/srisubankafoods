import React from "react";
import Heading from "../ui/Heading/Heading";
import "./Contact.css";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { sendToWhatsApp } from "./whatsApp.api";

function Contact() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onSubmit = (event) => {
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const company = formData.get("company");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const requirements = formData.get("requirements");
    sendToWhatsApp(name, company, email, phone, requirements);
  };

  return (
    <div id="Contact-page">
      <div className="contact-container">
        <Heading
          heading="Contact Us"
          subHeading="Craving Something? Let’s Chat!"
        />
        <div className="wrapper">
          <div className="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d346.34208664577574!2d78.68375469201297!3d10.856121782506339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5de9926a0bf%3A0x8ba0cbfdab5a6689!2sSree%20Raghav%20Nivas%2C%205%2F4%2C%202nd%20St%2C%20near%20Canara%20Bank%20ATM%2C%20Raghavendrapuram%2C%20Tiruchirappalli%2C%20Tamil%20Nadu%20620006!5e0!3m2!1sen!2sin!4v1771155951362!5m2!1sen!2sin"
              className="map"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <span className="align-center">
              <FaMapMarkerAlt color="red" size={40} />
              Regd Off : 54, 2nd Street, Sriramapuram, Srirangam, Trichy –
              620006. Tamilnadu. India.
            </span>
          </div>
          {windowWidth > 1185 && <hr className="horizontal-rule" />}
          <div className="form-wrapper">
            <h3 className="contact-subheading">
              Start your success journey with us – send your details our team
              will reach you promptly.
            </h3>
            <form onSubmit={(e) => onSubmit(e)} className="form">
              <div className="make-it-flex">
                <div className="form-group">
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label for="company">Company Name</label>
                  <input type="text" id="company" name="company" required />
                </div>
              </div>
              <div className="make-it-flex">
                <div className="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label for="phone">Contact Number</label>
                  <input type="telephone" id="phone" name="phone" required />
                </div>
              </div>

              <div className="form-group req-inp">
                <label for="requirements">Requirements</label>
                <textarea
                  placeholder="I want to order/discuss..."
                  id="requirements"
                  name="requirements"
                  rows="9"
                  cols={45}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <IoSend />
                <span>Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
