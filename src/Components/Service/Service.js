import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Service = ({service}) => {
    return (
        <Box component="div" className="service-item" sx={{
            textAlign:'center',
            padding:'20px 20px'
        }}>
            <Box 
            component="img" 
            src={service.image} 
            alt={service.title} 
            sx={{
                maxWidth:'60px'
            }}
            />
            <Box
                component="div"
                className="service-content"
            >
                <Typography variant="h5" component="h5" sx={{
                    margin:'25px 0',
                    fontSize:'18px',
                    color:'#4D5561',
                    fontWeight:'500'
                }}>
                    {service.title}
                </Typography>
                <Typography variant="p" component="p" sx={{
                    color:'#B9B9B9'
                }}>
                    {service.description}
                </Typography>
            </Box>
        </Box>
    );
};

export default Service;