import { useState, useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import Menu from "../../Layout/Menu";
import PopUpItem from "./PopUpItem";

const PopUp = forwardRef(({ height, name, items }, ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [customStyle, setCustomStyle] = useState({});
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
    if (menuRef.current) {
      menuRef.current.openMenu();
    }
  };

  // Atualiza os estilos dinamicamente com base na posição e no tamanho da tela
  useEffect(() => {
    const updateStyleBasedOnPositionAndMedia = () => {
      if (position.x < 120 && !window.matchMedia("(min-width: 1280px)").matches) {
        // Atualiza para alinhar na quina da tela
        setCustomStyle({
          transform: "translateX(0%)",
          left: "4%",
          top: `${position.y}px`,
        });
      } else {
        // Estilo padrão com centralização
        setCustomStyle({
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translateX(-50%)",
        });
      }
    };

    updateStyleBasedOnPositionAndMedia();

    // Adiciona o listener de resize
    window.addEventListener("resize", updateStyleBasedOnPositionAndMedia);

    // Remove o listener ao desmontar o componente
    return () => {
      window.removeEventListener("resize", updateStyleBasedOnPositionAndMedia);
    };
  }, [position]);

  useImperativeHandle(ref, () => ({
    openMenu: handleOpenMenu,
    closeMenu: handleCloseMenu,
  }));

  useImperativeHandle(ref, () => ({
    handleOpenMenu,
  }));

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  if (menuRef.current) {
      menuRef.current.closeMenu();
  };};

  return (
    <Menu
      customclass="pop-up absolute w-56 transition-all duration-400 ease-in-out overflow-hidden rounded-md z-40 backdrop-blur-md bg-gray-500/30 shadow-lg"
      onMouseLeave={handleCloseMenu}
      style={customStyle}
      styleOpenMenuAnimating={{ height: `${height}px` }}
      styleOpenMenuEndAnimating={{ height: `${height}px` }}
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
            <PopUpItem key={idx} text={item.text} href={item.href} />
          ))}
        </ul>
      ) : (
        <p className="text-center">Nenhum item encontrado</p>
      )}
    </Menu>
  );
});

export default PopUp;
