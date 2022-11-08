import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <section className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")` }}>
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className=" text-white flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <p className='text-teal-400  font-bold '>World Class Cyber Security</p>
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Powerful Protection
                            <span className="text-white"> Easy Recovery</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12">Cybersecurity is the protection from the theft to protect of our computer systems and networks or being damaged of our hardware and software.

                        </p>
                        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                            <Link to='/about' className="px-8 py-3 text-lg font-semibold rounded dark:bg-teal-400 dark:text-gray-900">About us</Link>

                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;