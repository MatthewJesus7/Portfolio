import Section from "../Layout/Section"

function Footer() {
    return(
        <footer>
        <Section customclass="xl:ml-[40%] xl:w-[60%] relative z-10">
            <p className="text-center">
                Versão 1.0 do meu Portfólio. <br />
                Design inspirado de:
                <a href="https://brittanychiang.com/#projects" className="px-1.5 text-gray-900 hover:underline">
                Portfolio de BrittanyChiang
                </a> <br />
                Feito com React e Tailwind.css
            </p>
        </Section>
      </footer>
    )
}

export default Footer