import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import { Link } from 'react-router-dom';

const MyPostedJobs = () => {
    const [jobs, setJobs] = useState([])
    const { user } = useContext(AuthContext)

    // const {applicationDeadline, category, company, company_logo, description, hr_email, hr_name, jobType, location, requirements, responsibilities, salaryRange, status, title} = jobs.job


    useEffect(() => {
        fetch(`https://job-portal-serverside.vercel.app/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])

    return (
        <div className='w-[90%] lg:w-[80%] mx-auto my-20'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Deadline</th>
                            <th>View Applications</th>
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
                                    <Link to={`/viewApplications/${job._id}`} className="btn btn-ghost btn-xs">View Applications</Link>
                                </th>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;