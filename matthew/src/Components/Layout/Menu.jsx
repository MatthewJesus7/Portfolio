import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from "react";

const Menu = forwardRef(({ children }, ref) => {

    const [isAnimating, setIsAnimating] = useState(false);
    const [aparecerMenu, setAparecerMenu] = useState(false);
    const menuRef = useRef(null);

    const openMenu = () => {
        console.log('Menu (teoricamente) aberto.')
        setIsAnimating(true);

        setTimeout(() => {
            setIsAnimating(false);
            setAparecerMenu(false);

            setTimeout(() => {
                setAparecerMenu(true);
                setIsAnimating(true);
            }, 500);

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
                openMenu();
            } else {
                closeMenu();
            };
        };


    useImperativeHandle(ref, () => ({
        toggleMenu,
    }));

    const handleClickOutside = (event) => {

    if (
        menuRef.current && !menuRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };
  
    useEffect(() => {

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
    
    return(
        <div className={`overflow-x-hidden ${aparecerMenu ? 'blur-background' : ''} `}>

        <div className={`overflow-x-hidden`}>

            <button onClick={openMenu}>botao</button>

            <div
                ref={menuRef}
                customclass={`transform transition-all absolute duration-1000 ${
                    aparecerMenu
                        ? isAnimating
                            ? 'translate-y-0 glass h-full sm:h-[500px]'
                            : 'translate-y-0 h-[500px]'
                        : isAnimating
                        ? 'border-none -translate-y-1 h-0'
                        : '-translate-y-1 glass h-0 border-none'
                }`}
            >
                {children}
            </div>
            
        </div>
    </div>
    );
});

export default Menu;