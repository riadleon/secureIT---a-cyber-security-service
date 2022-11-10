import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import RsCard from './RsCard';

const ReviewSection = () => {
    const { _id, title, price } = useLoaderData();
    const { user } = useContext(AuthContext)
    const [refresh, setRefresh] = useState(false);

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`https://secure-web-server.vercel.app/reviews/services/${_id}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])



    // const rev = useLoaderData();
    // console.log('from rev', rev);


    const handleReview = (e) => {
        e.preventDefault();
        const reviewData = {
            review: _id,
            userImg: user.photoURL,
            userName: user.displayName,
            serviceName: title,
            feedback: e.target.review.value,
            email: user.email,
        };



        fetch('https://secure-web-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('secureWeb-token')}`

            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    setRefresh(!refresh)
                    e.target.reset();
                } else {
                    toast.error(data.error);
                }
            })
            .catch(err => {
                toast.error(err.message);
            })


    }



    const ReviewRender = <>

        {
            user?.email ?
                <>

                    <div className="flex flex-col py-32 px-10  w-3/5 p-8 shadow-sm rounded-xl lg:p-12 ">
                        <div className="flex flex-col  w-full">
                            <h2 className="text-3xl font-semibold ">Your opinion matters!</h2>
                            <div className="flex flex-col  py-6 space-y-3">
                                <span className="">How was your experience?</span>
                                <div className="flex space-x-3">

                                </div>
                            </div>
                            <form onSubmit={handleReview} className="flex flex-col w-full">

                                <input
                                    type="text"
                                    name="review"
                                    className="w-3/5 px-3 py-2 my-2
                 border rounded-md dark:border-gray-700 "></input>
                                <button type="submit" className="w-3/5 px-3 py-2 font-semibold rounded-md dark:text-gray-900 dark:bg-purple-400">Leave Review</button>

                            </form>
                        </div>

                    </div>


                </>
                :
                <p className='text-2xl'>Please <span className='font-bold'><Link to='/login'>Login</Link></span> To add a review</p>
        }
    </>


    return (
        <div>

            {ReviewRender}
            <div>
                <h1 className='text-3xl font-bold ml-5'>Reviews For this Service</h1>
                {
                    reviews.map(review => <RsCard
                        key={review._id}
                        review={review}
                    ></RsCard>)
                }
            </div>
        </div>
    );
};

export default ReviewSection;