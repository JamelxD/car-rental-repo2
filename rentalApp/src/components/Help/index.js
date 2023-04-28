import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhoneAlt } from "react-icons/fa";

import "./style.css";

const Help = () => {
  const { t } = useTranslation();

  return (
    <section className="gauto-call-area">
      <Container>
        <Row>
          <Col md={12}>
            <div className="call-box">
              <div className="call-box-inner">
                <h2
                  dangerouslySetInnerHTML={{
                    __html: t("partner_location_text", {
                      partner_count: "<span>100</span>",
                      interpolation: { escapeValue: false },
                    }),
                  }}
                ></h2>
                <p>
                  At Galactic Rental, we have partnered with over 100 brokers to offer you a wide selection of vehicles at an affordable rate!
                </p>
                <div className="call-number">
                  <div className="call-icon">
                    <FaPhoneAlt />
                  </div>
                  <div className="call-text">
                    <p>{t("need_any_help")}</p>
                    <h4>
                      <a href="tel:16614938483">+1 (661) 493 8483</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Help;
