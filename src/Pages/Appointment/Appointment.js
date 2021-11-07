import React, { useState } from 'react';
import AppointmentBanner from '../../Components/AppointmentBanner/AppointmentBanner';
import AvailableAppointment from '../../Components/AvailableAppointment/AvailableAppointment';
import Navigation from '../../Components/Shared/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <Navigation />
            <AppointmentBanner date={date} setDate={setDate} />
            <AvailableAppointment date={date} />
            <Footer />
        </>
    );
};

export default Appointment;