import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Booking from '../Booking/Booking';
import AlertBox from '../Shared/AlertBox/AlertBox';


const bookings = [
    {
        _id: '01',
        name: 'Teeth Orthodontics',
        time: '10.00 AM - 11.00 AM',
        spaces: 10,
        price:'21'
    },
    {
        _id: '02',
        name: 'Cosmetic Dentistry',
        time: '11.05 AM - 12.30 AM',
        spaces: 15,
        price:'25'
    },
    {
        _id: '03',
        name: 'Teeth Cleaning',
        time: '12.35 PM - 01.45 PM',
        spaces: 12,
        price:'15'
    },
    {
        _id: '04',
        name: 'Cavity Protection',
        time: '05.00 PM - 06.30 PM',
        spaces: 15,
        price:'20'
    },
    {
        _id: '05',
        name: 'Teeth Implants',
        time: '06.35 PM - 08.00 PM',
        spaces: 12,
        price:'30'
    },
    {
        _id: '06',
        name: 'Teeth Fillings',
        time: '08.00 PM - 09.30 PM',
        spaces: 11,
        price:'25'
    },

]


const Bookings = ({ date }) => {
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    return (
        <Box component="div">
            <AlertBox
                message={alertMessage}
                alert={alert}
                setAlert={setAlert}
                verity={alertType || 'success'}
            />
            <Grid container spacing={3}>
                {
                    bookings.map(booking => (
                        <Grid item md={4} xs={12} key={booking._id}>
                            <Booking
                                booking={booking}
                                date={date}
                                setAlert={setAlert}
                                setAlertMessage={setAlertMessage}
                                setAlertType={setAlertType}
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};

export default Bookings;