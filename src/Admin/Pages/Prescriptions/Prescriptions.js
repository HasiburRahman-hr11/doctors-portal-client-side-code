import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AllPrescriptions from '../../Components/AllPrescriptions/AllPrescriptions';


const Prescription = () => {
    return (
        <>
            <Navbar />
            <Box component="div" className="admin-page prescription">
                <Typography variant="h4" component="h4" sx={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    mb: '25px'
                }}>
                    Prescriptions
                </Typography>

                <AllPrescriptions/>
            </Box>
        </>
    );
};

export default Prescription;