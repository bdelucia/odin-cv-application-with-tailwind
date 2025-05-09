// App.jsx
import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PersonalInfo from "./Personalnfo.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import ResumePreview from "./ResumePreview.jsx";

function App() {
  const [person, setPerson] = useState({
    fullName: "Todd Howard",
    email: "mail@site.com",
    phone: "123-456-7890",
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex justify-between">
        <div id="leftContainer" className="pl-16">
          <PersonalInfo person={person} setPerson={setPerson} />
          <Education />
          <Experience />
        </div>
        <div id="rightContainer" className="pr-16 pt-4">
          <ResumePreview person={person} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
