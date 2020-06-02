// @flow
import CONSTANTS from "@/constants";

// ご参考に：https://blog.usejournal.com/my-awesome-custom-react-environment-variables-setup-8ebb0797d8ac
// craco.config.js basically will create the file path to the correct environment file.
// For example: If the value of process.env.CLIENT_ENV is development
// then it will create the following file path: src/environments/development
// and bring those environment variables in.

// why don’t use the NODE_ENV variable?
// The reason is when developing locally,
// Be able to run the application with any environment

export default {
  BASE_API: "",
  INTERVALS: {
    LOG_OUT: 3600 // 1 hour in seconds
  },
  API_LIST: CONSTANTS.END_POINTS,
  TOKEN: {
    ACCESS_TOKEN: "AAA",
    REFRESH_TOKEN: "AAA"
  },
  IS_PRODUCTION: true,
  IS_DEVELOPMENT: false,
  IS_STAGING: false
};
