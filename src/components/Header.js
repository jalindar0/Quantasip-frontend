import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

function Header({ active }) {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const companyRef = useRef();
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';

  // Determine active tab based on location if not provided
  const currentActive = active || (
    location.pathname.startsWith('/services') ? 'services' :
    location.pathname.startsWith('/products') ? 'products' :
    location.pathname.startsWith('/about') ? 'about' :
    location.pathname.startsWith('/careers') ? 'careers' :
    location.pathname.startsWith('/contact') ? 'contact' :
    location.pathname.startsWith('/privacy-policy') || location.pathname.startsWith('/terms-of-service') ? 'company' :
    ''
  );

  const isCompanyActive =
    location.pathname.startsWith('/privacy-policy') ||
    location.pathname.startsWith('/terms-of-service') ||
    location.pathname.startsWith('/mission') ||
    location.pathname.startsWith('/vision') ||
    location.pathname.startsWith('/values');

  // Close submenu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (companyRef.current && !companyRef.current.contains(event.target)) {
        setSubmenuOpen(false);
      }
    }
    if (submenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [submenuOpen]);

  return (
    <header className={styles.headerDesktop}>
      <div className={styles.headerInner}>
        <Link to="/">
          <img src="/uploads/2024/08/logoo.png" alt="QuantaSIP GIS Logo" className={styles.logo} />
        </Link>
        <div className={styles.flexSpacer}></div>
        <nav
          className={styles.navMenu}
          style={{ marginRight: 0 }}
        >
          <ul>
            <li className={currentActive === 'services' ? styles.active : ''}><Link to="/services" onClick={() => window.scrollTo(0, 0)}>Services</Link></li>
            <li className={currentActive === 'products' ? styles.active : ''}><Link to="/products" onClick={() => window.scrollTo(0, 0)}>Products</Link></li>
            <li
              ref={companyRef}
              className={styles.hasSubmenu + ' ' + (isCompanyActive ? ' ' + styles.active : '')}
              onMouseEnter={() => setSubmenuOpen(true)}
              onMouseLeave={() => setSubmenuOpen(false)}
              onFocus={() => setSubmenuOpen(true)}
              onBlur={() => setSubmenuOpen(false)}
            >
              <span
                className={styles.companyButton}
                aria-haspopup="true"
                aria-expanded={submenuOpen}
                type="button"
                onClick={() => setSubmenuOpen((open) => !open)}
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setSubmenuOpen((open) => !open); }}
              >
                Company
              </span>
              <div className={styles.submenu + ' ' + (submenuOpen ? styles.submenuOpen : styles.submenuClosed)}>
                <div className={styles.submenuOption + (location.pathname === '/privacy-policy' ? ' ' + styles.active : '')}><Link to="/privacy-policy" onClick={() => { setSubmenuOpen(false); window.scrollTo(0, 0); }}>Privacy Policy</Link></div>
                <div className={styles.submenuOption + (location.pathname === '/terms-of-service' ? ' ' + styles.active : '')}><Link to="/terms-of-service" onClick={() => { setSubmenuOpen(false); window.scrollTo(0, 0); }}>Terms of Service</Link></div>
                <div className={styles.submenuOption + (location.pathname === '/mission' ? ' ' + styles.active : '')}><Link to="/mission" onClick={() => { setSubmenuOpen(false); window.scrollTo(0, 0); }}>Our Mission</Link></div>
                <div className={styles.submenuOption + (location.pathname === '/vision' ? ' ' + styles.active : '')}><Link to="/vision" onClick={() => { setSubmenuOpen(false); window.scrollTo(0, 0); }}>Our Vision</Link></div>
                <div className={styles.submenuOption + (location.pathname === '/values' ? ' ' + styles.active : '')}><Link to="/values" onClick={() => { setSubmenuOpen(false); window.scrollTo(0, 0); }}>Our Values</Link></div>
              </div>
            </li>
            <li className={currentActive === 'about' ? styles.active : ''}><Link to="/about-us" onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
            <li className={currentActive === 'careers' ? styles.active : ''}><Link to="/careers" onClick={() => window.scrollTo(0, 0)}>Careers</Link></li>
            <li className={currentActive === 'contact' ? styles.active : ''}><Link to="/contact-us" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 