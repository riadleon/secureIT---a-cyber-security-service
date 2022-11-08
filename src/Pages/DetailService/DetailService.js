import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailService = () => {
    const { _id, img, title } = useLoaderData();
    return (
        <div>
            <h3 className='text-6xl text-center font-bold'>Hello: {title}</h3>
            {/* <img src={img} alt="" /> */}
        </div>
    );
};

export default DetailService;