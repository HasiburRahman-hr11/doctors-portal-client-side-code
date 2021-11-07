import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AllPatients from '../../Components/AllPatients/AllPatients';

const Patients = () => {
    return (
        <>
            <Navbar />
            <Box component="div" className="admin-page patients">
                <Typography variant="h4" component="h4" sx={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    mb: '25px'
                }}>
                    Patients
                </Typography>

                <AllPatients />
            </Box>
        </>
    );
};

export default Patients;