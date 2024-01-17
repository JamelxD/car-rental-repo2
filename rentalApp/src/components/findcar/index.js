import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { registerLicense } from "@syncfusion/ej2-base";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { storeCars } from '../../redux/actions/storeCarsActions';
import { isLoading } from "../../redux/actions/isLoadingActions";
import { Checkbox } from 'semantic-ui-react'
import BeatLoader from 'react-spinners/BeatLoader'
import { storeDropoffLocation, storePickupLocation } from "../../redux/actions/locationActions";
import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";

import {
  DatePickerComponent,
  TimePickerComponent,
} from "@syncfusion/ej2-react-calendars";
import "./style.css";
import { render } from "react-dom";
import LocationService from "../LocationService/LocationService";
import { storePickupDate } from "../../redux/actions/dateActions";

registerLicense(
  "ORg4AjUWIQA/Gnt2UVhhQlVFfV1dXGVWfFN0QXNfdV5wflBAcDwsT3RfQFljSH9Ud01iW3xfeHFQQg=="
);

const FindCar = (props) => {
  var pickUpLonglatRes;
  var dropOffLonglatRes;
  const { t } = useTranslation();
  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  var current = new Date();

  const [location, setLocation] = useState({ pickup: '', dropoff: '' })
  const [carOption, setCarOption] = useState('all')
  const [startDate, setStartDate] = useState(moment(current.toString()).hours(8).add(1, "day").toISOString())
  const [endDate, setEndDate] = useState(moment(current.toString()).hours(8).add(2, "day").toISOString())
  const [differentLocation, setDifferentLocation] = useState(false)


  const handleLocation = (type, place) => {
    setLocation(location => ({ ...location, [type]: place.formatted_address }))
  }

  useEffect(() => {
    props.isLoading(false)
  }, [])

  const navigate = useNavigate();
  const searchCars = async () => {
    try {
      props.isLoading(true)
      props.storePickupLocation(location.pickup)
      props.storeDropoffLocation(location.dropoff)
      props.storePickupDate(startDate)
      await getPickUpLatLong()
      await getDropOffLatLong()
      const res = await fetch('https://galacticrental.com/api/getCars?' + new URLSearchParams({
        // JSON.stringify({
        //   lat: longlatRes[0].location.lat,
        //   long: longlatRes[0].location.lng,
        //   carOpt: carOption,
        //   stDate: startDate,
        //   eDate: endDate,
        // })
        pickUpLat: pickUpLonglatRes[0].location.lat,
        pickUpLong: pickUpLonglatRes[0].location.lng,
        dropOffLat: dropOffLonglatRes[0].location.lat,
        dropOffLong: dropOffLonglatRes[0].location.lng,
        carOpt: carOption,
        stDate: startDate,
        eDate: endDate,
      }), {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(async response => {
        var result = await response.json()
        if (response.status === 200 && result.length !== 0 && result.code !== "VALIDATION_FAILED") {
          props.storeCars(result)
          props.isLoading(false)
          navigate({
            pathname: '/car-listing',
          });
        }
        else if (result.code === "VALIDATION_FAILED") {
          props.isLoading(false)
          alert('Please fill out the required fields')
        }
        else {
          props.isLoading(false)
          alert('No cars found')
        }
      })

    } catch (error) {
      alert('no cars found')
    }
  }

  const searchCarsOneWay = async () => {
    try {
      props.isLoading(true)
      props.storePickupLocation(location.pickup)
      props.storeDropoffLocation('')
      props.storePickupDate(startDate)
      await getPickUpLatLong()
      const res = await fetch('https://galacticrental.com/api/getCars?' + new URLSearchParams({
        pickUpLat: pickUpLonglatRes[0].location.lat,
        pickUpLong: pickUpLonglatRes[0].location.lng,
        dropOffLat: '',
        dropOffLong: '',
        carOpt: carOption,
        stDate: startDate,
        eDate: endDate,
      }), {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then(async response => {
        var result = await response.json()
        if (response.status === 200 && result.length !== 0 && result.code !== "VALIDATION_FAILED" && moment(startDate).isAfter(moment(endDate)) === false) {
          // console.log(result)
          props.storeCars(result)
          props.isLoading(false)
          navigate({
            pathname: '/car-listing',
          });
        }
        else if (result.code === "VALIDATION_FAILED") {
          props.isLoading(false)
          alert('Please fill out the required fields')
        }
        else if (moment(startDate).isAfter(moment(endDate)) === true) {
          props.isLoading(false)
          alert('Pick up date can not be after the drop off date')
        }
        else if (result.length === 0
          && location.pickup === 'Miami, FL, USA' && startDate.includes('2024-05-15') || location.pickup === '3900 NW 25th Street, 414 Rental Car Ctr, Miami, FL 33142, USA' && startDate.includes('2024-05-15')) {
          props.isLoading(false)
          navigate({
            pathname: '/car-listing',
          });
        }
        else {
          props.isLoading(false)
          alert('No cars found')
        }
      })

    } catch (error) {
      props.isLoading(false)
      alert('No cars found')
    }
  }

  const getPickUpLatLong = async () => {
    try {
      const res = await fetch('https://galacticrental.com/api/getLocation?' + new URLSearchParams({
        query: location.pickup
      }), {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
      )
        .then(async response => {
          pickUpLonglatRes = (await response.json())
        })
    } catch (error) {
    }
  }

  const getDropOffLatLong = async () => {
    try {
      const res = await fetch('https://galacticrental.com/api/getLocation?' + new URLSearchParams({
        query: location.dropoff
      }), {
        method: 'get',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }, { mode: 'cors' })
        .then(async response => {
          dropOffLonglatRes = (await response.json())
        })

    } catch (error) {

    }
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
                    <h3>Search cars here</h3>
                  </div>
                </Col>
                <Col md={8}>
                  <div className="find-form">
                    <form onSubmit={SubmitHandler}>

                      <Row className="parent-block">
                        <Checkbox label="Return to a different location" toggle checked={differentLocation} onChange={() => setDifferentLocation(!differentLocation)} />
                      </Row>

                      <Row>
                        {differentLocation === false ?
                          <Col md={8}>
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
                                placeholder="Pickup point*"
                                onChange={(event) => setLocation({ ...location, pickup: event.currentTarget.value })}
                                location={location}
                                value={location.pickup}
                              />
                            </p>
                          </Col>
                          :
                          <>
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
                                  placeholder="Pickup point*"
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
                          </>
                        }
                        <Col md={4}>
                          <p>
                            <select onChange={(e) => setCarOption(e.target.value)} placeholder="Car Size">
                              <option value='all'>All</option>
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
                        {differentLocation === true ? <Col md={4}>
                          <p>
                            <button type="submit" onClick={() => searchCars()} className="gauto-theme-btn">
                              {t("find_car")}
                            </button>
                          </p>
                        </Col> :
                          <Col md={4}>
                            <p>
                              <button type="submit" onClick={() => searchCarsOneWay()} className="gauto-theme-btn">
                                {t("find_car")}
                              </button>
                            </p>
                          </Col>
                        }

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
    isLoading: (boolean) => { dispatch(isLoading(boolean)) },
    storePickupLocation: (location) => { dispatch(storePickupLocation(location)) },
    storeDropoffLocation: (location) => { dispatch(storeDropoffLocation(location)) },
    storePickupDate: (date) => { dispatch(storePickupDate(date)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindCar)
