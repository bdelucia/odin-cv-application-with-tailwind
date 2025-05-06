import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import PersonalInfo from './Personalnfo.jsx';
import Education from './Education.jsx';
import Experience from './Experience.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <PersonalInfo />
        <Education />
        <Experience />
      </div>
      <Footer />
    </div>
  </StrictMode>
);
