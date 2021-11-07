import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import doctor from '../../images/doctor.png';
import appointmentBg from '../../images/appointment-bg.png';

const sectionStyle = {
    background: `linear-gradient(rgba(58, 66, 86 , 0.9),rgba(58, 66, 86 , 0.9)) , url(${appointmentBg})`,
    backgroundRepeat: 'no-repeat'
}

const AppointmentSection = () => {
    return (
        <Box
            component="div"
            className="appointment-section"
            style={sectionStyle}
            sx={{
                marginTop: {
                    md: '180px',
                    xs: '100px'
                }
            }}>
            <Container fixed>
                <Grid container spacing={4} sx={{
                    flexDirection:{
                        md:'row',
                        xs:'column-reverse'
                    }
                }}>
                    <Grid item md={5} xs={12}>
                        <Box component="img" src={doctor} alt="Make Appointment" sx={{
                            marginTop: {
                                lg:'-140px',
                                xs:'0'
                            },
                            marginBottom:'-5px'
                        }} />
                    </Grid>
                    <Grid item md={7} xs={12} sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Box component="div" sx={{
                            paddingTop:{
                                xs:'40px',
                                md:'0'
                            }
                        }}>
                            <Typography variant="h5" component="h5" sx={{
                                color: 'var(--primary-color)',
                                fontSize: '20px',
                                fontWeighr: '600',
                                textTransform: 'uppercase'
                            }}>
                                Appointment
                            </Typography>
                            <Typography variant="h2" component="h2" sx={{
                                fontSize: {
                                    xs:'25px',
                                    md:'35px'
                                },
                                color: '#fff',
                                margin: '20px 0'
                            }}>
                                Make an Appointment Today
                            </Typography>

                            <Typography variant="p" component="p" sx={{
                                color: '#fff',
                                marginBottom: '30px'
                            }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquam animi veritatis aspernatur. Odit ipsa, vitae blanditiis quidem quibusdam 
                            </Typography>
                            <Link to="/appointment" className="btn btn-primary">Learn More</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AppointmentSection;