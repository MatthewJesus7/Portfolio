function Icon({children, href, target}) {
    return(
        <a href={href} target={"_blank" || target}>
            
            <li className="text-4xl hover:text-gray-700 hover:cursor-pointer">
                {children}
            </li>
        </a>
    )
}

export default Icon
