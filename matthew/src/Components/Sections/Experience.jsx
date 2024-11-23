import Section from "../Layout/Section";
import Card from "../Layout/Card";
import Dot from "../Items/Dot";

function Experience() {

    return(
        <>
        <Section customclass="xl:ml-[40%] xl:w-[60%] relative z-10">

            <h2>Experiência</h2>

            <Card
            href="https://www.youtube.com/watch?v=Ejkb_YpuHWs&list=PLHz_AreHm4dkZ9-atkcmcBaMZdmLHft8n&pp=iAQB"
            type="text"
            proof="14 de Nov — 2023"
            title="Curso de HTML5 e CSS de Gustavo Guanabara 4 — 5"
            text="Iniciei minha jornada na programação com este curso, onde adquiri uma base sólida em HTML e CSS. Aprendi a importância da semântica e boas práticas de design, além de metodologias de trabalho que aplico até hoje. Completei cada aula com paciência, o que foi essencial para meu desenvolvimento. Meu nível de proficiência em HTML e CSS é 4 de 5."
            >
            <Dot>HTML5</Dot> <Dot>CSS</Dot> <Dot>GitHub</Dot> <Dot>WebDesign</Dot> <Dot>Metodologias de Trabalho</Dot>
            </Card>

            <Card
            href="https://www.youtube.com/watch?v=1-w1RfGIov4&list=PLHz_AreHm4dlsK3Nr9GVvXCbpQyHQl1o1&pp=iAQB"
            type="text"
            proof="15 de Abr — 2024"
            title="Curso de JavaScript de Gustavo Guanabara"
            text="Neste curso, aprendi os fundamentos de JavaScript, superando desafios com funções que se chamam. Com uma abordagem prática, apliquei os conhecimentos em diversos projetos, o que me incentivou a criar soluções cada vez mais complexas. Atualmente, meu nível de proficiência em JavaScript está entre iniciante e intermediário."
            >
            <Dot>JavaScript</Dot>
            </Card>

            <Card
            href="https://www.youtube.com/watch?v=xEKo29OWILE&list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA&pp=iAQB"
            type="text"
            proof="7 de Mai — 2024"
            title="Curso de Git e GitHub de Gustavo Guanabara"
            text="Aprendi a importância do versionamento em árvore e a prática recomendada de evitar alterações diretas na branch principal. Embora eu não tenha usado o terminal, aplico os conhecimentos adquiridos em todos os meus projetos. Meu nível de proficiência em Git e GitHub é iniciante, com habilidades funcionais."
            >
            <Dot>Git</Dot> <Dot>GitHub</Dot>
            </Card>

            <Card
            href="https://www.youtube.com/watch?v=FXqX7oof0I4&list=PLnDvRpP8BneyVA0SZ2okm-QBojomniQVO"
            type="text"
            proof="31 mai — 2024"
            title="Curso de React de Matheus Battist - Hora de Codar"
            text={`Este curso foi a base do meu aprendizado em React, onde enfrentei dificuldades iniciais com hooks, mas rapidamente as superei na prática. Ele me capacitou a desenvolver projetos mais complexos, como a CommerceTech, e me deu confiança para explorar novas possibilidades em frontend. Destaco a importância da componentização e do React Router DOM. Apesar disso, me considero iniciante em React.`}
            >
            <Dot>JavaScript</Dot> <Dot>React</Dot> <Dot>JSX</Dot> <Dot>UseState</Dot> <Dot>React-Router-DOM</Dot>
            </Card>

            <Card
            href="https://tailwindcss.com/docs/installation"
            type="text"
            proof="17 jun — 2024"
            title="Tailwind Documentation"
            text="Motivado pela facilidade que Tailwind oferece na criação de projetos, mergulhei na documentação e achei a ferramenta extremamente fácil de aprender. Utilizei Tailwind na CommerceTech, o que acelerou significativamente o desenvolvimento. Meu nível de proficiência com Tailwind é entre 3 e 3.5."
            >
            <Dot>Tailwind</Dot>
            </Card>

        </Section>
        </>
    )
}

export default Experience