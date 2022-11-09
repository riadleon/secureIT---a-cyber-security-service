import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyReviews = () => {
    const {_id, review, userImg, userName, serviceName, feedback } = useLoaderData();
    return (
        <div>
            <h2>My Given Reviews</h2>
        </div>
    );
};

export default MyReviews;