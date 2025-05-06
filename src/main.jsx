import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <App />
      </div>
      <Footer />
    </div>
  </StrictMode>
);
