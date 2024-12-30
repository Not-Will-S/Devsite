import "./styling/main.scss"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AboutMe from './Pages/About.tsx'
import Projects from './Pages/Projects.tsx'
import TopPanel from "./Components/TopPanel.tsx";
import Experience from "./Pages/Experience.tsx";
import Contact from "./Pages/Contact.tsx"



function App(){
  return(
    <Router>
      <div className="App">
        {/* <Sidebar /> */}
        <TopPanel />
        <Routes>
          <Route path="/" element = {<AboutMe />}/>
          <Route path="/Projects" element = {<Projects />}/>
          <Route path="/Experience" element = {<Experience />}/>
          <Route path="/Contact" element = {<Contact />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;