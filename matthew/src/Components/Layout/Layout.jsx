import Footer from "../Sections/Footer";
import FollowMouse from "../anim/FollowMouse";
import Sidebar from "./sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <div className="App relative
         bg-gray-50 selection:text-gray-500 overflow-hidden font-['roboto']">
            <Sidebar></Sidebar>
                <Outlet></Outlet>
            <Footer></Footer>
            <FollowMouse></FollowMouse>
        </div>
    );
};

export default Layout;