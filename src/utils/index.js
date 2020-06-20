// libs import
import React, { createElement } from "react";
import { Row, Col, Form, Typography, message } from "antd";
// others
import cookieUtils from "./cookieUtils";

// generate components
const getComponentsToRender = ({ components, componentProps }) =>
  components.map(child =>
    createElement(child.component, { key: child.key, ...componentProps }, null)
  );

// optimize generate form
const getFormDataToRender = ({ formWrapper }) => (
  <div {...formWrapper}>
    <Row>
      {formWrapper.children.formItems.map(item => (
        <Col key={item.name} {...item.grid}>
          <Form.Item
            className={item.className}
            label={<Typography.Text>{item.label.children}</Typography.Text>}
            colon={false}
          >
            {item.content}
          </Form.Item>
        </Col>
      ))}
    </Row>
  </div>
);

// optimize generate form advanced
const getFormDataToRenderAdvanced = ({ formWrapper }) => {
  const ItemGenerator = item => (
    <Form.Item
      className={item.className}
      label={
        item.label ? (
          <Typography.Text>{item.label.children}</Typography.Text>
        ) : (
          ""
        )
      }
      colon={false}
    >
      {item.content}
    </Form.Item>
  );
  const ColGenerator = item => (
    <Col key={item.name} {...item.grid}>
      {ItemGenerator(item)}
    </Col>
  );
  return (
    <div {...formWrapper}>
      <Row>
        {formWrapper.children.formItems.map(item => (
          <Col key={item.key} {...item.grid}>
            {item.children
              ? item.children.map(child => ColGenerator(child))
              : ItemGenerator(item)}
          </Col>
        ))}
      </Row>
    </div>
  );
};

// generate DOW
const generateDOW = index => {
  switch (index) {
    case 1:
      return "月";
    case 2:
      return "火";
    case 3:
      return "水";
    case 4:
      return "木";
    case 5:
      return "金";
    case 6:
      return "土";
    case 0:
      return "日";
    default:
  }
  return "月";
};

// is saturday or sunday
const isSatOrSun = dowLabel => ({
  // 6: saturday
  isSatur: dowLabel === 6,
  // 0: sunday
  isSun: dowLabel === 0
});

// default http response callback error
const defaultHttpResponseCbError = (url, err) => {
  message.error("失敗。LOGでご確認お願い致します。");
  // eslint-disable-next-line no-console
  console.log("エラーが発生したURL：", url);
  // eslint-disable-next-line no-console
  console.log("エラー情報：", err);
};

const generateFunctionButtonKeys = (componentName, prefixes) => {
  let componentObj = {};
  prefixes.forEach(prefix => {
    let keyObj = {};
    for (let i = 1; i <= 12; i += 1) {
      keyObj = {
        ...keyObj,
        [`${prefix}_KEY_F${i}`]: `${componentName}_${prefix}_KEY_F${i}`
      };
    }
    componentObj = { ...componentObj, ...keyObj };
  });
  return {
    [componentName]: { ...componentObj }
  };
};

// find rendered component on DOM by data-test attribute
const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

/**
 * Define config options
 * @typedef {Object} formatterConfig
 * @property {number} minimumFractionDigits - the number of decimal digits
 */
/**
 * format numbers. For example:
 * 3000.3234353132 -> "3,000.323"
 * 2.0 -> "2.0", 2.012345 -> "2.012" (using minimumFractionDigits = 0, default maximumFractionDigits = 3)
 * @param {number} number - number needs to be converted to string
 * @param {formatterConfig} options - formatter configs
 */
const formatNumber = (number, formatterConfig = { minimumFractionDigits: 0 }) =>
  new Intl.NumberFormat("en-US", formatterConfig).format(number);

export {
  cookieUtils,
  getComponentsToRender,
  getFormDataToRender,
  getFormDataToRenderAdvanced,
  generateDOW,
  isSatOrSun,
  defaultHttpResponseCbError,
  generateFunctionButtonKeys,
  findByTestAttr,
  formatNumber
};
