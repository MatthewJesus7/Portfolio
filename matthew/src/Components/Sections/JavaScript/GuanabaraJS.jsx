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
                proof="14 de Nov — 2023"
                picture="true"
                backgroundImage="url('')"
                title="Primeiro Exercicio — Olá Mundo"
                text={`Meu primeiro exercicio, e contato com a programação!`}
                >
                    <Dot><Tag>h1</Tag></Dot>
                    <Dot><Tag>hr</Tag></Dot> 
                    <Dot><Tag>p</Tag></Dot>
                </Card>

            {/* JavaScript/aula04
            /ex001.html */}
                <Card
                onClick={(event) => showPopUp(event, "prezepada03")}
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
        </div>
    );
});

export default GuanabaraJS;