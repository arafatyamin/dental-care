import React from 'react';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import OurTurms from '../OurTurms/OurTurms';
import Services from '../Services/Services';
import StateCard from '../StateCard/StateCard';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner />
            <StateCard />
            <Services />
            <OurTurms />
            <MakeAppointment />
            <Testimonial />
            <ContactForm />
        </div>
    );
};

export default Home;