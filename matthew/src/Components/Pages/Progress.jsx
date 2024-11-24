import { NavLink } from "react-router-dom";
import BackButton from "../Items/Buttons/BackButton";
import Section from "../Layout/Section";
import Card from "../Layout/Card";
import Dot from "../Items/Dot";
import Tag from "../Items/Tag";

const Progress = () => {
    return(
        <div>
            <BackButton></BackButton>
            <Section customclass="relative z-10">
                <h2>HTML5 e CSS3</h2>
                <h3>Curso de HTML e CSS do gustavo Guanabara</h3>
                <h4 className="my-5">Módulo 1</h4>

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
                text={`.`}
                >
                    <Dot><Tag>picture</Tag></Dot>
                    <Dot><Tag>source</Tag></Dot>
                </Card>

                <h3>Meus Proprios "projetos"</h3>
                
            </Section>
        </div>
    );
};

export default Progress;