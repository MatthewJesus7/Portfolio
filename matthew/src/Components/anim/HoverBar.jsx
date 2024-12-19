const HoverBar = ({ isHovered, hoverAnim, noHoverAnim, customclass }) => {
    return (
        <div
            className={`${customclass} absolute 
            rounded-sm
            bg-gradient-to-r from-gray-900/50 to-transparent
            transition-all duration-500 ease-out
        ${isHovered 
            ? `w-3/4 ${hoverAnim}` : `w-0 ${noHoverAnim}`}
        `}
        ></div>
    );
};

export default HoverBar;
