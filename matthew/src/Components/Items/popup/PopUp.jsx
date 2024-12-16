import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import Menu from "../../Layout/Menu";
import PopUpItem from "./PopUpItem";

const PopUp = forwardRef(({ items, groupedItems }, ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [customStyle, setCustomStyle] = useState({});

  const [popUpSize, setPopupSize] = useState(0);

  const menuRef = useRef();

  const [filteredItems, setFilteredItems] = useState([]);
  
  useImperativeHandle(ref, () => ({
    openMenu: handleOpenMenu,
    closeMenu: handleCloseMenu,
    showPopUp,
  }));

  const handleOpenMenu = (event, name) => {
    const { pageX, pageY } = event;

    setPosition({ x: pageX, y: pageY });

    if (name && Array.isArray(items)) {
      const matchingGroup = items.find((group) => group.name === name);
      setFilteredItems(matchingGroup ? matchingGroup.items : []);
    }

    // setIsMenuOpen(true);
    if (menuRef.current) {
      menuRef.current.openMenu();
    }
  };

  const showPopUp = (event, name) => {

    event.preventDefault();

    const newSize = calculatePopupSize(name);
    setPopupSize(newSize);
    
    handleOpenMenu(event, name);
  };

  const calculatePopupSize = (name) => {
    const group = groupedItems?.find((g) => g.name === name);
    return group ? group.items.length * 40 : 0;
  };
  

    const handleCloseMenu = () => {
    // setIsMenuOpen(false);

  if (menuRef.current) {
      menuRef.current.closeMenu();
  };
};



  useEffect(() => {
    const updateStyleBasedOnPositionAndMedia = () => {
      if (position.x < 120 && !window.matchMedia("(min-width: 1280px)").matches) {
        setCustomStyle({
          transform: "translateX(0%)",
          left: "4%",
          top: `${position.y}px`,
        });
      } else {
        setCustomStyle({
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translateX(-50%)",
        });
      }
    };

    updateStyleBasedOnPositionAndMedia();

    window.addEventListener("resize", updateStyleBasedOnPositionAndMedia);
    
    return () => {
      window.removeEventListener("resize", updateStyleBasedOnPositionAndMedia);
    };
  }, [position]);


  return (
    <Menu
      customclass="pop-up absolute w-56 transition-all duration-400 ease-in-out overflow-hidden rounded-md z-40 backdrop-blur-md bg-gray-500/30 shadow-lg"
      onMouseLeave={handleCloseMenu}
      style={customStyle}
      styleOpenMenuAnimating={{ height: `${popUpSize}px` }}
      styleOpenMenuEndAnimating={{ height: `${popUpSize}px` }}
      styleCloseMenuAnimating={{ height: "0px" }}
      styleCloseMenuEndAnimating={{ height: "0px" }}
      OpenMenuAnimating={``}
      OpenMenuEndAnimating={``}
      CloseMenuAnimating={``}
      CloseMenuEndAnimating={``}
      ref={menuRef}
    >
      {filteredItems.length > 0 ? (
        <ul>
          {filteredItems.map((item, idx) => (
            <PopUpItem 
            key={idx} 
            text={item.text} 
            href={item.href} 
            />
          ))}
        </ul>
      ) : (
        <p className="text-center">Nenhum item encontrado</p>
      )}
    </Menu>
  );
});

export default PopUp;
