import CONFIG_CONSTANTS from "./configConstants";
import ACTION_TYPES from "./actions";
import END_POINTS from "./endpoints";

const CONSTANTS = {
  LOCALE: {
    EN_US: "en",
    JA_JP: "jp",
    LOCALE_LENGTH: 2,
    PATH_REGEX: /\/(en|jp)/
  },
  PAGE_NAME: {
    GLOBAL_HEADER: "GlobalHeader",
    FOOTER: "Footer",
    HOME: "Home",
    NOT_FOUND: "NotFound"
  },
  COMPONENT_NAME: {},
  HTTPS_REQUEST: {
    METHOD: {
      GET: "GET",
      POST: "POST",
      PATCH: "PATCH",
      PUT: "PUT",
      DELETE: "DELETE"
    }
  },
  ROOM_TYPE_CODES: {
    SS4: "0",
    SN: "1",
    DB: "2",
    TR: "3",
    TW: "4",
    TN: "5",
    HC: "6"
  },
  DATE_TIME_FORMAT: {
    YY_MM_DD: "YYMMDD",
    YY_MM_DD_SLASH: "YY/MM/DD",
    M_D_SLASH: "M/D",
    YYYY_MM_DD_SLASH_HH_mm: "YYYY/MM/DD HH:mm",
    YYYY_MM_DD_HYPHEN_T_HH_mm_ss: "YYYY-MM-DDTHH:mm:ss"
  },
  INTERVAL_SECONDS: {
    ONE_SECOND: 1000 // 単位：milliseconds
  },
  EMPTY_VALUE: " ",
  ...CONFIG_CONSTANTS,
  ACTION_TYPES,
  END_POINTS
};

export default CONSTANTS;
