import React from 'react';
import AppointmentSection from '../../Components/AppointmentSection/AppointmentSection';
import BlogSection from '../../Components/BlogSection/BlogSection';
import CareSection from '../../Components/CareSection/CareSection';
import ContactSection from '../../Components/ContactSection/ContactSection';
import DoctorsSection from '../../Components/DoctorsSection/DoctorsSection';
import Footer from '../../Components/Footer/Footer';
import HeroSection from '../../Components/HeroSection/HeroSection';
import InfoSection from '../../Components/InfoSection/InfoSection';
import ServicesSection from '../../Components/ServicesSection/ServicesSection';
import Navigation from '../../Components/Shared/Navigation/Navigation';
import TestimonialSection from '../../Components/TestimonialSection/TestimonialSection';

const Home = () => {
    return (
        <>
            <Navigation />
            <HeroSection />
            <InfoSection />
            <ServicesSection />
            <CareSection />
            <AppointmentSection />
            <TestimonialSection />
            <BlogSection />
            <DoctorsSection />
            <ContactSection/>
            <Footer/>
        </>
    );
};

export default Home;