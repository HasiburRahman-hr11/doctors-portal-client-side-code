import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from '../../Components/Navbar/Navbar';
import AllServices from '../../Components/AllServices/AllServices';

const Services = () => {
    return (
        <>
            <Navbar />
            <Box component="div" className="admin-page services">
                <Typography variant="h4" component="h4" sx={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    mb: '25px'
                }}>
                    Services
                </Typography>

                <AllServices/>
            </Box>
        </>
    );
};

export default Services;