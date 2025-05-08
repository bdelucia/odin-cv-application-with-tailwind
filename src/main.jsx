import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from './App.jsx';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PersonalInfo from "./Personalnfo.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import ResumePreview from "./ResumePreview.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex justify-between">
        <div id="leftContainer" className="pl-16">
          <PersonalInfo />
          <Education />
          <Experience />
        </div>
        <div id="rightContainer" className="pr-16 pt-4">
          <ResumePreview />
        </div>
      </div>
      <Footer />
    </div>
  </StrictMode>
);
