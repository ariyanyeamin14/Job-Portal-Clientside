import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { useNavigate } from 'react-router-dom';

const axiosInstance = axios.create({
    baseURL: 'https://job-portal-serverside.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { signoutUser } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            if(error.status === 401 || error.status === 403){
                signoutUser()
                .then(() => {
                    navigate('/signin')
                })
            }
            return Promise.reject(error)
        }
    )
    }, [])
    return axiosInstance;
};

export default useAxiosSecure;