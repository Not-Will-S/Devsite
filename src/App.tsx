import "./styling/main.scss";
import React, { useEffect } from "react";
import { HashRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import AboutMe from './Pages/About.tsx';
import Projects from './Pages/Projects.tsx';
import TopPanel from "./Components/TopPanel.tsx";
import Experience from "./Pages/Experience.tsx";
import Contact from "./Pages/Contact.tsx";
import MobilePage from "./Pages/Mobile.tsx";

// TODO - Mobile device detection function
function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

const App: React.FC = () => {
  const navigate = useNavigate();  

  useEffect(() => {
    if (isMobileDevice()) {
      navigate("/mobile");  
    }
  }, [navigate]);

  return (
    <div className="App">
      <TopPanel />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/mobile" element={<MobilePage />} /> 
      </Routes>
    </div>
  );
}

const WrappedApp: React.FC = () => {
  return (
    <Router>  {/* Wrap the whole App component inside Router */}
      <App />
    </Router>
  );
}

export default WrappedApp;