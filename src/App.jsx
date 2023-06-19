import "./style/App.scss";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Container/Welcome";
import Projects from "./components/Container/Projects";
import Contact from "./components/Container/Contact";
import Technology from "./components/Container/Technology";

function App() {
  return (
    <>
      <Navbar />
      <div className="Container">
        <Welcome />
        <Technology />
        <Projects />
      </div>
      <Contact />
    </>
  );
}

export default App;
