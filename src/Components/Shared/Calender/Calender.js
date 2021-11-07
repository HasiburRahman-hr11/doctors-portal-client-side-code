import React from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import Box from '@mui/material/Box';

const Calender = ({ date, setDate }) => {
    return (
        <Box component="div" sx={{
            maxWidth:{
                md:'380px',
                xs:'300px'
            }
        }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
                displayStaticWrapperAs="desktop"
                openTo="day"
                value={date}
                onChange={(newValue) => {
                    setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
        </Box>
    );
};

export default Calender;