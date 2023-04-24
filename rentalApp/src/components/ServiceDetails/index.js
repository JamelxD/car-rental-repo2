import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { RadioGroup, RadioButton } from 'react-radio-buttons';
import { FaFilePdf, FaRegFileWord, FaCheck } from "react-icons/fa";
import img1 from "../../img/service-details-1.jpg";
import img2 from "../../img/service-details-2.jpg";
import { Icon, Checkbox, Segment, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { setMileage, setProtection, setGPS, setRoadsideAssistance, setInteriorDamage, setChildSeat, setTireProtection, incrementDrivers, decrementDrivers } from "../../redux/actions/upgradesActions";



import "./style.css";

const ServiceDetails = (props) => {
  const { t } = useTranslation();

  console.log(props)

  const adjustedCost = Math.round((props.price) / 190)
  console.log(adjustedCost)

  const onClick = (e) => {
    e.preventDefault();
  };

  const costSheet = {
    'long-mileage': Math.round(adjustedCost * 0.09 * props.duration),
    'standard-mileage': Math.round(adjustedCost * 0.05 * props.duration),
    'basic-mileage': 0,

    'full-protection': Math.round(adjustedCost * 0.11 * props.duration),
    'standard-protection': Math.round(adjustedCost * 0.07 * props.duration),
    'basic-protection': 0,

    'added_driver': Math.round(adjustedCost * 0.07 * props.duration),

    'gps': Math.round(adjustedCost * 0.03 * props.duration),
    'roadside_assistance': Math.round(adjustedCost * 0.04 * props.duration),
    'interior_damage': Math.round(adjustedCost * 0.05 * props.duration),
    'child_seat': Math.round(adjustedCost * 0.02 * props.duration),
    'tire_protection': Math.round(adjustedCost * 0.05 * props.duration)
  }

  // console.log(costSheet['added_driver'])

  return (
    <section className="gauto-service-details-area section_70">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="service-details-right">
              <h3>Add optional upgrades</h3>
              <p>
                Upgrades incur additional costs
              </p>
              <div className="service-accordion" id="accordion">
                <h3>{t("service_details_page.faq_text")}</h3>
                <Accordion>
                  <Accordion.Item eventKey="0" className="single_faq_accordian">
                    <Accordion.Header className="faq_accordian_header">
                      Mileage
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className='radio'>
                        <RadioGroup horizontal value={props.mileage} onChange={(value) => props.setMileage({ val: value, cost: costSheet[value], duration: props.duration })}>
                          <RadioButton value="long-mileage">
                            <div className='upgrade-header'>
                              Long Distance
                            </div>
                            <div>
                              <Icon name='minus' />
                              Unlimited Miles
                            </div>
                          </RadioButton>
                          <RadioButton value="standard-mileage">
                            <div className='upgrade-header'>
                              Standard
                            </div>
                            <div>
                              <Icon name='minus' />
                              Drive up to 750 miles during your rental period
                            </div>
                            <div>
                              <Icon name='minus' />
                              Extra costs incurred for additional miles.
                            </div>
                          </RadioButton>
                          <RadioButton value="basic-mileage">
                            <div className='upgrade-header'>
                              Basic
                            </div>
                            <div>
                              <Icon name='minus' />
                              Drive up to 400 miles during your rental period
                            </div>
                            <div>
                              <Icon name='minus' />
                              Extra costs incurred for additional miles.
                            </div>
                          </RadioButton>
                        </RadioGroup>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className="single_faq_accordian">
                    <Accordion.Header className="faq_accordian_header">
                      Protection
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className='radio'>
                        <RadioGroup horizontal value={props.protection} onChange={(value) => props.setProtection({ val: value, cost: costSheet[value], duration: props.duration })}>
                          <RadioButton value="full-protection">
                            <div className='upgrade-header'>
                              Full Protection
                            </div>
                            <div>
                              <Icon name='minus' />
                              Damage and theft of the rental vehicle - you pay nothing
                            </div>
                            <div>
                              <Icon name='minus' />
                              Damage to tires, windshield and windows
                            </div>
                            <div>
                              <Icon name='minus' />
                              Damage to interior
                            </div>
                            <div>
                              <Icon name='minus' />
                              Roadside assistance
                            </div>
                          </RadioButton>
                          <RadioButton value="standard-protection">
                            <div className='upgrade-header'>
                              Standard Protection
                            </div>
                            <div>
                              <Icon name='minus' />
                              Damage and theft of the rental vehicle - you pay nothing
                            </div>
                            <div>
                              <Icon name='minus' />
                              Damage to tires, windshield and windows
                            </div>
                          </RadioButton>
                          <RadioButton value="basic-protection">
                            <div className='upgrade-header'>
                              Basic
                            </div>
                            <div>
                              <Icon name='minus' />
                              Damage and theft of rental vehicle - up to £1,000.00 financial responsibility
                            </div>
                            <div>
                              <Icon name='minus' />
                              Damage to tires, windshield and windows
                            </div>
                          </RadioButton>
                        </RadioGroup>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className="single_faq_accordian">
                    <Accordion.Header className="faq_accordian_header">
                      Add-Ons
                    </Accordion.Header>
                    <Accordion.Body>

                      <Grid>
                        <Grid.Row columns='equal' stretched>
                          <Grid.Column>
                            <Segment>
                              <div className='upgrade-header'>
                                <Icon name='id card outline' size="big" />
                                Additional Drivers
                              </div>
                              <div>
                                <Icon name='minus' />
                                Add other drivers
                              </div>
                              <div className="counter">
                                <span style={{ cursor: 'pointer' }} onClick={() => props.decrementDrivers(costSheet['added_driver'])}>
                                  <Icon name='minus square outline' size="big" />
                                </span>
                                <span >
                                  {props.additionalDrivers}
                                </span>
                                <span style={{ cursor: 'pointer' }} onClick={() => props.incrementDrivers(costSheet['added_driver'])}>
                                  <Icon name='plus square outline' size="big" />
                                </span>
                              </div>
                            </Segment>
                          </Grid.Column>
                          <Grid.Column>
                            <Segment>
                              <div className='upgrade-header'>
                                <Icon name='compass outline' size="big" />
                                GPS
                              </div>
                              <div>
                                <Icon name='minus' />
                                Add a SatNav to your vehicle
                              </div>
                              <div className="toggle">
                                <Checkbox toggle onChange={() => props.setGPS(costSheet['gps'])} checked={props.gps} />
                              </div>
                            </Segment>
                          </Grid.Column>
                          <Grid.Column>
                            <Segment>
                              <div className='upgrade-header'>
                                <Icon name='wrench' size="big" />
                                Roadside Assistance
                              </div>
                              <div>
                                <Icon name='minus' />
                                Add 24/7 roadside assistance and breakdown cover
                              </div>
                              <div className="toggle">
                                <Checkbox toggle onChange={() => props.setRoadsideAssistance(costSheet['roadside_assistance'])} checked={props.roadsideAssistance} />
                              </div>
                            </Segment>
                          </Grid.Column>
                        </Grid.Row>

                        <Grid.Row columns='equal' stretched>
                          <Grid.Column>
                            <Segment>
                              <div className='upgrade-header'>
                                <Icon name='close' size="big" />
                                Interior damage protection
                              </div>
                              <div>
                                <Icon name='minus' />
                                Cover for any and all damage to the interior of the vehicle
                              </div>
                              <div className="toggle">
                                <Checkbox toggle onChange={() => props.setInteriorDamage(costSheet['interior_damage'])} checked={props.interiorDamage} />
                              </div>
                            </Segment>
                          </Grid.Column>
                          <Grid.Column>
                            <Segment>
                              <div className='upgrade-header'>
                                <Icon name='child' size="big" />
                                Child Seat
                              </div>
                              <div>
                                <Icon name='minus' />
                                Add an infant, toddler or child seat to the vehicle
                              </div>
                              <div className="toggle">
                                <Checkbox toggle onChange={() => props.setChildSeat(costSheet['child_seat'])} checked={props.childSeat} />
                              </div>
                            </Segment>
                          </Grid.Column>
                          <Grid.Column>
                            <Segment>
                              <div className='upgrade-header'>
                                <Icon name='plus circle' size="big" />
                                Tire and windshield protection
                              </div>
                              <div>
                                <Icon name='minus' />
                                Cover for any and all damage to the tires or windshield of the vehicle
                              </div>
                              <div className="toggle">
                                <Checkbox toggle onChange={() => props.setTireProtection(costSheet['tire_protection'])} checked={props.tireProtection} />
                              </div>
                            </Segment>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>


                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
              <div className="tinted">
                <h3>Upgrades Summary</h3>
              </div>
              <p className="upgrade-header">
                You have added:
              </p>
              <div className="simple-text">
                {props.mileage === 'standard-mileage' ? <div><Icon name='minus' />Standard Mileage: Up to 300 miles allowance for your rental period, additional miles will incur extra costs.</div> : 'long-mileage' ? <div><Icon name='minus' />Long Distance: Unlimited miles for the duration of your rental period.</div> : <div><Icon name='minus' />Basic Mileage: Up to 600 miles allowance for your rental period, additional miles will incur extra costs.</div>}
                {props.protection === 'standard-protection' ? <div><Icon name='minus' />Standard Protection: Cover for damage to tires, windshield, windows and theft cover.</div> : 'full-protection' ? <div><Icon name='minus' />Full Protection:  Cover for damage to tires, windshield, windows, interior, theft cover and roadside assistance.</div> : <div><Icon name='minus' />Basic Protection: Damage and theft cover up to £1,000,000, cover for tire, windshield and window damage.</div>}
                {props.additionalDrivers > 0 ? <div><Icon name='minus' />Additional Drivers: {props.additionalDrivers}</div> : <div />}
                {props.gps === true ? <div><Icon name='minus' />GPS Guaranteed for this vehicle</div> : <div />}
                {props.roadsideAssistance === true ? <div><Icon name='minus' />24/7 Roadside assistance and breakdown cover</div> : <div />}
                {props.interiorDamage === true ? <div><Icon name='minus' />Interior damage cover</div> : <div />}
                {props.childSeat === true ? <div><Icon name='minus' />Child seat</div> : <div />}
                {props.tireProtection === true ? <div><Icon name='minus' />Tire and Windscreen cover</div> : <div />}

              </div>
              <div className="offer-action">
                <Link to="/car-booking" className="offer-btn-2">
                  CHECKOUT
                </Link>
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
    mileage: state.upgradesReducer.mileage,
    protection: state.upgradesReducer.protection,
    additionalDrivers: state.upgradesReducer.additionalDrivers,
    gps: state.upgradesReducer.gps,
    roadsideAssistance: state.upgradesReducer.roadsideAssistance,
    interiorDamage: state.upgradesReducer.interiorDamage,
    childSeat: state.upgradesReducer.childSeat,
    tireProtection: state.upgradesReducer.tireProtection,
    price: state.storeRentalReducer.rental.costs.total,
    duration: state.storeRentalReducer.rental.durationInDays,
    upgradesTotal: state.upgradesReducer.upgradesTotal
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setMileage: (option) => { dispatch(setMileage(option)) },
    setProtection: (option) => { dispatch(setProtection(option)) },
    incrementDrivers: (value) => { dispatch(incrementDrivers(value)) },
    decrementDrivers: (value) => { dispatch(decrementDrivers(value)) },
    setGPS: (value) => { dispatch(setGPS(value)) },
    setRoadsideAssistance: (value) => { dispatch(setRoadsideAssistance(value)) },
    setInteriorDamage: (value) => { dispatch(setInteriorDamage(value)) },
    setChildSeat: (value) => { dispatch(setChildSeat(value)) },
    setTireProtection: (value) => { dispatch(setTireProtection(value)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceDetails);
