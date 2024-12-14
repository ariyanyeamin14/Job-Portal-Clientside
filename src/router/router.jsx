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
        }
      ]
    },
  ]);

  export default router