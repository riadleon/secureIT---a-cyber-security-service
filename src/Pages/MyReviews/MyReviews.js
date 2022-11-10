import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import TableReviews from './TableReviews';

const MyReviews = () => {
    useTitle('MyReviews')
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReviews] = useState([])
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(`https://secure-web-server.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('secureWeb-token')}`
            }
        })

            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setReviews(data);
            })
    }, [user?.email, logOut])



    const handleDelete = (id) => {
        fetch(`https://secure-web-server.vercel.app/reviews/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem(' secureWeb-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(data.message);
                    setRefresh(!refresh);
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