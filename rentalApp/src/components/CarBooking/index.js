import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import InfoModal from "./InfoModal";
import { renterRequirements } from "./renterRequirements";
import { formsOfPayment } from "./formsOfPayment";
import { bookingConditions } from "./bookingConditions";
import { cancellationPolicy } from "./cancellationPolicy";

const CarBooking = (props) => {
  const navigate = useNavigate();



  const [firstName, setFirstName] = useState(' ')
  const [lastName, setLastName] = useState(' ')
  const [emailAddress, setEmailAddress] = useState(' ')
  const [contactNumber, setContactNumber] = useState(' ')

  const [cardholderName, setCardholderName] = useState(' ')
  const [cardNumber, setCardNumber] = useState(' ')
  const [expiry, setExpiry] = useState(' ')
  const [cvv, setCvv] = useState(' ')
  const [postcode, setPostcode] = useState(' ')

  const ccRegex = "/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$"

  const { t } = useTranslation();

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  async function sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
  }

  const onClick = (e) => {
    e.preventDefault();

    if (firstName === '') {
      alert('Please enter your first name')
    }

    if (lastName === '') {
      alert('Please enter your last name')
    }

    if (emailAddress === '') {
      alert('Please enter your email address')
    }

    if (contactNumber === '') {
      alert('Please enter your contact number')
    }

    if (cardholderName === '') {
      alert('Please enter your name as it appears on your card')
    }

    if (cardNumber === '' || !cardNumber.match(ccRegex)) {
      alert('Please enter your 16 digit card number')
    }

    if (expiry === '') {
      alert('Please enter the payment card expiry date')
    }

    if (cvv === '') {
      alert('Please enter your card CVV')
    }

    if (postcode === '') {
      alert('Please complete the checkout form')
    }

    if (termsChecked === false) {
      alert('Please agree to the terms & conditions')
    }

    validateForm();
  };

  const validateForm = async () => {
    if (firstName.length > 1 &&
      lastName.length > 1 &&
      emailAddress.length > 1 &&
      contactNumber.length > 1 &&
      cardNumber.length > 1 &&
      expiry.length > 1 &&
      cvv.length > 1 &&
      postcode.length > 1) {
      await sleep(5000);
      alert("Your payment could not be processed. Please try another payment method or try again later.")
    } else {

    }
  }

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
                      <FaCar /> {t("model")}: {props.plate}
                    </li>
                    <li>
                      <FaCogs /> {props.rental.gearbox === 'manual' ? 'Manual' : 'Automatic'}
                    </li>
                    <li>
                      <FaTachometerAlt /> {props.rental.type}
                    </li>
                  </ul>
                  {/* <ul>
                    <li>
                      <FaEye /> GPS Navigation
                    </li>
                    <li>
                      <FaLuggageCart /> 3 luggages
                    </li>
                    <li>
                      <FaKey /> Remote Keyless
                    </li>
                  </ul> */}
                  <ul>
                    <li>
                      <FaCar /> Number of seats: {props.rental.seatNumber}
                    </li>
                    <li>
                      <FaTachometerAlt /> Car band: {props.eliteCategory === 'true' ? 'Luxury Band' : 'Standard Band'}
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
                          {firstName === '' ?
                            <span style={{ color: 'red' }}>This field is required</span>
                            : <></>
                          }
                          <input
                            style={firstName === '' ? { border: '2px solid #ec3323' } : null}
                            type="text"
                            placeholder="First Name"
                            value={firstName.trim()}
                            onChange={(e) => setFirstName(e.target.value)}
                          />
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          {lastName === '' ?
                            <span style={{ color: 'red' }}>This field is required</span>
                            : <></>
                          }
                          <input
                            style={lastName === '' ? { border: '2px solid #ec3323' } : null}
                            type="text"
                            placeholder="Last Name"
                            value={lastName.trim()}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                        </p>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <p>
                          {emailAddress === '' ?
                            <span style={{ color: 'red' }}>This field is required</span>
                            : <></>
                          }
                          <input
                            style={emailAddress === '' ? { border: '2px solid #ec3323' } : null}
                            type="email"
                            placeholder="Email Address"
                            value={emailAddress.trim()}
                            onChange={(e) => setEmailAddress(e.target.value)}
                          />
                        </p>
                      </Col>
                      <Col md={6}>
                        <p>
                          {contactNumber === '' ?
                            <span style={{ color: 'red' }}>This field is required</span>
                            : <></>
                          }
                          <input
                            style={contactNumber === '' ? { border: '2px solid #ec3323' } : null}
                            type="tel"
                            placeholder="Contact Number"
                            value={contactNumber.trim()}
                            onChange={(e) => setContactNumber(e.target.value)}
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
                          {/* <p>Please enter your debit/credit card details below:</p> */}
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
                                  {cardholderName === '' ?
                                    <span style={{ color: 'red' }}>This field is required</span>
                                    : <></>
                                  }
                                  <input
                                    style={cardholderName === '' ? { border: '2px solid #ec3323' } : null}
                                    type="text"
                                    placeholder="Cardholder Name"
                                    value={cardholderName.trim()}
                                    onChange={(e) => setCardholderName(e.target.value)}
                                  />
                                </p>
                              </Col>
                              <Col md={6}>
                                <p>
                                  {cardNumber === '' ?
                                    <span style={{ color: 'red' }}>This field is required</span>
                                    : <></>
                                  }
                                  <input
                                    style={cardNumber === '' ? { border: '2px solid #ec3323' } : null}
                                    type="text"
                                    placeholder="16 Digit Card Number"
                                    value={cardNumber.trim()}
                                    onChange={(e) => setCardNumber(e.target.value)}
                                  />
                                </p>
                              </Col>
                            </Row>
                            <Row>
                              <Col md={6}>
                                <p>
                                  {expiry === '' ?
                                    <span style={{ color: 'red' }}>This field is required</span>
                                    : <></>
                                  }
                                  <input
                                    style={expiry === '' ? { border: '2px solid #ec3323' } : null}
                                    type="month"
                                    placeholder="Expiry Date"
                                    value={expiry.trim()}
                                    onChange={(e) => setExpiry(e.target.value)}
                                  />
                                </p>
                              </Col>
                              <Col md={6}>
                                <p>
                                  {cvv === '' ?
                                    <span style={{ color: 'red' }}>This field is required</span>
                                    : <></>
                                  }
                                  <input
                                    style={cvv === '' ? { border: '2px solid #ec3323' } : null}
                                    type="text"
                                    maxLength={4}
                                    placeholder="CVV"
                                    value={cvv.trim()}
                                    onChange={(e) => setCvv(e.target.value)}
                                  />
                                </p>
                              </Col>
                              <Col md={6}>
                                <p>
                                  {postcode === '' ?
                                    <span style={{ color: 'red' }}>This field is required</span>
                                    : <></>
                                  }
                                  <input
                                    style={postcode === '' ? { border: '2px solid #ec3323' } : null}
                                    type="text"
                                    placeholder="Postal Code/ZIP Code"
                                    value={postcode.trim()}
                                    onChange={(e) => setPostcode(e.target.value)}
                                  />
                                </p>
                              </Col>
                            </Row>
                          </form>
                          <div style={{ marginTop: '2%' }} />
                          <div className="payment">
                            <p>
                              Renter must be eligible to hire vehicle.
                            </p>
                            <p>Renter meets the licence, documents, payment and age requirements to hire a vehicle.</p>
                            <p>Renter understands the cancellation policy. Please read the cancellation policy for details.</p>
                            <p>Renter must acknowledge refund policy when booking reservation.</p>
                            <p>Flexible cancellation, reservation can be cancelled before the start of the rental.</p>

                            <InfoModal link="Renter Requirements" title="Renter Requirements" info={renterRequirements()} />
                            <InfoModal link="Forms of Payment" title="Renter Requirements" info={formsOfPayment()} />
                            <InfoModal link="Cancellation Policy" title="Cancellation Policy" info={cancellationPolicy()} />
                            <InfoModal link="Booking Conditions" title="Booking Conditions" info={bookingConditions()} />
                            <br />
                            <p>
                              <Checkbox checked={termsChecked} onChange={() => { setTermsChecked(!termsChecked) }} style={{ marginRight: '1%' }} />
                              I have read and accept the <Link to={"/terms-and-conditions"}>terms and conditions </Link>.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="action-btn">
                        <Link to="/" onClick={onClick} className="gauto-btn">
                          Reserve Now
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
                      {props.dropOffLocation === '' ? <td>{props.pickUpLocation}</td> : <td>{props.dropOffLocation}</td>}
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
                      <td>${price}</td>
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
                          <td>${Math.round(price * 0.05 * props.rental.durationInDays)}</td>
                        </>
                        : props.upgrades.mileage === "long-mileage" ?
                          <>
                            <td>Unlimited Miles</td>
                            <td>${Math.round(price * 0.09 * props.rental.durationInDays)}</td>
                          </> : props.upgrades.mileage === 'basic-mileage' ?
                            <>
                              <td>Basic Mileage</td>
                              <td>No added cost</td>
                            </> : null}
                    </tr>
                    <tr>
                      {props.upgrades.protection === 'standard-protection' ?
                        <>
                          <td>Standard Protection</td>
                          <td>£{Math.round(price * 0.07 * props.rental.durationInDays)}</td>
                        </>
                        : props.upgrades.protection === 'full-protection' ?
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
                      <>
                        <td>
                          Flexible Cancellation
                        </td>
                        <td>
                          No added cost
                        </td>
                      </>
                    </tr>
                    <tr>
                      <>
                        <td>
                          Loss Damage Waiver (including theft protection)
                        </td>
                        <td>
                          No added cost
                        </td>
                      </>
                    </tr>
                    <tr>
                      <>
                        <td>
                          GPS Guaranteed
                        </td>
                        <td>
                          No added cost
                        </td>
                      </>
                    </tr>
                    <tr>
                      <>
                        <td>
                          Loss Damage Waiver
                        </td>
                        <td>
                          No added cost
                        </td>
                      </>
                    </tr>
                    <tr>
                      <>
                        <td>
                          Supplemental Liability Insurance
                        </td>
                        <td>
                          No added cost
                        </td>
                      </>
                    </tr>
                    <tr>
                      <>
                        <td>
                          Airport Shuttle to Rental Car Center
                        </td>
                        <td>
                          No added cost
                        </td>
                      </>
                    </tr>
                    <tr>
                      {props.upgrades.additionalDrivers > 0 ?
                        <>
                          <td>{props.upgrades.additionalDrivers} Additional Drivers</td>
                          <td>${Math.round(price * 0.07 * props.upgrades.additionalDrivers * props.rental.durationInDays)}</td>
                        </>
                        : <></>}
                    </tr>
                    <tr>
                      {props.upgrades.gps === true ?
                        <>
                          <td>GPS Premium + Maps</td>
                          <td>${Math.round(price * 0.03 * props.rental.durationInDays)}</td>
                        </>
                        : <></>}
                    </tr>
                    <tr>
                      {props.upgrades.roadsideAssistance === true ?
                        <>
                          <td>Roadside Assistance</td>
                          <td>${Math.round(price * 0.04 * props.rental.durationInDays)}</td>
                        </>
                        : <></>}
                    </tr>
                    <tr>
                      {props.upgrades.interiorDamage === true ?
                        <>
                          <td>Interior Damage Cover</td>
                          <td>${Math.round(price * 0.05 * props.rental.durationInDays)}</td>
                        </>
                        : <></>}
                    </tr>
                    <tr>
                      {props.upgrades.childSeat === true ?
                        <>
                          <td>Child Seat</td>
                          <td>${Math.round(price * 0.02 * props.rental.durationInDays)}</td>
                        </>
                        : <></>}
                    </tr>
                    <tr>
                      {props.upgrades.tireProtection === true ?
                        <>
                          <td>Tire and Windscreen Cover</td>
                          <td>${Math.round(price * 0.05 * props.rental.durationInDays)}</td>
                        </>
                        : <></>}
                    </tr>
                    <tr>
                      {props.upgrades.toddlerSeat === true ?
                        <>
                          <td>Toddler Seat</td>
                          <td>${Math.round(price * 0.02 * props.rental.durationInDays)}</td>
                        </>
                        : <></>}
                    </tr>
                    <tr>
                      {props.upgrades.infantSeat === true ?
                        <>
                          <td>Infant Seat</td>
                          <td>${Math.round(price * 0.02 * props.rental.durationInDays)}</td>
                        </>
                        : <></>}
                    </tr>
                    <tr>
                      {props.upgrades.toll === true ?
                        <>
                          <td>Toll Pass</td>
                          <td>${Math.round(price * 0.03 * props.rental.durationInDays)}</td>
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
                      <td>${price + props.upgrades.upgradesTotal}</td>
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
    pickUpLocation: state.locationReducer.pickupLocation,
    dropOffLocation: state.locationReducer.dropOffLocation,
    plate: state.storeRentalReducer.plate,
  }
}

export default connect(mapStateToProps, null)(CarBooking);
