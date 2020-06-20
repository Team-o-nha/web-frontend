// libs import
import axios from "axios";
// others
import CONSTANTS from "@/constants";
import { defaultHttpResponseCbError } from "@/utils";

const requireParam = msg => {
  throw Error(msg);
};

const request = ({
  url = requireParam("Url is undefined"),
  method = CONSTANTS.HTTPS_REQUEST.METHOD.POST,
  data = null,
  params = null,
  cbSuccess = null,
  cbError = defaultHttpResponseCbError,
  LOADING_ACTION,
  SUCCESS_ACTION,
  ERROR_ACTION
}) => dispatch => {
  dispatch({
    type: LOADING_ACTION
  });
  return axios
    .request({
      url,
      data,
      params,
      method
    })
    .then(res => {
      dispatch({
        type: SUCCESS_ACTION,
        payload: { data: res.data.body }
      });
      if (cbSuccess) cbSuccess();
    })
    .catch(error => {
      dispatch({
        type: ERROR_ACTION,
        payload: { error }
      });
      if (cbError) cbError(url, error);
    });
};

export default request;
