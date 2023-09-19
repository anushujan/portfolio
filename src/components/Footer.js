import React from "react";
import "./FooterStyles.css";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaYoutube,
} from "react-icons/fa";
import {NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>23 Neeraviyadi, Jaffna</p>
              <p>Srilanka</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +94 77-1827-347
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              anushujan28@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>
            This is me Satkunarasa Anushujan. CEO & Founder of CXG. I'm a
            Freelance Full-Stack Developer
          </p>
          <div className="social">
            <NavLink to="https://www.youtube.com/channel/UC_sndH7eiQFJcikNSQ0QMHA">
          <FaYoutube
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              /></NavLink>
              <NavLink to="https://www.instagram.com/anushujansatkunarasa/">
            <FaInstagram
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            /></NavLink>
            <NavLink to="https://www.linkedin.com/in/anushujansatkunarasa/">
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            /></NavLink>
            <NavLink to="https://github.com/anushujan">
            <FaGithub
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            /></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
