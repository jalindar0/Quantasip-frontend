import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Testimonials from './components/Testimonials';
import Awards from './components/Awards';
import Solutions from './components/Solutions';
import Industries from './components/Industries';
import Sponsors from './components/Sponsors';
import FAQChatWidget from './components/FAQChatWidget';

function HomeWithSections() {
  return <Home />;
}

function AppContent() {
  const location = useLocation();
  
  // Update document title based on current route
  useEffect(() => {
    let pageTitle = 'Quantasip GIS';
    
    if (location.pathname === '/' || location.pathname === '/home') {
      pageTitle = 'Home - Quantasip GIS';
    } else if (location.pathname.startsWith('/services')) {
      pageTitle = 'Services - Quantasip GIS';
    } else if (location.pathname.startsWith('/about')) {
      pageTitle = 'About Us - Quantasip GIS';
    } else if (location.pathname.startsWith('/careers')) {
      pageTitle = 'Careers - Quantasip GIS';
    } else if (location.pathname.startsWith('/contact')) {
      pageTitle = 'Contact Us - Quantasip GIS';
    } else if (location.pathname.startsWith('/privacy-policy')) {
      pageTitle = 'Privacy Policy - Quantasip GIS';
    } else if (location.pathname.startsWith('/terms-of-service')) {
      pageTitle = 'Terms of Service - Quantasip GIS';
    }
    
    document.title = pageTitle;
  }, [location.pathname]);

  // Determine which tab should be active based on the current path
  let active = '';
  if (location.pathname === '/' || location.pathname === '/home') active = 'home';
  else if (location.pathname.startsWith('/services')) active = 'services';
  else if (location.pathname.startsWith('/about')) active = 'about';
  else if (location.pathname.startsWith('/careers')) active = 'careers';
  else if (location.pathname.startsWith('/contact')) active = 'contact';
  else if (location.pathname.startsWith('/privacy-policy') || location.pathname.startsWith('/terms-of-service')) active = 'company';

  return (
    <>
      <Header active={active} />
      <Routes>
        <Route path="/" element={<HomeWithSections />} />
        <Route path="/home" element={<HomeWithSections />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <Footer />
      <FAQChatWidget />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
