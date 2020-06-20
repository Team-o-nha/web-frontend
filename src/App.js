import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ConfigProvider } from "antd";
// components import
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./pages/ErrorBoundary";
import { appRoutes, redirectRoutes } from "./routers/appRoutes";
import "antd/dist/antd.css";

// generate app reidrect routes
const redirectRouteComponents = redirectRoutes.map(route => (
  <Route
    key={route.path || "/notFound"}
    path={route.path}
    exact={route.exact}
    render={route.render}
  />
));

// generate app routes
const routeComponents = appRoutes.map(route => (
  <Route
    key={route.path || "/notFound"}
    path={route.path}
    exact={route.exact}
    component={route.component}
  />
));

const App = () => (
  // #Reference: https://ant.design/components/config-provider/#API
  // autoInsertSpaceInButton: set false to remove space between 2 chinese characters on Button
  <ConfigProvider autoInsertSpaceInButton={false}>
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Switch>{redirectRouteComponents}</Switch>
        <Switch>{routeComponents}</Switch>
      </Router>
    </ErrorBoundary>
  </ConfigProvider>
);

export default App;
