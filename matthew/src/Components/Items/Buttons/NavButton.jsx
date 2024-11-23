const NavButton = ({ onClick, children }) => {
    return (
      <button
        className="p-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default NavButton;
  