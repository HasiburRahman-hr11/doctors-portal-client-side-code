import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';


import people1 from '../../images/people-1.png';
import people2 from '../../images/people-2.png';
import people3 from '../../images/people-3.png';


const testimonials = [
    {
        review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
        name: 'Winson Herry',
        image: people1,
        location: 'California'
    },
    {
        review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
        name: 'Winson Herry',
        image: people2,
        location: 'California'
    },
    {
        review: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English.',
        name: 'Winson Herry',
        image: people3,
        location: 'California'
    }
]

const TestimonialSection = () => {
    return (
        <Box
            component="div"
            className="testimonial-section"
            id="reviews"
            sx={{
                paddingTop: {
                    md: '70px',
                    xs: '50px'
                }
            }}
        >
            <Container fixed>
                <Box component="div" className="section-header" sx={{
                    marginBottom: '50px',
                    textAlign: 'left'
                }}>
                    <Typography variant="h5" component="h5">
                        Testimonial
                    </Typography>
                    <Typography variant="h2" component="h2">
                        What's our Patients Says
                    </Typography>
                </Box>
                <Grid container spacing={4}>
                    {testimonials.map((item, index) => (
                        <Grid item md={4} xs={12} key={index}>
                            <Card sx={{
                                        padding:'25px 20px'
                                    }}>
                                <CardContent>
                                    <Typography variant="p" component="p" sx={{
                                        color: '#5C5965',
                                        marginBottom: '20px'
                                    }}>
                                        {item.review}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Box component="img" src={item.image} alt={item.name} sx={{
                                        maxWidth: '50px',
                                        borderRadius: '50%',
                                        marginRight: '15px'
                                    }} />
                                    <Box component="div">
                                        <Typography variant="h6" component="h6" sx={{
                                            fontWeight: '600',
                                            color: 'var(--primary-color)',
                                            fontSize: '16px'
                                        }}>
                                            {item.name}
                                        </Typography>
                                        <Typography variant="p" component="p" sx={{
                                            color: '#9592A0'
                                        }}>
                                            {item.location}
                                        </Typography>
                                    </Box>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default TestimonialSection;