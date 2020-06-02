// src/environments/production.ts
import BASE_ENV from "./base";

const BASE_API = "http://34.84.255.53:8080";
export default {
  ...BASE_ENV,
  BASE_API,
  IS_PRODUCTION: false,
  IS_STAGING: true
};
