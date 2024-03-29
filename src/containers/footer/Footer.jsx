import React from "react";
import "./footer.css";
import kj_dev_logo from "../../assets/kj_dev_logo.png";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step in to future before others
        </h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={kj_dev_logo} alt="" />
          <p>Created by Katlego J Mtimane | All Rights Reserved</p>
        </div>

        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>Church Street South Africa</p>
          <p>063 734 2965</p>

          <p>katlegoj.dev@gmail.com</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>2023 Katlego J Dev | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
