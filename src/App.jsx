import "./style/App.scss";
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Container/Welcome";
import Projects from "./components/Container/Projects";
import Contact from "./components/Container/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className="Container">
        <Welcome />
        <Projects />
      </div>
      <Contact />
      <footer>
        <p>Copyright&copy; 2023 - Página creada por Armando Diaz - Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
