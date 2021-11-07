import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DashboardInfo from '../../Components/DashboardInfo/DashboardInfo';
import AllAppointments from '../../Components/AllAppointments/AllAppointments';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <Box component="div" className="admin-page dashboard">
                <Typography variant="h4" component="h4" sx={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    mb: '25px'
                }}>
                    Dashboard
                </Typography>

                <DashboardInfo />
                <AllAppointments title="Appointments" />
            </Box>
        </>
    );
};

export default Dashboard;