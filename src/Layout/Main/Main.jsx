import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Profile from "../../Shared/Profile/Profile";


const Main = () => {
    return (
        <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-4 px-12 py-5 order-2 lg:order-1">
                <Profile></Profile>
            </div>
            <div className="col-span-12 lg:col-span-7 order-3 lg:order-2">
                <Outlet></Outlet>
            </div>
            <div className="order-1 lg:order-3">
                <Navbar></Navbar>
            </div>
        </div>
    );
};

export default Main;