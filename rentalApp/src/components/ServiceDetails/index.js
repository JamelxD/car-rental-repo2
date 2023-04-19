import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { FaFilePdf, FaRegFileWord, FaCheck } from "react-icons/fa";
import img1 from "../../img/service-details-1.jpg";
import img2 from "../../img/service-details-2.jpg";

import "./style.css";

const ServiceDetails = () => {
  const { t } = useTranslation();

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-service-details-area section_70">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="service-details-right">
              <h3>{t("wedding_ceremony")}</h3>
              <p>
                Dolor consectetur adipiscing elit sed do eiusmod tempor
                incididunt know you labore et dolore magna aliqua consectetur
                adipiscingLoren ipsum dolor conse ctetur sed adipi scing elit to
                sed do eiusmod tempor ipsum dolor consectetur adipiscing elit
                sed do eiu smod temp inci did know you labore et dolore magna
                aliqua consec consectetur.
              </p>
              <p>
                Magna etiam tempor orci eu. Risus in hendrerit gravida rutrum
                quisque non tellus orci. Fames ac turpis egestas maecenas
                pharetra convallis posuere morbi leo. Nibh sit amet commodo
                nulla. At erat pellentesque{" "}
              </p>
              <div className="service-accordion" id="accordion">
                <h3>{t("service_details_page.faq_text")}</h3>
                <Accordion>
                  <Accordion.Item eventKey="0" className="single_faq_accordian">
                    <Accordion.Header className="faq_accordian_header">
                      Mileage option
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className='radio'>
                        <RadioGroup horizontal>
                          <RadioButton value="apple">
                            <div className='upgrade-header'>
                              Long Distance
                            </div>
                            <div>
                              Unlimited Miles
                            </div>
                          </RadioButton>
                          <RadioButton value="orange">
                            Regular
                          </RadioButton>
                          <RadioButton value="melon">
                            Basic
                          </RadioButton>
                        </RadioGroup>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="single_faq_accordian">
                    <Accordion.Header className="faq_accordian_header">
                      Collapsible Group Item #2
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="single_faq_accordian">
                    <Accordion.Header className="faq_accordian_header">
                      Collapsible Group Item #3
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceDetails;
