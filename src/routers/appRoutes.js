// libs import
import React from "react";
import { Redirect } from "react-router-dom";
// components, pages import
import Main from "@/Main";
import NotFound from "@/pages/NotFound";
// others
import CONSTANTS from "@/constants";

// wincalx.com/jp/: OK
// wincalx.com/en/: OK

export const redirectRoutes = [
  {
    path: "/",
    exact: true,
    // handle redirect case: / -> /jp/, because "/" is Home path
    // TODO: For demo, not confirmed yet
    render: () => <Redirect to={`/${CONSTANTS.LOCALE.JA_JP}/`} />
  },
  {
    path: `/${CONSTANTS.LOCALE.EN_US}`,
    exact: true,
    // handle redirect case: /en -> /en/
    render: () => <Redirect to={`/${CONSTANTS.LOCALE.EN_US}/`} />
  },
  {
    path: `/${CONSTANTS.LOCALE.JA_JP}`,
    exact: true,
    // handle redirect case: /jp -> /jp/
    render: () => <Redirect to={`/${CONSTANTS.LOCALE.JA_JP}/`} />
  }
];

export const appRoutes = [
  {
    path: [`/${CONSTANTS.LOCALE.EN_US}/`, `/${CONSTANTS.LOCALE.JA_JP}/`],
    component: Main
  },
  {
    component: NotFound
  }
];
