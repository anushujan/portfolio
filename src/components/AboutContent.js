import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/react1.webp"
import React2 from "../assets/reacr2.jpeg"

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>I'm Full-Stack Developer. I create 
            responsive secure websites for my clients
        </p>
        <Link to='/contact'>
            <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img src={React2} alt="true" className="img" />
            </div>
            <div className="img-stack bottom">
                <img src={React1} alt="true" className="img" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
