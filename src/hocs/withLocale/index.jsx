// @flow
// libs import
import React, { type ComponentType } from "react";
// contexts
import LocaleContext from "@/contexts/LocaleContext";
// types
import { type WITH_LOCALE_TYPE } from "@/types/hocs/withLocale";

// ご参考に：https://reactjs.org/docs/context.html#dynamic-context
// ご参考に：https://www.robinwieruch.de/react-usecontext-hook

// The most basic approach of using React's Context API is,
// A single top-level Provider component and one Consumer component in a React child component sitting somewhere below.
// There can be many more child components using the Consumer component though,
// but they have to be located somewhere below the component using the Provider component.

// React's useContext just uses the Context object, which you have created before
// To retrieve the most recent value from it.
// Using the React Hooks instead of the Consumer component, makes the code more readable, less verbose,
// and doesn't introduce a kinda artificial component -- the Consumer component -- in between.

/**
 * HOC: pass locale as props to component
 * @param {string} locale
 * @param {string} page
 * @param {any} rest
 */
const withLocale = ({ locale, page, ...rest }: WITH_LOCALE_TYPE) =>
  // ご参考に：https://flow.org/en/docs/react/types/#toc-react-node
  (WrappedComponent: ComponentType<any>) => {
    // should use require
    const localeDataSource = require(`../../locales/${locale}/${page}`).default;
    return (
      <LocaleContext.Provider value={{ locale, localeDataSource }}>
        <WrappedComponent {...rest} />
      </LocaleContext.Provider>
    );
  };

export default withLocale;
