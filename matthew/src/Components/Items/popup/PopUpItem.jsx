const PopUpItem = ({text}) => {
    return(
        <li className="list-none h-10 w-full border-2 border-gray-600 bg-gray-400 rounded-md-top flex  items-center px-2">
            <p className="text-black">{text}</p>
        </li>
    );
};

export default PopUpItem;