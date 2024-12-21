import React, { useState } from "react";
import NavButton from "../../Items/Buttons/NavButton";
import { XMarkIcon, Bars3Icon, EnvelopeIcon, PresentationChartLineIcon, UserIcon } from "@heroicons/react/24/outline";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <NavButton 
      onClick={() => setIsOpen(!isOpen)}
      customclass={`fixed right-0 top-0 z-50 
        text-gray-900
        ${isOpen 
          ? "-translate-x-64 -rotate-90" 
          : "translate-x-0"
      }
      transform transition-transform duration-300 ease-in-out
      `} >
      {isOpen ? <XMarkIcon/> : <Bars3Icon/>}
      </NavButton>

      <div  className={`h-full fixed right-0 top-0 z-50
        ${isOpen ? "translate-x-0" : "translate-x-64"}

        transform transition-transform duration-300 ease-in-out

        backdrop-blur-md bg-gray-300/70 w-64 max-w-1/2 shadow-2xl`}
      >
        <h2 className="text-2xl font-bold p-4">
          Menu
        </h2>

        <ul>

        <SidebarButton
          to="/"
          text="Introdução"
          icon={<EnvelopeIcon className="icon" />}
          onClick={() => setIsOpen(!isOpen)} 
          />


          <SidebarButton
          to="/Progress"
          text="progresso"
          icon={<PresentationChartLineIcon className="icon" />}
          onClick={() => setIsOpen(!isOpen)} 
          />

          <SidebarButton
          to="/ContactMe"
          text="Entre em contato"
          icon={
          <UserIcon className="icon"
          />}
          onClick={() => setIsOpen(!isOpen)} 
          />

        </ul>

      </div>
    </div>
  );
};

export default Sidebar;