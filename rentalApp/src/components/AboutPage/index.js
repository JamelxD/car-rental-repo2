import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";

import img1 from "../../img/about-page.jpg";
import img2 from "../../img/cars.png";
import image from "../images/4e640b55551911.59897a997111a-800x533.jpg"

import "./style.css";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about-page-area section_70">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="about-page-left">
                <h4>{t("about_page.subtitle")}</h4>
                <h3>We are committed to providing you the best rental solutions</h3>
                <p>
                  Galactic Rental was born in 2021; being new to the travel/rental space, we are focused on disrupting the market, providing only the
                  best transport solutions for customers, no matter where in the world they are.
                </p>
                {/* <p>
                  Eodem modo typi, qui nunc nobis videntur parum clari, fiant
                  sollemnes in futurum.litterarum formas humanitatis per seacula
                  quarta decima et quinta decima
                </p> */}
                <div className="about-page-call">
                  <div className="page-call-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="call-info">
                    <p>{t("need_any_help")}</p>
                    <h4>
                      <a href="tel:12435424">(431) 529 2093</a>
                    </h4>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="about-page-right">
                <img src={image} alt="about page" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <section className="gauto-about-promo section_70">
        <Container>
          <Row>
            <Col md={12}>
              <div className="about-promo-text">
                <h3
                  dangerouslySetInnerHTML={{
                    __html: t("about_page.proud_title", {
                      interpolation: { escapeValue: false },
                    }),
                  }}
                ></h3>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div className="about-promo-image">
                <img src={img2} alt="about promo" />
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
    </>
  );
};

export default AboutPage;
