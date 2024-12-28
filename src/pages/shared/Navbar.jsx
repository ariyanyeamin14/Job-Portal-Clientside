import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { Link, NavLink } from 'react-router-dom';
import JobIcon from '../../assets/job.png'

const Navbar = () => {        
        const { user, signoutUser } = useContext(AuthContext)

    const links = <>
        <li> <NavLink to={'/'}>Home</NavLink> </li>
        <li> <NavLink to={'jobs'} >All Jobs</NavLink></li>
        <li> <NavLink to={'/my-applications'}>My Application</NavLink> </li>
        <li> <NavLink to={'/add-job'}>Add Job</NavLink> </li>
        <li> <NavLink to={'/my-posted-jobs'}>My Posted Jobs</NavLink> </li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className='w-[50px]' src={JobIcon} alt="" />
                <span className='font-bold text-lg'>JOB PORTAL</span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button onClick={signoutUser} className='btn'>Logout</button>
                    </> : <>
                        <Link className='btn' to={"/signin"}>Signin</Link>
                        <Link className='btn'  to={"/register"}>Register</Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;