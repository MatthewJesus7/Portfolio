import { useState, useRef, useImperativeHandle, forwardRef } from "react";
import Menu from "../../Layout/Menu";
import PopUpItem from "./PopUpItem";

const PopUp = forwardRef(({ height, children }, ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();


  const handleOpenMenu = (event) => {
    const { pageX, pageY } = event;
    setPosition({ x: pageX, y: pageY });
    setIsMenuOpen(true);
    menuRef.current.openMenu();
  };

  useImperativeHandle(ref, () => ({
    openMenu: handleOpenMenu,
  }));

  useImperativeHandle(ref, () => ({
    handleOpenMenu,
  }));

  return (
    <Menu
      customclass="absolute -translate-x-1/2 w-56 
      transition-all duration-500 ease-in-out overflow-hidden rounded-md
      backdrop-blur-md bg-gray-500/30 shadow-lg
      "
      style={{
        ...(isMenuOpen
          ? {
              left: `${position.x}px`,
              top: `${position.y}px`,
            }
          : {}),
      }}
      OpenMenuAnimating={`${height}`}
      OpenMenuEndAnimating={`${height}`}
      CloseMenuAnimating={`h-0`}
      CloseMenuEndAnimating={`h-0 none`}
      ref={menuRef}
    >
      {children}
    </Menu>
  );
});

export default PopUp;