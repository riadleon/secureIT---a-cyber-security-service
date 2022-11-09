import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

const EditReview = () => {
    const router = useParams();
    // console.log('editReview', router);
    const [reviews, setReviews] = useState({});
    const { id } = router;

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${id}`)
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setReviews(data.data);
                } else {
                    toast.error(data.error);
                }
            })
            .catch((err) => toast.error(err.message));
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reviews = {
            feedback: e.target.review.value,
        };


        fetch(`http://localhost:5000/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviews)
        }).then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    navigate("/myReviews")
                } else {
                    toast.err(data.error)
                }
            })
            .catch(err => toast.error(err.message))
    }
    return (
        <div className="flex flex-col py-32 px-10  w-3/5 p-8 shadow-sm rounded-xl lg:p-12 ">
            <div className="flex flex-col  w-full">
                <h2 className="text-3xl font-semibold ">Your opinion matters!</h2>
                <div className="flex flex-col  py-6 space-y-3">
                    <span className="">How was your experience?</span>
                    <div className="flex space-x-3">

                    </div>
                </div>
                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        defaultValue={reviews?.feedback}
                        name="review"
                        className="w-3/5 px-3 py-2 my-2
                 border rounded-md dark:border-gray-700 "></input>
                    <button className="w-3/5 px-3 py-2 font-semibold rounded-md dark:text-gray-900 dark:bg-purple-400">Update</button>

                </form>
            </div>

        </div>

    );
};

export default EditReview;