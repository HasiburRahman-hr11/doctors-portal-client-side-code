import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Loading from '../../../Components/Loading/Loading';
import axios from 'axios';

const SingleAppointment = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [appointment, setAppointment] = useState({});

    useEffect(() => {
        const getAppointment = async () => {
            try {
                const { data } = await axios.get(`https://doctors-portal-api.herokuapp.com/appointments/${id}`);

                setAppointment(data);
                setLoading(false);

            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        getAppointment();
    }, [id]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Navbar />
                    <Box component="div" className="admin-page edit-appointment">

                        <Box component="div" sx={{
                            padding: {
                                md: '30px 30px',
                                xs: '15px 15px'
                            },
                            backgroundColor: '#fff',
                            borderRadius: '5px'
                        }}>

                            <Grid container spacing={3}>
                                <Grid item md={6} xs={12}>
                                    <Typography variant="h5" component="h5" sx={{
                                        mb: '20px',
                                        color: '#666'
                                    }}>
                                        Patient Information
                                    </Typography>

                                    <Typography variant="p" component="p" sx={{
                                        mb: '5px'
                                    }}>
                                        Patient Name: <strong>{appointment.name}</strong>
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{
                                        mb: '5px'
                                    }}>
                                        Patient Age: <strong>{appointment.age}</strong>
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{
                                        mb: '5px',
                                        textTransform:'capitalize'
                                    }}>
                                        Patient Gender: <strong>{appointment.gender}</strong>
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{
                                        mb: '5px'
                                    }}>
                                        Phone: <strong>{appointment.phone}</strong>
                                    </Typography>
                                    {appointment.email && (
                                        <Typography variant="p" component="p" sx={{
                                            mb: '5px'
                                        }}>
                                            Email: <strong>{appointment.email}</strong>
                                        </Typography>
                                    )}
                                    {appointment.address && (
                                        <Typography variant="p" component="p" sx={{
                                            mb: '5px'
                                        }}>
                                            Address: <strong>{appointment.address}</strong>
                                        </Typography>
                                    )}
                                </Grid>

                                <Grid item md={6} xs={12}>
                                    <Typography variant="h5" component="h5" sx={{
                                        mb: '20px',
                                        color: '#666'
                                    }}>
                                        Booking Details
                                    </Typography>

                                    <Typography variant="p" component="p" sx={{
                                        mb: '5px'
                                    }}>
                                        Service: <strong>{appointment.service}</strong>
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{
                                        mb: '5px'
                                    }}>
                                        Date: <strong>{appointment.date}</strong>
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{
                                        mb: '5px'
                                    }}>
                                        Schedule: <strong>{appointment.schedule}</strong>
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{
                                       textTransform:'capitalize'
                                    }}>
                                        Booking Status: <strong>{appointment.status}</strong>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </>
            )}
        </>
    );
};

export default SingleAppointment;