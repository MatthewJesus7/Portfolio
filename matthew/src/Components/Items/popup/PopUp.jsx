import { useState, useRef, useEffect, useImperativeHandle, forwardRef } from "react";
import Menu from "../../Layout/Menu";
import PopUpItem from "./PopUpItem";

const PopUp = forwardRef((props, ref) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loadPos, setLoadPos] = useState(false);
  const menuRef = useRef();

  // Função para rastrear a posição do mouse
  const handleMouseMove = (event) => {
    setPosition({
      x: event.pageX,
      y: event.pageY,
    });
  };

  // Adicionar o evento de "mousemove" quando necessário
  useEffect(() => {
    if (!loadPos) {
      document.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [loadPos]); // Reexecuta o efeito apenas se `loadPos` mudar

  // Função para abrir o menu e parar de rastrear o mouse
  const handleOpenMenu = () => {
    setLoadPos(true);
    menuRef.current.openMenu();
    document.removeEventListener("mousemove", handleMouseMove);
  };

  // Expondo `handleOpenMenu` para o pai via ref
  useImperativeHandle(ref, () => ({
    openMenu: handleOpenMenu,
  }));

  return (
    <div>
      <div className="absolute z-20">
        <button
          className="active:bg-red-900 hover:bg-red-300
                absolute top-10 left-48 bg-red-500 size-12"
          onClick={handleOpenMenu}
        >
          teste
        </button>
        <Menu
          customclass="-translate-x-1/2 w-56 transition-all duration-500 ease-in-out overflow-hidden rounded-md"
          style={{
            ...(loadPos
              ? {
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                }
              : {}),
          }}
          OpenMenuAnimating={`h-[120px]`}
          OpenMenuEndAnimating={`h-[120px]`}
          CloseMenuAnimating={`h-0`}
          CloseMenuEndAnimating={`h-0 none`}
          ref={menuRef}
        >
          <PopUpItem></PopUpItem>
        </Menu>
        {console.log(`${position.x}x, ${position.y}y`)}
      </div>
    </div>
  );
});

export default PopUp;
