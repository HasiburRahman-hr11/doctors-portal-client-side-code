import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';

import Service from '../Service/Service';

import fluoride from '../../images/fluoride.png';
import cavity from '../../images/cavity.png';
import whitening from '../../images/whitening.png';

const services = [
    {
        title: 'Fluoride Treatment',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod aspernatur beatae suscipit.',
        image: fluoride
    },
    {
        title: 'Cavity Filling',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod aspernatur beatae suscipit.',
        image: cavity
    },
    {
        title: 'Teeth Whitening',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quod aspernatur beatae suscipit.',
        image: whitening
    }
]

const ServicesSection = () => {
    return (
        <Box component="div" className="services-section" sx={{
            paddingTop: {
                md: '90px',
                xs: '70px'
            }
        }}>
            <Container fixed>
                <Box component="div" className="section-header" id="services" sx={{
                    marginBottom:'50px'
                }}>
                    <Typography variant="h5" component="h5">
                        Our Services
                    </Typography>
                    <Typography variant="h2" component="h2">
                        Services We Provide
                    </Typography>
                </Box>
                <Grid container spacing={3}>
                    {services.map((service, index) => (
                        <Grid item md={4} sm={12} key={service.title + index}>
                            <Service service={service}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ServicesSection;