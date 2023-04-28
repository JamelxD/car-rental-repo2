import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { FaKey, FaLock, FaUser, FaRegEnvelope } from "react-icons/fa";
import { connect } from 'react-redux';
import { registerUser } from "../../redux/actions/userActions";


import "./style.css";

const Register = (props) => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
  }

  const [emailAddress, setEmailAddress] = useState(' ')
  const [password, setPassword] = useState(' ')
  const [confirmation, setConfirmation] = useState(' ')

  const SubmitHandler = async (e) => {
    e.preventDefault();

    if (emailAddress.length > 5 &&
      password.length > 6 &&
      password === confirmation) {
      await sleep(3000);
      alert("Thank you for registering!")
      props.registerUser({ email: emailAddress, pass: password })
      navigate({
        pathname: '/',
      });
    } else {
      await sleep(3000);
      alert("Invalid details, please check again.")
    }
  };

  return (
    <section className="gauto-login-area section_70">
      <Container>
        <Row>
          <Col md={12}>
            <div className="login-box">
              <div className="login-page-heading">
                <FaKey />
                <h3>{t("register_page.singup")}</h3>
              </div>
              <form onSubmit={SubmitHandler}>
                {/* <div className="account-form-group">
                  <input
                    type="text"
                    placeholder={t("register_page.username")}
                    name="username"
                  />
                  <FaUser />
                </div> */}
                {emailAddress === '' ?
                  <span style={{ color: 'red' }}>Please provide a valid email address</span>
                  : <></>
                }
                <div className="account-form-group">
                  <input
                    style={emailAddress === '' ? { border: '2px solid #ec3323' } : null}
                    type="text"
                    placeholder={t("register_page.email")}
                    name="username"
                    value={emailAddress.trim()}
                    onChange={(e) => setEmailAddress(e.target.value)}
                  />
                  <FaRegEnvelope />
                </div>
                {password === '' ?
                  <span style={{ color: 'red' }}>Please enter a password</span>
                  : <></>
                }
                <div className="account-form-group">
                  <input
                    style={password === '' ? { border: '2px solid #ec3323' } : null}
                    type="password"
                    placeholder={t("register_page.password")}
                    name="password"
                    value={password.trim()}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <FaLock />
                </div>
                {confirmation === '' ?
                  <span style={{ color: 'red' }}>Please confirm your password</span>
                  : <></>
                }
                <div className="account-form-group">
                  <input
                    style={confirmation === '' ? { border: '2px solid #ec3323' } : null}
                    type="password"
                    placeholder={t("register_page.c_password")}
                    name="password"
                    value={confirmation.trim()}
                    onChange={(e) => setConfirmation(e.target.value)}
                  />
                  <FaLock />
                </div>
                <span>
                  By signing up, I confirm I have read and accept the <Link to={"/terms-and-conditions"}>terms and conditions </Link>.
                </span>
                <p>
                  <button type="submit" className="gauto-theme-btn">
                    {t("register_page.register_now")}
                  </button>
                </p>
              </form>
              <div className="login-sign-up">
                <Link to="/login">{t("register_page.have_account")}</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerUser: (details) => { dispatch(registerUser(details)) }
  }
}

export default connect(null, mapDispatchToProps)(Register);
