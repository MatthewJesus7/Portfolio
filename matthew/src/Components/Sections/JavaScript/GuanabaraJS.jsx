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
                proof="15 de Abril — 2024"
                picture="true"
                backgroundImage="url('/Imagens/progress/nomejs.png')"
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
                backgroundImage="url('/Imagens/progress/olamatheus.png')"
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
                backgroundImage="url('/Imagens/progress/screenshot_40.png')"
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
                backgroundImage="url('/Imagens/progress/aula10js_1.png')"
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
                backgroundImage="url('/Imagens/progress/aula11js_3.png')"
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
                backgroundImage="url('/Imagens/progress/aula12js_3.png')"
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
                onClick={(event) => showPopUp(event, "aula12exjs")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/aula12exjs_1.png')"
                title="Aula 12 Exercicios - horario e período"
                text={`Um script de resposta ao horario, com ifs e else. Não contem as melhores práticas pois eu ainda estava aprendendo.`}
                >
                    <Dot><Tag>Script</Tag></Dot>
                    <Dot>Manipulação de DOM</Dot>
                    <Dot>if e else</Dot>
                </Card>

                <Card
                onClick={(event) => showPopUp(event, "aula12excopyjs")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/aula12excopyjs_1.png')"
                title="Aula 12 Exercicios - Verificador de idade"
                text={`Um script que responde de acordo com a data de nascimento, fazendo o cálculo de sua idade, e também seu genero.`}
                >
                    <Dot><Tag>Script</Tag></Dot>
                    <Dot>Manipulação de DOM</Dot>
                    <Dot>if e else</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/JavaScript/aula13/ambiente.js"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/screenshot_46.png')"
                title="Aula 13 - while"
                text={`Aula relativa a loops, começando por while.`}
                >
                    <Dot>do</Dot>
                    <Dot>while</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/JavaScript/aula14/ambiente.js"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/screenshot_47.png')"
                title="Aula 14 - for"
                text={`Loop for em JavaScript, e seu funcionamento.`}
                >
                    <Dot>for</Dot>
                </Card>

                <Card
                onClick={(event) => showPopUp(event, "aula14ex")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/aula14ex_1.png')"
                title="Aula 14 Exercicios - Contador por passo"
                text={`Utilizando loops, um contador, onde recebe: numero inicial, numero final, e o passo desejado, e traz um resultado visivel na UX.`}
                >
                    <Dot>Manipulação de DOM</Dot>
                    <Dot>ifs e else</Dot>
                    <Dot>while</Dot>
                </Card>

                <Card
                onClick={(event) => showPopUp(event, "aula14ex02")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/aula14ex02_1.png')"
                title="Aula 14 Exercicios - tabuada"
                text={`Utilizando loops, uma tabuada de 0 a 10, que pega qualquer número e traz um resultado visivel na UX.`}
                >
                    <Dot>Manipulação de DOM</Dot>
                    <Dot>ifs e else</Dot>
                    <Dot>for</Dot>
                </Card>

                <Card
                onClick={(event) => showPopUp(event, "aula15")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/aula15_2.png')"
                title="Aula 15 - Arrays"
                text={`Nesta aula, aprendemos sobre arrays e loops for in, para leitura.`}
                >
                    <Dot>Arrays</Dot>
                    <Dot>for (in)</Dot>
                </Card>

                <Card
                onClick={(event) => showPopUp(event, "aula16")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/aula16_1.png')"
                title="Aula 16 - funções"
                text={`Nesta aula, aprendemos sobre funções e props que podem ser passadas.`}
                >
                    <Dot>Function()</Dot>
                    <Dot>Chamada</Dot>
                </Card>

                <Card
                onClick={(event) => showPopUp(event, "aula16ex")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/aula16ex_1.png')"
                title="Aula 16 Exercicios - Analisador de números"
                text={`Esse execício se trata de um analisador de numeros, onde se insere nmeros num array, e manupula esses números de diversas maneiras.`}
                >
                    <Dot>Manipulação de DOM</Dot>
                    <Dot>Function()</Dot>
                    <Dot>arrays</Dot>
                    <Dot>for in</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/JavaScript/aula17/objeto01.js"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/screenshot_53.png')"
                title="Aula 17 - Objetos"
                text={`Na última aula do curso básico, aprendemos o início de objetos JavaScript`}
                >
                    <Dot>Objetos</Dot>
                    <Dot>Introdução</Dot>
                </Card>
        </div>
    );
});

export default GuanabaraJS;