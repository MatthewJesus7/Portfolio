import Main from "./Components/Sections/Main";
import Experience from "./Components/Sections/Experience";
import MainProjects from "./Components/Sections/MainProjects";
import Footer from "./Components/Sections/Footer";


function App() {
  return (
    <div className="App bg-gray-50 overflow-x-hidden">

      <Main></Main>
      <Experience></Experience>
      <MainProjects></MainProjects>
      <Footer></Footer>

    </div>
  );
}

export default App;