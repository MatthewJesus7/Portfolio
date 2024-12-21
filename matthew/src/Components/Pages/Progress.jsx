import { useState, useRef, useMemo } from "react";
import { popUpItems } from "../../data";
import BackButton from "../Items/Buttons/BackButton";
import PopUp from "../Items/popup/PopUp";
import Section from "../Layout/Section";
import GustavoGuanabara from "../Sections/html-css/GustavoGuanabara";
import CardsMenu from "../Layout/menus/CardsMenu";
import CardsMenuButton from "../Layout/menus/CardsMenuButton";
import MyProjects from "../Sections/html-css/MyProjects";
import Challenges from "../Sections/html-css/Challenges";
import GuanabaraJS from "../Sections/JavaScript/GuanabaraJS";

const Progress = () => {
    const groupedItems = useMemo(() => popUpItems, []);
    const [menuOpen, setMenuOpen] = useState(false);

    const popUpRef = useRef();

    const guanabaraRef = useRef();
    const myProjectsRef = useRef();
    const challengesRef = useRef();
    const guanabaraJsRef = useRef();
    
    const menuRef1 = useRef(null);
    const menuRef2 = useRef(null);
    const menuRef3 = useRef(null);
    const menuRef4 = useRef(null);

    const handleToggleMenu = (menuRef) => {
        setMenuOpen(!menuOpen);
        if (menuRef.current) {
            menuRef.current.toggleMenu();
        }
    };

    const showPopUp = (event, name) => {
        if (popUpRef.current) {
            popUpRef.current.showPopUp(event, name);
        }
    };

    return (
        <div>
            <BackButton />

            <Section customclass="relative z-20 -mb-8">
                <h2>HTML5 e CSS3</h2>
                <CardsMenuButton
                    text="Curso de HTML e CSS do Gustavo Guanabara"
                    menuOpen={menuOpen}
                    onClick={() => handleToggleMenu(menuRef1)}
                />
            </Section>

            <CardsMenu 
            propRef1={menuRef1} 
            propRef2={guanabaraRef}>
                <GustavoGuanabara
                    ref={guanabaraRef}
                    ShowPopUp={(event, name) => showPopUp(event, name)}
                />
            </CardsMenu>

            <Section customclass="relative z-20 -mb-8">
                <CardsMenuButton
                    text="Meus próprios projetos HTML e CSS"
                    menuOpen={menuOpen}
                    onClick={() => handleToggleMenu(menuRef2)}
                />
            </Section>

            <CardsMenu 
            propRef1={menuRef2} 
            propRef2={myProjectsRef}
            >
                <MyProjects
                    ref={myProjectsRef}
                    showPopUp={(event, name) => showPopUp(event, name)}
                />
            </CardsMenu>

            <div>
                <Section customclass="relative z-20 -mb-8">
                    <CardsMenuButton
                        text="Desafios HTML e CSS"
                        menuOpen={menuOpen}
                        onClick={() => handleToggleMenu(menuRef3)}
                    />
                </Section>
                <CardsMenu
                propRef1={menuRef3}
                propRef2={challengesRef}
                >
                    <Challenges
                        ref={challengesRef}
                        showPopUp={(event, name) => showPopUp(event, name)}
                    />
                </CardsMenu>
            </div>

            {/* JavaScript */}

            <Section customclass="relative z-20 -mb-8">
                <h2>JavaScript</h2>
                <CardsMenuButton
                    text="Curso de JavaScript do Gustavo Guanabara"
                    menuOpen={menuOpen}
                    onClick={() => handleToggleMenu(menuRef4)}
                />
            </Section>

            <CardsMenu 
            propRef1={menuRef4} 
            propRef2={guanabaraJsRef}>
                <GuanabaraJS
                ref={guanabaraJsRef}
                showPopUp={(event, name) => showPopUp(event, name)} />
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
