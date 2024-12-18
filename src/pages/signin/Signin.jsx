import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import SigninAnimation from '../../assets/lottie/signin.json'
import AuthContext from '../../context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {
    const { signinUser, googleSignin } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state || "/"
    const handleSignin = () => {
        googleSignin();
        navigate(from)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        signinUser(email, password)
            .then((userCredential) => {
                const user = { email: userCredential.user.email }
                // navigate(from)
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-full md:w-[50%]">
                    <Lottie animationData={SigninAnimation}></Lottie>
                </div>
                <div className="card bg-base-100  shrink-0 shadow-2xl w-full md:w-[50%]">
                    <form className="card-body" onSubmit={handleSubmit}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='w-full p-4'>
                        <div className="divider">OR</div>
                        <button className='w-full btn btn-primary' onClick={handleSignin}>Signin With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;