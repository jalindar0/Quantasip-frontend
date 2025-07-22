import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import JobApplication from './pages/JobApplication';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookieConsent from './components/CookieConsent';
import FAQChatWidget from './components/FAQChatWidget';
import Products from './pages/Products';
import Mission from './pages/Mission';
import Vision from './pages/Vision';
import Values from './pages/Values';
import ScrollToTop from './components/ScrollToTop';

function HomeWithSections() {
  return <Home />;
}

function getOrCreateUserId() {
  // If this tab has not yet initialized a user_id, generate a new one
  if (!sessionStorage.getItem('quanta_user_id_initialized')) {
    const newUserId = 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('quanta_user_id', newUserId);
    sessionStorage.setItem('quanta_user_id_initialized', 'true');
    return newUserId;
  }
  let userId = localStorage.getItem('quanta_user_id');
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('quanta_user_id', userId);
  }
  return userId;
}

function useTrackPageVisit(pathname) {
  const hasTrackedRef = useRef({});

  useEffect(() => {
    if (!pathname) return; // Do not track if page is null or empty
    const userId = getOrCreateUserId();
    const pageKey = `visited_${pathname}`;
    if (!sessionStorage.getItem(pageKey) && !hasTrackedRef.current[pageKey]) {
      hasTrackedRef.current[pageKey] = true; // Prevent double call
      fetch('http://localhost:5005/api/track-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user_id: userId, page: pathname }),
      })
        .then(res => res.json())
        .then(data => {
          // Immediately update coin balance in header
          window.dispatchEvent(new Event('quanta-coin-update'));
        });
      sessionStorage.setItem(pageKey, 'true');
    }
  }, [pathname]);
}

function AppContent() {
  const location = useLocation();
  useTrackPageVisit(location.pathname);
  
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
    else if (location.pathname.startsWith('/products')) {
      pageTitle = 'Products - Quantasip GIS';
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
      <ScrollToTop />
      <Header active={active} />
      <Routes>
        <Route path="/" element={<HomeWithSections />} />
        <Route path="/home" element={<HomeWithSections />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/jobs/:slug/" element={<JobApplication />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/products" element={<Products />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/values" element={<Values />} />
      </Routes>
      <Footer />
      <CookieConsent />
      <FAQChatWidget />
    </>
  );
}

function App() {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey && e.key === "U")
      ) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
