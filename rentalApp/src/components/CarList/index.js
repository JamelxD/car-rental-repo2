import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Icon, Image, Segment, Chec } from 'semantic-ui-react';
import { storePlate, storeRental } from "../../redux/actions/storeRentalActions";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {
  FaCar,
  FaCogs,
  FaTachometerAlt,
  FaAngleDoubleRight,
} from "react-icons/fa";
import {
  DatePickerComponent,
  TimePickerComponent,
} from "@syncfusion/ej2-react-calendars";

import img2 from "../../img/nissan-offer.png";
import img3 from "../../img/audi-offer.png";
import img4 from "../../img/bmw-offer.png";
import img5 from "../../img/toyota-offer-2.png";
import img6 from "../../img/marcedes-offer.png";

import "./style.css";
import DetailsModal from "./DetailsModal";
import StaticCar from "./StaticCar";

const CarList = (props) => {
  console.log(props)


  var properties = {
    allCars: 'active',
    automatic: '',
    manual: '',
    unlimitedMiles: '',
    limitedMiles: '',
    mini: '',
    small: '',
    medium: '',
    large: '',
    SUV: ''
  }

  const [condition, setCondition] = useState('');
  const [property, setProperty] = useState(properties)

  // var global = 'ok'

  // const setProperty = async () => {
  //   let newArr = Object.keys(properties).forEach(i => properties[i] = '');
  //   Object.assign(properties, newArr)
  //   // global = 'no';
  //   // properties[property] = "active"
  // }

  // setProperty()


  // console.log(properties)
  console.log(property)

  const min = 2017;
  const max = 2023;
  // const rand = min + Math.random() * (max - min);

  var plate;



  const { t } = useTranslation();

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  return (
    <section className="gauto-car-listing section_70">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="car-list-left">
              <div className="sidebar-widget">
                <ul className="service-menu">
                  <li className={property.allCars}>
                    <Link to='#' onClick={() => {
                      setCondition(''); setProperty({
                        allCars: 'active',
                      })
                    }}>
                      All Cars
                    </Link>
                  </li>
                  <li className={property.automatic}>
                    <Link onClick={() => {
                      setCondition({ type: 'gearbox', opt: 'auto' }); setProperty({
                        automatic: 'active'
                      })
                    }}>
                      Automatic Gearbox
                    </Link>
                  </li>
                  <li className={property.manual}>
                    <Link onClick={() => {
                      setCondition({ type: 'gearbox', opt: 'manual' }); setProperty({
                        manual: 'active'
                      })
                    }}>
                      Manual Gearbox
                    </Link>
                  </li>
                  <li className={property.unlimitedMiles}>
                    <Link onClick={() => {
                      setCondition({ type: 'unlimitedDistance', opt: true }); setProperty({
                        unlimitedMiles: 'active'
                      })
                    }}>
                      Unlimited Miles
                    </Link>
                  </li>
                  <li className={property.limitedMiles}>
                    <Link onClick={() => {
                      setCondition({ type: 'unlimitedDistance', opt: false }); setProperty({
                        limitedMiles: 'active'
                      })
                    }}>
                      Limited Miles
                    </Link>
                  </li>
                  <li className={property.mini}>
                    <Link onClick={() => {
                      setCondition({ type: 'carGroup', opt: 'MINI' }); setProperty({
                        mini: 'active'
                      })
                    }}>
                      Mini Cars
                    </Link>
                  </li>
                  <li className={property.small}>
                    <Link onClick={() => {
                      setCondition({ type: 'carGroup', opt: 'SMALL' }); setProperty({
                        small: 'active'
                      })
                    }}>
                      Small Cars
                    </Link>
                  </li>
                  <li className={property.medium}>
                    <Link onClick={() => {
                      setCondition({ type: 'carGroup', opt: 'MEDIUM' }); setProperty({
                        medium: 'active'
                      })
                    }}>
                      Medium Cars
                    </Link>
                  </li>
                  <li className={property.large}>
                    <Link onClick={() => {
                      setCondition({ type: 'carGroup', opt: 'LARGE' }); setProperty({
                        large: 'active'
                      })
                    }}>
                      Large Cars
                    </Link>
                  </li>
                  <li className={property.SUV}>
                    <Link onClick={() => {
                      setCondition({ type: 'carGroup', opt: 'SUV' }); setProperty({
                        SUV: 'active'
                      })
                    }}>
                      SUV
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={9}>
            <div className="car-listing-right">
              <div className="car-grid-list">
                <Row>
                  <StaticCar />
                  {props.carsData.map(agency => {
                    return (
                      agency.cars.filter(filter => filter[condition.type] === condition.opt).map((item, index) => {
                        // console.log(item)
                        // console.log(index)
                        return (
                          <Col md={6}>
                            <div className="single-offers">
                              <div className="offer-image">
                                <img crossorigin="anonymous" src={item.pictureUrl} alt="offer 1" />
                              </div>
                              <div className="offer-text">
                                <h3>{item.name}</h3>
                                <h4>
                                  £{Math.round((item.costs.total) / 190)}<span>/ {t("day")}</span>
                                </h4>
                                <ul>
                                  <li>
                                    <FaCar />
                                    {t("model")}: {plate = Math.round(min + Math.random() * (max - min)).toString()}
                                  </li>
                                  <li>
                                    <FaCogs />
                                    {item.gearbox === 'auto' ? 'Automatic' : 'Manual'}
                                    {/* ternery operator */}
                                  </li>
                                  <li>
                                    <FaCogs />
                                    {item.unlimitedDistance === true ? 'Unlimited Mileage' : '50 miles a day'}
                                  </li>
                                  <li>
                                    <FaCogs />
                                    <Icon name='car' size='small' />
                                    {item.type}
                                  </li>
                                  <li>
                                    <FaCogs />
                                    {item.operatorName}
                                  </li>
                                  <li>
                                    <FaCar />
                                    Minimum Age: {item.driverMinimumAge}
                                  </li>
                                  <li>
                                    <FaCar />
                                    Luggages: {item.luggage.big + 3}
                                  </li>
                                </ul>
                                <div className="offer-action">
                                  <Link to="/upgrades" className="offer-btn-1" onClick={() => { props.storeRental(item); props.storePlate(plate) }}>
                                    {t("rent_car")}
                                  </Link>
                                </div>

                                {/* <div className="spacer" /> */}

                                <div className="offer-action">
                                  <DetailsModal key={index}
                                    name={item.name}
                                    mileage={item.unlimitedDistance === true ? 'Mileage: Unlimited Mileage' : 'Mileage: 50 miles a day'}
                                    driverMinimumAge={item.driverMinimumAge}
                                    gearbox={item.gearbox}
                                    luggage={item.luggage}
                                    seatNumber={item.seatNumber}
                                  />
                                </div>
                              </div>
                            </div>
                          </Col>
                        )
                      })
                    )
                  }
                  )}
                </Row>
              </div>
              {/* <div className="pagination-box-row">
                <p>Page 1 of 6</p>
                <ul className="pagination">
                  <li className="active">
                    <Link to="/" onClick={onClick}>
                      1
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      2
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      3
                    </Link>
                  </li>
                  <li>...</li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      6
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      <FaAngleDoubleRight />
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </Col>
        </Row>
      </Container>
    </section >
  );
};
const mapStateToProps = (state) => {
  return {
    carsData: state.storeCarsReducer.carsData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    storeRental: (rental) => { dispatch(storeRental(rental)) },
    storePlate: (plate) => { dispatch(storePlate(plate)) },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CarList)

