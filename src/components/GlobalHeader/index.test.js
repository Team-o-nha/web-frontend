// @flow
// libs import
import React from "react";
import { shallow } from "enzyme";
// components import
import GlobalHeader from "./index";
// hooks
import * as LocaleContext from "@/hooks/useLocaleContext";
// others
import { findByTestAttr } from "@/utils";
import localeDataSourceJP from "@/locales/jp/GlobalHeader";

const setUp = () => {
  const props = {
    pathname: "/jp/reservation"
  };
  const enzymeWrapper = shallow(<GlobalHeader {...props} />);
  return {
    enzymeWrapper
  };
};

/**
 * GlobalHeader testing
 */
describe("GlobalHeader", () => {
  let globalHeaderEnzymeWrapper;
  /**
   * shallow render GlobalHeader before each test
   */
  beforeEach(() => {
    const { enzymeWrapper } = setUp();
    globalHeaderEnzymeWrapper = enzymeWrapper;
  });

  /**
   * reset mock modules before each test
   */
  beforeEach(() => {
    jest.resetModules();
  });

  /**
   * Shallow render with pathname="/jp/reservation"
   */
  it("Shallow render shoud work with pathname='/jp/reservation'", () => {
    expect(
      findByTestAttr(globalHeaderEnzymeWrapper, "global-header-wrapper")
    ).toHaveLength(1);
  });

  /**
   * Snapshot should not be updated with locale = jp
   */
  it("日本語で表示する画面が予期せず変更されていないかを確かめる", () => {
    // ご参考に：https://medium.com/7shifts-engineering-blog/testing-usecontext-react-hook-with-enzyme-shallow-da062140fc83
    // MOCK CONTEXT FOR GLOBALHEADER
    const contextValues = {
      locale: "jp",
      localeDataSource: localeDataSourceJP
    };
    jest
      .spyOn(LocaleContext, "useLocaleContext")
      .mockImplementation(() => contextValues);
    const { enzymeWrapper } = setUp();
    globalHeaderEnzymeWrapper = enzymeWrapper;
    expect(globalHeaderEnzymeWrapper).toMatchSnapshot();
  });
});
