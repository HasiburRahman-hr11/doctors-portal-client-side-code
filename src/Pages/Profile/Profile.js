import React, { useContext, useEffect, useState } from 'react';
import Navigation from '../../Components/Shared/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { AppointmentContext } from '../../Context/AppointmentContext/AppointmentContext';
import axios from 'axios';
import AlertBox from '../../Components/Shared/AlertBox/AlertBox';


const columns = ['Service', 'Schedule', 'Date'];

const Profile = () => {

    const { user } = useAuth();
    const { appointments, setAppointments , userAppointments , setUserAppointments} = useContext(AppointmentContext);

    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVerity, setAlertVerity] = useState('');

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleCancelAppointment = async (id) => {
        const agreed = window.confirm('Cancel appointment?')
        if (agreed) {
            try {
                const res = await axios.put(`http://localhost:8000/appointments/user-appointment/${id}`);

                if (res.status === 200) {
                    const restAppointments = appointments.filter(item => item._id !== id);
                    setAppointments(restAppointments);

                    setUserAppointments(userAppointments.filter(item => item._id !== id))

                    setAlertMessage('Appointment Canceled Successfully');
                    setAlertVerity('success');
                    setAlert(true);
                }
            } catch (error) {
                console.log(error);
                setAlertMessage('Something Went Wrong');
                setAlertVerity('error');
                setAlert(true);
            }
        }
    }


    return (
        <>
            <Navigation />
            <Box component="div" className="profile" sx={{
                paddingTop: '100px'
            }}>
                {alert && (
                    <AlertBox
                        message={alertMessage}
                        alert={alert}
                        setAlert={setAlert}
                        verity={alertVerity}
                    />
                )}

                <Container fixed>
                    <Grid container spacing={3}>
                        <Grid item md={4} xs={12}>
                            <Box component="div" sx={{
                                padding: {
                                    md: '30px 30px',
                                    xs: '15px 15px'
                                },
                                borderRadius: '5px',
                                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
                            }}>
                                <Typography variant="h5" component="h5" sx={{
                                    textAlign: 'center'
                                }}>
                                    Hello <strong style={{
                                        color: 'var(--primary-color)'
                                    }}>{user.displayName}</strong>, <br />
                                    Welcome to your profile
                                </Typography>

                                <Typography variant="p" component="p" sx={{
                                    textAlign: 'center',
                                    mt: '20px'
                                }}>
                                    You can manage your appointments from here.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <Box component="div" sx={{
                                padding: {
                                    md: '30px 30px',
                                    xs: '15px 15px'
                                },
                                borderRadius: '5px',
                                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
                            }}>

                                <Typography variant="h5" component="h5" sx={{
                                    textAlign: 'center',
                                    color: 'var(--primary-color)',
                                    fontWeight: 'bold',
                                    mb: '30px'
                                }}>
                                    My Appointments
                                </Typography>

                                {userAppointments.length < 1 ? (
                                    <Box component="div" sx={{
                                        textAlign: 'center'
                                    }}>
                                        <Typography variant="h4" component="h4" sx={{
                                            color: '#888',
                                            fontSize: '20px',
                                            mb: '20px'
                                        }}>
                                            You haven't booked any appointment
                                        </Typography>

                                        <Link to="/appointment" className="btn btn-primary">Book Appointment</Link>
                                    </Box>
                                ) : (
                                    <>
                                        <TableContainer sx={{ maxHeight: 400 }} className="admin-table-container">
                                            <Table stickyHeader aria-label="sticky table">
                                                <TableHead>
                                                    <TableRow>
                                                        {columns.map((column, index) => (
                                                            <TableCell
                                                                key={index}
                                                                align="left"
                                                                sx={{
                                                                    color: '#999',
                                                                    fontWeight: 'bold'
                                                                }}
                                                            >
                                                                {column}
                                                            </TableCell>

                                                        ))}

                                                        <TableCell
                                                            align="right"
                                                            sx={{
                                                                color: '#999',
                                                                fontWeight: 'bold'
                                                            }}
                                                        >
                                                            Action
                                                        </TableCell>

                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {userAppointments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                                        return (
                                                            <TableRow hover role="checkbox" tabIndex={-1} key={index}>

                                                                <TableCell align="left">
                                                                    {row.service}
                                                                </TableCell>
                                                                <TableCell align="left">
                                                                    {row.schedule}
                                                                </TableCell>
                                                                <TableCell align="left">
                                                                    {row.date}
                                                                </TableCell>
                                                                <TableCell align="right">
                                                                    <span
                                                                        onClick={() => handleCancelAppointment(row._id)}
                                                                        className="admin-btn btn-primary">Cancel</span>
                                                                </TableCell>

                                                            </TableRow>
                                                        );
                                                    })}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <TablePagination
                                            rowsPerPageOptions={[10, 20, 30]}
                                            component="div"
                                            count={userAppointments.length}
                                            rowsPerPage={rowsPerPage}
                                            page={page}
                                            onPageChange={handleChangePage}
                                            onRowsPerPageChange={handleChangeRowsPerPage}
                                        />
                                    </>
                                )}

                            </Box>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Profile;