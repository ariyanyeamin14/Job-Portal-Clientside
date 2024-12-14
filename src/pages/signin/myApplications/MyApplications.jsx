import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../context/AuthContext/AuthContext';

const MyApplications = () => {
    const {user} = useContext(AuthContext)
    const [jobs, setJobs] = useState()

    useEffect(()=> {
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [user.email])
    console.log(jobs)
    return (
        <div>
            <h2>Totall Jobs : {jobs?.length} </h2>
        </div>
    );
};

export default MyApplications;