import React from 'react';
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


const columns = ['Sr.No', 'Date', 'Name', 'Contact', 'Prescription'];
const rows = [
    {
        serial: '01',
        date: '07-11-2021',
        name: 'Jack Sparrow',
        contact: '+001 234 5678',
        prescription: '0101'
    },
    {
        serial: '02',
        date: '07-11-2021',
        name: 'Jack Sparrow',
        contact: '+001 234 5678',
        prescription: '0101'
    },
    {
        serial: '03',
        date: '07-11-2021',
        name: 'Jack Sparrow',
        contact: '+001 234 5678',
        prescription: '0101'
    },
    {
        serial: '04',
        date: '07-11-2021',
        name: 'Jack Sparrow',
        contact: '+001 234 5678',
        prescription: '0101'
    },
    {
        serial: '05',
        date: '07-11-2021',
        name: 'Jack Sparrow',
        contact: '+001 234 5678',
        prescription: '0101'
    },
    {
        serial: '06',
        date: '07-11-2021',
        name: 'Jack Sparrow',
        contact: '+001 234 5678',
        prescription: '0101'
    },
    {
        serial: '07',
        date: '07-11-2021',
        name: 'Jack Sparrow',
        contact: '+001 234 5678',
        prescription: '0101'
    },
    {
        serial: '08',
        date: '07-11-2021',
        name: 'Jack Sparrow',
        contact: '+001 234 5678',
        prescription: '0101'
    },
    {
        serial: '09',
        date: '07-11-2021',
        name: 'Jack Sparrow',
        contact: '+001 234 5678',
        prescription: '0101'
    },
    {
        serial: '10',
        date: '07-11-2021',
        name: 'Jack Sparrow',
        contact: '+001 234 5678',
        prescription: '0101'
    },
    {
        serial: '11',
        date: '07-11-2021',
        name: 'Jack Sparrow',
        contact: '+001 234 5678',
        prescription: '0101'
    },
    {
        serial: '12',
        date: '07-11-2021',
        name: 'Jack Sparrow',
        contact: '+001 234 5678',
        prescription: '0101'
    },
    {
        serial: '13',
        date: '07-11-2021',
        name: 'Jack Sparrow',
        contact: '+001 234 5678',
        prescription: '0101'
    },
    {
        serial: '14',
        date: '07-11-2021',
        name: 'Jack Sparrow',
        contact: '+001 234 5678',
        prescription: '0101'
    },
    {
        serial: '15',
        date: '07-11-2021',
        name: 'Jack Sparrow',
        contact: '+001 234 5678',
        prescription: '0101'
    }
];

const AllPrescriptions = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
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
                    All Prescriptions
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
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    <TableCell align="left">
                                        {row.serial}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.date}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.contact}
                                    </TableCell>
                                    <TableCell align="left">
                                        <Link to="#" className="admin-btn btn-primary">view</Link>
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
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />


        </Box>
    );
};

export default AllPrescriptions;