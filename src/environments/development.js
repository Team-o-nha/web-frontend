import BASE_ENV from "./base";

const BASE_API = "http://34.102.217.240";
export default {
  ...BASE_ENV,
  BASE_API,
  INTERVALS: {
    ...BASE_ENV.INTERVALS,
    LOG_OUT: 300 // 5 min in seconds
  },
  IS_PRODUCTION: false,
  IS_DEVELOPMENT: true,
  IS_STAGING: false
};
