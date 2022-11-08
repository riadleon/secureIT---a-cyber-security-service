import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                // handleUpdateUserProfile(name, photoURL);
                // handleEmailVerification();
                toast.success('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    // const handleUpdateUserProfile = (name, photoURL) => {
    //     const profile = {
    //         displayName: name,
    //         photoURL: photoURL
    //     }

    //     updateUserProfile(profile)
    //         .then(() => { })
    //         .catch(error => console.error(error));
    // }

    // const handleEmailVerification = () => {
    //     verifyEmail()
    //         .then(() => { })
    //         .catch(error => console.error(error));
    // }

    // const handleAccepted = event => {
    //     setAccepted(event.target.checked)
    // }

    return (
        <div className="text-white w-full max-w-md p-4 rounded-md shadow bg-teal-800 mx-auto m-10">
            <h1 className='text-5xl font-bold mb-5'>SignUp!!</h1>
            <form onSubmit={handleSubmit} className="space-y-8 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm">User Name</label>
                        <input type="text" name="name" id="name" placeholder="write your name..." className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-gray-900 dark:text-gray-100 focus:dark:border-purple-400" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm">User Photo</label>
                        <input type="text" name="photoURL" id="photoUrl" placeholder="Add your Your Photo..." className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-gray-900 dark:text-gray-100 focus:dark:border-purple-400" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="write your email..." className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-gray-900 dark:text-gray-100 focus:dark:border-purple-400" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label htmlFor="password" className="text-sm">Password</label>

                        </div>
                        <input type="password" name="password" id="password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-gray-900 dark:text-gray-100 focus:dark:border-purple-400" />
                    </div>
                </div>
                <button type="button" className="w-full px-8 py-3 font-semibold rounded-md btn btn-ghost bg-teal-400">Sign Up</button>
            </form>
            <Link to='/login' className=" text-center text-xs hover:underline text-white font-bold">Already Have an account?</Link>
            <p className="mb-0 mt-4 text-center">
                {error}
            </p>
        </div>

    );
};

export default Register;