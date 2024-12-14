import { useEffect, useRef, useState } from 'react';

const Card = ({ type, proof, title, text, children, href, backgroundImage, picture, onClick, ref }) => {  

    return(
        <a href={href} target="_blank" rel="noreferrer">

            <div ref={ref} className={`card flex ${type} md:flex-row -m-5 mb-12 p-5 justify-between rounded-lg
            transition-all hover:bg-gray-300/40 hover:backdrop-blur-md
            `}
            onClick={onClick}
            >

                <div className={ `shrink-0 mb-3 ${picture}`}

                style={{ backgroundImage: backgroundImage, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', }}
                >
                    {proof}
                </div>

                <div className="md:w-[80%] w-full">
                    <h2 className="-my-1 mb-3">
                        {title}
                    </h2>
                    <p>
                        {text}
                    </p>

                    <div className="flex flex-wrap">
                        {children}
                    </div>
                </div>
            </div>
        </a>
    )
}

export default Card