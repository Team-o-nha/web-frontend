// @flow
// libs import
import React from "react";
import { Route, Switch, RouteProps } from "react-router-dom";
import { Provider } from "react-redux";
// components import
import GlobalHeader from "./components/GlobalHeader";
import withLocale from "./hocs/withLocale";
// import Footer from "./components/Footer";
// routers
import mainRoutes from "./routers/mainRoutes";
// others
import store from "./store";
import CONSTANTS from "./constants";
import "./styles/main.scss";

// generate main routes
const routeComponents = ({ locale }) =>
  mainRoutes.map(route =>
    route.path ? (
      <Route
        key={route.path(locale)}
        path={route.path(locale)}
        exact={route.exact}
        // props: only react router props
        render={() => route.render(locale)}
      />
    ) : (
      <Route key="/notFound" render={() => route.render(locale)} />
    )
  );

// Demo Flow
const Main = (props: RouteProps) => {
  // prop react-router
  const {
    location: { pathname }
  } = props;

  // define locale: /xx
  const locale = CONSTANTS.LOCALE.PATH_REGEX.test(pathname)
    ? pathname.substring(1, CONSTANTS.LOCALE.LOCALE_LENGTH + 1)
    : CONSTANTS.LOCALE.JA_JP;

  return (
    <Provider store={store}>
      <div className="main-wrapper">
        {withLocale({
          locale,
          page: CONSTANTS.PAGE_NAME.GLOBAL_HEADER,
          pathname
        })(GlobalHeader)}
        <Switch>{routeComponents({ locale })}</Switch>
      </div>
    </Provider>
  );
};

export default Main;
