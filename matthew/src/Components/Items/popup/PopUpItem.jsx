const PopUpItem = ({text, href}) => {
    return(
        <li 
        className="
        popup-item list-none h-10 w-full mb-1px border-b border-gray-400  transition-transform ease-in duration-400 hover:shadow-md hover:rounded-md hover:bg-gray-50/50"
        >
            <a href={href} target="_blank" rel="noreferrer" className="size-full px-2 flex items-center">
                <p className="text-black">{text}</p>
            </a>
        </li>
    );
};

export default PopUpItem;