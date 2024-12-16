import Menu from "../Menu";
import Section from "../Section";

import { forwardRef, useEffect, useState, useImperativeHandle } from "react";

const CardsMenu = forwardRef(({ children, propRef1, propRef2, customclass }, ref) => {
  const ref1 = propRef1;
  const ref2 = propRef2;

  const [menuHeight, setMenuHeight] = useState(0);

  useImperativeHandle(ref, () => ({
    ref1: ref1,
    ref2: ref2,
  }));

  useEffect(() => {
  const calculateItemCount = () => {
    if (ref2.current) {
      const items = ref2.current.children;
      const itemCount = items.length;
      return itemCount;
    }
    return 0;
  };
  
  const calculateMenuHeight = () => {
    const itemCount = calculateItemCount();
    const itemMargin = 28;
    const itemHeight = 392;

    const itemTotal = itemMargin + itemHeight;

    const menuTotal = itemTotal * itemCount;

    setMenuHeight(menuTotal);

    return menuTotal;
  };

    calculateMenuHeight();
  }, [children, ref2]);

  return (
    <Menu
      id="menu"
      customclass={`relative z-10 transition-all duration-1000 ease-in-out overflow-hidden rounded-md shadow-lg ${customclass}`}
      styleOpenMenuAnimating={{ height: `${menuHeight}px` }}
      styleOpenMenuEndAnimating={{ height: `${menuHeight}px` }}
      styleCloseMenuAnimating={{ height: "0px" }}
      styleCloseMenuEndAnimating={{ height: "0px" }}
      ref={ref1}
    >
      <Section>
        {children}
      </Section>
    </Menu>
  );
});

export default CardsMenu;
