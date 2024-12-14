import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const JobsSection = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    console.log(jobs)
    return (
        <div className=' bg-base-200'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-[90%] mx-auto py-20'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default JobsSection;