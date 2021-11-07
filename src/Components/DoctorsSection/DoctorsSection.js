import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';

import doctor from '../../images/doctor-small.png';


const Doctor = () => {
    return (
        <Grid item md={4} xs={12}>
            <Box component="img" src={doctor} alt="Doctor" />
            <Box component="div" sx={{ textAlign: 'center', marginTop: '15px' }}>
                <Typography variant="h6" component="h6" sx={{
                    fontWeight:'bold',
                    fontSize:'17px'
                }}>
                    Dr. Caudie
                </Typography>
                <Box component="div" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <PhoneIcon sx={{
                        fontSize:'20px',
                        color:'var(--primary-color)',
                        marginRight:'5px'
                    }} />
                    <Typography variant="p" component="span" sx={{
                        color:'#B7B6B9',
                        fontSize:'15px'
                    }}>
                        +000 123 45678
                    </Typography>
                </Box>
            </Box>
        </Grid>
    )
}

const DoctorsSection = () => {
    return (
        <Box component="div" className="doctors-section" sx={{
            marginTop: {
                md: '90px',
                xs: '70px'
            }
        }}>
            <Container fixed>
                <Box component="div" className="section-header" sx={{
                    marginBottom: '50px'
                }}>
                    <Typography variant="h5" component="h5">
                        Our Doctors
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Doctor />
                    <Doctor />
                    <Doctor />
                </Grid>
            </Container>
        </Box>
    );
};

export default DoctorsSection;