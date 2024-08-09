function Section({ children, customclass }) {
    return(
        <section
        className={`
            max-w-7xl w-full mx-auto py-12 px-[5%]
            ${customclass}
        `}>

            {children}
        </section>
    )
}

export default Section