import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const AlertBox = ({ message , alert, setAlert , verity }) => {

    const handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setAlert(false);
    };

    return (
        <Snackbar
            open={alert}
            autoHideDuration={6000}
            onClose={handleCloseAlert}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left'
            }}
        >
            <Alert onClose={handleCloseAlert} severity={verity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default AlertBox;