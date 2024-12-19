import { useState } from "react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import HoverBar from "../../anim/HoverBar";

const CardsMenuButton = ({ text, onClick }) => {
    
    const [menuOpen, setMenuOpen] = useState(false)

    const [mouseOver, setMouseOver] = useState(false);
    const handleMouseOver = () => setMouseOver(true);
    const handleMouseOut = () => setMouseOver(false);

      const handleOnClick = () => {
        setMenuOpen(!menuOpen);
        if (onClick) {
            onClick(onClick);
          };
      };

    return(
        <button onClick={handleOnClick}
        onMouseOver={handleMouseOver} 
        onMouseOut={handleMouseOut}
        className="flex w-full rounded-md transition-all duration-300 ease-in-out " >
            <h3>{text}</h3>
            {/* container do item que gira */}
            <div 
            className={`flex justify-end absolute w-[90%] hover:-translate-y-1 h-7 hover:h-9 transition-all duration-500 ease-in-out 
            `}>
            {/* item que gira */}
            <p className={`flex justify-center items-center font-semibold size-5 transition-all duration-500 ease-in-out text-gray-900
            ${ menuOpen && "rotate-180 origin-center"}`}>

            {menuOpen 
            ? <XMarkIcon className="h-6 w-6 "/> 
            : <ChevronDownIcon className="h-6 w-6" />}
            </p>
            </div>

            {/* div abaixo animada */}
            <HoverBar isHovered={mouseOver}
            customclass="mt-7 h-1"
            />
        </button>
    );
};

export default CardsMenuButton;