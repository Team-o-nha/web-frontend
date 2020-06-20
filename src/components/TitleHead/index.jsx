import React from "react";
import "./style.scss";

const TitleHead = ({ pageTitle }) => (
  <div className="title-head-wrapper">
    <div className="title-head-wrapper-inner">
      <a href="/collections/">
        <h2 className="section-title">
          <span>{pageTitle}</span>
        </h2>
      </a>
    </div>
  </div>
);

export default TitleHead;
