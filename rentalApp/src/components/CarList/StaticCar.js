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
import image from "./bmw-x7-40i-4d-suv-grey-2021.png"


import "./style.css";
import DetailsModal from "./DetailsModal";

const StaticCar = (props) => {

    const staticDetails = {
        "carId": "b4f1d93a-c023-4c31-9cd5-4d6955d5e7bd",
        "operatorId": "rentcar_broker",
        "operatorName": "Broker - Sixt",
        "startDate": "2024-05-15T07:23:07.000Z",
        "endDate": "2024-05-20T07:23:07.000Z",
        "costs": {
            "total": 32000,
            "currency": "EUR",
            "symbol": "€"
        },
        "expireAt": "2024-05-20T13:49:54.191Z",
        "agencyReturn": {
            "agencyId": "29715",
            "address": {
                "label": "457 Caledonian Rd, London N7 9BJ, null, null, GB",
                "street": "457 Caledonian Rd, London N7 9BJ",
                "city": null,
                "postcode": null,
                "countryCode": "GB"
            },
            "location": {
                "lat": 51.547492,
                "lng": -0.118309
            },
            "name": "Londres-Islington",
            "openingPeriods": {
                "monday": [{
                    "start": "08:00:00",
                    "end": "18:00:00"
                }],
                "tuesday": [{
                    "start": "08:00:00",
                    "end": "18:00:00"
                }],
                "wednesday": [{
                    "start": "08:00:00",
                    "end": "18:00:00"
                }],
                "thursday": [{
                    "start": "08:00:00",
                    "end": "18:00:00"
                }],
                "friday": [{
                    "start": "08:00:00",
                    "end": "18:00:00"
                }],
                "saturday": [{
                    "start": "08:00:00",
                    "end": "13:00:00"
                }],
                "sunday": [{
                    "start": "08:00:00",
                    "end": "13:00:00"
                }]
            },
            "renter": {
                "id": "103",
                "name": "Sixt"
            },
            "timezone": "Europe/London"
        },
        "agencyLogoUrl": "http://api.lyko.tech/v2.1/rentcars/cars/b4f1d93a-c023-4c31-9cd5-4d6955d5e7bd/agency/picture",
        "agencyReturnLogoUrl": "http://api.lyko.tech/v2.1/rentcars/cars/b4f1d93a-c023-4c31-9cd5-4d6955d5e7bd/agency-return/picture",
        "name": "BMW X7 or similar",
        "carGroup": "SUV",
        "pictureUrl": image,
        "seatNumber": 7,
        "luggage": {
            "big": 1,
            "small": 1
        },
        "co2Emission": 151,
        "category": "compact",
        "eliteCategory": true,
        "type": "4 door",
        "gearbox": "auto",
        "acriss": "CDMR",
        "durationInDays": 5,
        "termsAndConditionsUrl": "http://api.lyko.tech/v2.1/rentcars/cars/b4f1d93a-c023-4c31-9cd5-4d6955d5e7bd/pdf-terms-and-conditions",
        "included": [],
        "excluded": [
            "Additionnal Young Driver Fees (for driver less than 28 ans), to pay on site : 93 EUR (93.00 EUR)"
        ],
        "unlimitedDistance": true,
        "noShowFee": {
            "total": 9400,
            "currency": "EUR",
            "symbol": "€"
        },
        "driverMinimumAge": 25,
        "deductible": {
            "thiefDeductible": {
                "total": 100000,
                "currency": "EUR",
                "symbol": "€"
            },
            "damageDeductible": {
                "total": 100000,
                "currency": "EUR",
                "symbol": "€"
            }
        }
    }

    const min = 2017;
    const max = 2023;
    // const rand = min + Math.random() * (max - min);

    var plate;


    const { t } = useTranslation();

    return (
        <Col md={6}>
            <div className="single-offers">
                <div className="offer-image">
                    <img src={staticDetails.pictureUrl} />
                </div>
                <div className="offer-text">
                    <h3>{staticDetails.name}</h3>
                    <h4>
                        {props.currency.currency}{Math.round((staticDetails.costs.total * props.currency.conversion) / 625)}<span>/ {t("day")}</span>
                    </h4>
                    <ul>
                        {/* <li>
                            <FaCar />
                            {t("model")}: 2022
                        </li> */}
                        <li>
                            <FaCogs />
                            {staticDetails.gearbox === 'auto' ? 'Automatic' : 'Manual'}
                            {/* ternery operator */}
                        </li>
                        <li>
                            <FaCogs />
                            {staticDetails.unlimitedDistance === true ? 'Unlimited Mileage' : 'Mileage: 200km'}
                        </li>
                        {/* <li>
                            <FaCogs />
                            <Icon name='car' size='small' />
                            {staticDetails.type}
                        </li> */}
                        <li>
                            <FaCogs />
                            {staticDetails.operatorName}
                        </li>
                        <li>
                            <FaCar />
                            Minimum Age: {staticDetails.driverMinimumAge}
                        </li>
                        <li>
                            <FaCar />
                            Luggages: {staticDetails.luggage.big} Large{staticDetails.luggage.small > 0 ? <>, {staticDetails.luggage.small} Small</> : null}
                        </li>
                    </ul>
                    <div className="offer-action">
                        <Link to="/upgrades" className="offer-btn-1" onClick={() => { props.storeRental(staticDetails); props.storePlate(plate) }}>
                            {t("rent_car")}
                        </Link>
                    </div>

                    {/* <div className="spacer" /> */}

                    <div className="offer-action">
                        <DetailsModal key={90}
                            name={staticDetails.name}
                            mileage={staticDetails.unlimitedDistance === true ? 'Mileage: Unlimited Mileage' : 'Mileage: 200km'}
                            driverMinimumAge={staticDetails.driverMinimumAge}
                            gearbox={staticDetails.gearbox}
                            luggage={staticDetails.luggage}
                            seatNumber={staticDetails.seatNumber}
                        />
                    </div>
                </div>
            </div>
        </Col>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        storeRental: (rental) => { dispatch(storeRental(rental)) },
        storePlate: (plate) => { dispatch(storePlate(plate)) },
    }
}

const mapStateToProps = (state) => {
    return {
        currency: state.currencyReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StaticCar);