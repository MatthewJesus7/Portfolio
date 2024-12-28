import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";

const Menu = forwardRef(({ children, customclass, style, onMouseLeave,
    OpenMenuAnimating, OpenMenuEndAnimating, CloseMenuAnimating, CloseMenuEndAnimating, styleOpenMenuAnimating, styleOpenMenuEndAnimating,styleCloseMenuAnimating,styleCloseMenuEndAnimating, id }, ref) => {

    const [isAnimating, setIsAnimating] = useState(false);
    const [aparecerMenu, setAparecerMenu] = useState(false);
    const menuRef = useRef(null);

    const openMenu = () => {
        setIsAnimating(true);

        setTimeout(() => {
            setAparecerMenu(true);
            setIsAnimating(false);
        }, 500);
    }

    const closeMenu = () => {
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
        toggleMenu,
        openMenu,
        closeMenu,
    }));

    useEffect(() => {
    const handleClickOutside = (event) => {

    if (menuRef.current && !menuRef.current.contains(event.target)) {
    if (onMouseLeave) {
        closeMenu();
      }}
    };
    
    

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [setAparecerMenu, onMouseLeave]);
    
    return(
        <menu id={id} className={`overflow-x-hidden ${aparecerMenu ? 'blur-background' : ''} `}>

        <div className={`overflow-x-hidden`}>

            <div
                onMouseLeave={onMouseLeave}
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
                
                className={`${customclass}
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
    </menu>
    );
});

export default Menu;