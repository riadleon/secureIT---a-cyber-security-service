import React from 'react';

const RsCard = ({ review }) => {
    const { feedback, userImg, userName } = review;
    console.log(review);
    return (
        <div className="container flex flex-col w-full max-w-lg p-6 divide-y rounded-md ">
            <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                    <div>
                        <img src={userImg} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
                    </div>
                    <div>
                        <h4 className="font-bold">{userName}</h4>
                        <span className="text-xs text-black-400">2 days ago</span>
                    </div>
                </div>
                <div className="flex items-center space-x-2 dark:text-yellow-500">

                    <span className="text-xl font-bold">4.5</span>
                </div>
            </div>
            <div className="p-4 space-y-2 text-sm text-black-400">
                <p>{feedback}</p>

            </div>
        </div>
    );
};

export default RsCard;