import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar } from 'react-icons/fa';

const CardService = ({ service }) => {
    const { _id, img, price, title, rating, description } = service;
    return (
        <div>
            <article className="flex flex-col ">
                <Link>
                    <img alt="" className="object-cover w-full h-52 " src={img} />
                </Link>
                <div className="flex flex-col flex-1 p-6">
                    <p className="text-lg tracking-wider uppercase hover:underline text-black font-bold">{title}</p>
                    <h3 className="flex-1 py-2 text-s font-semibold leading-snug">{description.substr(0, 105)}</h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-lg dark:text-gray-400">
                        <span>${price}</span>
                        <span className='flex items-center'><FaStar className='text-orange-400 '></FaStar>{rating}</span>
                    </div>
                </div>
            </article>
            <div className='text-center'>
                <Link to={`/services/${_id}`}><button className="btn btn-ghost bg-teal-400">View Details<FaArrowRight ></FaArrowRight> </button></Link>
            </div>
        </div>
    );
};

export default CardService;