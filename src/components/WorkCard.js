import React from "react";
import "./WorkCardStyles.css";
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className="project-card">
          <img src={props.imgsrc} alt="imge" />
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
              <NavLink to={props.view} className="btn">View</NavLink>
              <NavLink to="url.com" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
  );
};

export default WorkCard;
