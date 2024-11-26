import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import Menu from "../../Layout/Menu";
import PopUpItem from "./PopUpItem";

const PopUp = forwardRef(({ height, name, items }, ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();



  const [filteredItems, setFilteredItems] = useState([]);

  const handleOpenMenu = (event, name) => {
    const { pageX, pageY } = event;
  
    // Define a posição do menu
    setPosition({ x: pageX, y: pageY });
  
    // Atualiza os itens filtrados com base no "name"
    if (name && Array.isArray(items)) {
      const matchingGroup = items.find((group) => group.name === name);
      setFilteredItems(matchingGroup ? matchingGroup.items : []);
    }
  
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
      transition-all duration-400 ease-in-out overflow-hidden rounded-md
      backdrop-blur-md bg-gray-500/30 shadow-lg"
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
      {filteredItems.length > 0 ? (
        <ul>
          {filteredItems.map((item, idx) => (
            <PopUpItem key={idx} text={item.text} />
          ))}
        </ul>
      ) : (
        <p className="text-center">Nenhum item encontrado</p>
      )}
    </Menu>
  );
});

export default PopUp;
