
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const Login = () => {
    // const [error, setError] = useState('');
    // const { signIn, setLoading, passReset } = useContext(AuthContext);
    // const navigate = useNavigate();
    // const location = useLocation();

    // const from = location.state?.from?.pathname || '/';

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;

    //     signIn(email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             form.reset();
    //             setError('');
    //             navigate(from, { replace: true });
    //             if (user.emailVerified) {
    //                 navigate(from, { replace: true });
    //                 toast.success('You have successfully logged in!!')
    //             }
    //             else {
    //                 toast.error('Your email is not verified. Please verify your email address.')
    //             }
    //         })
    //         .catch(error => {
    //             console.error(error)
    //             setError(error.message);
    //         })
    //         .finally(() => {
    //             setLoading(false);
    //         })
    // }
    // const handlePasswordChange = (event) => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const email = form.email.value;
    //     passReset(email)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             toast.success('Reset email sent successfully')
    //         })
    //         .catch(error => console.error(error))
    // }

    return (



        <div className="text-white w-full max-w-md p-4 rounded-md shadow bg-teal-800 mx-auto m-10">
            <h2 className="mb-3 text-3xl font-semibold text-center text-white">Login to your account</h2>
            <p className="text-sm text-center text-gray-400">Don't have account?
                <Link to='/register' className="focus:underline hover:underline">Sign up here</Link>
            </p>
            <div className="my-6 space-y-4">
                <Link ><button type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-purple-400">

                    <FaGoogle className='mr-2'></FaGoogle> Login with Google
                </button></Link>

            </div>
            <div className="flex items-center w-full my-4">
                <hr className="w-full dark:text-gray-400" />
                <p className="px-3 dark:text-gray-400">OR</p>
                <hr className="w-full dark:text-gray-400" />
            </div>
            <form className="space-y-8 ng-untouched ng-pristine ng-valid">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label for="email" className="block text-sm">Email address</label>
                        <input type="email" name="email" id="email" placeholder="write your email..." className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-gray-900 dark:text-gray-100 focus:dark:border-purple-400" />
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <label for="password" className="text-sm">Password</label>
                            <Link className="text-xs hover:underline dark:text-gray-400">Forgot Your Password></Link>
                        </div>
                        <input type="password" name="password" id="password" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-gray-900 dark:text-gray-100 focus:dark:border-purple-400" />
                    </div>
                </div>
                <button type="button" className="w-full px-8 py-3 font-semibold rounded-md btn btn-ghost bg-teal-400">Log in</button>
            </form>
        </div>



    )
};

export default Login;