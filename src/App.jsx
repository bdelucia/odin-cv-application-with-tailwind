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
    personalEmail: "headhoncho@bethesda.com",
    personalPhone: "123-456-7890",
  });

  const [education, setEducation] = useState({
    schoolName: "Skingrad-uate University",
    degree: "Potions and Applied Alchemy",
    startDate: "YYYY-MM-DD",
    endDate: "YYYY-MM-DD",
  });

  const [experience1, setExperience1] = useState({
    jobTitle: "Game Designer",
    companyName: "Bethesda Game Studios",
    startDate: "YYYY-MM-DD",
    endDate: "YYYY-MM-DD",
    description:
      "- Led the creative vision and development of iconic, award-winning franchises including The Elder Scrolls and Fallout, reaching tens of millions of players worldwide. - Directed cross-functional teams of 100+ developers, artists, writers, and designers across multiple AAA game titles. - Spearheaded the launch of The Elder Scrolls V: Skyrim, which sold over 30 million copies and won numerous Game of the Year awards.",
  });

  const [experience2, setExperience2] = useState({
    jobTitle: "Potion Brewer",
    companyName: "Skingrad-uate Research Institute",
    startDate: "YYYY-MM-DD",
    endDate: "YYYY-MM-DD",
    description:
      "- Completed a rigorous four-year alchemical program with honors, specializing in combat-ready potions, resistance tonics, and field-ready antidotes. - Conducted independent research on Nirnroot reactivity under the mentorship of Master Sinderion’s successor, contributing to the Weald Journal of Rare Botanicals.",
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
          <Experience
            experience1={experience1}
            setExperience1={setExperience1}
            experience2={experience2}
            setExperience2={setExperience2}
          />
        </div>
        <div
          id="rightContainer"
          className="w-full flex flex-col items-center align-middle max-w-2xl pt-4 pb-4"
        >
          <ResumePreview
            person={person}
            education={education}
            experience1={experience1}
            experience2={experience2}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
