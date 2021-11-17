import React, { useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

import axios from 'axios';
import { AppointmentContext } from '../../Context/AppointmentContext/AppointmentContext';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {
        lg: '50%',
        md: '60%',
        sm: '80%',
        xs: '85%'
    },
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: {
        sm: '30px',
        xs: '15px'
    }
};

const BookingModal = (props) => {

    const { user } = useAuth();
    const history = useHistory();

    const {userAppointments, setUserAppointments} = useContext(AppointmentContext);

    const {
        openModal,
        handleCloseModal,
        booking,
        date,
        setAlert,
        setAlertMessage,
        setAlertType
    } = props;

    const [bookingFormData, setBookingFormData] = useState({
        name: user?.displayName || '',
        email: user?.email || '',
        address: '',
        phone: '',
        gender: 'male',
        age: '',
        schedule: booking.time,
        service: booking.name,
        price:booking.price
    })

    const handleBookingFormSubmit = async (e) => {
        e.preventDefault();
        const appointmentInfo = {
            ...bookingFormData,
            date: date.toLocaleDateString()
        }

        try {
            const { data } = await axios.post('https://doctors-portal-api.herokuapp.com/appointments/create', appointmentInfo);

            if (data._id) {
                setUserAppointments([...userAppointments , data])
                handleCloseModal();
                setAlert(true);
                setAlertMessage('Booking Successful');
                setAlertType('success');
                history.push('/profile');
            }
        } catch (error) {
            console.log(error);
            setAlert(true);
            setAlertMessage('Something went wrong! Try later.');
            setAlertType('error')
        }

    }


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModal}
            onClose={handleCloseModal}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openModal}>
                <Box sx={style}>
                    <Typography variant="h4" component="h4" sx={{
                        color: 'var(--primary-color)',
                        textAlign: 'center',
                        fontSize: '19px',
                        fontWeight: '500',
                        marginBottom: '25px'
                    }}>
                        {booking.name}
                    </Typography>
                    <form action="" onSubmit={handleBookingFormSubmit}>
                        <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                                <Box component="div" className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Schedule"
                                        value={bookingFormData.schedule}
                                        readOnly
                                    />
                                </Box>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Box component="div" className="input-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={date.toDateString()}
                                        readOnly
                                    />
                                </Box>
                            </Grid>
                        </Grid>


                        <Box component="div" className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Patient Name"
                                value={bookingFormData.name}
                                onChange={(e) => setBookingFormData({
                                    ...bookingFormData, name: e.target.value
                                })}
                                required
                            />
                        </Box>
                        <Box component="div" className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Address"
                                value={bookingFormData.address}
                                onChange={(e) => setBookingFormData({
                                    ...bookingFormData, address: e.target.value
                                })}
                            />
                        </Box>
                        <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                                <Box component="div" className="input-group">
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Age"
                                        value={bookingFormData.age}
                                        onChange={(e) => setBookingFormData({
                                            ...bookingFormData, age: e.target.value
                                        })}
                                        min="0"
                                        required
                                    />
                                </Box>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Box component="div" className="input-group">
                                    <select
                                        name=""
                                        id=""
                                        className="form-control"
                                        placeholder="Gender"
                                        value={bookingFormData.gender}
                                        onChange={(e) => setBookingFormData({
                                            ...bookingFormData, gender: e.target.value
                                        })}
                                        required
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </Box>
                            </Grid>
                        </Grid>


                        <Grid container spacing={3}>
                            <Grid item md={6} xs={12}>
                                <Box component="div" className="input-group">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Phone Number"
                                        value={bookingFormData.phone}
                                        onChange={(e) => setBookingFormData({
                                            ...bookingFormData, phone: e.target.value
                                        })}
                                        required
                                    />
                                </Box>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Box component="div" className="input-group">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={bookingFormData.email}
                                        onChange={(e) => setBookingFormData({
                                            ...bookingFormData, email: e.target.value
                                        })}
                                        readOnly
                                    />
                                </Box>
                            </Grid>
                        </Grid>




                        <Box component="div" sx={{
                            textAlign: 'right'
                        }}>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </Box>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;