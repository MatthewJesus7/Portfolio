import Menu from "../Menu";
import Section from "../Section";

import { forwardRef, useEffect, useState, useImperativeHandle } from "react";



const CardsMenu = forwardRef(({ children, propRef1, propRef2, customclass }, ref) => {
  
  const [maxHeight, setMaxHeight] = useState('0px');

  const ref1 = propRef1;
  const ref2 = propRef2;

  useImperativeHandle(ref, () => ({
    ref1: ref1,
    ref2: ref2,
  }));

  useEffect(() => {

  const recalculateHeight = () => {
    if (ref2.current) {
      const menuHeight = ref2.current.scrollHeight;
      setMaxHeight(`${menuHeight + 10}px`);
    }
  };

    recalculateHeight();

    const handleResize = () => {
      recalculateHeight();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [children, ref2]);

  return (
    <Menu
      id="menu"
      customclass={`menu relative z-10 transition-all duration-1000 ease-in-out overflow-hidden rounded-md shadow-lg ${customclass}`}
      styleOpenMenuAnimating={{ height: maxHeight }}
      styleOpenMenuEndAnimating={{ height: maxHeight }}
      styleCloseMenuAnimating={{ height: "0px" }}
      styleCloseMenuEndAnimating={{ height: "0px" }}
      ref={ref1}
    >
      <Section>{children}</Section>
    </Menu>
  );
});

export default CardsMenu;