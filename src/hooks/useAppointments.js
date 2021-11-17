import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from './useAuth';


const useAppointments = () => {
    const { user } = useAuth()
    const [appointments, setAppointments] = useState([]);
    const [userAppointments, setUserAppointments] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const getAllAppointments = async () => {
            try {
                const { data } = await axios.get('https://doctors-portal-api.herokuapp.com/appointments');

                const sortedAppointmens = data.sort((a,b) =>  new Date(b.createdAt) - new Date(a.createdAt));
                setAppointments(sortedAppointmens);
                setLoading(false);
                
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getAllAppointments();



    }, []);


    useEffect(() => {
        // Get Loggedin User's Appointments
        const getUserAppointments = appointments.filter(item => item.email === user.email && item.status !== 'canceled')

        setUserAppointments(getUserAppointments);
    }, [user.email, appointments]);

    return {
        appointments,
        setAppointments,
        userAppointments,
        setUserAppointments,
        loading
    }
}

export default useAppointments;