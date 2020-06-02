// @flow
// libs import
// components import
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import withLocale from "@/hocs/withLocale";
// others
import CONSTANTS from "@/constants";

/**
 * define main pages routes
 */
const mainRoutes = [
  {
    path: (locale: string) => `/${locale}/`,
    exact: true,
    render: (locale: string) =>
      withLocale({ locale, page: CONSTANTS.PAGE_NAME.HOME })(Home)
  },
  {
    render: (locale: string = CONSTANTS.LOCALE.JA_JP) =>
      withLocale({ locale, page: CONSTANTS.PAGE_NAME.NOT_FOUND })(NotFound)
  }
];

export default mainRoutes;
