import BackButton from "../Items/Buttons/BackButton";
import Section from "../Layout/Section";
import Card from "../Layout/Card";
import Dot from "../Items/Dot";
import Tag from "../Items/Tag";

import PopUp from "../Items/popup/PopUp";

import { useState, useRef } from "react";

const groupedItems = [

    { name: "CSS", 
        items: [
            { text: "css00", href: "html-css/Exercicios/ex015/index.html" }, 
            { text: "ex15.1 - css01", href: "html-css/Exercicios/ex15.1/index.html"},
            { text: "ex15.2 - css02", href: "html-css/Exercicios/ex15.2/index.html"},
            { text: "ex15.2 - css02 pag2", href: "html-css/Exercicios/ex15.2/pagina02.html"},
        ] },

    { name: "cores", 
        items: [
            { text: "cor01", href: "https://matthewjesus7.github.io/html-css/Exercicios/ex016/index.html" }, 
            { text: "cor02", href: "https://matthewjesus7.github.io/html-css/Exercicios/ex016/cor02.html" }, 
            { text: "cor03", href: "https://matthewjesus7.github.io/html-css/Exercicios/ex016/cor03.html" }, 
        ] },

    { name:"fontes",
        items: [
        { text: "fonte01",
            href: "https://matthewjesus7.github.io/html-css/Exercicios/ex018/fonte01.html" },

        { text: "fonte02",
            href: "https://matthewjesus7.github.io/html-css/Exercicios/ex018/fonte02.html" },
    ]},

    { name:"caixas",
        items: [
        { text: "links",
        href: "https://matthewjesus7.github.io/html-css/Exercicios/ex020/links.html" }, 

        { text: "pseudo-classes",
        href: "https://matthewjesus7.github.io/" },
    ]},

    { name:"fundos",
        items: [
        { text: "fundo001",
        href: "https://matthewjesus7.github.io/html-css/Exercicios/ex022/fundo001.html" },

        { text: "fundo002",
        href: "https://matthewjesus7.github.io/html-css/Exercicios/ex022/fundo002.html" }, 

        { text: "fundo003",
        href: "https://matthewjesus7.github.io/html-css/Exercicios/ex022/fundo003.html" }, 

        { text: "fundo004",
        href: "https://matthewjesus7.github.io/html-css/Exercicios/ex022/fundo004.html" }, 

        { text: "fundo005",
        href: "https://matthewjesus7.github.io/html-css/Exercicios/ex022/fundo005.html" }, 

        { text: "fundo006",
        href: "https://matthewjesus7.github.io/html-css/Exercicios/ex022/fundo006.html" },
        
        { text: "fundo007",
        href: "https://matthewjesus7.github.io/html-css/Exercicios/ex022/fundo007.html" }, 
    ]},

    { name:"tabelas",
        items: [
        { text: "tabela001",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex023/tabela001.html" },
        { text: "tabela002",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex023/tabela002.html" },
        { text: "tabela003",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex023/tabela003.html" },
        { text: "tabela004",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex023/tabela004.html" },
        { text: "tabela005",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex023/tabela005.html" },
        { text: "tabela005-1",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex023/tabela005-1.html" },
        { text: "tabela006",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex023/tabela006.html" },
    ]},

    { name:"iframes",
        items: [
        { text: "iframe001",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex024/iframe001.html" },
        { text: "iframe002",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex024/iframe002.html" },
        { text: "iframe003",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex024/iframe003.html" },
        { text: "iframe004",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex024/iframe004.html" },
        { text: "iframe005",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex024/iframe005.html" },
        { text: "iframe006",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex024/iframe006.html" },
    ]},

    { name:"formularios",
        items: [
        { text: "form001",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex025/form001.html" },
        { text: "form002",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex025/form002.html" },
        { text: "form003",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex025/form003.html" },
        { text: "form004",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex025/form004.html" },
        { text: "form008",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex025/form008.html" },
        { text: "form009",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex025/form009.html" },
        { text: "form010",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex025/form010.html" },
    ]},

    { name:"media-queries",
        items: [
        { text: "mq001",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex026/mq001/index.html" },
        { text: "mq002",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex026/mq002/index.html" },
        { text: "mq003",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex026/mq003/index.html" },
        { text: "mq004",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex026/mq004/index.html" },
        { text: "mq005",
        href: "https://matthewjesus7.github.io/html-css/exercicios/ex026/mq005/index.html" },

    ]},
  ];

  

const Progress = () => {
    const [activeName, setActiveName] = useState(null);
    const [popupSize, setPopupSize] = useState(0);
    const popUpRef = useRef();

    const ShowPopUp = (event, name) => {
        event.preventDefault();

        
        if (popUpRef.current) {
        setActiveName(name);

        const newSize = calculatePopupSize(name);
        setPopupSize(newSize);

          popUpRef.current.handleOpenMenu(event, name);
        }
      };

      const calculatePopupSize = (name) => {
        const group = groupedItems.find((g) => g.name === name);
        const count = group ? group.items.length : 0;
        return count * 40;
    };
  
    return(
        <div>
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
                    <Dot><Tag>h1</Tag></Dot>
                    <Dot><Tag>hr</Tag></Dot> 
                    <Dot><Tag>p</Tag></Dot>
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
                onClick={(event) => ShowPopUp(event, "CSS")}
                href="#"
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
                onClick={(event) => ShowPopUp(event, "cores")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title={`Aula 16 — Cores`}
                text={`Adição de cores a elementos css, sendo o cor03, a junção de tudo o que eu sabia até ali com HTML e CSS`}
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
                onClick={(event) => ShowPopUp(event, "fontes")}
                href="#"
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
                onClick={(event) => ShowPopUp(event, "caixas")}
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

                <Card
                onClick={(event) => ShowPopUp(event, "fundos")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title={`Aula 22 — Fundos`}
                text={`Imagens de fundo com CSS e suas configurações.`}
                >
                    <Dot>background-image</Dot>
                    <Dot>background-size</Dot>
                    <Dot>background-repeat</Dot>
                    <Dot>background-attachment</Dot>
                    <Dot>background-position</Dot>
                    <Dot>background-origin</Dot>
                    <Dot>background</Dot>
                </Card>

                <Card
                onClick={(event) => ShowPopUp(event, "tabelas")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title={`Aula 23 — Tabelas`}
                text={`Tabelas em HTML.`}
                >
                    <Dot><Tag>table</Tag></Dot>
                    <Dot><Tag>thead</Tag></Dot>
                    <Dot><Tag>tbody</Tag></Dot>
                    <Dot><Tag>tfoot</Tag></Dot>
                    <Dot><Tag>tr</Tag></Dot>
                    <Dot><Tag>td</Tag></Dot>
                    <Dot><Tag>th</Tag></Dot>
                    <Dot><Tag>col</Tag></Dot>
                    <Dot><Tag>colgroup</Tag></Dot>
                    <Dot><Tag>caption</Tag></Dot>
                </Card>

                <Card
                onClick={(event) => ShowPopUp(event, "iframes")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title={`Aula 24 — iframes`}
                text={`iframes, seus usos, e suas vantagens e desvantagens.`}
                >
                    <Dot><Tag>iframe</Tag></Dot>
                    <Dot>src</Dot>
                    <Dot>srcdoc</Dot>
                    <Dot>width</Dot>
                    <Dot>height</Dot>
                    <Dot>name</Dot>
                    <Dot>frameborder (obsoleto)</Dot>
                    <Dot>allow</Dot>
                    <Dot>allowfullscreen</Dot>
                    <Dot>loading</Dot>
                    <Dot>referrerpolicy</Dot>
                    <Dot>sandbox</Dot>
                    <Dot>scrolling (obsoleto)</Dot> 
                    <Dot>style</Dot>
                </Card>

                <Card
                onClick={(event) => ShowPopUp(event, "formularios")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title={`Aula 25 — formulários`}
                text={`Formulários, e seus diversos tipos e propriedades.`}
                >
                    <Dot><Tag>form</Tag></Dot>
                    <Dot><Tag>input</Tag></Dot>
                    <Dot><Tag>textarea</Tag></Dot>
                    <Dot><Tag>button</Tag></Dot>
                    <Dot><Tag>select</Tag></Dot>
                    <Dot><Tag>option</Tag></Dot>
                    <Dot><Tag>optgroup</Tag></Dot>
                    <Dot><Tag>label</Tag></Dot>
                    <Dot><Tag>fieldset</Tag></Dot>
                    <Dot><Tag>legend</Tag></Dot>
                    <Dot><Tag>datalist</Tag></Dot>
                    <Dot><Tag>output</Tag></Dot>

                    <Dot>action</Dot>
                    <Dot>method</Dot>
                    <Dot>name</Dot>
                    <Dot>value</Dot>
                    <Dot>placeholder</Dot>
                    <Dot>required</Dot>
                    <Dot>disabled</Dot>
                    <Dot>readonly</Dot>
                    <Dot>maxlength</Dot>
                    <Dot>minlength</Dot>
                    <Dot>min</Dot>
                    <Dot>max</Dot>
                    <Dot>autocomplete</Dot>
                    <Dot>multiple</Dot>
                    <Dot>accept</Dot>
                    <Dot>size</Dot>
                </Card>

                <Card
                onClick={(event) => ShowPopUp(event, "media-queries")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('')"
                title={`Aula 26 — Media Queries`}
                text={`Media Queries.`}
                >
                    <Dot>@media</Dot>
                    <Dot>min-width</Dot>
                    <Dot>max-width</Dot>
                    <Dot>min-height</Dot>
                    <Dot>max-height</Dot>
                    <Dot>aspect-ratio</Dot>
                    <Dot>orientation</Dot>
                    <Dot>display-mode</Dot>
                    <Dot>grid</Dot>
                    <Dot>width</Dot>
                    <Dot>height</Dot>
                    <Dot>device-width</Dot>
                    <Dot>device-height</Dot>
                </Card>

                 <PopUp 
                 height={popupSize}
                 ref={popUpRef} 
                 name={activeName}
                 items={groupedItems}
                 />

                <h3>Meus Proprios "projetos"</h3>
                
            </Section>
        </div>
    );
};

export default Progress;