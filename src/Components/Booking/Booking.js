import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setAlert, setAlertMessage , setAlertType }) => {
    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    return (
        <>
            <Box component="div" sx={{
                backgroundColor: '#fff',
                padding: '20px 20px',
                boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                borderRadius: '5px',
                textAlign: 'center'
            }}>
                <Typography variant="h4" component="h4" sx={{
                    color: 'var(--primary-color)',
                    marginBottom: '10px',
                    fontSize: '22px',
                    fontWeight: 'bold'
                }}>
                    {booking.name}
                </Typography>
                <Typography variant="h5" component="h5" sx={{
                    marginBottom: '10px',
                    fontSize: '18px',
                    fontWeight: 'bold'
                }}>
                    {booking.time}
                </Typography>
                <Typography variant="p" component="p" sx={{
                    marginBottom: '15px',
                    color: '#8B8888',
                    textTransform: 'uppercase'
                }}>
                    {booking.spaces} space{booking.spaces > 1 ? 's' : ''} available
                </Typography>
                <Button onClick={handleOpenModal} className="btn btn-primary" sx={{
                    color: '#fff',
                    padding: '10px 15px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold'
                }}>Book Appointment</Button>
            </Box>

            <BookingModal
                openModal={openModal}
                handleCloseModal={handleCloseModal}
                booking={booking}
                date={date}
                setAlert={setAlert}
                setAlertMessage={setAlertMessage}
                setAlertType={setAlertType}
            />
        </>
    );
};

export default Booking;