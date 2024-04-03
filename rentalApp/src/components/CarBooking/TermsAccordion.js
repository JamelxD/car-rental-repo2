import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PersonIcon from '@mui/icons-material/Person';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { includedInRentalPrice } from './includedInRentalPrice';
import { notIncludedInRentalPrice } from './notIncludedInRentalPrice';
import { whatYouNeedAtPickup } from './whatYouNeedAtPickup';
import { depositsExcessAndCover } from './depositsExcessAndCover';
import { fuelPolicy } from './fuelPolicy';
import { extraServices } from './extraServices';
import { extraEquipment } from './extraEquipment';
import { importantInfo } from './importantInfo';

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

export default function TermsAccordion() {
    return (
        <div>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <div style={{ fontWeight: 'bold' }}>Important Information</div>
                </AccordionSummary>
                <AccordionDetails>
                    <div style={{ fontWeight: 'bold' }}>Driver & licence requirements</div>
                    <p>
                        When you pick the car up, you'll need:
                        <br />
                        <PersonIcon style={{ marginRight: '5px' }} />
                        Passport or national ID card
                        <br />
                        <RecentActorsIcon style={{ marginRight: '5px' }} />
                        Driving licence
                        <br />
                        <CreditCardIcon style={{ marginRight: '5px' }} />
                        Credit card
                    </p>
                    <Divider />
                    <div style={{ fontWeight: 'bold', marginTop: '10px' }}>Security deposit of US$1281.90</div>
                    <p>
                        At pick-up, the main driver will leave a refundable security deposit of US$1,281.90 on their credit card. Cash and debit cards are not accepted. The counter staff will confirm how much this will be.
                        <br />
                        <br />
                        Accepted cards:
                        <br />
                        <AddIcon style={{ marginRight: '5px' }} />
                        Mastercard
                        <br />
                        <AddIcon style={{ marginRight: '5px' }} />
                        Visa
                    </p>
                    <Divider />
                    <div style={{ fontWeight: 'bold', marginTop: '10px' }}>Damage Excess of US$0</div>
                    <p>
                        If the car’s bodywork was damaged during your rental, you wouldn't pay anything at all towards repairs.This cover is only valid if you stick to the terms of the rental agreement. It doesn't cover other parts of the car (e.g. windows, wheels, interior or undercarriage), or charges (e.g. for towing or off-road time), or anything in the car (e.g. child seats, GPS devices or personal belongings).
                    </p>
                    <Divider />
                    <div style={{ fontWeight: 'bold', marginTop: '10px' }}>Unlimited Mileage</div>
                    <p>
                        Your rental includes unlimited free kilometres.
                    </p>
                    <Divider />
                    <p style={{ fontSize: '10px', marginTop: '10px', fontWeight: 'bold' }}>
                        Please see the Service Provider’s full terms and conditions below, which include the full name and company registered address of your Service Provider, information on and fees of extra products and services purchasable at the counter or based on your use of the rental, such as driving cross border and, if any, pick-up and drop-off grace periods.
                    </p>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <div style={{ fontWeight: 'bold' }}>Full Rental Terms</div>
                </AccordionSummary>
                <AccordionDetails>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <div style={{ fontWeight: 'bold' }}>Included in the Rental Price</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            {includedInRentalPrice()}
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <div style={{ fontWeight: 'bold' }}>Not Included in the Rental Price</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            {notIncludedInRentalPrice()}
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <div style={{ fontWeight: 'bold' }}>What You Need at Pick-up</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            {whatYouNeedAtPickup()}
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <div style={{ fontWeight: 'bold' }}>Deposits, Excess and Cover</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            {depositsExcessAndCover()}
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <div style={{ fontWeight: 'bold' }}>Fuel Policy</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            {fuelPolicy()}
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <div style={{ fontWeight: 'bold' }}>Extra Services (payable at counter)</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            {extraServices()}
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <div style={{ fontWeight: 'bold' }}>Extra Equipment</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            {extraEquipment()}
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <div style={{ fontWeight: 'bold' }}>Important Information</div>
                        </AccordionSummary>
                        <AccordionDetails>
                            {importantInfo()}
                        </AccordionDetails>
                    </Accordion>

                </AccordionDetails>
            </Accordion>
        </div>
    );
}