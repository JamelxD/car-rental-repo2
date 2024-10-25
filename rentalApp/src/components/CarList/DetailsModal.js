import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function DetailsModal(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Link className="offer-btn-2" onClick={handleOpen}>Details</Link>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {props.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <ul>
                            <li>
                                {props.mileage}
                            </li>
                            <li>
                                Driver's minimum age: {props.driverMinimumAge}
                            </li>
                            <li>
                                Gearbox: {props.gearbox === 'auto' ? 'Automatic' : 'Manual'}
                            </li>
                            <li>
                                Number of seats: {props.seatNumber}
                            </li>
                            {props.hertz === true ?
                                <>
                                    <li>
                                        Luggages: 2 Large Bags, 1 Small bag
                                    </li>
                                    <li>
                                        Number of Doors: 5 doors
                                    </li>
                                    <li>
                                        Air Conditioning
                                    </li>
                                </>


                                : <></>}
                        </ul>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}