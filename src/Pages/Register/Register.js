import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import loginImag from '../../images/login.png';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AlertBox from '../../Components/Shared/AlertBox/AlertBox';


const Register = () => {

    const { registerNewUser, authError } = useAuth();
    const history = useHistory();

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [spinner, setSpinner] = useState(false);
    const [alert, setAlert] = useState(false);

    const handleChange = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSpinner(true);
        if (registerData.password !== registerData.confirmPassword) {
            window.alert('Password doesn\'t match');
            setSpinner(false);
            return
        }

        registerNewUser(registerData.name, registerData.email, registerData.password, history);
        setSpinner(false);
        setAlert(true);
    }

    return (
        <Box component="div" className="register-page">

            {/* Alert Box */}
            {authError && (
                <AlertBox 
                message={authError} 
                alert={alert} 
                setAlert={setAlert} 
                verity="error"
                />
            )}


            <Container>
                <Grid container spacing={4}>
                    <Grid item md={5} xs={12} sx={{
                        display: {
                            md: 'block',
                            xs: 'flex'
                        },
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: {
                            md: 'auto',
                            xs: '100vh'
                        }
                    }}>
                        <Box component="div" className="auth-form-wrapper" sx={{
                            padding: {
                                md: '30px 30px',
                                xs: '20px 20px'
                            },
                            boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
                            backgroundColor: '#fff',
                            marginTop: {
                                md: '90px'
                            },
                            width: {
                                md: '100%',
                                sm: '90%',
                                xs: '95%'
                            }
                        }}>
                            <Typography variant="h5" component="h5" sx={{
                                color: '#5A5A5A',
                                fontSize: '20px',
                                marginBottom: '25px',
                                textAlign: 'center'
                            }}>
                                Register
                            </Typography>
                            <form action="" onSubmit={handleSubmit}>
                                <Box component="div" className="input-group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="auth-input"
                                        placeholder="Full Name*"
                                        required
                                        value={registerData.name}
                                        onChange={handleChange}
                                    />
                                </Box>
                                <Box component="div" className="input-group">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="auth-input"
                                        placeholder="Email*"
                                        required
                                        value={registerData.email}
                                        onChange={handleChange}
                                    />
                                </Box>
                                <Box component="div" className="input-group">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="auth-input"
                                        placeholder="Password*"
                                        required
                                        value={registerData.password}
                                        onChange={handleChange}
                                    />
                                </Box>
                                <Box component="div" className="input-group">
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        className="auth-input"
                                        placeholder="Confirm Password*"
                                        required
                                        value={registerData.confirmPassword}
                                        onChange={handleChange}
                                    />
                                </Box>
                                <Box component="div" sx={{
                                    mt: '30px'
                                }}>
                                    <Button type="submit" className="btn btn-primary" sx={{
                                        width: '100%',
                                        display: 'block',
                                        color: '#fff',
                                        borderRadius: '0'
                                    }}>
                                        {spinner ? <CircularProgress sx={{
                                            width: '28px !important',
                                            height: '28px !important',
                                            color: '#fff'
                                        }} /> : 'Register'}
                                    </Button>
                                </Box>

                                <Box component="div" sx={{
                                    mt: '10px'
                                }}>

                                    <Typography variant="h5" component="h5" sx={{
                                        color: '#666',
                                        fontSize: '15px',
                                        textAlign: 'center'
                                    }}>
                                        Already Have an Account? <Link to="/login" style={{
                                            color: 'var(--primary-color)'
                                        }}>Login.</Link>
                                    </Typography>

                                </Box>
                            </form>
                        </Box>
                    </Grid>
                    <Grid item md={7} xs={12} sx={{
                        display: {
                            md: 'block',
                            xs: 'none'
                        }
                    }}>
                        <Box component="img" src={loginImag} alt="Login" sx={{

                        }} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Register;