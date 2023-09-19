import React from "react";
import "./BackImgStyles.css";
import IntroImg from "../assets/into-bg.png";
import { Link } from "react-router-dom";

const BackImg = () => {
  return (
    <div className="back">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I'M ANUSHUJAN</p>
        <h1>Full-Stack Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BackImg;
