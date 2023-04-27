import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

import img1 from "../../img/city-transport.png";
import img2 from "../../img/airport-transport.png";
import img3 from "../../img/hospital-transport.png";
import img4 from "../../img/wedding-ceremony.png";
import img5 from "../../img/hotel-transport.png";
import img6 from "../../img/luggege-transport.png";

import "./style.css";

const CookiePage = () => {
  const { t } = useTranslation();

  return (
    <section className="gauto-service-area service-page-area section_70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="site-heading">
              <h4>{t("see_our")}</h4>
              <h2>{t("Cookie Policy")}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          Cookie Policy
          <p>
            This policy was last updated on October 05, 2022.
            The cookies we use allow our website to remember your preferences, improve the user experience and tailor the advertisements you see to those that are most relevant to you. These cookies refresh upon each website visit or to another site that recognises the cookie based on the categories described below.

            We also use other forms of technology which serve a similar purpose to cookies, such a pixel tags, and which allow us to monitor and improve our sites and mobile apps. When we talk about cookies in this Policy, this term includes these similar technologies.
          </p>

          <Row>
            Why Do We Use Cookies?
          </Row>
          <p>
            We use the following types of cookies:

            Strictly necessary cookies are used to allow you to navigate a website or mobile app and use its features such as accessing secure areas of the website or making a reservation. These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling out forms. You can set your browser or device settings to block or alert you about these cookies, but if you do so, some parts of the site or mobile application may not work. These cookies do not store any personally identifiable information. These types of cookies will expire within one year from your last website visit.

            Functional cookies  allow us to measure website usage and improve website and mobile app performance and customer experiences, such as remembering the choices you make and providing more personal features like storing your login account and language or geographic preferences. Depending on their function, some of these cookies may expire seven days after your last website visit, while others may remain persistently until they are deleted by you.

            Advertising cookies are used to deliver advertisements that are more relevant to you. Third parties that serve ads on our behalf use cookies to help select the ads that are displayed to you and ensure that you do not see the same ads repeatedly as well as to measure the effectiveness of advertising campaigns. Depending on their function, some of these cookies may expire thirty days after your last website visit, while others may remain persistently until they are deleted by you.
          </p>
        </Row>

        <Row>
          How Can You Manage Cookies?
        </Row>

        <p>
          You always have the ability to manually delete cookies. If you are using our mobile apps, you can change your preferences in the analytics settings in the app.

          You may also set your browser to block all cookies or to indicate when a cookie is being set, although our services may not function properly if your cookies are disabled. To find out how to control or disable cookies within most browsers, consult the "Help" section of your browser or device or visit www.allaboutcookies.org.

          We adhere to the Digital Advertising Alliance's Self-Regulatory Principles for Online Behavioural Advertising.  To learn more or to opt out of online interest-based advertising by a list of companies participating in the DAA, visit https://youradchoices.com/control or http://youradchoices.ca/choices for a list of companies participating in the DAA of Canada.
        </p>
      </Container>
    </section>
  );
};

export default CookiePage;
