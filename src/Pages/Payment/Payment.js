import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import Navigation from '../../Components/Shared/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js'
import StripeCheckoutForm from '../../Components/StripeCheckoutForm/StripeCheckoutForm';

const stripePromise = loadStripe('pk_test_51Jvx4vGvU45iPUZFXYER9IYs11WDEJVv0VgLPnJWWnkKp5uPctyEBOcJStpK2qwC2o8C1pMUvvcXJGq5fBBrcm9800zlOK04v1');
const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAppointment = async () => {
            try {
                const { data } = await axios.get(`https://doctors-portal-api.herokuapp.com/appointments/${appointmentId}`);
                setAppointment(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getAppointment();
    }, [appointmentId]);

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Navigation />
            <Box component="div" className="payment" sx={{
                paddingTop: '100px'
            }}>
                <Container>
                    <h4>Patient Name : {appointment.name}</h4>
                    <h4>Service : {appointment.service}</h4>
                    <h4>Schedule : {appointment.schedule}</h4>
                    <h4>Date : {appointment.date}</h4>
                    <h4>Price : {appointment.price}</h4>
                </Container>

                <Elements stripe={stripePromise}>
                    <StripeCheckoutForm appointment={appointment} />
                </Elements>
            </Box>
            <Footer />
        </>
    );
};

export default Payment;