import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import AllServiceCard from './AllServiceCard';

const Services = () => {
    const services = useLoaderData();
    console.log(services);


    return (
        <div>
            <section className="py-6 sm:py-12 text-black ">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="space-y-2 text-center">
                        <p className="font-serif text-5xl text-teal-400 font-bold">Cyber Security Services</p>
                        <h2 className="text-2xl font-bold">You Can Protect Your Organization’s <span>Cybersecurity By Services Us</span> </h2>

                    </div>
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 items-center">
                        {
                            services.map(service => <AllServiceCard
                                key={service._id}
                                service={service}
                            ></AllServiceCard>)
                        }

                    </div>
                </div>
               
            </section>
            
        </div>
    );
};

export default Services;

