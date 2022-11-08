import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import ReviewSection from '../ReviewSection/ReviewSection';

const DetailService = () => {
    const { _id, img, title, description, price, rating } = useLoaderData();
    return (
        <div className='p-5 ml-10'>
            <div className='mb-12'>
                <h3 className='text-6xl  font-bold mb-5 mt-5'>{title}</h3>
                <img className='w-2/5 h-96 mb-10' src={img} alt="" />
                <p className='text-3xl mb-10'> <span className='font-bold'>What is {title}? </span> {description}</p>
                <div className="text-4xl">

                    <span className='flex items-center'><FaStar className='text-orange-400 '></FaStar>{rating}</span>
                    <span>Price: ${price}</span>
                </div>
            </div>
            <div>
                <ReviewSection></ReviewSection>
            </div>
        </div>
    );
};

export default DetailService;