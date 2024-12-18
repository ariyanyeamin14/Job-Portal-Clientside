import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import axios from 'axios';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyApplications = () => {
    const { user } = useContext(AuthContext)
    const [jobs, setJobs] = useState([])
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        // fetch(`https://job-portal-serverside.vercel.app/job-application?email=${user.email}`)
        // .then(res => res.json())
        // .then(data => setJobs(data))

        // axios.get(`https://job-portal-serverside.vercel.app/job-application?email=${user.email}`, { withCredentials: true})
        // .then(res => setJobs(res.data))

        // this is a custom hook 
        axiosSecure.get(`/job-application?email=${user.email}`)
            .then(res => setJobs(res.data))

    }, [user.email])

    return (
        <div className='w-[90%] lg:w-[85%] mx-auto my-20'>
            <h2>Totall Job application : {jobs?.length} </h2>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>Company</th>
                        <th>Job</th>
                        <th>Deadline</th>
                        <th>Salary Range</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map((job, index) => <tr key={index}>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img src={job.company_logo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{job.company}</div>
                                        <div className="text-sm opacity-50">{job.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <h2>{job.title}</h2>
                            </td>
                            <td>{job.applicationDeadline}</td>
                            <th>
                                {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency}
                            </th>
                        </tr>)
                    }
                    {/* row 1 */}

                </tbody>
            </table>
        </div>
    );
};

export default MyApplications;