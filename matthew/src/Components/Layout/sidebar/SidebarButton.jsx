import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HoverBar from "../../anim/HoverBar";


const SidebarButton = ({ onClick, text, to, icon }) => {

    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return(
        <li 
        className="hover:bg-gray-400/30 transition-all h-12"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave} >

          <NavLink 
          to={to} 
          onClick={onClick}
          className="flex flex-row items-center relative z-10 size-full">
            <span className="size-10 ml-[7px] mb-2.5">{icon}</span>
            <span className="">{text}</span>
          </NavLink>

          <HoverBar
            isHovered={isHovered}
            customclass="h-12 -mt-12 z-0            bg-gradient-to-r from-gray-500/50 to-transparent"
            hoverAnim=""
            noHoverAnim="" />

        </li>
    );
};

export default SidebarButton;