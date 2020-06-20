import React from "react";
import { Layout, Row, Col } from "antd";
import TitleHead from "@/components/TitleHead";
import ListItem from "../../component/ListItem";
import "./style.scss";

const HomeBody = () => (
  <Layout>
    <Row className="home-body-wrapper">
      <Col sm={20} className="home-body-wrapper-inner">
        <TitleHead pageTitle={"Backpacks"} />
        <ListItem />
      </Col>
    </Row>
  </Layout>
);

export default HomeBody;
