import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';
import AlertBox from '../../../Components/Shared/AlertBox/AlertBox';
import { AppointmentContext } from '../../../Context/AppointmentContext/AppointmentContext';


const columns = ['Date', 'Time', 'Name', 'Service', 'Status' , 'Paid'];


const AllAppointments = ({ title }) => {
    const { appointments, setAppointments } = useContext(AppointmentContext);
    const { token } = useAuth();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVerity, setAlertVerity] = useState('');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    const handleDeleteAppointment = async (id) => {
        const agreed = window.confirm('Delete this appointment?')
        if (agreed) {
            try {
                const res = await axios.delete(`https://doctors-portal-api.herokuapp.com/appointments/${id}`, {
                    headers: {
                        token: `Bearer ${token}`
                    }
                });

                if (res.status === 200) {
                    const restAppointments = appointments.filter(item => item._id !== id);
                    setAppointments(restAppointments);

                    setAlertMessage('Appointment Deleted Successfully');
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
        <Box component="div" className="all-appointments" sx={{
            backgroundColor: '#fff',
            padding: '20px 20px',
            borderRadius: '5px',
            marginTop: '40px'
        }}>
            {alert && (
                <AlertBox
                    message={alertMessage}
                    alert={alert}
                    setAlert={setAlert}
                    verity={alertVerity}
                />
            )}

            <Box component="div" sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px'
            }}>
                <Typography variant="h4" component="h4" sx={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: 'var(--primary-color)',
                    paddingLeft: '15px'
                }}>
                    {title}
                </Typography>
            </Box>


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
                        {appointments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    <TableCell align="left" sx={{
                                        minWidth: '100px'
                                    }}>
                                        {row.date}
                                    </TableCell>
                                    <TableCell align="left" sx={{
                                        minWidth: '170px'
                                    }}>
                                        {row.schedule}
                                    </TableCell>
                                    <TableCell align="left" sx={{
                                        minWidth: '130px'
                                    }}>
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.service}
                                    </TableCell>
                                    <TableCell align="left">
                                        <Box
                                            component="span"
                                            className={row.status === 'pending' ? 'admin-btn btn-pending' : row.status === 'approved' ? 'admin-btn btn-approved' : 'admin-btn btn-canceled'}

                                        >
                                            {row.status}
                                        </Box>
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.paid ? 'Yes' : 'No'}
                                    </TableCell>
                                    <TableCell align="right" sx={{
                                                minWidth:'120px'
                                            }}>
                                        <DeleteOutlineIcon
                                            onClick={() => handleDeleteAppointment(row._id)}
                                            sx={{
                                                width: '35px',
                                                height: '35px',
                                                backgroundColor: 'var(--primary-color)',
                                                color: '#fff',
                                                cursor: 'pointer',
                                                padding: '5px',
                                                borderRadius: '5px'
                                            }} />


                                        <Link to={`/admin/appointments/edit/${row._id}`}>
                                            <EditIcon sx={{
                                                color: '#fff',
                                                backgroundColor: '#FFD076',
                                                width: '35px',
                                                height: '35px',
                                                padding: '5px',
                                                borderRadius: '5px',
                                                marginLeft: '5px'
                                            }} />
                                        </Link>
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
                count={appointments.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />


        </Box>
    );
};

export default AllAppointments;