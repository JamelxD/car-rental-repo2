import React from "react";
import { Link } from "react-router-dom";
import {
  DatePickerComponent,
  TimePickerComponent,
} from "@syncfusion/ej2-react-calendars";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

import { Container, Row, Col } from "react-bootstrap";
import {
  FaStar,
  FaStarHalfAlt,
  FaCar,
  FaCogs,
  FaTachometerAlt,
  FaEmpire,
  FaDesktop,
  FaKey,
  FaLock,
  FaEye,
} from "react-icons/fa";

import img1 from "../../img/booking.jpg";
import img2 from "../../img/master-card.jpg";
import img3 from "../../img/paypal.jpg";

import "./style.css";

const CarBooking = (props) => {
  console.log(props)
  console.log(props.rental.pictureUrl)

  const { t } = useTranslation();

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  const min = 2017;
  const max = 2023;
  const rand = min + Math.random() * (max - min);


  return (
    <>
      <section className="gauto-car-booking section_70">
        <Container>
          <Row>

            <Col lg={6}>
              <div className="car-booking-image">
                {/* </div> <div style={{ height: '500px', width: '80%', backgroundColor: 'red' }}> */}
                <img crossorigin="anonymous" src={props.rental.pictureUrl} alt="offer 1" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="car-booking-right">
                <p className="rental-tag">{props.rental.operatorName}</p>
                <h3>{props.rental.name}</h3>
                <div className="price-rating">
                  <div className="price-rent">
                    <h4>
                      £{Math.round((props.rental.costs.total) / 190)}<span>/ {t("day")}</span>
                    </h4>
                  </div>
                  <div className="car-rating">
                    <ul>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStar />
                      </li>
                      <li>
                        <FaStarHalfAlt />
                      </li>
                    </ul>
                    <p>(123 {t("rating")})</p>
                  </div>
                </div>
                <p>
                  Driver's minimum age is {props.rental.driverMinimumAge}
                </p>
                <p>
                  Rental duration is {props.rental.durationInDays} days
                </p>
                <div className="car-features clearfix">
                  <ul>
                    <li>
                      <FaCar /> {t("model")}:{Math.round(rand)}
                    </li>
                    <li>
                      <FaCogs /> {props.rental.gearbox === 'manual' ? 'Manual' : 'Automatic'}
                    </li>
                    <li>
                      <FaTachometerAlt /> {props.rental.type}
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <FaEye /> GPS Navigation
                    </li>
                    <li>
                      <FaLock /> Anti-Lock Brakes
                    </li>
                    <li>
                      <FaKey /> Remote Keyless
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <FaCar /> Seat number:{props.rental.seatNumber}
                    </li>
                    <li>
                      <FaCogs /> {t("automatic")}
                    </li>
                    <li>
                      <FaTachometerAlt /> Car band: {props.eliteCategory === 'true' ? 'Luxury band' : 'Normal band'}
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="gauto-booking-form section_70">
        <Container>
          <Row>
            <Col lg={8}>
              <div className="booking-form-left">
                <div className="single-booking">
                  <h3>{t("car_booking.personal_information")}</h3>
                  <form onSubmit={SubmitHandler}>
                    <Row>
                      <Col lg={8} md={7}>
                        <p>
                          <input
                            type="text"
                            placeholder={t("car_booking.first_name")}
                          />
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          <input
                            type="text"
                            placeholder={t("car_booking.last_name")}
                          />
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>
                          <input
                            type="email"
                            placeholder={t("car_booking.email")}
                          />
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          <input
                            type="tel"
                            placeholder={t("car_booking.phn")}
                          />
                        </p>
                      </Col>
                    </Row>
                  </form>
                </div>
                <div className="single-booking">
                  <h3>{t("car_booking.booking_details")}</h3>
                  <form>
                    <Row>
                      <Col md={6}>
                        <p>
                          <input type="text" placeholder={t("from_address")} />
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          <input type="text" placeholder={t("to_address")} />
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>
                          <select>
                            <option data-display="Select">1 person</option>
                            <option>2 person</option>
                            <option>3 person</option>
                            <option>4 person</option>
                            <option>5-10 person</option>
                          </select>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          <select>
                            <option data-display="Select">1 luggage</option>
                            <option>2 luggage</option>
                            <option>3 luggage</option>
                            <option>4(+) luggage</option>
                          </select>
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>
                          <DatePickerComponent
                            id="datepicker"
                            placeholder={t("journey_date")}
                          ></DatePickerComponent>
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          <TimePickerComponent
                            id="timepicker"
                            placeholder={t("journey_time")}
                          ></TimePickerComponent>
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <p>
                          <textarea
                            placeholder="Write Here..."
                            defaultValue={""}
                          />
                        </p>
                      </Col>
                    </Row>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="order-summury-box">
                <h3>{t("cart.summury")}</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>{t("cart.subtotal")}</td>
                      <td>$270</td>
                    </tr>
                    <tr>
                      <td>{t("cart.shipping")}</td>
                      <td>{t("cart.free_shipping")}</td>
                    </tr>
                    <tr>
                      <td>{t("cart.order_total")}</td>
                      <td>$270</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Col>
            <Col lg={8}>
              <div className="booking-right">
                <h3>{t("car_booking.payment_method")}</h3>
                <div className="gauto-payment clearfix">
                  <div className="payment">
                    <input type="radio" id="ss-option" name="selector" />
                    {/* <label htmlFor="ss-option">
                      {t("car_booking.bank_transfer")}
                    </label> */}
                    <div className="check">
                      <div className="inside" />
                    </div>
                    <p>{t("car_booking.payment_text")}</p>
                  </div>
                  <div className="payment">
                    <input type="radio" id="f-option" name="selector" />
                    <label htmlFor="f-option">
                      {t("car_booking.check_payment")}
                    </label>
                    <div className="check">
                      <div className="inside" />
                    </div>
                  </div>
                  <div className="payment">
                    <input type="radio" id="s-option" name="selector" />
                    <label htmlFor="s-option">
                      {t("car_booking.credit_card")}
                    </label>
                    <div className="check">
                      <div className="inside" />
                    </div>
                    <img src={img2} alt="credit card" />
                  </div>
                  <div className="payment">
                    <input type="radio" id="t-option" name="selector" />
                    <label htmlFor="t-option">Paypal</label>
                    <div className="check">
                      <div className="inside" />
                    </div>
                    <img src={img3} alt="credit card" />
                  </div>
                </div>
                <div className="action-btn">
                  <Link to="/" onClick={onClick} className="gauto-btn">
                    {t("researve_now")}
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    rental: state.storeRentalReducer.rental
  }
}

export default connect(mapStateToProps, null)(CarBooking);
