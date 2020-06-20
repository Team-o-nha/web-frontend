// @flow
// libs import
import axios from "axios";
// others
import ENVIRONMENTS from "environments";
// types import
// use import { type } instead of import type
// why? for VSCode Intellisense working
import { type API_COMMON_PROPS_TYPE } from "@/types/common";

// import { cookieUtils } from "@/utils";

// cookieService
// const cookieService = cookieUtils.getService();

// token request interceptor
export const tokenRequestInterceptor = () => {
  // axios.interceptors.request.use(
  //   config => {
  //     const token = cookieService.getAccessToken();
  //     const mConfig = config;
  //     if (token) {
  //       // add access token to header
  //       mConfig.headers.Authorization = `Bearer ${token}`;
  //     }
  //     return mConfig;
  //   },
  //   error => {
  //     Promise.reject(error);
  //   }
  // );
};

// Add 共通部分 to API request interceptor
export const modifyBodyRequestInterceptor = (
  // TODO: get from redux (after authentication)
  commonApiFileds: API_COMMON_PROPS_TYPE = {
    baseUserId: "test@usen-next.jp",
    baseDate: "2019-12-01T00:00:00.000+09:00",
    baseLang: "ja",
    baseStoreCode: "001"
  }
) => {
  axios.interceptors.request.use(
    config => {
      const mConfig = {
        ...config,
        data: {
          ...commonApiFileds,
          ...config.data
        }
      };
      return mConfig;
    },
    error => {
      Promise.reject(error);
    }
  );
};

export const modifyURLRequestInterceptor = (
  baseApi: string = ENVIRONMENTS.BASE_API
) => {
  axios.interceptors.request.use(
    config => {
      const mConfig = {
        ...config,
        url: `${baseApi}${config.url}`
      };
      return mConfig;
    },
    error => {
      Promise.reject(error);
    }
  );
};
