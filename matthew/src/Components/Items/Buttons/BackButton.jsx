import { NavLink } from "react-router-dom";
import NavButton from "./NavButton";
import { FiArrowLeft } from "react-icons/fi";

const BackButton = () => {
    return(
        <NavButton customclass="fixed z-20">
            <NavLink 
            to="/">
                <FiArrowLeft 
                className="text-black" 
                size={24} />
            </NavLink>
        </NavButton>
    );
};

export default BackButton;