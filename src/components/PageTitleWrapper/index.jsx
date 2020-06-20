import React from "react";
import "./style.scss";

const PageTitleWrapper = ({ pageTitle }) => (
  <div className="page-title-wrapper">
    <div className="page-title-wrapper-inner">
      <span className="page-title">{pageTitle}</span>
    </div>
  </div>
);

export default PageTitleWrapper;
