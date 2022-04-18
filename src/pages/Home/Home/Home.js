import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import TestiMonials from '../TestiMonials/TestiMonials';
import HelpCare from './HelpCare/HelpCare';
import './Home.css'
const Home = () => {
    return (
        <div >
            <Banner />
            <HelpCare />
            <Services />
            <TestiMonials />
            <Contact />
        </div>
    );
};

export default Home;