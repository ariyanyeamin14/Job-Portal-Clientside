import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const  {_id, applicationDeadline, category, company, company_logo, description, hr_email, hr_name, jobType, location, requirements, responsibilities, salaryRange, status, title}  = useLoaderData()
    return (
        <div className="card card-compact bg-base-200 shadow-xl p-4 w-[80%] lg:w-[50%] mx-auto my-20">
            <div className='flex gap-2 items-center'>
                <figure>
                    <img className='w-20' src= {company_logo} />
                </figure>
                <div>
                    <h2 className='text-lg font-semibold'>{company}</h2>
                    <p>{location}</p>
                </div>
            </div>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className='flex flex-wrap gap-3 my-4'>
                    {
                        requirements.map( (req, index) => <button key={index} className='btn'>{req}</button> )
                    }
                </div>
                <div className="card-actions items-center justify-between">
                    <h2 className='font-semibold'>Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency} </h2>
                    <Link to={`/jobApply/${_id}`} className="btn btn-primary">apply</Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;