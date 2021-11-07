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
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import Loading from '../../../Components/Loading/Loading';
import { UserContext } from '../../../Context/UserContext/UserContext';


const columns = ['Name', 'Email', 'Role', 'Action'];



const AllUsers = () => {

    const {users , loading} = useContext(UserContext)
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Box component="div" className="recent-appointments" sx={{
                        backgroundColor: '#fff',
                        padding: '20px 20px',
                        borderRadius: '5px',
                        marginTop: '40px'
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
                                All Users
                            </Typography>
                        </Box>


                        {users.length === 0 ? (
                            <Typography variant="h4" component="h4" sx={{
                                color: '#888',
                                fontSize: '20px',
                                textAlign: 'center'
                            }}>
                                No User Found
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
                                            {users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>

                                                        <TableCell align="left">
                                                            {row.name}
                                                        </TableCell>
                                                        <TableCell align="left">
                                                            {row.email}
                                                        </TableCell>
                                                        <TableCell align="left" sx={{ textTransform: 'capitalize' }}>
                                                            {row.role}
                                                        </TableCell>
                                                        <TableCell align="left">
                                                            <Link to={`/admin/users/edit/${row.email}`}>
                                                                <EditIcon sx={{
                                                                    color: '#fff',
                                                                    backgroundColor: 'var(--primary-color)',
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
                                    count={users.length}
                                    rowsPerPage={rowsPerPage}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                />
                            </>
                        )}


                    </Box>
                </>
            )}
        </>
    );
};

export default AllUsers;