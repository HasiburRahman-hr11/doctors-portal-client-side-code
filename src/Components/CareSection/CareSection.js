import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import treatment from '../../images/treatment.png'

const CareSection = () => {
    return (
        <Box component="div" className="care-section" id="about" sx={{
            paddingTop: {
                md: '90px',
                xs: '70px'
            }
        }}>
            <Container fixed>
                <Grid container spacing={{ md: 3, xs: 4 }}>
                    <Grid item md={5} xs={12}>
                        <Box 
                        component="img" 
                        src={treatment} 
                        alt="" 
                        sx={{
                            maxHeight:'500px',
                            objectFit:'cover'
                        }}
                        />
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <Box component="div" sx={{
                            maxWidth:'400px',
                            paddingTop:'30px'
                        }}>
                            <Typography variant="h2" component="h2" sx={{
                                color: 'var(--secondary-color)',
                                fontSize: {
                                    xs:'25px',
                                    md:'35px'
                                },
                                fontWeight:'600'
                            }}>
                                Exceptional Dental Care, on Your Terms
                            </Typography>
                            <Typography variant="p" component="p" sx={{
                                color: '#B9B9B9',
                                margin:'35px 0'
                            }}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus, expedita. Harum, esse delectus. Eveniet amet qui nostrum velit quam, dolorum deleniti aperiam molestias sapiente ducimus?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, praesentium? Dolore praesentium dicta deleniti beatae? Voluptate tenetur magni et sed earum expedita ex ratione est impedit in deleniti, facilis voluptatibus?
                            </Typography>

                            <Link to="#" className="btn btn-primary">Learn More</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CareSection;