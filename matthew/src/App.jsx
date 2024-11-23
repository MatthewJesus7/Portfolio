import Main from "./Components/Sections/Main";
import Experience from "./Components/Sections/Experience";
import MainProjects from "./Components/Sections/MainProjects";
import Layout from "./Components/Layout/Layout";


function App() {
  return (
    <div className="App relative
    bg-gray-50 selection:text-gray-500 overflow-hidden font-['roboto']">

      <Layout>
        <Main></Main>
        <MainProjects></MainProjects>
        
        <Experience></Experience>
      </Layout>

    </div>
  );
}

export default App;