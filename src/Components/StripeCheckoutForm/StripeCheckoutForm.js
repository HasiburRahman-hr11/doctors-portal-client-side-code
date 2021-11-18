import React, { useState, useEffect, useContext } from 'react';
import './StripeCheckoutForm.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import AlertBox from '../../Components/Shared/AlertBox/AlertBox';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { AppointmentContext } from '../../Context/AppointmentContext/AppointmentContext';

const StripeCheckoutForm = ({ appointment }) => {

    const { appointments, setAppointments, userAppointments, setUserAppointments } = useContext(AppointmentContext);

    const [alert, setAlert] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertVerity, setAlertVerity] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        setProcessing(true);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
            billing_details: {
                name: appointment.name,
                email: appointment.email,
            }
        });

        if (error) {
            console.log('[error]', error);
            setAlertMessage(error.message);
            setAlertVerity('error');
            setAlert(true);
        } else {
            console.log(paymentMethod)
            setAlert(false);
        }


        // Payment Intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card
                },
            },
        );


        if (intentError) {
            setAlertMessage(intentError.message);
            setAlertVerity('error');
            setAlert(true);
            setProcessing(false);
        } else {
            console.log(paymentIntent);
            setAlertMessage('Payment Processed Successfully');
            setAlertVerity('success');
            setAlert(true);
            setProcessing(false);


            const paymentInfo = {
                transactionId: paymentIntent.id,
                card: paymentMethod.card.brand,
                created: paymentIntent.created,
                amount: paymentIntent.amount / 100,
                last4: paymentMethod.card.last4
            }
            const updateData = {
                paid: true,
                paymentInfo: paymentInfo
            }
            updateAppointmentInDb(updateData);
            history.push('/profile');
        }
    };

    const updateAppointmentInDb = async (updateData) => {

        try {
            const { data } = await axios.put(`https://doctors-portal-api.herokuapp.com/appointments/${appointment._id}`, updateData);


            if (data._id) {
                // Update UserAppointments Context
                const restUserAppointments = userAppointments.filter(item => item._id !== data._id);
                const updatedUserAppointments = [...restUserAppointments, data];
                const sortedUserAppointments = updatedUserAppointments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setUserAppointments(sortedUserAppointments);

                // Update All Appointment Context
                const restAppointments = appointments.filter(item => item._id !== data._id);
                const updatedAppointments = [...restAppointments, data];
                const sortedAppointments = updatedAppointments.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setAppointments(sortedAppointments);
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const createPaymentIntent = async () => {
            try {

                const { data } = await axios.post('https://doctors-portal-api.herokuapp.com/create-payment-intent', { amount: appointment.price });
                setClientSecret(data.clientSecret);

            } catch (error) {
                console.log(error);
            }
        }
        createPaymentIntent();
    }, [appointment]);

    return (
        <Box component="div" sx={{
            padding: '50px 0'
        }}>
            {alert && (
                <AlertBox
                    message={alertMessage}
                    alert={alert}
                    setAlert={setAlert}
                    verity={alertVerity}
                />
            )}

            <form onSubmit={handleSubmit} className="stripe_checkout_form">
                <Typography variant="h4" component="h4" sx={{
                    textAlign: 'center',
                    mb: '30px',
                    fontSize: '18px'
                }}>
                    Enter your card information
                </Typography>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Box component="div" sx={{
                    textAlign: 'center',
                    mt: '30px'
                }}>
                    {appointment.price && (
                        <>
                            {processing ? (
                                <span className="admin-btn btn-primary">
                                    <CircularProgress sx={{
                                        width: '25px !important',
                                        height: '25px !important',
                                        color: '#fff'
                                    }} />
                                </span>
                            ) : (
                                <button type="submit" className="admin-btn btn-primary" disabled={!stripe}>
                                    Pay ${appointment.price}
                                </button>
                            )}
                        </>

                    )}
                </Box>
            </form >
        </Box >
    );
};

export default StripeCheckoutForm;