import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { Col, Container, Row, Dropdown } from "react-bootstrap";
import {
  FaPhoneAlt,
  FaSignInAlt,
  FaUserAlt,
  FaSearch,
  FaGlobe,
} from "react-icons/fa";
import MobileMenu from "../../components/MobileMenu";
import { loginUser } from "../../redux/actions/userActions";
import Logo from "../../img/logo.png";
import globe from "../../img/globe.png";
import clock from "../../img/clock.png";
import "flag-icon-css/css/flag-icons.min.css";
import "./style.css";
import image from "../images/logo.png"

const languages = [
  {
    code: "fr",
    name: "Français",
    country_code: "fr",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
  {
    code: "pt",
    name: "Português",
    country_code: "pt",
  },
];

const Header = (props) => {
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  const { t } = useTranslation();

  return (
    <Fragment>
      <section className="gauto-header-top-area">
        <Container>
          <Row>
            <Col md={6}>
              <div className="header-top-left">
                <p>
                  {t("need_help")} <FaPhoneAlt /> {t("call")}: +321 123 45 978
                </p>
              </div>
            </Col>
            <Col md={6}>
              {props.loggedIn === false ? <div className="header-top-right">
                <Link to="/login">
                  <FaSignInAlt />
                  {t("login")}
                </Link>
                <Link to="/register">
                  <FaUserAlt />
                  {t("register")}
                </Link>
              </div> :
                <div className="header-top-right">
                  <Link to="/" onClick={() => props.loginUser(false)}>
                    <FaSignInAlt />
                    Log Out
                  </Link>
                </div>}

            </Col>
          </Row>
        </Container>
      </section>
      <header className="gauto-main-header-area">
        <Container>
          <Row>
            <Col md={3}>
              <div className="site-logo">
                <a href="/">
                  <img src={image} alt="gauto" />
                </a>
              </div>
            </Col>
            {/* <Col lg={6} sm={9}>
              <div className="header-promo">
                <div className="single-header-promo">
                  <div className="header-promo-icon">
                    <img src={globe} alt="globe" />
                  </div>
                  <div className="header-promo-info">
                    <h3>Newyork, USA</h3>
                    <p>{t("melbourne_city")}</p>
                  </div>
                </div>
                <div className="single-header-promo">
                  <div className="header-promo-icon">
                    <img src={clock} alt="clock" />
                  </div>
                  <div className="header-promo-info">
                    <h3>Monday to Friday</h3>
                    <p>9:00am - 6:00pm</p>
                  </div>
                </div>
              </div>
            </Col> */}
            {/* <div className="col-lg-3">
              <div className="header-action">
                <Link to="/contact">
                  <FaPhoneAlt /> {t("request_call")}
                </Link>
              </div>
            </div> */}
          </Row>
        </Container>
      </header>
      <section className="gauto-mainmenu-area">
        <Container>
          <Row>
            <Col lg={9}>
              <div className="mainmenu">
                <nav>
                  <ul id="gauto_navigation">
                    <li>
                      <Link to="/">{t("header-navigation.home")}</Link>
                    </li>
                    <li>
                      <Link to="/about">{t("header-navigation.about")}</Link>
                    </li>
                    {/* <li>
                      <Link to="/" onClick={onClick}>
                        {t("header-navigation.cars")}
                      </Link>
                      <ul>
                        <li>
                          <Link to="/car-listing">
                            {t("header-navigation.car_listing")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/car-booking">
                            {t("header-navigation.car_booking")}
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li>
                      <Link to="/gallery">
                        {t("header-navigation.gallery")}
                      </Link>
                    </li> */}
                    {/* <li>
                      <Link to="/" onClick={onClick}>
                        {t("header-navigation.shop")}
                      </Link>
                      <ul>
                        <li>
                          <Link to="/product">
                            {t("header-navigation.product")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/product-single">
                            {t("header-navigation.product_details")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/cart">
                            {t("header-navigation.shopping_cart")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/checkout">
                            {t("header-navigation.checkout")}
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    {/* <li>
                      <Link to="/" onClick={onClick}>
                        {t("header-navigation.pages")}
                      </Link>
                      <ul>
                        <li>
                          <Link to="/blog">{t("header-navigation.blog")}</Link>
                        </li>
                        <li>
                          <Link to="/blog-single">
                            {t("header-navigation.blog_single")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/error">
                            {t("header-navigation.not_found")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/login">
                            {t("header-navigation.login")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/register">
                            {t("header-navigation.register")}
                          </Link>
                        </li>
                      </ul>
                    </li> */}
                    <li>
                      <Link to="/contact">
                        {t("header-navigation.contact")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/terms-and-conditions">
                        {t("header-navigation.terms_conditions")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">
                        {t("header-navigation.privacy_policy")}
                      </Link>
                    </li>
                    <li>
                      <Link to="/cookie">
                        Cookie Policy
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.userReducer.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (details) => { dispatch(loginUser(details)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
