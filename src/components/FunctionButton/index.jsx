// libs import
import React from "react";
import { Button, Typography, Icon } from "antd";
// others
import "./style.scss";

const { Title } = Typography;

const FunctionButton = ({
  buttonKey,
  buttonLabel,
  buttonProcessingKey,
  storeProps = {},
  processingButton = "",
  ...props
}) => (
  <div className="function-button-wrapper">
    <div className="button-key-wrapper">
      <Title style={{ marginBottom: 0 }} level={4}>
        {buttonKey}
      </Title>
    </div>
    <div className="button-wrapper">
      <Button className="custom-button" {...props}>
        {storeProps.isLoading && processingButton === buttonProcessingKey ? (
          <Icon type="loading-3-quarters" spin />
        ) : (
          buttonLabel
        )}
      </Button>
    </div>
  </div>
);

export default FunctionButton;
