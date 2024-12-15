import { useState, useEffect } from "react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";

const CardsMenuButton = ({ text, onClick }) => {
    
    const [menuOpen, setMenuOpen] = useState(false)
    const [mouseOver, setMouseOver] = useState(false);

    const handleMouseOver = () => {
        setMouseOver(true);
    }

    const handleMouseOut = () => {
        setMouseOver(false)
    }

    useEffect(() => {

        document.addEventListener('mouseout', handleMouseOut);
  
        return () => {
          document.removeEventListener('mouseout', handleMouseOut);
        };
      },);

      const handleOnClick = () => {
        setMenuOpen(!menuOpen);
        if (onClick) {
            onClick(onClick);
          };
      };

    return(
        <button onClick={handleOnClick}
        onMouseOver={handleMouseOver} 
        className="flex w-full rounded-md transition-all duration-300 ease-in-out " >
            <h3>{text}</h3>
            {/* container do item que gira */}
            <div 
            className={`flex justify-end absolute w-[90%] hover:-translate-y-1 h-7 hover:h-9 transition-all duration-500 ease-in-out 
            `}>
            {/* item que gira */}
            <p className={`font-semibold size-5 transition-all duration-500 ease-in-out text-gray-500  
            ${ menuOpen && "rotate-180 origin-center"}`}>

            {menuOpen 
            ? <XMarkIcon className="h-6 w-6 "/> 
            : <ChevronDownIcon className="h-6 w-6" />}
            </p>
            </div>

            {/* div abaixo animada */}
            <div 
            className={`absolute mt-7 h-1 
                rounded-sm
                bg-gradient-to-r from-gray-700/50 to-transparent
                transition-all duration-500 ease-out
            ${mouseOver
            ? 'w-3/4'
            : 'w-0'
            }
            `}>
            </div>
        </button>
    );
};

export default CardsMenuButton;