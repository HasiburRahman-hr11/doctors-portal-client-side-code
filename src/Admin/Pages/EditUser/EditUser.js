import React, { useEffect, useState , useContext } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import Loading from '../../../Components/Loading/Loading';
import AlertBox from '../../../Components/Shared/AlertBox/AlertBox';
import useAuth from '../../../hooks/useAuth';
import { UserContext } from '../../../Context/UserContext/UserContext';

const EditUser = () => {
    const { email } = useParams();
    const {token} = useAuth();
    const {users , setUsers } = useContext(UserContext)

    const [loading, setLoading] = useState(true);
    const [spinner, setSpinner] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVerity, setAlertVerity] = useState('');
    const [user, setUser] = useState({});

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        role: ''
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        setSpinner(true);
        try {
            const {data} = await axios.put(`https://doctors-portal-api.herokuapp.com/users/${email}`, userInfo , {
                headers:{
                    token: `Bearer ${token}`
                }
            });
            const restUsers = users.filter(item => item._id !== data._id);
            const updatedUsers = [...restUsers , data];
            const sortedUsers = updatedUsers.sort((a,b) =>  new Date(a.createdAt) - new Date(b.createdAt));
            setUsers(sortedUsers);

            setAlertMessage('User Updated Successfully');
            setAlertVerity('success');
            setAlert(true);
            setSpinner(false);
        } catch (error) {
            console.log(error);
            setAlertMessage('Something Went Wrong');
            setAlertVerity('error');
            setAlert(true);
            setSpinner(false);
        }
       
    }

    useEffect(() => {
        const getUser = async () => {
            try {
                const { data } = await axios.get(`https://doctors-portal-api.herokuapp.com/users/${email}`);

                setUser(data);
                setLoading(false);
                setUserInfo({
                    name: data.name,
                    email: data.email,
                    role: data.role
                });
            } catch (error) {
                console.log(error);
                setLoading(false)
            }
        }
        getUser();
    }, [email]);

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Navbar />
                    <Box component="div" className="admin-page edit-user">

                        {alert && (
                            <AlertBox
                                message={alertMessage}
                                alert={alert}
                                setAlert={setAlert}
                                verity={alertVerity}
                            />
                        )}

                        <Typography variant="h4" component="h4" sx={{
                            fontSize: '22px',
                            fontWeight: 'bold',
                            mb: '25px'
                        }}>
                            Edit User
                        </Typography>

                        <Box component="div" sx={{
                            padding: {
                                md: '30px 30px',
                                xs: '15px 15px'
                            },
                            backgroundColor: '#fff',
                            borderRadius: '5px'
                        }}>
                            <form action="" onSubmit={handleSubmit}>
                                <Grid container spacing={3}>
                                    <Grid item md={4} xs={12}>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={userInfo.name}
                                            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                                        />
                                    </Grid>
                                    <Grid item md={4} xs={12}>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={userInfo.email}
                                            readOnly
                                        />
                                    </Grid>
                                    <Grid item md={4} xs={12}>
                                        <select
                                            className="form-control"
                                            value={userInfo.role}
                                            onChange={(e) => setUserInfo({ ...userInfo, role: e.target.value })}
                                        >
                                            <option value="admin">Admin</option>
                                            <option value="subscriber">Subscriber</option>
                                        </select>
                                    </Grid>
                                </Grid>
                                <Box component="div" sx={{
                                    mt: '20px'
                                }}>
                                    <button type="submit" className="btn btn-primary" style={{width:'110px'}}>
                                        {spinner ? <CircularProgress sx={{
                                            width: '28px !important',
                                            height: '28px !important',
                                            color: '#fff'
                                        }} /> : 'Submit'}
                                    </button>
                                </Box>
                            </form>
                        </Box>
                    </Box>
                </>
            )}
        </>
    );
};

export default EditUser;