import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaKey, FaLock, FaUser } from "react-icons/fa";
import { connect } from 'react-redux';
import { loginUser } from "../../redux/actions/userActions";

import "./style.css";

const Login = (props) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
  }

  const [emailAddress, setEmailAddress] = useState(' ')
  const [password, setPassword] = useState(' ')

  const SubmitHandler = async (e) => {
    e.preventDefault();

    props.userDetails.map(x => {
      if (x.email === emailAddress && x.pass === password) {
        alert("You have been logged in!")
        props.loginUser(true)
        navigate({
          pathname: '/',
        });
      } else {
        alert("Invalid login credentials, please try again.")
      }
    })
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-login-area section_70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="login-box">
              <div className="login-page-heading">
                <FaKey />
                <h3>{t("login_page.singin")}</h3>
              </div>
              <form onSubmit={SubmitHandler}>
                {emailAddress === '' ?
                  <span style={{ color: 'red' }}>Please provide a valid email address</span>
                  : <></>
                }
                <div className="account-form-group">
                  <input
                    style={emailAddress === '' ? { border: '2px solid #ec3323' } : null}
                    type="text"
                    placeholder="Email Address"
                    name="username"
                    value={emailAddress.trim()}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                  <FaUser />
                </div>
                {password === '' ?
                  <span style={{ color: 'red' }}>Please enter a password</span>
                  : <></>
                }
                <div className="account-form-group">
                  <input
                    style={password === '' ? { border: '2px solid #ec3323' } : null}
                    type="password"
                    placeholder={t("login_page.password")}
                    name="password"
                    value={password.trim()}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FaLock />
                </div>
                <div className="remember-row">
                  {/* <p className="lost-pass">
                    <Link to="/" onClick={onClick}>
                      {t("login_page.f_password")}
                    </Link>
                  </p> */}
                  <p className="checkbox remember">
                    <input
                      className="checkbox-spin"
                      type="checkbox"
                      id="Freelance"
                    />
                    <label htmlFor="Freelance">
                      <span />
                      {t("login_page.keep")}
                    </label>
                  </p>
                </div>
                <p>
                  <button type="submit" className="gauto-theme-btn">
                    Login
                  </button>
                </p>
              </form>
              <div className="login-sign-up">
                <Link to="/register">{t("login_page.need_account")}</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    userDetails: state.userReducer.register,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (details) => { dispatch(loginUser(details)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
