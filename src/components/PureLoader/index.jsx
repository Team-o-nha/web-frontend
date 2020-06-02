// libs import
import React from "react";
// others
import "./style.scss";

const PureLoader = () => (
  <div className="pure-loader-wrapper">
    <div className="pure-loader-wrapper-inner">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
);

export default PureLoader;
