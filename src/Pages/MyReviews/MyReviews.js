import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TableReviews from './TableReviews';

const MyReviews = () => {
    const reviews = useLoaderData();

    // 
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
                            ></TableReviews>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyReviews;