import Menu from "../Menu";
import Section from "../Section";

import { forwardRef, useRef, useEffect, useState, useImperativeHandle } from "react";

const CardsMenu = forwardRef(({ children, propRef1, propRef2 }, ref) => {
  const ref1 = propRef1;
  const ref2 = propRef2;

  const [menuHeight, setMenuHeight] = useState(0);

  useImperativeHandle(ref, () => ({
    ref1: ref1,
    ref2: ref2,
  }));

  const calculateItemCount = () => {
    if (ref2.current) {
        console.log(ref2)
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
    console.log(menuTotal);

    return menuTotal;
  };

  useEffect(() => {
    calculateMenuHeight();
  }, [children]);

  return (
    <Menu
      id="menu"
      customclass="relative z-10 transition-all duration-1000 ease-in-out overflow-hidden rounded-md shadow-lg"
      styleOpenMenuAnimating={{ height: `${menuHeight}px` }}
      styleOpenMenuEndAnimating={{ height: `${menuHeight}px` }}
      styleCloseMenuAnimating={{ height: "0px" }}
      styleCloseMenuEndAnimating={{ height: "0px" }}
      ref={ref1}
    >
      <Section ref={ref2}>
        {children}
      </Section>
    </Menu>
  );
});

export default CardsMenu;
