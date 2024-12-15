import { useState, useRef, useMemo, useImperativeHandle } from "react";
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
    const [menuHeight, setMenuHeight] = useState(0);

    

    const menuRef1 = useRef(null);
    const menuRef2 = useRef(null);


    const handleToggleMenu = (menuRef) => {
        setMenuOpen(!menuOpen);

        if (menuRef.current) {
            menuRef.current.toggleMenu();
          }
    };

    const handleMenuHeightCalculate = (height) => {
    setMenuHeight(height);
    };

    const popUpRef = useRef();

    const showPopUp = (event, name) => {
        
        if (popUpRef.current) {
            popUpRef.current.showPopUp(event, name);
        }
    }


    return(
        <div>
            <BackButton></BackButton>

            <Section customclass="relative z-20 -mb-8">
                <h2>HTML5 e CSS3</h2>
                <CardsMenuButton
                text="Curso de HTML e CSS do gustavo Guanabara"
                menuOpen={menuOpen}
                onClick={() => handleToggleMenu(menuRef1)}
                />
            </Section>

            <CardsMenu ref={menuRef1} 
            menuHeight={menuHeight}>
                <GustavoGuanabara
                onItemCountChange={handleMenuHeightCalculate}
                ShowPopUp={(event, name) => showPopUp(event, name)}/>
            </CardsMenu>


            <Section customclass="relative z-20 -mb-8">
                <CardsMenuButton
                text="Meus próprios projetos"
                menuOpen={menuOpen}
                onClick={() => handleToggleMenu(menuRef2)}
                />
            </Section>

            <CardsMenu ref={menuRef2} 
            menuHeight={menuHeight}>
                <GustavoGuanabara
                onItemCountChange={handleMenuHeightCalculate}
                ShowPopUp={(event , name) => showPopUp(event , name)}/>
            </CardsMenu>



            <PopUp 
            items={groupedItems}
            groupedItems={groupedItems}
            ref={popUpRef}
            />
        </div>
    );
};

export default Progress;