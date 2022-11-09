import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { FaGoogle } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip'

import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import app from '../../../firebase/firebase.config';
import useTitle from '../../../hooks/useTitle';

const Register = () => {
    useTitle('Register');
    const [error, setError] = useState('');
    const { createUser, updateUserProfile, verifyEmail, providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Google logged in successfully')
            })
            .catch(error => console.error(error))
    }



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }

    // const handleAccepted = event => {
    //     setAccepted(event.target.checked)
    // }

    return (
        <form onSubmit={handleSubmit} >
            <div className="section text-center">
                <h4 className="text-3xl m-4 font-bold">Register</h4>
                <div className="space-y-4">
                    <input type="text" name="name" className="w-1/5 px-3 py-2 border rounded-md dark:border-gray-700 "
                        placeholder="Your Name" id="logname"  />
                    <i className="input-icon uil uil-at"></i>
                </div>
                <div className="form-group mt-2">
                    <input type="text" name="photoURL" className="w-1/5 px-3 py-2 border rounded-md dark:border-gray-700 "
                        placeholder="Add Your Photo" id="logname"  />
                    <i className="input-icon uil uil-lock-alt"></i>
                </div>
                <div className="form-group mt-2">
                    <input type="email" name="email" className="w-1/5 px-3 py-2 border rounded-md dark:border-gray-700 "
                        placeholder="Enter Email" id="logmail"  required />
                    <i className="input-icon uil uil-lock-alt"></i>
                </div>
                <div className="form-group mt-2">
                    <input type="password" name="password" className="w-1/5 px-3 py-2 border rounded-md dark:border-gray-700 "
                        placeholder="password" id="logpass"  required />
                    <i className="input-icon uil uil-lock-alt"></i>
                </div>
                <button className="mt-5 px-8 py-3 font-semibold rounded-md btn btn-ghost bg-teal-400">Register</button>
                <p className="mb-0 mt-4 text-center"><Link to='/login' className="link">Already Have an account? </Link></p>
                <p className="mb-0 mt-4 text-center">
                    {error}
                </p>
                <div className='flex items-center justify-center'>
                    <button onClick={handleGoogleSignIn} className="btn btn-primary mb-14 mr-6 " data-tip="Sign with Google"><FaGoogle></FaGoogle></button>
                    <ReactTooltip></ReactTooltip>
                </div>
            </div>
        </form>

    );
};

export default Register;