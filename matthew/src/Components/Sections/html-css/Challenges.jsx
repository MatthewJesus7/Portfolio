import { forwardRef } from "react";
import Card from "../../Layout/Card"; 
import Dot from "../../Items/Dot";

const Challenges = forwardRef(({showPopUp}, ref) => {
    return(
        <div ref={ref}>
            <Card
                href="https://matthewjesus7.github.io/html-css/exercicios/desafios/d10/android.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/screenshot_32.png')"
                title="Desafio 10 — Android"
                text={`Meu primeiro desafio feito, não havia feito nenhum antes, pois não eram verdadeiros desafios. Esse site envolve um blog sobre o android`}
                >
                    <Dot>Desafio</Dot>
                    <Dot>Pequenas peças se encaixando</Dot> 
                    <Dot>Responsivo</Dot>
                </Card>

                <Card
                onClick={(event) => showPopUp(event, "desafio12")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/desafio12_1.png')"
                title="Desafio 12 - Cordel"
                text={`Desafio proposto por gustavo guanabara, um cordel completo, que envolve imagens com efeito paralax e responsividade básica`}
                >
                    <Dot>Desafio</Dot>
                    <Dot>Background</Dot>
                    <Dot>Responsivo</Dot>
                </Card>

                <Card
                onClick={(event) => showPopUp(event, "desafio13")}
                href="#"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/desafio13_1.png')"
                title="Desafio 13 - Tabelas"
                text={`Desafio de montagem de tabelas, que de primeira vista pareciam difícieis, mas, graças as boas aulas, consegui supera-los com muita facilidade.`}
                >
                    <Dot>Desafio</Dot>
                    <Dot>Tabelas</Dot>
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/exercicios/desafios/p-social/pacote-d013/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/screenshot_35.png')"
                title="Desafio — Redes Sociais"
                text={`Desafio de redes sociais proposto por gustavo guanabara, não enumerado, mas se trata de iframes e seu uso em prática.`}
                >
                    <Dot>Desafio</Dot>
                    <Dot>iframes</Dot> 
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/exercicios/desafios/p-login/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/screenshot_36.png')"
                title="Desafio — Página de login (Não funcional)"
                text={`Desafio de uma página de login, "completa" feito primeiramente sozinho por mim, reunindo todo o meu conhecimento em HTML e CSS da época.`}
                >
                    <Dot>Desafio</Dot>
                    <Dot>Responsividade</Dot> 
                </Card>

                <Card
                href="https://matthewjesus7.github.io/html-css/exercicios/desafios/p-loginguanab/index.html"
                type="picture"
                // proof=""
                picture="true"
                backgroundImage="url('/Imagens/progress/screenshot_37.png')"
                title="Página de login com guanabara (Não funcional)"
                text={`Agora, a página dirigida pelo professor gustavo guanabara, com diversos ensinamentos extras, e, com um toque de personalização meu.`}
                >
                    <Dot>Desafio</Dot>
                    <Dot>Responsividade</Dot>
                    <Dot>Aprendizado</Dot>  
                </Card>
        </div>
    )
})

export default Challenges