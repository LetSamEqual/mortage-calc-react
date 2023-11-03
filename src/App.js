import "./App.css";

import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navBar/navBar";
import LandingPage from "./components/landingPage/landingPage";
import LinksPage from "./components/linksPage/linksPage";
import AboutPage from "./components/aboutPage/aboutPage";

function App() {
  return (
    <div className="App">
      <NavBar className="navbar" />
      <div className="contentContainer">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/resources" element={<LinksPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
