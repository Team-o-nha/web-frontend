// libs import
import React from "react";
import { Result, Typography, Icon } from "antd";
// others
import "./styles.scss";

const { Paragraph, Text } = Typography;

const ErrorInformation = ({ error }) => (
  <div className="error-information-wrapper">
    <div className="error-information-wrapper-inner">
      <Result
        status="error"
        title="問題が発生しました。"
        subTitle="ネットワークに問題がないか確認してください。"
      >
        <div className="desc">
          <Paragraph>
            <Text
              strong
              style={{
                fontSize: 16
              }}
            >
              可能性のある原因は：
            </Text>
          </Paragraph>
          <Paragraph>
            <Icon style={{ color: "red" }} type="close-circle" />
            &nbsp;正しくないURLを呼び出しました：
            <a href={error.config.url}>{error.config.url}</a>
          </Paragraph>
          <Paragraph>
            <Icon style={{ color: "red" }} type="close-circle" />
            &nbsp;エラー詳細：{error.message}
          </Paragraph>
        </div>
      </Result>
    </div>
  </div>
);

const withErrorBoundary = ({ isError, error }) => WrappedComponent =>
  isError ? <ErrorInformation error={error} /> : WrappedComponent;

export default withErrorBoundary;
