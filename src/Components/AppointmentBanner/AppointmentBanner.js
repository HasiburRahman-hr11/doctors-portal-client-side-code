import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';

import bannerBg from '../../images/bg.png';
import chair from '../../images/chair.png';
import Calender from '../Shared/Calender/Calender';

const bannerStyle = {
    background:`url(${bannerBg})`,
    backgroundSize:'cover',
    padding:'130px 0 80px 0',
    display:'flex',
    alignItems:'center'
}

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <Box component="div" style={bannerStyle}>
            <Container fixed>
                <Grid container spacing={4} sx={{
                     display:'flex',
                     alignItems:'center'
                }}>
                    <Grid item md={6} xs={12}>
                        <Typography variant="h2" component="h2" sx={{
                           
                            fontSize:'25px',
                            fontWeight:'bold',
                            marginBottom:'20px'
                        }}>
                            Appointment
                        </Typography>
                        <Calender date={date} setDate={setDate} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Box component="img" src={chair} alt="Chair" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentBanner;