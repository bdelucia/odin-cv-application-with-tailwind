import React, { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";
import ResumePreview from "./ResumePreview.jsx";

function App() {
  const [person, setPerson] = useState({
    personalFullName: "Todd Howard",
    personalEmail: "mail@site.com",
    personalPhone: "123-456-7890",
  });

  const [education, setEducation] = useState({
    schoolName: "Imperial City University",
    degree: "Potions and Spells",
    startDate: "YYYY-MM-DD",
    endDate: "YYYY-MM-DD",
  });

  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <div className="flex flex-col 2xl:flex-row justify-center gap-8 pb-4">
        <div
          id="leftContainer"
          className="w-full max-w-2xl flex flex-col items-center align-middle"
        >
          <PersonalInfo person={person} setPerson={setPerson} />
          <Education education={education} setEducation={setEducation} />
          <Experience />
        </div>
        <div
          id="rightContainer"
          className="w-full flex flex-col items-center align-middle max-w-2xl pt-4 pb-4"
        >
          <ResumePreview person={person} education={education} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
