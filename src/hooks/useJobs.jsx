import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useJobs = (sort, search, minSalary, maxSalary) => {
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])

    useEffect(()=> {
        axios.get(`http://localhost:5000/jobs?sort=${sort}&search=${search}&minSalary=${minSalary}&maxSalary=${maxSalary}`)
        .then(res => {
            setLoading(false)
            setJobs(res.data)
        })
    }, [sort, search, minSalary, maxSalary])
    
    return {loading, jobs}
};

export default useJobs;