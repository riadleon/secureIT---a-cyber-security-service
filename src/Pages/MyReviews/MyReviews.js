import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import TableReviews from './TableReviews';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [user?.email])



    const handleDelete = (id) => {
        fetch(`http://localhost:5000/reviews/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    setRefresh(refresh);
                } else {
                    toast.error(data.error);
                }
            }).catch(err => toast.error(err.message))
    };

    const navigate = useNavigate();
    const handleEdit = (id) => {
        navigate(`/reviews/edit/${id}`)
    }


    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>

                            <th>User</th>
                            <th>Service Name</th>
                            <th>Feedback</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(r => <TableReviews
                                key={r._id}
                                r={r}
                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            ></TableReviews>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyReviews;