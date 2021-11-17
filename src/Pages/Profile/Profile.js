import Navigation from '../../Components/Shared/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import useAuth from '../../hooks/useAuth';

import MyAppointment from '../../Components/MyAppointment/MyAppointment';


const Profile = () => {

    const { user } = useAuth();

    return (
        <>
            <Navigation />
            <Box component="div" className="profile" sx={{
                paddingTop: '100px'
            }}>

                <Container fixed>
                    <Grid container spacing={3}>
                        <Grid item md={4} xs={12}>
                            <Box component="div" sx={{
                                padding: {
                                    md: '30px 30px',
                                    xs: '15px 15px'
                                },
                                borderRadius: '5px',
                                boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px'
                            }}>
                                <Typography variant="h5" component="h5" sx={{
                                    textAlign: 'center'
                                }}>
                                    Hello <strong style={{
                                        color: 'var(--primary-color)'
                                    }}>{user.displayName}</strong>, <br />
                                    Welcome to your profile
                                </Typography>

                                <Typography variant="p" component="p" sx={{
                                    textAlign: 'center',
                                    mt: '20px'
                                }}>
                                    You can manage your appointments from here.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item md={8} xs={12}>
                           <MyAppointment/>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default Profile;