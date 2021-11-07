import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Bookings from '../Bookings/Bookings';

const AvailableAppointment = ({ date }) => {
    return (
        <Box component="div" sx={{
            marginTop: '70px',
            marginBottom: '90px'
        }}>
            <Container fixed>

                <Typography variant="h2" component="h2" sx={{
                    textAlign: 'center',
                    color: 'var(--primary-color)',
                    marginBottom: '40px',
                    fontSize: '28px',
                    fontWeight: 'bold'
                }}>
                    Available Appointments on {date.toDateString()}
                </Typography>

                <Bookings
                    date={date}
                />

            </Container>
        </Box>
    );
};

export default AvailableAppointment;