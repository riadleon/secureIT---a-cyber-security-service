import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData();
    console.log(services);

    return (
        <div>
            <h2>hello</h2>
        </div>
    );
};

export default Services;