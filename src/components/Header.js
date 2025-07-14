import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

function Header({ active }) {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const companyRef = useRef();
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';

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
          <img src="https://quantasip.com/wp-content/uploads/2024/08/logoo.png" alt="QuantaSIP GIS Logo" className={styles.logo} />
        </Link>
        {!isHome && <div className={styles.flexSpacer}></div>}
        <nav
          className={styles.navMenu}
          style={{ marginRight: 0 }}
        >
          <ul>
            <li className={active === 'services' ? styles.active : ''}><Link to="/services">Services</Link></li>
            <li className={active === 'products' ? styles.active : ''}><Link to="/products">Products</Link></li>
            <li
              ref={companyRef}
              className={styles.hasSubmenu + ' ' + (active === 'company' ? styles.active : '')}
            >
              <span
                className={styles.companyButton}
                aria-haspopup="true"
                aria-expanded={false}
                type="button"
              >
                Company
              </span>
              <div className={styles.submenu}>
                <div className={styles.submenuOption}><Link to="/privacy-policy">Privacy Policy</Link></div>
                <div className={styles.submenuOption}><Link to="/terms-of-service">Terms of Service</Link></div>
              </div>
            </li>
            <li className={active === 'about' ? styles.active : ''}><Link to="/about-us">About Us</Link></li>
            <li className={active === 'careers' ? styles.active : ''}><Link to="/careers">Careers</Link></li>
            <li className={active === 'contact' ? styles.active : ''}><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header; 