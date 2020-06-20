import React from "react";
import { Form, Row, Col, Layout, Input, Button } from "antd";
import { ReactComponent as Email } from "@/assets/icons/email-24px.svg";
import { ReactComponent as Phone } from "@/assets/icons/phone_iphone-24px.svg";
import { ReactComponent as Location } from "@/assets/icons/place-24px.svg";
import {
  SendOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined
} from "@ant-design/icons";
import "./style.scss";

const Footer = () => {
  const dataContact = [
    {
      textDetail: "633 Nguyễn Đình Chiểu, P.2, Q.3, HCM",
      icon: <Location />
    },
    {
      textDetail: "0909140170",
      icon: <Phone />
    },
    {
      textDetail: "thecameliavn@gmail.com",
      icon: <Email />
    }
  ];

  return (
    <Layout className="footer">
      <div className="footer-wrapper">
        <Row
          className="footer-wrapper-inner"
          justify="center"
          gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}
        >
          <Col span={8}>
            <div className="contact">
              <h2 className="title">
                <a href="/"> CAMELIA BRAND</a>
              </h2>
              <div className="contact-desc">
                <div className="contact-detail"></div>
              </div>
              {dataContact.map((item, index) => (
                <div className="contact-content" key={index}>
                  <div className="icon">{item.icon}</div>
                  <div className="text-contact-detail">
                    <a href="/pages/cua-hang">{item.textDetail}</a>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col span={8}>
            <div className="subscribe">
              <h2 className="title">
                <a href="/">Đăng ký nhận tin</a>
              </h2>
              <div className="contact-desc">
                <Form>
                  <Form.Item
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Nhập Email của bạn...."
                      }
                    ]}
                  >
                    <Input
                      placeholder="Nhập Email của bạn...."
                      size="large"
                      suffix={
                        <Button>
                          <SendOutlined />
                        </Button>
                      }
                    />
                  </Form.Item>
                </Form>
              </div>
              <div className="subscribe-desc">
                Cập nhật những sản phẩm mới nhất từ Camelia nhé!
              </div>
              <div className="social">
                <FacebookOutlined style={{ color: "#08c" }} />
                <InstagramOutlined style={{ color: "rgb(198, 21, 228)" }} />
                <YoutubeOutlined style={{ color: "#F44336" }} />
              </div>
            </div>
          </Col>
          <Col span={8} className="center">
            <div className="policy">
              <h2 className="title">
                <a href="/">Chính sách</a>
              </h2>
              <ul className="no-bullets">
                <li>
                  <a href="/pages/about-us">Giới thiệu</a>
                </li>

                <li>
                  <a href="/pages/phuong-thuc-giao-hang">
                    Phương thức giao hàng
                  </a>
                </li>

                <li>
                  <a href="/pages/phuong-thuc-thanh-toan">
                    Phương thức thanh toán
                  </a>
                </li>

                <li>
                  <a href="/pages/chinh-sach-bao-hanh">Chính sách bảo hành</a>
                </li>

                <li>
                  <a href="/pages/chinh-sach-doi-tra">Chính sách đổi trả</a>
                </li>

                <li>
                  <a href="/pages/chinh-sach-bao-mat">Chính sách bảo mật</a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Footer;
