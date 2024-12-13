import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const Mainlayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Mainlayout;