import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { AppointmentContext } from '../../../Context/AppointmentContext/AppointmentContext';
import Loading from '../../../Components/Loading/Loading';


const DashboardInfo = () => {
    const { appointments, loading } = useContext(AppointmentContext);

    const totalAppointments = appointments?.length;
    const pendingAppointments = appointments.filter((item) => item.status === 'pending').length;

    const today = new Date().toLocaleDateString();
    const todaysAppointments = appointments.filter((item) => item.date === today).length;

    if (loading) {
        return <Loading />
    }

    return (
        <Box component="div" className="dashboard-info" sx={{
            color: '#fff'
        }}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    <Box component="div" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#F1536E',
                        padding: '20px 15px',
                        borderRadius: '5px'
                    }}>
                        <Typography variant="h2" component="h2" sx={{
                            fontSize: '45px',
                            fontWeight: 'bold',
                            marginRight: '10px'
                        }}>
                            {pendingAppointments}
                        </Typography>
                        <Typography variant="p" component="p" sx={{
                            lineHeight: '18px'
                        }}>
                            Pending <br /> Appointments
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box component="div" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#3DA5F4',
                        padding: '20px 15px',
                        borderRadius: '5px'
                    }}>
                        <Typography variant="h2" component="h2" sx={{
                            fontSize: '45px',
                            fontWeight: 'bold',
                            marginRight: '10px'
                        }}>
                            {todaysAppointments}
                        </Typography>
                        <Typography variant="p" component="p" sx={{
                            lineHeight: '18px'
                        }}>
                            Todays <br /> Appointments
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box component="div" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#00C689',
                        padding: '20px 15px',
                        borderRadius: '5px'
                    }}>
                        <Typography variant="h2" component="h2" sx={{
                            fontSize: '45px',
                            fontWeight: 'bold',
                            marginRight: '10px'
                        }}>
                            {totalAppointments}
                        </Typography>
                        <Typography variant="p" component="p" sx={{
                            lineHeight: '18px'
                        }}>
                            Total <br /> Appointments
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Box component="div" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#FDA006',
                        padding: '20px 15px',
                        borderRadius: '5px'
                    }}>
                        <Typography variant="h2" component="h2" sx={{
                            fontSize: '45px',
                            fontWeight: 'bold',
                            marginRight: '10px'
                        }}>
                            78
                        </Typography>
                        <Typography variant="p" component="p" sx={{
                            lineHeight: '18px'
                        }}>
                            Total <br /> Patients
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashboardInfo;