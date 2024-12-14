import React, { useState } from "react";
import NavButton from "../../Items/Buttons/NavButton";
import { NavLink } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <NavButton 
      onClick={() => setIsOpen(!isOpen)}
      customclass={`fixed right-0 top-0 z-50 text-gray-900
        ${isOpen ? "-translate-x-64 -rotate-90" : "translate-x-0"}
      transform
      transition-transform duration-300 ease-in-out
        `}
      >
      {isOpen ? <XMarkIcon/> : <Bars3Icon/>}
      </NavButton>

      <div  className={`h-full
        fixed right-0 top-0 z-50
        ${isOpen ? "translate-x-0" : "translate-x-64"}
        transform
        transition-transform duration-300 ease-in-out

        backdrop-blur-md bg-gray-300/70 w-64 max-w-1/2 shadow-2xl`}
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