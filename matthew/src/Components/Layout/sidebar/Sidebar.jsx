import React, { useState } from "react";
import NavButton from "../../Items/Buttons/NavButton";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiArrowLeft } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`flex h-full
    fixed right-0 z-20
    ${isOpen ? "translate-x-0" : "translate-x-64"}
    transform z-20
    transition-transform duration-300 ease-in-out`}>
      
      <NavButton 
      onClick={() => setIsOpen(!isOpen)}
      >
      {isOpen ? <FiX/> : <FiMenu/>}
      </NavButton>

      <div
        className={`h-full backdrop-blur-md bg-gray-300/70 w-64 max-w-1/2 shadow-2xl`}
      >
        <h2 className="text-xl font-bold p-4">
          Menu
        </h2>

        <ul className="space-y-2">
          <li className="hover:bg-gray-400/30 py-2">
            <NavLink to="/Progress"
            onClick={() => setIsOpen(!isOpen)}
            className="pr-44 pl-6 py-2">Progresso</NavLink>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Sidebar;