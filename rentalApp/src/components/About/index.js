import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import signature from "../../img/signature.png";
import Img1 from "../../img/about.png";
import image from "../images/bb0ce5e8434f912ec485dad40a784e17.jpg"

import "./style.css";
const About = () => {
  const { t } = useTranslation();
  return (
    <section className="gauto-about-area section_70">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="about-left">
              <h4>{t("about_us_title")}</h4>
              <h2>Welcome to Galactic Rental</h2>
              <p>We are a trusted name in the rental vehicle space and have been operating since 2021, serving customers from Europe to America.</p>
              <div className="about-list">
                <ul>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Trusted in the space
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Large selection of vehicles
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Fast checkout
                  </li>
                  <li>
                    <span>
                      <FaCheck />
                    </span>
                    Locations worldwide
                  </li>
                </ul>
              </div>
              {/* <div className="about-signature">
                <div className="signature-left">
                  <img src={signature} alt="signature" />
                </div>
                <div className="signature-right">
                  <h3>Robertho Garcia</h3>
                  <p>{t("president")}</p>
                </div>
              </div> */}
            </div>
          </Col>
          <Col lg={6}>
            <div className="about-right">
              <img src={image} alt="car" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
