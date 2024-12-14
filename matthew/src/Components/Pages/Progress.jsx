import { useState, useRef, useMemo } from "react";
import { groupedItems as groupedItemsData } from "../../data";
import BackButton from "../Items/Buttons/BackButton";import PopUp from "../Items/popup/PopUp";
import Section from "../Layout/Section";
import GustavoGuanabara from "../Sections/html-css/GustavoGuanabara";

// import Menu from "../Layout/Menu";
import CardsMenu from "../Layout/menus/CardsMenu";
import CardsMenuButton from "../Layout/menus/CardsMenuButton";

// import Card from "../Layout/Card";
// import Dot from "../Items/Dot";
// import Tag from "../Items/Tag";

const Progress = () => {
    const groupedItems = useMemo(() => groupedItemsData, []);

    const [menuOpen, setMenuOpen] = useState(false)
    const [activeName, setActiveName] = useState(null);
    const [popupSize, setPopupSize] = useState(0);
    const popUpRef = useRef();
    const menuRef = useRef();

    const ShowPopUp = (event, name) => {
        event.preventDefault();

        
        if (popUpRef.current) {
        setActiveName(name);

        const newSize = calculatePopupSize(name);
        setPopupSize(newSize);

          popUpRef.current.handleOpenMenu(event, name);
        }
      };

      const calculatePopupSize = (name) => {
        const group = groupedItems.find((g) => g.name === name);
        const count = group ? group.items.length : 0;
        return count * 40;
    };

    const handleToggleMenu = () => {
        setMenuOpen(!menuOpen);
        if (menuRef.current) {
            menuRef.current.toggleMenu();
    };
};

    const [menuHeight, setMenuHeight] = useState(0);

    const handleMenuHeightCalculate = (height) => {
    setMenuHeight(height);
    };

    console.log(menuHeight);

    return(
        <div>
            <BackButton></BackButton>

            <Section customclass="relative z-20 -mb-16">
                <h2>HTML5 e CSS3</h2>

                <CardsMenuButton
                text="Curso de HTML e CSS do gustavo Guanabara"
                menuOpen={menuOpen}
                onClick={handleToggleMenu}
                />
            </Section>

            <CardsMenu ref={menuRef} 
            menuHeight={menuHeight}>
                <GustavoGuanabara
                onItemCountChange={handleMenuHeightCalculate}
                ShowPopUp={ShowPopUp}/>
            </CardsMenu>


            <Section customclass="relative z-20 -mb-16 mt-8">
                <button onClick={handleToggleMenu}>
                    <h3>Meus Proprios Projetos</h3>
                </button>
            </Section>

            {/* <CardsMenu ref={menuRef} 
            menuHeight={menuHeight}>
                <GustavoGuanabara
                onItemCountChange={handleMenuHeightCalculate}
                ShowPopUp={ShowPopUp}/>
            </CardsMenu> */}



            <PopUp 
            height={popupSize}
            ref={popUpRef} 
            name={activeName}
            items={groupedItems}
            />
        </div>
    );
};

export default Progress;