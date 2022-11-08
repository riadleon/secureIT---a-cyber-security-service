import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailService = () => {
    const { _id, img, price, title, rating, description } = useLoaderData();
    return (
        <div>
            <h3 className='text-6xl text-center font-bold'>{title}</h3>
        </div>
    );
};

export default DetailService;