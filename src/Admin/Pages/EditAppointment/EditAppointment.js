import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';
import AlertBox from '../../../Components/Shared/AlertBox/AlertBox';
import useAuth from '../../../hooks/useAuth';
import { AppointmentContext } from '../../../Context/AppointmentContext/AppointmentContext';

const EditAppointment = () => {
    const { id } = useParams();
    const {token} = useAuth();
    const {appointments , setAppointments} = useContext(AppointmentContext);

    const [loading, setLoading] = useState(true);
    const [spinner, setSpinner] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVerity, setAlertVerity] = useState('');
    const [appointment, setAppointment] = useState({});

    const [appointmentInfo, setAppointmentInfo] = useState({
        status: ''
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSpinner(true);
        try {
            const {data} = await axios.put(`http://localhost:8000/appointments/${id}`, appointmentInfo , {
                headers:{
                    token: `Bearer ${token}`
                }
            });

            const restAppointments = appointments.filter(item => item._id !== data._id);
            const updatedAppointments = [...restAppointments , data];
            const sortedAppointments = updatedAppointments.sort((a,b) =>  new Date(b.createdAt) - new Date(a.createdAt));
            setAppointments(sortedAppointments);

            setAlertMessage('Appointment Updated Successfully');
            setAlertVerity('success');
            setAlert(true);
            setSpinner(false);
        } catch (error) {
            console.log(error);
            setAlertMessage('Something Went Wrong');
            setAlertVerity('error');
            setAlert(true);
            setSpinner(false);
        }
       
    }

    useEffect(() => {
        const getAppointment = async () => {
            try {
                const { data } = await axios.get(`http://localhost:8000/appointments/${id}`);

                setAppointment(data);
                setLoading(false);
                setAppointmentInfo({
                    status: data.status
                });
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

                        {alert && (
                            <AlertBox
                                message={alertMessage}
                                alert={alert}
                                setAlert={setAlert}
                                verity={alertVerity}
                            />
                        )}

                        <Typography variant="h4" component="h4" sx={{
                            fontSize: '22px',
                            fontWeight: 'bold',
                            mb: '25px'
                        }}>
                            Edit Appointment
                        </Typography>

                        <Box component="div" sx={{
                            padding: {
                                md: '30px 30px',
                                xs: '15px 15px'
                            },
                            backgroundColor: '#fff',
                            borderRadius: '5px'
                        }}>
                            <form action="" onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    
                                    <Grid item md={4} xs={12}>
                                        <select
                                            className="form-control"
                                            value={appointmentInfo.status}
                                            onChange={(e) => setAppointmentInfo({ ...appointmentInfo, status: e.target.value })}
                                        >
                                            <option value="pending">Pending</option>
                                            <option value="approved">Approve</option>
                                            <option value="canceled">Cancel</option>
                                        </select>
                                    </Grid>
                                </Grid>
                                <Box component="div" sx={{
                                    mt: '20px'
                                }}>
                                    <button type="submit" className="btn btn-primary" style={{width:'110px'}}>
                                        {spinner ? <CircularProgress sx={{
                                            width: '28px !important',
                                            height: '28px !important',
                                            color: '#fff'
                                        }} /> : 'Submit'}
                                    </button>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </>
            )}
        </>
    );
};

export default EditAppointment;