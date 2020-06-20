// @flow
// libs import
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Button, Drawer } from "antd";
// hooks
import { useLocaleContext } from "@/hooks";
// types
import { type GLOBAL_HEADER_TYPE } from "@/types/components/GlobalHeader";
// others
import logo from "../../assets/images/logo.webp";
import CONSTANTS from "@/constants";
import "./style.scss";

/**
 * GlobalHeader props 型定義
 * @param {string} pathname
 */
const GlobalHeader = ({ pathname }: GLOBAL_HEADER_TYPE) => {
  // define urlEndpoint by substring pathname
  // case 1: pathname == ["/en/xxx", "/jp/xxx"]
  // case 2: pathname == ["/xxx"]
  // endpoint = /xxx
  const urlEndpoint = CONSTANTS.LOCALE.PATH_REGEX.test(pathname)
    ? pathname.substring(CONSTANTS.LOCALE.LOCALE_LENGTH + 1, pathname.length)
    : pathname;
  // define selectedMenuKey
  // case 1: endpoint === "/" -> this is Home page
  // case 2: endpoint === "/xxx" -> substring to get xxx and capitalize (Xxx)
  const selectedMenuKey =
    urlEndpoint === "/" || urlEndpoint === ""
      ? CONSTANTS.PAGE_NAME.HOME
      : urlEndpoint
          .substring(1, urlEndpoint.length)
          .toLowerCase()
          .replace(/(^| )(\w)/g, s => s.toUpperCase());

  // get locale, localeDataSource from context
  // FIXME: using hooks from inside LocaleContext, need to move to /hooks folder?
  const { locale, localeDataSource } = useLocaleContext();
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <nav className="menuBar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <Menu mode="horizontal" selectedKeys={[selectedMenuKey]}>
            <Menu.Item key={CONSTANTS.PAGE_NAME.HOME}>
              <Link to={`/${locale}/`}>{localeDataSource["header.home"]}</Link>
            </Menu.Item>
          </Menu>
        </div>
        <div className="rightMenu">
          <Menu mode="horizontal" selectedKeys={[selectedMenuKey]}>
            <Menu.Item key="i18next-jp" className="header-menu-item-right">
              <a href={`/${CONSTANTS.LOCALE.JA_JP}${urlEndpoint}`}>日本語</a>
            </Menu.Item>
            <Menu.Item key="i18next-en" className="header-menu-item-right">
              <a href={`/${CONSTANTS.LOCALE.EN_US}${urlEndpoint}`}>English</a>
            </Menu.Item>
          </Menu>
        </div>
        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <Menu>
            <Menu.Item key={CONSTANTS.PAGE_NAME.HOME}>
              <Link to={`/${locale}/`}>{localeDataSource["header.home"]}</Link>
            </Menu.Item>
          </Menu>
          <Menu>
            <Menu.Item key="i18next-jp" className="header-menu-item-right">
              <a href={`/${CONSTANTS.LOCALE.JA_JP}${urlEndpoint}`}>日本語</a>
            </Menu.Item>
            <Menu.Item key="i18next-en" className="header-menu-item-right">
              <a href={`/${CONSTANTS.LOCALE.EN_US}${urlEndpoint}`}>English</a>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </nav>
  );
};

export default GlobalHeader;
