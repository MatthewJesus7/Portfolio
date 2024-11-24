const NavButton = ({ onClick, children, customclass }) => {
    return (
      <button
        className={`
          flex justify-center items-center
          m-2 p-2 size-12 text-2xl text-black rounded-md
          backdrop-blur-md hover:bg-gray-300/40 
          transition duration-200 ease-in-out 
          ${customclass}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default NavButton;
  