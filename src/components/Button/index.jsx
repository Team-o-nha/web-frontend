import React from "react";
import "./style.scss";

const Button = ({ title, link }) => (
  <div className="button-view-more">
    <div className="container">
      <a className="animated-arrow" href={link}>
        <span className="the-arrow -left">
          <span className="shaft"></span>
        </span>
        <span className="main">
          <span className="text">{title}</span>
          <span className="the-arrow -right">
            <span className="shaft"></span>
          </span>
        </span>
      </a>
    </div>
  </div>
);

export default Button;
