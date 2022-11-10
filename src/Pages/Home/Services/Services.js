import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import CardService from './CardService';


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://secure-web-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);


    return (
        <section className="py-6 sm:py-12 text-black ">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <p className="font-serif text-5xl text-teal-400 font-bold">Cyber Security Services</p>
                    <h2 className="text-2xl font-bold">You Can Protect Your Organization’s <span>Cybersecurity By Services Us</span> </h2>

                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 items-center">
                    {
                        services.slice(0, 3).map(service => <CardService
                            key={service._id}
                            service={service}
                        ></CardService>)
                    }

                </div>
            </div>
            <div className='text-center'>
                <Link to='/services'><button className="btn btn-ghost bg-green-800 text-white">Click To See More  <FaArrowRight></FaArrowRight> </button></Link>
            </div>
        </section>
    );
};

export default Services;