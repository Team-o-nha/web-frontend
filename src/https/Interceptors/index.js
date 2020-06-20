import {
  modifyURLRequestInterceptor,
  modifyBodyRequestInterceptor
} from "./requestInterceptors";

export default () => {
  // request interceptors
  modifyURLRequestInterceptor();
  modifyBodyRequestInterceptor();
  // responses interceptors
};
