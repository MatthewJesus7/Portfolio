import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";

const Menu = forwardRef(({ children, customclass, style,
    OpenMenuAnimating, OpenMenuEndAnimating, CloseMenuAnimating, CloseMenuEndAnimating, styleOpenMenuAnimating, styleOpenMenuEndAnimating,styleCloseMenuAnimating,styleCloseMenuEndAnimating }, ref) => {

    const [isAnimating, setIsAnimating] = useState(false);
    const [aparecerMenu, setAparecerMenu] = useState(false);
    const menuRef = useRef(null);

    const openMenu = () => {
        console.log('Menu (teoricamente) aberto.')
        setIsAnimating(true);

        setTimeout(() => {
            
            setAparecerMenu(true);
            setIsAnimating(false);

        }, 500);
    }

    const closeMenu = () => {
        console.log('Menu (teoricamente) fechado.')
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
            setAparecerMenu(false);
        }, 500);
    };

    const toggleMenu = () => {
            if (aparecerMenu) {
                closeMenu();
            } else {
                openMenu();
            };
    };


    useImperativeHandle(ref, () => ({
        openMenu,
        closeMenu,
    }));

    const handleClickOutside = (event) => {

    if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
  
    useEffect(() => {

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [aparecerMenu]);
    
    return(
        <div className={`overflow-x-hidden ${aparecerMenu ? 'blur-background' : ''} `}>

        <div className={`overflow-x-hidden`}>

            <div
                onMouseLeave={closeMenu}
                ref={menuRef}
                style={{
                    ...style,
                    ...aparecerMenu
                    ? isAnimating
                        ? styleOpenMenuAnimating
                        : styleOpenMenuEndAnimating
                    : isAnimating
                    ? styleCloseMenuAnimating
                    : styleCloseMenuEndAnimating
                }}
                className={`absolute ${customclass}
                    ${
                    aparecerMenu
                        ? isAnimating
                            ? OpenMenuAnimating
                            : OpenMenuEndAnimating
                        : isAnimating
                        ? CloseMenuAnimating
                        : CloseMenuEndAnimating
                    }
                    `}
            >
                {children}
            </div>
            
        </div>
    </div>
    );
});

export default Menu;