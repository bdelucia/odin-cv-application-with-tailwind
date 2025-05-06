import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import App from './App.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import PersonalInfo from './Personalnfo.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <PersonalInfo />
      </div>
      <Footer />
    </div>
  </StrictMode>
);
