import Section from "../Layout/Section";
import Icon from "../Items/Icon";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

function Me() {
    return(
    <>
        <Section customclass="xl:fixed xl:w-2/5 xl:overflow-x-hidden">

            <h1 className="text-5xl sm:text-6xl font-semibold">Matheus Costa</h1>

            <h2>Junior Frontend Developer</h2>

            <p className="text-xl text-gray-900 pb-6">Trazendo as ideias para a realidade, construindo e cuidando de sonhos como se fossem meus.</p>

            <p className="flex flex-col text-xl">

            <span> HTML, CSS, JavaScript </span>
            <span> React, Tailwind </span>
            <span> git, github </span>
            <span> Web Design </span>
            </p>

            {/* <nav className="pt-6">
            <ul>
                <li>about</li>
                <li>projects</li>
                <li>pequenas coisinhas</li>
            </ul>
            </nav> */}

            <ul className="flex justify-between w-72 my-6">
            <Icon
            href="https://github.com/MatthewJesus7"
            >
                <FaGithub />
            </Icon>

            <Icon
            href="https://www.linkedin.com/in/matheus-costa-b01372205/"
            >
                <FaLinkedin />
            </Icon>

            <Icon
            href="https://www.instagram.com/mattheus1590/"
            >
                <FaInstagram />
            </Icon>

            <Icon>
                <IoDocumentTextOutline />
            </Icon>
            </ul>
        </Section>
    </>
    )
}

export default Me