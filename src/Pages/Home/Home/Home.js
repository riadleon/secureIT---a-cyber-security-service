import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';


const Home = () => {
    useTitle('Home');
    // const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     fetch('http://localhost:3000/services/636a59c21b94ea44bb20ca76')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //         })

    // }, [])
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