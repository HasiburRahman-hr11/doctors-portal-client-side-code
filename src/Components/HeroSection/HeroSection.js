import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import heroBg from '../../images/bg.png';
import chair from '../../images/chair.png';

const HeroSection = () => {
    return (
        <Box component="div" className="hero-section" id="hero">
            <Grid container>
                <Grid item md={8} xs={12}>
                    <Box component="div" className="hero-left" sx={{
                        paddingLeft: {
                            md: '80px'
                        },
                        background: `url(${heroBg})`,
                        backgroundSize: 'cover',
                        minHeight: {
                            md: '700px',
                            sm:'500px',
                            xs:'400px'
                        },
                        display: 'flex',
                        alignItems: 'center',
                        paddingTop:{
                            xs:'50px',
                            md:'0'
                        }
                    }}>
                        <Container>
                            <Typography variant="h1" component="h1" sx={{
                                fontSize: {
                                    md: '40px',
                                    lg: '50px',
                                    sm:'30px',
                                    xs:'25px'
                                },
                                fontWeight: '600',
                                color: '#192941',
                                maxWidth: {
                                    md: '400px'
                                }
                            }}>
                                Your New Smile Starts here
                            </Typography>
                            <Typography variant="p" component="p" sx={{
                                fontSize: '14px',
                                color: '#BBBBBB',
                                margin: '30px 0',
                                maxWidth: {
                                    md: '400px'
                                }
                            }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus voluptates minima ipsum quibusdam deserunt quae, aliquid quidem repudiandae assumenda sed?
                            </Typography>
                            <Link to="/appointment" className="btn btn-primary">GET APPOINTMENT</Link>
                        </Container>
                    </Box>
                </Grid>
                <Grid item md={4} sx={{
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'block'
                    }
                }}>
                    <Box component="div" className="hero-right" sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: '100%',
                        background: '#3A4256'
                    }}>
                        <Box component="img" src={chair} alt="Chair" sx={{
                            objectFit: 'cover',
                            marginLeft: {
                                xl:'-30%',
                                lg:'-50%',
                                md:'-30%'
                            },
                            minWidth: {
                                lg: '580px'
                            },
                            maxHeight:'450px'
                        }} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HeroSection;