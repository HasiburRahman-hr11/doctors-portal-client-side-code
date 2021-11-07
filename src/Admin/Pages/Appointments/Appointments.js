import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import DailyAppointments from '../../Components/DailyAppointments/DailyAppointments';
import Calender from '../../../Components/Shared/Calender/Calender';
import AllAppointments from '../../Components/AllAppointments/AllAppointments';


const Appointments = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <Navbar />
            <Box component="div" className="admin-page appointments">
                <Typography variant="h4" component="h4" sx={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    mb: '25px'
                }}>
                    Appointments
                </Typography>

                <Grid container spacing={{ xs: 3 }}>
                    <Grid item md={5} xs={12}>
                        <Calender date={date} setDate={setDate} />
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <DailyAppointments date={date} />
                    </Grid>
                </Grid>

                <AllAppointments title="All Appointments"/>

            </Box>
        </>
    );
};

export default Appointments;