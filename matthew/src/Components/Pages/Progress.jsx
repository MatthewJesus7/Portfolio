import BackButton from "../Items/Buttons/BackButton";
import Section from "../Layout/Section";
import Card from "../Layout/Card";
import Dot from "../Items/Dot";
import Tag from "../Items/Tag";
import Menu from "../Layout/Menu"

import { useState, useRef } from "react";

const Progress = () => {

    const menuRef = useRef();
    const handleToggleMenu = () => {
        menuRef.current.toggleMenu();
    };

    const [popUp, setPopUp] = useState(false);

    const ShowPopUp = () => {
        handleToggleMenu();
    }

    return(
        <div>
            <Menu ref={menuRef}></Menu>
            <button onClick={handleToggleMenu}></button>
            <BackButton></BackButton>
            <Section customclass="relative z-10">
                <h2>HTML5 e CSS3</h2>
                <h3 className="mb-7">Curso de HTML e CSS do gustavo Guanabara</h3>

            <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex001/index.html"
                type="picture"
                // proof="14 de Nov — 2023"
                picture="true"
                backgroundImage="url('')"
                title="Primeiro Exercicio — Olá Mundo"
                text={`Meu primeiro exercicio, e contato com a programação!`}
                >
                    <Dot><Tag>h1</Tag></Dot> <Dot><Tag>hr</Tag></Dot> <Dot><Tag>p</Tag></Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex002/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="exercicio 2 — parágrafos e quebras de linha"
                text={`Aprendendo sobre quebras de linha, e entiedades HTML.`}
                >
                    <Dot><Tag>br</Tag></Dot> 
                    <Dot>&amp;lt;</Dot>
                    <Dot>&amp;gt;</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex003/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 3 — Simbolos e Emogis"
                text={`simbolos especiais, e introdução ao HTML semantico. Lembro-me que aqui, entendi que precisava aprender muito ainda.`}
                >
                    <Dot>Semântica</Dot> 
                    <Dot> &#x ;</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex004/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 4 — C06A01-copyright e creative commons"
                text={`Direitos autorais, e maneiras de contornar esses problemas com os metodos de pesquisa.`}
                >
                    <Dot>Copyright</Dot> 
                    <Dot>Creative Commons</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex005/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 5 — inserindo imagens em HTML5"
                text={`Formatos de imagens web, tamanho das imagens, e uso adequado para cada uma. também inserção de imagens no HTML e favicons.`}
                >
                    <Dot>png</Dot> 
                    <Dot>jpeg</Dot>
                    <Dot>ico</Dot>
                    <Dot><Tag>a href=" "</Tag></Dot>
                    <Dot><Tag>Link:favicon</Tag></Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex006/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 6 — Hierarquia de titulos"
                text={`Aprendendo sobre hierarquia, e entendendo que se trata de SEO, não de estilo, ou enumeração.`}
                >
                    <Dot><Tag>h1</Tag></Dot>
                    <Dot><Tag>h2</Tag></Dot>
                    <Dot><Tag>h3</Tag></Dot>
                    <Dot><Tag>h4</Tag></Dot>
                    <Dot><Tag>h5</Tag></Dot>
                    <Dot><Tag>h6</Tag></Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex007/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 7 — Formatção de textos"
                text={`Aprendendo Semântica, o significado. O HTML5 é semantico, para algo algo visual, deve-se usar CSS. tags morrem.`}
                >
                    <Dot>Divisão entre semantica e estilo</Dot>
                    <Dot>Morte de Tags</Dot>
                    <Dot>W3C</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex008/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 8 — pincipais formatações"
                text={`Aula sobre as principais formatações do HTML, e sobre tags obsoletas, e não semanticas.`}
                >
                    <Dot><Tag>Strong</Tag></Dot>
                    <Dot><Tag>em</Tag></Dot>
                    <Dot><Tag>mark</Tag></Dot>
                    <Dot><Tag>small</Tag></Dot>
                    <Dot><Tag>del</Tag></Dot>
                    <Dot><Tag>ins</Tag></Dot>
                    <Dot><Tag>sup</Tag></Dot>
                    <Dot><Tag>sub</Tag></Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex009/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 9 — Código fonte e pré-formatação"
                text={`Tags que facilitam a leitura de código escrito. Tags de citações simples e completas, abreviações e... tag iversora de texto?`}
                >
                    <Dot><Tag>pre</Tag></Dot>
                    <Dot><Tag>code</Tag></Dot>
                    <Dot><Tag>q</Tag></Dot>
                    <Dot><Tag>blockquote</Tag></Dot>
                    <Dot><Tag>abbr</Tag></Dot>
                    <Dot><Tag>bdo</Tag></Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex010/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 10 — Trabalhando com listas"
                text={`Listas Ordenadas, Listas não ordenadas e lista de definições.`}
                >
                    <Dot><Tag>ol</Tag></Dot>
                    <Dot><Tag>ul</Tag></Dot>
                    <Dot><Tag>li</Tag></Dot>
                    <Dot><Tag>dl</Tag></Dot>
                    <Dot><Tag>dt</Tag></Dot>
                    <Dot><Tag>dd</Tag></Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex011/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 11 — Trabalhando com Links"
                text={`Links externos, links internos, e links de download.`}
                >
                    <Dot><Tag>a href=" "</Tag></Dot>
                    <Dot><Tag>Target=" "</Tag></Dot>
                    <Dot><Tag>rel=" "</Tag></Dot>
                    <Dot><Tag>download=" "</Tag></Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex013/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 13 — Imagens Dinâmicas"
                text={`Imagens Dinâmicas, sobre a experiência do usuario, SEO, e audio em HTML.`}
                >
                    <Dot><Tag>picture</Tag></Dot>
                    <Dot><Tag>source</Tag></Dot>
                    <Dot><Tag>User Experience, SEO</Tag></Dot>
                    <Dot><Tag>audio</Tag></Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex014/midia/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 14 — videos em HTML5"
                text={`Videos, e suas formas mais leves, conversor de video, e recomendação de incorporação.`}
                >
                    <Dot><Tag>video</Tag></Dot>
                    <Dot><Tag>source</Tag></Dot>
                    <Dot><Tag>incorporação</Tag></Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex015/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 15 — CSS"
                text={`Apenas uma Demo que seria copiada e colada posteriormente com CSS`}
                >
                    <Dot>Introdução ao CSS</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex15.2/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title="Aula 15.2 — Estilização externa com CSS"
                text={`Aprendendo a diferença com estilos inline, local, e externo, e quando se utilizar cada um.`}
                >
                    <Dot>Estilos inline</Dot>
                    <Dot>Estilos locais</Dot>
                    <Dot>Estilos externos</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex016/cor03.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title={`Aula 16 — "site" exemplo`}
                text={`Junção de tudo que eu sabia até ali com HTML e CSS`}
                >
                    <Dot>CSS</Dot>
                    <Dot>Hierarquia</Dot>
                    <Dot>Cores</Dot>
                    <Dot>hover</Dot>
                    <Dot>Gradiente</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex017/fonte01.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title={`Aula 17 — Trabalhando com fontes`}
                text={`Tamanhos de fonte com CSS`}
                >
                    <Dot>CSS</Dot>
                    <Dot>font-size</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex018/fonte01.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title={`Aula 18 — Fontes Google e Externas`}
                text={`Aprendendo a Importar, e usar fontes Google e Externas`}
                >
                    <Dot>Google fonts</Dot>
                    <Dot>fontes externas</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex018/fonte01.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title={`Aula 18 — Fontes Google e Externas`}
                text={`Aprendendo a Importar, e usar fontes Google e Externas`}
                >
                    <Dot>Google fonts</Dot>
                    <Dot>fontes externas</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex019/seletor01.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title={`Aula 19 — Seletores`}
                text={`Aprendendo a selecionar um elemento HTML especifico.`}
                >
                    <Dot>id</Dot>
                    <Dot>selecionar item com css</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/Exercicios/ex020/pseudoclasse.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title={`Aula 20 — Pseudo-classes`}
                text={`Aprendendo sobre pseudo-classes e suas possibilidades!`}
                >
                    <Dot>class</Dot>
                    <Dot>hover:</Dot>
                    <Dot>after::</Dot>
                    <Dot>active:</Dot>
                </Card>

                <Card
                onClick={ShowPopUp}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title={`Aula 21 — Caixas`}
                text={`Itens de caixa, hierarquia de caixas, itens inline.`}
                >
                    <Dot>Caixas</Dot>
                    <Dot>Inline</Dot>
                    <Dot>Camadas de uma box</Dot>
                    <Dot>estilização</Dot>
                </Card>



                <h3>Meus Proprios "projetos"</h3>
                
            </Section>
        </div>
    );
};

export default Progress;