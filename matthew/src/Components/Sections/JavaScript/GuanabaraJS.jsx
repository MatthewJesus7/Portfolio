import { forwardRef } from "react";
import Card from "../../Layout/Card"; 
import Dot from "../../Items/Dot";
import Tag from "../../Items/Tag";

const GuanabaraJS = forwardRef(({showPopUp}, ref) => {

    return(
        <div ref={ref}>

            <Card
                href="https://matthewjesus7.github.io/JavaScript/aula04/ex001.html"
                type="picture"
                proof="15 de Abril— 2024"
                picture="true"
                backgroundImage="url('')"
                title="Primeiro Script — Qual o seu nome?"
                text={`Meu primeiro exercicio aprendendo a linguagem JavaScript!`}
                >
                    <Dot>window.prompt</Dot>
                </Card>

                <Card
                onClick={(event) => showPopUp(event, "aula06js")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 06"
                text={`Ligação entre JavasCript e HTML, com somas, contagens de letras, e toLowerCase e toUpperCase`}
                >
                    <Dot><Tag>Script</Tag></Dot>
                    <Dot>+</Dot>
                    <Dot>contagem de caracteres</Dot>
                    <Dot>toUpperCase</Dot>
                    <Dot>toLowerCase</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/JavaScript/aula09/ex005.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 09 - DOM"
                text={`Fiz algumas modificações extras, e não estava funcionando, irei manter dessa forma. Mas era algo simples de transformar o botão em vermelho ao clicar com JavaScript.`}
                >
                    <Dot>Manipulação de DOM</Dot>
                    <Dot>Sem funcionar</Dot>
                </Card>

                <Card
                onClick={(event) => showPopUp(event, "aula10js")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 10 - Eventos e Soma"
                text={`Eventos JavaScript, e Soma através da manipulação de DOM`}
                >
                    <Dot><Tag>Script</Tag></Dot>
                    <Dot>Manipulação de DOM</Dot>
                    <Dot>Eventos</Dot>
                    <Dot>Soma</Dot>
                </Card>

                <Card
                onClick={(event) => showPopUp(event, "aula11js")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 11 - ifs e else"
                text={`Aulas onde vem ensinar a lógica de sintaxe de if e else.`}
                >
                    <Dot><Tag>Script</Tag></Dot>
                    <Dot>Manipulação de DOM</Dot>
                    <Dot>if</Dot>
                    <Dot>else</Dot>
                    <Dot>else if</Dot>
                    <Dot>*</Dot>
                </Card>

                <Card
                onClick={(event) => showPopUp(event, "aula12js")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 12 - Switch case"
                text={`Operador menor (<), e maior (>), e Switch case`}
                >
                    <Dot><Tag>Script</Tag></Dot>
                    <Dot>Manipulação de DOM</Dot>
                    <Dot>Switch case</Dot>
                    <Dot>&lt;</Dot>
                    <Dot>&gt;</Dot>
                </Card>

                <Card
                onClick={(event) => showPopUp(event, "aula12js")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 12 - Exercicios"
                text={`Operador menor (<), e maior (>), e Switch case`}
                >
                    <Dot><Tag>Script</Tag></Dot>
                    <Dot>Manipulação de DOM</Dot>
                    <Dot>Switch case</Dot>
                    <Dot>&lt;</Dot>
                    <Dot>&gt;</Dot>
                </Card>
        </div>
    );
});

export default GuanabaraJS;