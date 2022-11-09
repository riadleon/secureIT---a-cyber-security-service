
import React, { useContext, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';



const Login = () => {
    const [error, setError] = useState('');
    const { signIn, setLoading, passReset } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                setError('');
                navigate(from, { replace: true });
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                    toast.success('You have successfully logged in!!')
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }
    const handlePasswordChange = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        passReset(email)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Reset email sent successfully')
            })
            .catch(error => console.error(error))
    }

    return (


        <form onSubmit={handleSubmit}>
            <div className="section text-center">
                <h4 className="text-3xl m-4 font-bold">Log In</h4>
                <div className="pace-y-4">
                    <input type="email" name="email" className="w-1/5 px-3 py-2 border rounded-md dark:border-gray-700 "
                        placeholder="Your Email" id="logemail" />
                    <i className="input-icon uil uil-at"></i>
                </div>
                <div className="form-group mt-2">
                    <input type="password" name="password" className="w-1/5 px-3 py-2 border rounded-md dark:border-gray-700 "
                        placeholder="Your Password" id="logpass" />
                    <i className="input-icon uil uil-lock-alt"></i>
                </div>
                <button className="mt-5 px-8 py-3 font-semibold rounded-md btn btn-ghost bg-teal-400">Submit</button>
                <p className="mb-0 mt-4 text-center"><Link to='/register' className="link">Do not have an account? </Link></p>
                <p className="mb-0 mt-4 text-center"><Link onClick={handlePasswordChange}>Forgot your password?</Link></p>
                <p className="mb-0 mt-4 text-center">
                    {error}
                </p>
            </div>
        </form>


    )
};

export default Login;