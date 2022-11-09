import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import ReviewSection from '../ReviewSection/ReviewSection';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../hooks/useTitle';

const DetailService = () => {
    const { _id, img, title, description, price, rating } = useLoaderData();
    useTitle('Service-Details-SecureIT')
    return (
        <div className='p-5 ml-10'>
            <div className='mb-12'>
                <h3 className='text-6xl  font-bold mb-5 mt-5'>{title}</h3>
                <PhotoProvider>
                    <PhotoView className='h-full w-full' src={img}>
                        <img className='w-2/5 h-96 mb-10' src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>

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