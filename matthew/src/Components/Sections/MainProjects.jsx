import Section from "../Layout/Section";
import Card from "../Layout/Card";
import Dot from "../Items/Dot";

function MainProjects() {
    return(
    <>
    <Section customclass="xl:ml-[40%] xl:w-[60%] relative z-10">
        <h2>Principais Projetos</h2>

        <Card
        href="https://commercetech-matheus-projects-30717bca.vercel.app/"
        type="picture"
        // proof=""
        picture="true"
        backgroundImage="url('/Imagens/CommerceTech.png')"
        title="CommerceTech"
        text={`Desenvolvi o CommerceTech como uma demonstração das minhas habilidades e uma fonte de renda extra, com o objetivo de lançar um projeto completo e funcional. Enfrentei desafios durante o lançamento, mas aprendi que "feito é melhor que perfeito". O uso de React, Tailwind, e GitHub tornou o projeto robusto e eficiente, e essa experiência acelerou meu desenvolvimento como desenvolvedor.`}
        >
            <Dot>React.js</Dot>  <Dot>Firebase</Dot> <Dot>Git & GitHub</Dot> <Dot>JavaScript</Dot> <Dot>Web Design</Dot> <Dot>Responsive Design</Dot>
        </Card>

        <Card
        href="https://www.linkedin.com/posts/matheus-costa-b01372205_reactnative-expo-firebase-activity-7256374635536007169-vw9V?utm_source=share&utm_medium=member_desktop"
        type="picture"
        // proof=""
        picture="true"
        backgroundImage="url('/Imagens/expo_esqueletodeapp.jpg')"
        title="Esqueleto de App"
        text={`Criei este projeto como base técnica para acelerar o desenvolvimento de aplicativos. Ele inclui autenticação segura com Firebase, navegação estruturada com Expo e tela de perfil funcional. O principal objetivo foi aprofundar meu conhecimento no Firebase e Expo, enfrentando desafios como navegação e integração de imagens. Essa experiência melhorou minha eficiência no desenvolvimento mobile..`}
        >
        <Dot>Expo</Dot>  <Dot>Firebase</Dot> <Dot>NativeWind</Dot> <Dot>JavaScript</Dot> <Dot>Git & GitHub</Dot>
        </Card>

        {/* Esqueleto de App
Criei este projeto como base técnica para acelerar o desenvolvimento de aplicativos. Ele inclui autenticação segura com Firebase, navegação estruturada com Expo e tela de perfil funcional. O principal objetivo foi aprofundar meu conhecimento no Firebase e Expo, enfrentando desafios como navegação e integração de imagens. Essa experiência melhorou minha eficiência no desenvolvimento mobile.

Tecnologias: Expo, Firebase, Tailwind */}

        <Card
        href="https://matthewjesus7.github.io/PathOfSucess/MainPage/LandingPage.html"
        type="picture"
        // proof=""
        picture="true"
        backgroundImage="url('/Imagens/PathOfSucessEditada.png')"
        title="PathOfSucess"
        text="O objetivo desse projeto foi obter experiência e proficiência em HTML, CSS, JavaScript e Web Design, além de avaliar minha prontidão para o mercado de trabalho. Desenvolvi um site leve e rápido, enfrentando o desafio de criar meu primeiro carrossel em JavaScript. O maior destaque foi ter realizado todo o processo sozinho, desde o design até a implementação, provando que consigo transformar minhas ideias em realidade."
        >
            <Dot>HTML</Dot> <Dot>CSS</Dot> <Dot>JavaScript</Dot> <Dot>GitHub</Dot> <Dot>WebDesign</Dot> <Dot>Responsive Design</Dot>
        </Card>

    </Section>
    </>
    )
}

export default MainProjects