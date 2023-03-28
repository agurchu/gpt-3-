import React from "react";
import "./feature.css";

const Feature = ({ text, title }) => {
  return (
    <div className="gpt3__features-container__feature">
      <div className="gpt3__features-container__feature-text">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="gpt3__features-container__feature-text">{text}</div>
    </div>
  );
};

export default Feature;
