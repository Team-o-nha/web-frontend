import React from "react";
import "./style.scss";

const InputWithSuffix = ({ textBox, suffix, ...props }) => (
  <>
    <div className="input-with-suffix-wrapper">
      {textBox(props)}
      {suffix}
    </div>
  </>
);

export default InputWithSuffix;
