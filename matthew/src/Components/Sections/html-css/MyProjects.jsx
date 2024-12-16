import Card from "../../Layout/Card"; 
import Dot from "../../Items/Dot";
import Tag from "../../Items/Tag";
import { forwardRef } from "react";

const MyProjects = forwardRef(({ ShowPopUp }, ref) => { 

  return (
        <div ref={ref}>
            <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/prezepadas/z-erro01/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="z-erro01 - prezepada 0"
                text={`Mesmo sem as capacidades necessarias para fazer, ainda assim, realizei a primeira tentativa para criar uma loja, mas percebi que me faltava muito ainda.`}
                >
                    <Dot>Posicionamento básico com css</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/prezepadas/1primeira-prezepada/first.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Primeira Prezepada"
                text={`Mesmo sem muita experiencia na programação, aprendi posicionamentos basicos com css, e implementei, mudando as imagens para onde eu gostaria`}
                >
                    <Dot>Posicionamento básico com css</Dot>
                    <Dot>position</Dot>
                    <Dot>static</Dot>
                    <Dot>relative</Dot>
                    <Dot>absolute</Dot>
                    <Dot>fixed</Dot>
                    <Dot>sticky</Dot>
                    <Dot>top</Dot>
                    <Dot>right</Dot>
                    <Dot>bottom</Dot>
                    <Dot>left</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/prezepadas/2segunda-prezepada/Desafio-01.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Segunda Prezepada - Desafio 01"
                text={`Me propus a aprender Grid Layout e experimenta-lo através desse projeto, o qual é um auto-desafio de realizar um site o mais completo possivel`}
                >
                    <Dot>Grid Layout</Dot>
                    <Dot>display: grid</Dot>
                    <Dot>grid-column</Dot>
                    <Dot>grid-row</Dot>
                    <Dot>grid-area</Dot>
                    <Dot>grid-gap</Dot>
                    <Dot>grid</Dot>
                </Card>

                <Card
                onClick={(event) => ShowPopUp(event, "prezepada03")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Terceira Prezepada"
                text={`A terceira prezepada, foi apenas uma demonstração das minhas habilidades + web Design da época`}
                >
                    <Dot>Web Design</Dot>
                    <Dot>HTML e CSS</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/exercicios/prezepadas/4quarta-prezepada/treino.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title={`Prezepada 04`}
                text={`Meu programa de treinos sendo colocado numa tabela HTML, para eu ler, e nunca esquecer, mantendo o acesso internacional.`}
                >
                    <Dot>Tabelas</Dot>
                </Card>
        </div>
    );
});

export default MyProjects;