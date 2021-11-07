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


const columns = ['Sr.No', 'Name', 'Gender', 'Age', 'Weight', 'Contact', 'Address'];
const rows = [
    {
        serial: '01',
        name: 'Jack Sparrow',
        gender: 'Male',
        age: '36',
        weight: '63kg',
        contact: '+001 234 5678',
        address:'London Europe'
    },
    {
        serial: '02',
        name: 'Jack Sparrow',
        gender: 'Male',
        age: '36',
        weight: '63kg',
        contact: '+001 234 5678',
        address:'London Europe'
    },
    {
        serial: '03',
        name: 'Jack Sparrow',
        gender: 'Male',
        age: '36',
        weight: '63kg',
        contact: '+001 234 5678',
        address:'London Europe'
    },
    {
        serial: '04',
        name: 'Jack Sparrow',
        gender: 'Male',
        age: '36',
        weight: '63kg',
        contact: '+001 234 5678',
        address:'London Europe'
    },
    {
        serial: '05',
        name: 'Jack Sparrow',
        gender: 'Male',
        age: '36',
        weight: '63kg',
        contact: '+001 234 5678',
        address:'London Europe'
    },
    {
        serial: '06',
        name: 'Jack Sparrow',
        gender: 'Male',
        age: '36',
        weight: '63kg',
        contact: '+001 234 5678',
        address:'London Europe'
    },
    {
        serial: '07',
        name: 'Jack Sparrow',
        gender: 'Male',
        age: '36',
        weight: '63kg',
        contact: '+001 234 5678',
        address:'London Europe'
    },
    {
        serial: '08',
        name: 'Jack Sparrow',
        gender: 'Male',
        age: '36',
        weight: '63kg',
        contact: '+001 234 5678',
        address:'London Europe'
    },
    {
        serial: '09',
        name: 'Jack Sparrow',
        gender: 'Male',
        age: '36',
        weight: '63kg',
        contact: '+001 234 5678',
        address:'London Europe'
    },
    {
        serial: '10',
        name: 'Jack Sparrow',
        gender: 'Male',
        age: '36',
        weight: '63kg',
        contact: '+001 234 5678',
        address:'London Europe'
    },
    {
        serial: '11',
        name: 'Jack Sparrow',
        gender: 'Male',
        age: '36',
        weight: '63kg',
        contact: '+001 234 5678',
        address:'London Europe'
    },
    {
        serial: '12',
        name: 'Jack Sparrow',
        gender: 'Male',
        age: '36',
        weight: '63kg',
        contact: '+001 234 5678',
        address:'London Europe'
    },
    {
        serial: '13',
        name: 'Jack Sparrow',
        gender: 'Male',
        age: '36',
        weight: '63kg',
        contact: '+001 234 5678',
        address:'London Europe'
    },
    {
        serial: '14',
        name: 'Jack Sparrow',
        gender: 'Male',
        age: '36',
        weight: '63kg',
        contact: '+001 234 5678',
        address:'London Europe'
    },
    {
        serial: '15',
        name: 'Jack Sparrow',
        gender: 'Male',
        age: '36',
        weight: '63kg',
        contact: '+001 234 5678',
        address:'London Europe'
    }
];

const AllPatients = () => {
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
                    All Patients
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
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.gender}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.age}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.weight}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.contact}
                                    </TableCell>
                                    <TableCell align="left">
                                        {row.address}
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

export default AllPatients;