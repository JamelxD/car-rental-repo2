import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { registerLicense } from "@syncfusion/ej2-base";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { storeCars } from '../../redux/actions/storeCarsActions';
import { isLoading } from "../../redux/actions/isLoadingActions";
import BeatLoader from 'react-spinners/BeatLoader'
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

import {
  DatePickerComponent,
  TimePickerComponent,
} from "@syncfusion/ej2-react-calendars";
import "./style.css";
import { render } from "react-dom";
import LocationService from "../LocationService/LocationService";

registerLicense(
  "ORg4AjUWIQA/Gnt2VVhiQlFadVlJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdk1jXX9cc3dRR2BbWEM="
);

const FindCar = (props) => {
  var longlatRes;
  const { t } = useTranslation();
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const [location, setLocation] = useState({ pickup: '', dropoff: '' })
  const [carOption, setCarOption] = useState('mini')
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const handleLocation = (type, place) => {
    setLocation(location => ({ ...location, [type]: place.formatted_address }))
  }

  console.log(props.autoLocSuggest)
  console.log(props.autoLocSuggest.formatted_address)
  console.log(location)

  const navigate = useNavigate();
  console.log("car option " + carOption)
  const searchCars = async () => {
    try {
      props.isLoading(true)
      await getLatLong()
      const res = await fetch('http://localhost:9000/api/getCars?' + new URLSearchParams({
        // JSON.stringify({
        //   lat: longlatRes[0].location.lat,
        //   long: longlatRes[0].location.lng,
        //   carOpt: carOption,
        //   stDate: startDate,
        //   eDate: endDate,
        // })
        lat: longlatRes[0].location.lat,
        long: longlatRes[0].location.lng,
        carOpt: carOption,
        stDate: startDate,
        eDate: endDate,
      }), {
        method: 'get'
      }).then(async response => {
        var result = await response.json()
        console.log(result)
        if (response.status === 200 && result.length !== 0) {
          props.storeCars(result)
          props.isLoading(false)
          navigate({
            pathname: '/car-listing',
          });
        } else {
          props.isLoading(false)
          alert('no cars found')
        }
      })

    } catch (error) {
      alert('no cars found')
    }
  }
  const getLatLong = async () => {
    try {
      const res = await fetch('http://localhost:9000/api/getLocation?' + new URLSearchParams({
        query: props.autoLocSuggest.formatted_address
      }), {
        method: 'get'
      })
        .then(async response => {
          longlatRes = (await response.json())
          console.log(longlatRes)
          console.log(longlatRes[0].location.lat)
          console.log(longlatRes[0].location.lng)
          console.log(longlatRes[0].name)
        })

    } catch (error) {

    }
    console.log('hello')
  }

  var cssOverride = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100vh',
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000
  }

  return (
    <section className="gauto-find-area">
      <BeatLoader
        cssOverride={cssOverride}
        loading={props.loading}
        color="#0e0e0e"
      />
      {props.loading === true ? document.body.style.pointerEvents = "none" : document.body.style.pointerEvents = "auto"}
      {props.loading === true ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto"}
      <Container>
        <Row>
          <Col md={12}>
            <div className="find-box">
              <Row className="align-items-center">
                <Col md={4}>
                  <div className="find-text">
                    <h3>{t("search_best_car")}</h3>
                  </div>
                </Col>
                <Col md={8}>
                  <div className="find-form">
                    <form onSubmit={SubmitHandler}>
                      <Row>
                        <Col md={4}>
                          <p>
                            {/* <input
                              type="text"
                              placeholder="Pickup point"
                              onChange={(event) => setPickupPoint(event.currentTarget.value)}
                              value={pickUpPoint}
                            /> */}
                            <LocationService
                              key='pickup'
                              setLocation={(place) => handleLocation('pickup', place)}
                              type="text"
                              placeholder="Pickup point"
                              onChange={(event) => setLocation({ ...location, pickup: event.currentTarget.value })}
                              location={location}
                              value={location.pickup}
                            />
                          </p>
                        </Col>
                        <Col md={4}>
                          <p>
                            <LocationService
                              key='dropoff'
                              setLocation={(place) => handleLocation('dropoff', place)}
                              type="text"
                              placeholder="Drop off point"
                              onChange={(event) => setLocation({ ...location, dropoff: event.currentTarget.value })}
                              location={location}
                              value={location.dropoff}
                            />
                          </p>
                        </Col>
                        <Col md={4}>
                          <p>
                            <select onChange={(e) => setCarOption(e.target.value)} placeholder="Car Size">
                              <option value='mini'>Mini</option>
                              <option value='small'>Small</option>
                              <option value='medium'>Medium</option>
                              <option value='large'>Large</option>
                              <option value='suv'>SUV</option>
                              <option value='minivan'>Minivan</option>
                              <option value='convertible'>Convertible</option>
                              <option value='premium'>Premium</option>
                              <option value='small_vans'>Small Vans</option>
                              <option value='medium_vans'>Medium Vans</option>
                              <option value='large_vans'>Large Vans</option>
                            </select>
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={4}>
                          <p>
                            <DatePickerComponent
                              value={startDate}
                              onChange={(e) => setStartDate(moment(e.value.toString()).hours(8).toISOString())}
                              id="datepicker"
                              placeholder="Start Date"
                            ></DatePickerComponent>
                          </p>
                        </Col>
                        <Col md={4}>
                          <p>
                            <DatePickerComponent
                              value={endDate}

                              onChange={(e) => setEndDate(moment(e.value.toString()).hours(8).toISOString())}

                              id="datepicker"
                              placeholder="End Date"
                            ></DatePickerComponent>
                          </p>
                        </Col>
                        <Col md={4}>
                          <p>
                            <button type="submit" onClick={() => searchCars()} className="gauto-theme-btn">
                              {t("find_car")}
                            </button>
                          </p>
                        </Col>
                      </Row>
                    </form>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
const mapStateToProps = (state) => {
  return {
    loading: state.isLoadingReducer.loader,
    autoLocSuggest: state.locationReducer.pickupLocation
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    storeCars: (carsArray) => { dispatch(storeCars(carsArray)) },
    isLoading: (boolean) => { dispatch(isLoading(boolean)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FindCar)
