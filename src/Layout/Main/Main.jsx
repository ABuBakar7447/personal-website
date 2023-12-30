import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Profile from "../../Shared/Profile/Profile";


const Main = () => {
    return (
        <div className="grid grid-cols-12 pt-10">
            <div className="col-span-4 px-12 py-5">
                <Profile></Profile>
            </div>
            <div className="col-span-7 p-5">
                <Outlet></Outlet>
            </div>
            <Navbar></Navbar>
        </div>
    );
};

export default Main;