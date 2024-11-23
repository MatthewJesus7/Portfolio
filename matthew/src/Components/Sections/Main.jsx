import Me from "./Me";
import About from "./About.jsx";

function Main() {
    return(
        <main className="flex flex-col xl:flex-row relative z-10">
            <Me></Me>
            <About></About>
      </main>
    )
}

export default Main