import React, { useState, useEffect } from "react";

const FollowMouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });


  const handleMouseMove = (event) => {
    setPosition({
      x: event.pageX,
      y: event.pageY,
    });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
        className="absolute bg-gradient-radial from-gray-400 via-gray-200 to-transparent size-[1000px] rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 ease-out z-[0] inset-0 blur-xl opacity-60"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    ></div>
  );
};

export default FollowMouse;
