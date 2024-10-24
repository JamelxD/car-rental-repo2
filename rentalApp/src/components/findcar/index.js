import React, { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { registerLicense } from "@syncfusion/ej2-base";
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { clearCars, storeCars } from '../../redux/actions/storeCarsActions';
import { isLoading } from "../../redux/actions/isLoadingActions";
import { Checkbox } from 'semantic-ui-react'
import BeatLoader from 'react-spinners/BeatLoader'
import { storeDropoffLocation, storePickupLocation } from "../../redux/actions/locationActions";
import { storeTimes } from "../../redux/actions/timeActions";
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
  "Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1NpRmJGfV5ycEVCal9UTnNZUiweQnxTdEFiWX1acHBWQ2VaU0x3Xg=="
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
  const [pickupTime, setPickupTime] = useState('10:00')
  const [dropoffTime, setDropoffTime] = useState('10:00')
  const [startDate, setStartDate] = useState(moment(current.toString()).hours(8).add(1, "day").toISOString())
  const [endDate, setEndDate] = useState(moment(current.toString()).hours(8).add(2, "day").toISOString())
  const [differentLocation, setDifferentLocation] = useState(false)

  const handleLocation = (type, place) => {
    setLocation(location => ({ ...location, [type]: place.formatted_address }))
  }

  useEffect(() => {
    props.isLoading(false)
    props.clearCars();
  }, [])

  // console.log(location);

  const navigate = useNavigate();
  const searchCars = async () => {
    try {
      props.isLoading(true)
      props.storePickupLocation(location.pickup)
      props.storeDropoffLocation(location.dropoff)
      props.storePickupDate(startDate)
      props.storeTimes({ pickupTime: pickupTime, dropoffTime: dropoffTime })
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
        if (moment(startDate).isAfter(moment(endDate)) === true) {
          props.isLoading(false)
          alert('Pick up date can not be after the drop off date')
        }
        else if (response.status === 200 && result.length !== 0 && result.code !== "VALIDATION_FAILED") {
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
        else if ((result.length === 0
          && location.pickup === 'Houston, TX, USA' && startDate.includes('2024-05-20')) || (location.pickup === '2800 N Terminal Rd, Houston, TX 77032, USA' && startDate.includes('2024-05-20')) || (location.pickup === '8100 Monroe Rd, Houston, TX 77061, USA' && startDate.includes('2024-05-20'))) {
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
      if ((location.pickup === 'Houston, TX, USA' && startDate.includes('2024-05-20')) || (location.pickup === '2800 N Terminal Rd, Houston, TX 77032, USA' && startDate.includes('2024-05-20')) || (location.pickup === '8100 Monroe Rd, Houston, TX 77061, USA' && startDate.includes('2024-05-20'))) {
        props.isLoading(false)
        navigate({
          pathname: '/car-listing',
        });
      } else {
        props.isLoading(false)
        alert('No cars found')
      }
    }
  }

  const searchCarsOneWay = async () => {
    try {
      props.isLoading(true)
      props.storePickupLocation(location.pickup)
      props.storeDropoffLocation('')
      props.storePickupDate(startDate)
      props.storeTimes({ pickupTime, dropoffTime })
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
        // console.log(result)
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
        else if ((result.length === 0
          && location.pickup === 'Melbourne VIC, Australia' && startDate.includes('2024-11-15')) || (location.pickup === 'Arrival Dr, Melbourne Airport VIC 3045, Australia' && startDate.includes('2024-11-15')) || (location.pickup === 'Melbourne Airport (HERTZ Car Hire - Arrival Drive, Ground Floor, Terminal Car Park, Tullamarine, Australia, VIC 3043)' && startDate.includes('2024-11-15'))) {
          // && location.pickup === 'Dubai - United Arab Emirates' && startDate.includes('2024-02-03') || location.pickup.includes('Airport Road - Al Garhoud Airport') && startDate.includes('2024-02-03')) {
          props.isLoading(false)
          navigate({
            pathname: '/car-listing',
          });
        }
        else if ((result.length === 0
          && location.pickup === 'Gold Coast QLD, Australia' && startDate.includes('2024-11-06')) || (location.pickup === 'Eastern Ave, Bilinga QLD 4225, Australia' && startDate.includes('2024-11-06')) || (location.pickup === '84/89 Ferny Ave, Surfers Paradise QLD 4217, Australia' && startDate.includes('2024-11-06'))) {
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

      if ((location.pickup === 'Melbourne VIC, Australia' && startDate.includes('2024-11-15')) || (location.pickup === 'Arrival Dr, Melbourne Airport VIC 3045, Australia' && startDate.includes('2024-11-15')) || (location.pickup === 'Melbourne Airport (HERTZ Car Hire - Arrival Drive, Ground Floor, Terminal Car Park, Tullamarine, Australia, VIC 3043' && startDate.includes('2024-11-15'))) {
        props.isLoading(false)
        navigate({
          pathname: '/car-listing',
        });
      } else if ((location.pickup === 'Gold Coast QLD, Australia' && startDate.includes('2024-11-06')) || (location.pickup === 'Eastern Ave, Bilinga QLD 4225, Australia' && startDate.includes('2024-11-15')) || (location.pickup === '84/89 Ferny Ave, Surfers Paradise QLD 4217, Australia' && startDate.includes('2024-11-06'))) {
        props.isLoading(false)
        navigate({
          pathname: '/car-listing',
        });
      } else {
        props.isLoading(false)
        alert('No cars found')
      }
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
                        <Col md={2}>
                          <p>
                            <select onChange={(e) => setPickupTime(e.target.value)} placeholder="Pickup Time">
                              <option value="00:00">00:00</option>
                              <option value="00:30">00:30</option>
                              <option value="01:00">01:00</option>
                              <option value="01:30">01:30</option>
                              <option value="02:00">02:00</option>
                              <option value="02:30">02:30</option>
                              <option value="03:00">03:00</option>
                              <option value="03:30">03:30</option>
                              <option value="04:00">04:00</option>
                              <option value="04:30">04:30</option>
                              <option value="05:00">05:00</option>
                              <option value="05:30">05:30</option>
                              <option value="06:00">06:00</option>
                              <option value="06:30">06:30</option>
                              <option value="07:00">07:00</option>
                              <option value="07:30">07:30</option>
                              <option value="08:00">08:00</option>
                              <option value="08:30">08:30</option>
                              <option value="09:00">09:00</option>
                              <option value="09:30">09:30</option>
                              <option value="10:00">10:00</option>
                              <option value="10:30">10:30</option>
                              <option value="11:00">11:00</option>
                              <option value="11:30">11:30</option>
                              <option value="12:00">12:00</option>
                              <option value="12:30">12:30</option>
                              <option value="13:00">13:00</option>
                              <option value="13:30">13:30</option>
                              <option value="14:00">14:00</option>
                              <option value="14:30">14:30</option>
                              <option value="15:00">15:00</option>
                              <option value="15:30">15:30</option>
                              <option value="16:00">16:00</option>
                              <option value="16:30">16:30</option>
                              <option value="17:00">17:00</option>
                              <option value="17:30">17:30</option>
                              <option value="18:00">18:00</option>
                              <option value="18:30">18:30</option>
                              <option value="19:00">19:00</option>
                              <option value="19:30">19:30</option>
                              <option value="20:00">20:00</option>
                              <option value="20:30">20:30</option>
                              <option value="21:00">21:00</option>
                              <option value="21:30">21:30</option>
                              <option value="22:00">22:00</option>
                              <option value="22:30">22:30</option>
                              <option value="23:00">23:00</option>
                              <option value="23:30">23:30</option>
                            </select>
                          </p>
                        </Col>
                        <Col md={2}>
                          <p>
                            <select onChange={(e) => setDropoffTime(e.target.value)} placeholder="Dropoff Time">
                              <option value="00:00">00:00</option>
                              <option value="00:30">00:30</option>
                              <option value="01:00">01:00</option>
                              <option value="01:30">01:30</option>
                              <option value="02:00">02:00</option>
                              <option value="02:30">02:30</option>
                              <option value="03:00">03:00</option>
                              <option value="03:30">03:30</option>
                              <option value="04:00">04:00</option>
                              <option value="04:30">04:30</option>
                              <option value="05:00">05:00</option>
                              <option value="05:30">05:30</option>
                              <option value="06:00">06:00</option>
                              <option value="06:30">06:30</option>
                              <option value="07:00">07:00</option>
                              <option value="07:30">07:30</option>
                              <option value="08:00">08:00</option>
                              <option value="08:30">08:30</option>
                              <option value="09:00">09:00</option>
                              <option value="09:30">09:30</option>
                              <option value="10:00">10:00</option>
                              <option value="10:30">10:30</option>
                              <option value="11:00">11:00</option>
                              <option value="11:30">11:30</option>
                              <option value="12:00">12:00</option>
                              <option value="12:30">12:30</option>
                              <option value="13:00">13:00</option>
                              <option value="13:30">13:30</option>
                              <option value="14:00">14:00</option>
                              <option value="14:30">14:30</option>
                              <option value="15:00">15:00</option>
                              <option value="15:30">15:30</option>
                              <option value="16:00">16:00</option>
                              <option value="16:30">16:30</option>
                              <option value="17:00">17:00</option>
                              <option value="17:30">17:30</option>
                              <option value="18:00">18:00</option>
                              <option value="18:30">18:30</option>
                              <option value="19:00">19:00</option>
                              <option value="19:30">19:30</option>
                              <option value="20:00">20:00</option>
                              <option value="20:30">20:30</option>
                              <option value="21:00">21:00</option>
                              <option value="21:30">21:30</option>
                              <option value="22:00">22:00</option>
                              <option value="22:30">22:30</option>
                              <option value="23:00">23:00</option>
                              <option value="23:30">23:30</option>
                            </select>
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
    autoLocSuggest: state.locationReducer.pickupLocation,
    times: state.timeReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeCars: (carsArray) => { dispatch(storeCars(carsArray)) },
    isLoading: (boolean) => { dispatch(isLoading(boolean)) },
    storePickupLocation: (location) => { dispatch(storePickupLocation(location)) },
    storeDropoffLocation: (location) => { dispatch(storeDropoffLocation(location)) },
    storePickupDate: (date) => { dispatch(storePickupDate(date)) },
    clearCars: () => { dispatch(clearCars()) },
    storeTimes: (times) => { dispatch(storeTimes(times)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FindCar)
