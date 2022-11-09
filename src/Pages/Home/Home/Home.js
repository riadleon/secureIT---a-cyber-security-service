import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';


const Home = () => {
    useTitle('Home-SecureIT');
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <About></About>
            <Contact></Contact>

        </div>
    );
};

export default Home;