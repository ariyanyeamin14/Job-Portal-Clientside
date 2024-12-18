import {
    createBrowserRouter
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Signin from "../pages/signin/Signin";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "../pages/privateRoute/PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import AddJob from "../pages/addJob/AddJob";
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/viewApplications/ViewApplications";
import MyApplications from "../pages/myApplications/MyApplications";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "register",
          element: <Register></Register>
        },
        {
          path: "signin",
          element: <Signin></Signin>
        },
        {
          path: "job/:id",
          element: <PrivateRoute> <JobDetails></JobDetails> </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/job/${params.id}`)
        },
        {
          path: "jobApply/:id",
          element: <PrivateRoute> <JobApply></JobApply> </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/job/${params.id}`)
        },
        {
          path: "my-applications",
          element: <PrivateRoute> <MyApplications></MyApplications> </PrivateRoute>
        },
        {
          path: "add-job",
          element: <PrivateRoute> <AddJob></AddJob> </PrivateRoute>
        },
        {
          path: "my-posted-jobs",
          element: <PrivateRoute> <MyPostedJobs></MyPostedJobs> </PrivateRoute>
        },
        {
          path: "viewApplications/:job_id",
          element: <PrivateRoute> <ViewApplications></ViewApplications> </PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`) 
        }
      ]
    },
  ]);

  export default router