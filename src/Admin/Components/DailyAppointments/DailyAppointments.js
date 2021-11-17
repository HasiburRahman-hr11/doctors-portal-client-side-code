import React, { useEffect, useState } from 'react';
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
import axios from 'axios';


const columns = ['Name', 'Schedule', 'Service', 'Action'];

const DailyAppointments = ({ date }) => {

    const [appointments, setAppointments] = useState([])

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    useEffect(() => {
        const getDailyAppointments = async () => {
            try {
                const { data } = await axios.get(`https://doctors-portal-api.herokuapp.com/appointments?date=${date.toLocaleDateString()}`);

                setAppointments(data);

            } catch (error) {
                console.log(error);
            }
        }
        getDailyAppointments();
    }, [date]);


    return (
        <Box component="div" className="recent-appointments" sx={{
            backgroundColor: '#fff',
            padding: '20px 20px',
            borderRadius: '5px'
        }}>

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
                    Appointments
                </Typography>
                <Typography variant="p" component="p" sx={{
                    color: '#888'
                }}>
                    {date.toDateString()}
                </Typography>
            </Box>

            {appointments.length === 0 ? (
                <Typography variant="h4" component="h4" sx={{
                    color: '#888',
                    fontSize: '20px',
                    textAlign: 'center'
                }}>
                    No Appointment on {date.toLocaleDateString()}
                </Typography>
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
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {appointments.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={index}>

                                            <TableCell align="left" sx={{
                                                minWidth:'130px'
                                            }}>
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="left" sx={{
                                                minWidth:'170px'
                                            }}>
                                                {row.schedule}
                                            </TableCell>
                                            <TableCell align="left" sx={{
                                                minWidth:'140px'
                                            }}>
                                                {row.service}
                                            </TableCell>
                                            <TableCell align="left">
                                                <Link to={`/admin/appointments/${row._id}`} className="admin-btn btn-primary">view</Link>
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
                </>
            )}




        </Box >
    );
};

export default DailyAppointments;