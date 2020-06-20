// libs import
import { createContext } from "react";

const localeContextObj = {
  locale: "",
  localeDataSource: {}
};

const LocaleContext = createContext(localeContextObj);

export default LocaleContext;
