import React from 'react';

const TableReviews = ({ r, handleDelete, handleEdit }) => {
    const { _id, review, userImg, userName, serviceName, feedback } = r;
    console.log(r);
    return (
        <tr>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={userImg} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{userName}</div>
                        {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
            </td>
            <td>{feedback}</td>
            <th>
                <button onClick={() => handleEdit(_id)} className="btn btn-ghost btn-xs bg-teal-800 text-white">Edit</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs bg-rose-800 text-white">Delete</button>
            </th>
        </tr>
    );
};

export default TableReviews;