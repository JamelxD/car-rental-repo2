import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DatePickerComponent,
  TimePickerComponent,
} from "@syncfusion/ej2-react-calendars";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";
import { Divider, Header, Icon, Table, Checkbox } from 'semantic-ui-react'
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
  FaLuggageCart
} from "react-icons/fa";
import moment from 'moment';

import img1 from "../../img/booking.jpg";
import img2 from "../../img/master-card.jpg";
import img3 from "../../img/paypal.jpg";
import image from "../images/credit-card-logos2.png"

import "./style.css";

const CarBooking = (props) => {
  console.log(props)
  console.log(props.additionalDrivers)

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

  const price = Math.round((props.rental.costs.total) / 190)

  const [termsChecked, setTermsChecked] = useState(false)


  return (
    <>
      <section className="gauto-car-booking section_70">
        <Container>
          <Row>

            <Col lg={6}>
              <div className="car-booking-image">
                {/* </div> <div style={{ height: '500px', width: '80%', backgroundColor: 'red' }}> */}
                <img crossOrigin="anonymous" src={props.rental.pictureUrl} alt="offer 1" />
              </div>
            </Col>
            <Col lg={6}>
              <div className="car-booking-right">
                <p className="rental-tag">{props.rental.operatorName}</p>
                <h3>{props.rental.name}</h3>
                <div className="price-rating">
                  <div className="price-rent">
                    <h4>
                      £{price}<span>/ {t("day")}</span>
                    </h4>
                  </div>
                  <div className="car-rating">
                    <ul>
                      {String(Math.floor(Math.random() * (5 - 1 + 1) + 1))
                        .split('').forEach(element => {
                          return (
                            <li>
                              <FaStar />
                            </li>
                          )
                        })}
                    </ul>
                  </div>
                </div>
                {/* <p>
                  Driver's minimum age is {props.rental.driverMinimumAge}
                </p>
                <p>
                  Rental duration is {props.rental.durationInDays} days
                </p> */}
                <div className="car-features clearfix">
                  <ul>
                    <li>
                      <FaCar /> {t("model")}: {Math.round(rand)}
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
                      <FaLuggageCart /> 2 lugg
                    </li>
                    <li>
                      <FaKey /> Remote Keyless
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <FaCar /> Number of seats: {props.rental.seatNumber}
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
                      <Col lg={6} md={7}>
                        <p>
                          <input
                            type="text"
                            placeholder="First Name"
                          />
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          <input
                            type="text"
                            placeholder="Last Name"
                          />
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>
                          <input
                            type="email"
                            placeholder="Email Address"
                          />
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          <input
                            type="phone"
                            placeholder="Contact Number"
                          />
                        </p>
                      </Col>
                    </Row>
                  </form>
                </div>
                <div className="single-booking">
                  <Col lg={12}>
                    <div className="booking-right">
                      <h3>{t("car_booking.payment_method")}</h3>
                      <div className="gauto-payment">
                        <div className="payment">
                          <p>Please enter your debit/credit card details below:</p>
                          {/* <input type="radio" id="s-option" name="selector" /> */}
                          {/* <label htmlFor="s-option">
                            {t("car_booking.credit_card")}
                          </label> */}
                          {/* <div className="check">
                            <div className="inside" />
                          </div> */}
                          <img src={image} alt="credit card" />
                        </div>
                      </div>
                      <div className="booking-form-left">
                        <div className="single-booking">
                          <form>
                            <Row>
                              <Col md={6}>
                                <p>
                                  <input
                                    type="text"
                                    placeholder="Cardholder Name"
                                  />
                                </p>
                              </Col>
                              <Col md={6}>
                                <p>
                                  <input
                                    type="text"
                                    placeholder="16 Digit Card Number"
                                  />
                                </p>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <p>
                                  <input
                                    type="text"
                                    placeholder="Expiry Date"
                                  />
                                </p>
                              </Col>
                              <Col md={6}>
                                <p>
                                  <input
                                    type="text"
                                    placeholder="CVV"
                                  />
                                </p>
                              </Col>
                              <Col md={6}>
                                <p>
                                  <input
                                    type="text"
                                    placeholder="Postal Code/ZIP Code"
                                  />
                                </p>
                              </Col>
                            </Row>
                          </form>
                          <div style={{ marginTop: '2%' }} />
                          <div className="payment">
                            <p>
                              Renter must be eligible to hire vehicle
                              Renter meets the licence, documents, payment and age requirements to hire a vehicle.

                              Renter understands reservation should be modified if requirements are not met in order to avoid cancellation fee.

                              Please read the complete Pay Now Terms & Conditions for details.


                              Renter must acknowledge refund policy when booking reservation
                              Full refund if renter cancels 3 days or more before booking

                              Fee charged if renter cancels less than 3 days

                            </p>
                            <p>
                              <Checkbox checked={termsChecked} onChange={() => { setTermsChecked(!termsChecked) }} style={{ marginRight: '1%' }} />
                              I have read and accept the <Link to={"/terms-and-conditions"}>terms and conditions </Link>.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="action-btn">
                        <Link to="/" onClick={onClick} className="gauto-btn">
                          {t("researve_now")}
                        </Link>
                      </div>
                    </div>
                  </Col>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className="order-summury-box">
                <h3>Booking Summary</h3>
                <Divider horizontal>
                  Booking Details
                </Divider>
                <table>
                  <tbody>
                    <tr>
                      <td>Pickup location</td>
                      <td>{props.pickUpLocation}</td>
                    </tr>
                    <tr>
                      <td>Dropoff location</td>
                      <td>{props.rental.agencyReturn.name}</td>
                    </tr>
                    <tr>
                      <td>Pickup date</td>
                      <td>{moment(props.rental.startDate).format("MM/DD/YYYY")}</td>
                    </tr>
                    <tr>
                      <td>Dropoff date</td>
                      <td>{moment(props.rental.endDate).format("MM/DD/YYYY")}</td>
                    </tr>
                    <tr>
                      <td>Driver minimum age</td>
                      <td>{props.rental.driverMinimumAge}</td>
                    </tr>
                    <tr>
                      <td>Rental period</td>
                      <td>{props.rental.durationInDays} days</td>
                    </tr>
                  </tbody>
                </table>
                <Divider horizontal>
                  Subtotal
                </Divider>
                <table>
                  <tbody>
                    <tr>
                      <td>Subtotal</td>
                      <td>£{price}</td>
                    </tr>
                  </tbody>
                </table>
                <Divider horizontal>
                  Upgrades
                </Divider>
                <table>
                  <tbody>
                    <tr>
                      {props.upgrades.mileage === "standard-mileage" ?
                        <>
                          <td>Standard Mileage</td>
                          <td>£{Math.round(price * 0.05 * props.rental.durationInDays)}</td>
                        </>
                        : "long-mileage" ?
                          <>
                            <td>Unlimited Miles</td>
                            <td>£{Math.round(price * 0.09 * props.rental.durationInDays)}</td>
                          </> :
                          <>
                            <td>Basic Mileage</td>
                            <td>No added cost</td>
                          </>}
                    </tr>
                    <tr>
                      {props.upgrades.protection === 'standard-protection' ?
                        <>
                          <td>Standard Protection</td>
                          <td>£{Math.round(price * 0.07 * props.rental.durationInDays)}</td>
                        </>
                        : 'full-protection' ?
                          <>
                            <td>Full Protection</td>
                            <td>£{Math.round(price * 0.11 * props.rental.durationInDays)}</td>
                          </> :
                          <>
                            <td>Basic Protection</td>
                            <td>No added cost</td>
                          </>}
                    </tr>
                    <tr>
                      {props.upgrades.additionalDrivers > 0 ?
                        <>
                          <td>{props.upgrades.additionalDrivers} Additional Drivers</td>
                          <td>£{Math.round(price * 0.07 * props.upgrades.additionalDrivers * props.rental.durationInDays)}</td>
                        </>
                        : <></>}
                    </tr>
                    <tr>
                      {props.upgrades.gps === true ?
                        <>
                          <td>GPS Guaranteed</td>
                          <td>£{Math.round(price * 0.03 * props.rental.durationInDays)}</td>
                        </>
                        : <></>}
                    </tr>
                    <tr>
                      {props.upgrades.roadsideAssistance === true ?
                        <>
                          <td>Roadside Assistance</td>
                          <td>£{Math.round(price * 0.04 * props.rental.durationInDays)}</td>
                        </>
                        : <></>}
                    </tr>
                    <tr>
                      {props.upgrades.interiorDamage === true ?
                        <>
                          <td>Interior Damage Cover</td>
                          <td>£{Math.round(price * 0.05 * props.rental.durationInDays)}</td>
                        </>
                        : <></>}
                    </tr>
                    <tr>
                      {props.upgrades.childSeat === true ?
                        <>
                          <td>Child Seat</td>
                          <td>£{Math.round(price * 0.02 * props.rental.durationInDays)}</td>
                        </>
                        : <></>}
                    </tr>
                    <tr>
                      {props.upgrades.tireProtection === true ?
                        <>
                          <td>Tire and Windscreen Cover</td>
                          <td>£{Math.round(price * 0.05 * props.rental.durationInDays)}</td>
                        </>
                        : <></>}
                    </tr>
                  </tbody>
                </table>
                <Divider horizontal>
                  Taxes and Fees
                </Divider>
                <table>
                  <tbody>
                    <tr>
                      <td>VAT (20%)</td>
                      <td>Included</td>
                    </tr>
                  </tbody>
                </table>
                <Divider horizontal>
                  Total
                </Divider>
                <table>
                  <tbody>
                    <tr>
                      <td>Total Price</td>
                      <td>£{price + props.upgrades.upgradesTotal}</td>
                    </tr>
                  </tbody>
                </table>
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
    rental: state.storeRentalReducer.rental,
    upgrades: state.upgradesReducer,
    pickUpLocation: state.locationReducer.pickupLocation
  }
}

export default connect(mapStateToProps, null)(CarBooking);
