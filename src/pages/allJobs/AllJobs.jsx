import React, { useState } from 'react';
import useJobs from '../../hooks/useJobs';
import JobCard from '../home/JobCard';
import { BiSearch } from 'react-icons/bi';

const AllJobs = () => {
    const [sort, setSort] = useState(false)
    const [search, setSearch] = useState("")
    const [minSalary, setMinSalary] = useState("")
    const [maxSalary, setMaxSalary] = useState("")
    const { jobs, loading } = useJobs(sort, search, minSalary, maxSalary)

    if (loading) {
        return <h1 className='flex items-center justify-center text-5xl font-bold h-screen'>Jobs is loading</h1>
    }

    return (
        <div>
            <div className='w-11/12 mx-auto bg-base-200 py-5 px-3 rounded-lg flex justify-evenly items-center'>
                <button onClick={() => setSort(!sort)} className={`btn btn-neutral ${sort && "btn-success"}`}>
                    {sort ? "Sorted by salary" : "Sort by salary"}
                </button>
                <div className='flex items-center gap-5'>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        className=' input w-[400px]'
                        type="text"
                        placeholder='Search jobs by location'
                    />
                    <BiSearch size={40}></BiSearch>
                </div>
                <div className='flex flex-col gap-3'>
                    <input
                        onChange={(e) => setMinSalary(e.target.value)}
                        placeholder='Min Salary'
                        className='input'
                        type="number"
                        name="" id="" />
                    <input
                        onChange={(e) => setMaxSalary(e.target.value) }
                        placeholder='Max Salary'
                        className='input'
                        type="number"
                        name="" id="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-[90%] mx-auto py-20'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default AllJobs;