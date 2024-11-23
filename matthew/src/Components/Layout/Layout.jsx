import Footer from "../Sections/Footer";
import FollowMouse from "../anim/FollowMouse";

const Layout = ({children}) => {
    return(
        <div>
            
            {children}
            <Footer></Footer>
            <FollowMouse></FollowMouse>
        </div>
    );
};

export default Layout;