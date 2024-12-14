import Menu from "../Menu"
import Section from "../Section";

import { forwardRef, useState } from "react";

const CardsMenu = forwardRef(({ children, menuHeight }, ref) => {

    return(
        <Menu id="menu" customclass="relative z-10  transition-all duration-1000 ease-in-out overflow-hidden rounded-md shadow-lg"
        styleOpenMenuAnimating={{ height: `${menuHeight}px`}}
        styleOpenMenuEndAnimating={{ height: `${menuHeight}px`}}
        styleCloseMenuAnimating={{ height: "0px" }}
        styleCloseMenuEndAnimating={{ height: "0px" }}
        ref={ref}>
            <Section>
                {children}
            </Section>
        </Menu>
    );
});

export default CardsMenu;