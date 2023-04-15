import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { Icon, Image } from 'semantic-ui-react';
import { storeRental } from "../../redux/actions/storeRentalActions";
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

const CarList = (props) => {
  console.log(props)
  const { t } = useTranslation();

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const onClick = (e) => {
    e.preventDefault();
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const detailsModal = () => {
    return (
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }

  return (
    <section className="gauto-car-listing section_70">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="car-list-left">
              <div className="sidebar-widget">
                <form onSubmit={SubmitHandler}>
                  <p>
                    <input type="text" placeholder={t("from_address")} />
                  </p>
                  <p>
                    <input type="text" placeholder={t("to_address")} />
                  </p>
                  <p>
                    <select>
                      <option>{t("ac_car")}</option>
                      <option>{t("non_ac_car")}</option>
                    </select>
                  </p>
                  <p>
                    <DatePickerComponent
                      id="datepicker"
                      placeholder={t("journey_date")}
                    ></DatePickerComponent>
                  </p>
                  <p>
                    <TimePickerComponent
                      id="timepicker"
                      placeholder={t("journey_time")}
                    ></TimePickerComponent>
                  </p>
                  <p>
                    <button type="submit" className="gauto-theme-btn">
                      {t("find_car")}
                    </button>
                  </p>
                </form>
              </div>
              <div className="sidebar-widget">
                <ul className="service-menu">
                  <li className="active">
                    <Link to="/" onClick={onClick}>
                      All Brands<span>(2376)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      Toyota<span>(237)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      nissan<span>(123)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      mercedes<span>(23)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      hyundai<span>(467)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      Audi<span>(123)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      datsun<span>(23)</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" onClick={onClick}>
                      Mitsubishi<span>(223)</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={8}>
            <div className="car-listing-right">
              <div className="car-grid-list">
                <Row>
                  {props.carsData.map(agency => {
                    return (
                      agency.cars.map((item, index) => {
                        console.log(item)
                        console.log(index)
                        return (
                          <Col md={6}>
                            <div className="single-offers">
                              <div className="offer-image">
                                <Link to="/car-booking">
                                  <img crossorigin="anonymous" src={item.pictureUrl} alt="offer 1" />
                                </Link>
                              </div>
                              <div className="offer-text">
                                <Link to="/car-booking">
                                  <h3>{item.name}</h3>
                                </Link>
                                <h4>
                                  £{Math.round((item.costs.total) / 190)}<span>/ {t("day")}</span>
                                </h4>
                                <ul>
                                  <li>
                                    <FaCar />
                                    {t("model")}:2017
                                  </li>
                                  <li>
                                    <FaCogs />
                                    {item.gearbox === 'auto' ? 'Automatic' : 'Manual'}
                                    {/* ternery operator */}
                                  </li>
                                  <li>
                                    <FaCogs />
                                    {item.unlimitedDistance === true ? 'Unlimited Mileage' : '50 Miles a day'}
                                  </li>
                                  <li>
                                    <FaCogs />
                                    <Icon name='car' size='small' />
                                    {item.type}
                                  </li>
                                  <li>
                                    <li>
                                      <FaCogs />
                                      {item.operatorName}
                                    </li>
                                    <FaTachometerAlt />
                                    20kmpl
                                  </li>
                                  <li>
                                    <FaCar />
                                    Minimum Age: {item.driverMinimumAge}
                                  </li>
                                  <li>
                                    <FaCar />
                                    Luggage: {item.luggage.big} Big, {item.luggage.small} Small
                                  </li>
                                </ul>
                                <div className="offer-action">
                                  <Link to="/car-booking" className="offer-btn-1" onClick={() => props.storeRental(item)}>
                                    {t("rent_car")}
                                  </Link>
                                  {/* <Link className="offer-btn-2" onClick={() => console.log('hello')}>
                                    {t("details")}
                                  </Link> */}
                                  <DetailsModal className="offer-btn-2" key={index}
                                    name={item.name}
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
              <div className="pagination-box-row">
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
    carsData: state.storeCarsReducer.carsData
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    storeRental: (rental) => { dispatch(storeRental(rental)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CarList)

