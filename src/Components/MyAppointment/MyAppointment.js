import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';

import { AppointmentContext } from '../../Context/AppointmentContext/AppointmentContext';
import axios from 'axios';
import AlertBox from '../../Components/Shared/AlertBox/AlertBox';


const columns = ['Service', 'Schedule', 'Price', 'Date'];

const MyAppointment = () => {

    const { appointments, setAppointments, userAppointments, setUserAppointments } = useContext(AppointmentContext);

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
                const res = await axios.put(`https://doctors-portal-api.herokuapp.com/appointments/${id}`, { status: 'canceled' });

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
        <Box component="div" sx={{
            padding: {
                md: '30px 30px',
                xs: '15px 15px'
            },
            borderRadius: '5px',
            boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
        }}>

            {alert && (
                <AlertBox
                    message={alertMessage}
                    alert={alert}
                    setAlert={setAlert}
                    verity={alertVerity}
                />
            )}

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
                                                ${row.price}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.schedule}
                                            </TableCell>
                                            <TableCell align="left">
                                                {row.date}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.paid ? (
                                                    <span className="admin-btn btn-approved">Paid</span>
                                                ) : (
                                                    <Link to={`/payment/${row._id}`} className="btn-primary admin-btn">Pay</Link>
                                                )}
                                                <span
                                                    onClick={() => handleCancelAppointment(row._id)}
                                                    className="admin-btn btn-primary"
                                                    style={{ marginLeft: '5px' }}
                                                >Cancel</span>
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
    )
}

        </Box >
    );
};

export default MyAppointment;