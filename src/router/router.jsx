import {
    createBrowserRouter
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Signin from "../pages/signin/Signin";

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
        }
      ]
    },
  ]);

  export default router