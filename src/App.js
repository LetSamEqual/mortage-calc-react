import "./App.css";

import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import NavBar from "./components/navBar/navBar";
import LandingPage from "./components/landingPage/landingPage";
import LinksPage from "./components/linksPage/linksPage";
import AboutPage from "./components/aboutPage/aboutPage";

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <NavBar className="navbar" />
        <div className="contentContainer">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/resources" element={<LinksPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </HelmetProvider>
    </div>
  );
}

export default App;
