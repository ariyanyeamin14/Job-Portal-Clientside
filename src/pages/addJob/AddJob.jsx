import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import AuthContext from '../../context/AuthContext/AuthContext';

const AddJob = () => {
    const {user} = useContext(AuthContext)
    const handleAddJob = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const initialData = Object.fromEntries(formData.entries())
        const { min, max, currency, ...newJob } = initialData
        newJob.salaryRange = { min, max, currency }
        newJob.requirements = newJob.requirements.split('\n')
        newJob.responsibilities = newJob.responsibilities.split('\n')

        fetch('https://job-portal-serverside.vercel.app/jobs', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newJob)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    return (
        <div className='w-[90%] lg:w-[80%] mx-auto my-20'>
            <h1 className='text-center text-4xl font-bold'>Post a new job</h1>
            <form onSubmit={handleAddJob} className="card-body">
                {/* job title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Title</span>
                    </label>
                    <input name='title' type="text" placeholder="Job Title" className="input input-bordered" required />
                </div>
                {/* company name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Company Name</span>
                    </label>
                    <input name='company' type="text" placeholder="Company Name" className="input input-bordered" required />
                </div>
                {/* job location */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job Location</span>
                    </label>
                    <input name='location' type="text" placeholder="Job Location" className="input input-bordered" required />
                </div>
                {/* Job Type */}
                <div>
                    <label className="label">
                        <span className="label-text">Job Type</span>
                    </label>
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Job Type</option>
                        <option>Intern</option>
                        <option>Part Time</option>
                        <option>Full Time</option>
                    </select>
                </div>
                {/* Job Field */}
                <div>
                    <label className="label">
                        <span className="label-text">Job Feild</span>
                    </label>
                    <select name='job_felid' className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Job Feild</option>
                        <option>Engineering</option>
                        <option>Marketing</option>
                        <option>Accounting</option>
                        <option>Teaching</option>
                        <option>Writing</option>
                    </select>
                </div>
                {/* salary range */}
                <div className='grid grid-cols-3 items-end gap-2'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Salary Range</span>
                        </label>
                        <input name='min' type="number" placeholder="Min" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input name='max' type="number" placeholder="Max" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <input name='currency' type="currency" placeholder="currency" className="input input-bordered" required />
                    </div>
                </div>
                {/* Description */}
                <div>
                    <label className="label">
                        <span className="label-text">Job Description</span>
                    </label>
                    <textarea name='description'
                        placeholder="Description"
                        className="textarea textarea-bordered textarea-md w-full max-w-xs">

                    </textarea>
                </div>
                {/* requirements */}
                <div>
                    <label className="label">
                        <span className="label-text">Job Requirements</span>
                    </label>
                    <textarea name='requirements'
                        placeholder="Job Requirements"
                        className="textarea textarea-bordered textarea-md w-full max-w-xs">
                    </textarea>
                </div>
                {/* responsibilities */}
                <div>
                    <label className="label">
                        <span className="label-text">Job Responsibilities</span>
                    </label>
                    <textarea
                        placeholder="Job Responsibilities" name='responsibilities'
                        className="textarea textarea-bordered textarea-md w-full max-w-xs">
                    </textarea>
                </div>
                {/* HR Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Name</span>
                    </label>
                    <input name='hr_name' type="text" placeholder="HR Name" className="input input-bordered" required />
                </div>
                {/* HR Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input defaultValue={user.email} name='hr_email' type="text" placeholder="HR Email" className="input input-bordered" required />
                </div>
                {/* deadline */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input name='applicationDeadline' type="date" placeholder="Deadline" className="input input-bordered" required />
                </div>
                {/* Company Logo */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HR Email</span>
                    </label>
                    <input name='company_logo' type="text" placeholder="Company Logo" className="input input-bordered" required />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Job</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;