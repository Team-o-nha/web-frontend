import React from "react";
import { Field } from "formik";

export const FieldGenerator = ({
  fieldName,
  component: { Tag = null, ...componentProps }
}) => {
  const withFormikComponent = ({ field, form, ...props }) =>
    Tag ? <Tag {...componentProps} {...field} {...props} /> : "";
  return <Field name={fieldName}>{withFormikComponent}</Field>;
};
