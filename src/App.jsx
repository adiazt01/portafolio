import "./style/App.scss";
import "./style/themes/DarkTheme.scss"
import Navbar from "./components/Navbar/Navbar";
import Welcome from "./components/Container/Welcome";
import Projects from "./components/Container/Projects";
import Contact from "./components/Container/Contact";
import HighProjects from "./components/Container/HighProjects";
import { createContext, useState } from "react";


function App() {
  const ThemeContext = createContext(null);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div id={theme}>
        <Navbar toggleTheme={toggleTheme} theme={theme}/>
        <div className="Container">
          <Welcome />
          <HighProjects />
          <Projects />
        </div>
        <Contact />
        <footer id="Contacts">
          <p>
            Copyright&copy; 2023 - Página creada por Armando Diaz - Todos los
            derechos reservados
          </p>
        </footer>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
