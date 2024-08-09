import Section from "./Components/Layout/Section";
import Card from "./Components/Layout/Card";

import Icon from "./Components/Items/Icon";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";

function App() {
  return (
    <div className="App bg-gray-50 overflow-x-hidden">

      <main className="flex flex-col xl:flex-row">

        <Section customclass="xl:fixed w-[600px]">

          <h1 className="text-5xl sm:text-6xl font-semibold">Matheus Costa</h1>

          <h2>Junior Frontend Developer</h2>

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
            <Icon>
              <FaGithub />
            </Icon>
            <Icon>
              <FaLinkedin />
            </Icon>
            <Icon>
              <FaInstagram />
            </Icon>
            <Icon>
              <IoDocumentTextOutline />
            </Icon>
          </ul>
        </Section>



        <Section customclass="xl:ml-[40%]">

          <h2 className="mt-1">Experiência</h2>

          <Card
          href=""
          type="text"
          proof="14 de Nov - 2023"
          title="Curso de HTML5 e CSS de Gustavo Guanabara"
          text="Curso onde aprendi muito."
          >

          </Card>

          <Card
          href=""
          type="text"
          proof="15 de Abr - 2024"
          title="Curso de JavaScript de Gustavo Guanabara"
          text="Curso onde aprendi muito."
          >

          </Card>

          <Card
          href=""
          type="text"
          proof="7 de Mai - 2024"
          title="Curso de Git e GitHub de Gustavo Guanabara"
          text="Curso onde aprendi muito."
          >

          </Card>

          <Card
          href=""
          type="text"
          proof="31 mai - 2024"
          title="Curso de React de Matheus Battist - Hora de Codar"
          text="Curso onde aprendi muito."
          >

          </Card>

          <Card
          href=""
          type="text"
          proof="17 jun - 2024"
          title="Tailwind Documentation"
          text="Curso onde aprendi muito."
          >

          </Card>

        </Section>
      </main>

      <Section customclass="xl:ml-[40%]">
        <h2>Projetos</h2>

        <Card
          href=""
          type="picture"
          // proof=""
          picture="true"
          backgroundImage="url('')"
          title="CommerceTech"
          text="Projeto onde pus em prática todo o meu conhecimento."
          >

        </Card>

      </Section>

    </div>
  );
}

export default App;