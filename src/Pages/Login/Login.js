import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

import loginImag from '../../images/login.png'
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import AlertBox from '../../Components/Shared/AlertBox/AlertBox';
import googleIcon from '../../images/google-icon.png';


const Login = () => {

    const { loginUser, signinWithGoogle, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });

    const [spinner, setSpinner] = useState(false);
    const [alert, setAlert] = useState(false);

    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSpinner(true);

        loginUser(loginData.email, loginData.password, location, history);
        setAlert(true);
        setSpinner(false);
    }


    return (
        <Box component="div" className="login-page">

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
                                Login
                            </Typography>
                            <form action="" onSubmit={handleSubmit}>
                                <Box component="div" className="input-group">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="auth-input"
                                        placeholder="Email*"
                                        required
                                        value={loginData.email}
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
                                        value={loginData.password}
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
                                        }} /> : 'Login'}
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
                                        Dont Have an Account? <Link to="/register" style={{
                                            color: 'var(--primary-color)'
                                        }}>Register Now.</Link>
                                    </Typography>

                                </Box>

                                <Box component="div">
                                    <Typography variant="h5" component="h5" sx={{
                                        color: '#666',
                                        fontSize: '15px',
                                        textAlign: 'center',
                                        margin:'20px 0'
                                    }}>
                                        OR
                                    </Typography>

                                    <Button 
                                    type="button" 
                                    sx={{
                                        display:'flex',
                                        alignItems:'center',
                                        backgroundColor:'transparent',
                                        height:'40px',
                                        borderRadius:'25px',
                                        border:'1px solid var(--primary-color)',
                                        width:'100%',
                                        color:'var(--primary-color)'
                                    }}
                                    onClick={()=>signinWithGoogle(location, history)}
                                    >
                                        <Box 
                                        component="img" 
                                        src={googleIcon} 
                                        alt="Google" 
                                        sx={{
                                            width:'30px',
                                            marginRight:'5px'
                                        }}
                                        />
                                        Continue with Google
                                    </Button>
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

export default Login;