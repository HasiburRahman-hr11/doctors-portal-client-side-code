import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AllUsers from '../../Components/AllUsers/AllUsers';



const Prescription = () => {
    return (
        <>
            <Navbar />
            <Box component="div" className="admin-page manage-users">
                <Typography variant="h4" component="h4" sx={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    mb: '25px'
                }}>
                    Manage Users
                </Typography>

                <AllUsers/>
            </Box>
        </>
    );
};

export default Prescription;