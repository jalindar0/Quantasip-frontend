import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';
import './QuantaCoinAnimation.css'; // Add this import for custom animation styles

function getOrCreateUserId() {
  let userId = localStorage.getItem('quanta_user_id');
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('quanta_user_id', userId);
  }
  return userId;
}

function Header({ active }) {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const companyRef = useRef();
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/home';
  const [coinBalance, setCoinBalance] = useState(0);
  const [prevCoinBalance, setPrevCoinBalance] = useState(0);
  const [showFlyCoin, setShowFlyCoin] = useState(false);
  const [showPopover, setShowPopover] = useState(false);
  const [breakdown, setBreakdown] = useState(null);

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

  // Fetch coin balance (refactored for reuse)
  const fetchCoinBalance = () => {
    const userId = getOrCreateUserId();
    fetch(`http://localhost:5005/api/coin-balance/${userId}`)
      .then(res => res.json())
      .then(data => {
        setPrevCoinBalance(coinBalance);
        setCoinBalance(data.coins || 0);
        setBreakdown(data.breakdown || null);
      });
  };

  useEffect(() => {
    fetchCoinBalance();
    // Listen for custom event to update coin balance
    const handler = () => fetchCoinBalance();
    window.addEventListener('quanta-coin-update', handler);
    return () => window.removeEventListener('quanta-coin-update', handler);
    // eslint-disable-next-line
  }, []);

  // Refetch coin balance on route change
  useEffect(() => {
    fetchCoinBalance();
    // eslint-disable-next-line
  }, [location.pathname]);

  // Animate coin when balance increases
  useEffect(() => {
    if (coinBalance > prevCoinBalance) {
      setShowFlyCoin(true);
      const timer = setTimeout(() => setShowFlyCoin(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [coinBalance, prevCoinBalance]);

  // Click outside to close popover
  useEffect(() => {
    if (!showPopover) return;
    function handleClick(e) {
      if (!e.target.closest('.quanta-coin-popover') && !e.target.closest('.quanta-coin-single')) {
        setShowPopover(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showPopover]);

  // Placeholder breakdown if not available from backend
  const defaultBreakdown = [
    { label: 'Pages Visited', value: coinBalance - 10 > 0 ? coinBalance - 10 : 0 },
    { label: 'Form Submissions', value: coinBalance >= 10 ? 10 : coinBalance },
  ];

  return (
    <header className={styles.headerDesktop}>
      <div className={styles.headerInner}>
        <Link to="/">
          <img src="/uploads/2024/08/logoo.png" alt="QuantaSIP GIS Logo" className={styles.logo} />
        </Link>
        <div className={styles.flexSpacer}></div>
        {/* Single animated gold coin with popover on click */}
        <div style={{ marginRight: 24, display: 'flex', alignItems: 'center', position: 'relative', minWidth: 48 }}>
          <div
            className="quanta-coin-single"
            style={{ cursor: 'pointer', position: 'relative', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setShowPopover((v) => !v)}
            title="View your Quanta Coins"
          >
            {/* Custom SVG gold coin with Q */}
            <svg width="40" height="40" viewBox="0 0 40 40" style={{ display: 'block' }}>
              <defs>
                <radialGradient id="goldGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#fffbe7" />
                  <stop offset="60%" stopColor="#ffe066" />
                  <stop offset="100%" stopColor="#d4af37" />
                </radialGradient>
              </defs>
              <circle cx="20" cy="20" r="18" fill="url(#goldGradient)" stroke="#bfa12c" strokeWidth="2" />
              <text x="50%" y="56%" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#bfa12c" fontFamily="Arial, sans-serif">Q</text>
            </svg>
            {showFlyCoin && (
              <svg width="40" height="40" viewBox="0 0 40 40" className="quanta-coin-fly" style={{ left: 0, top: -30, width: 40, height: 40 }}>
                <defs>
                  <radialGradient id="goldGradient2" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fffbe7" />
                    <stop offset="60%" stopColor="#ffe066" />
                    <stop offset="100%" stopColor="#d4af37" />
                  </radialGradient>
                </defs>
                <circle cx="20" cy="20" r="18" fill="url(#goldGradient2)" stroke="#bfa12c" strokeWidth="2" />
                <text x="50%" y="56%" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#bfa12c" fontFamily="Arial, sans-serif">Q</text>
              </svg>
            )}
          </div>
          {showPopover && (
            <div className="quanta-coin-popover" style={{ position: 'absolute', top: 48, right: 0, background: '#fff', border: '1.5px solid #90caf9', borderRadius: 12, boxShadow: '0 4px 24px rgba(25,118,210,0.13)', minWidth: 220, zIndex: 9999, padding: 18 }}>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#1976d2', marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                <svg width="28" height="28" viewBox="0 0 40 40" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                  <defs>
                    <radialGradient id="goldGradient3" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#fffbe7" />
                      <stop offset="60%" stopColor="#ffe066" />
                      <stop offset="100%" stopColor="#d4af37" />
                    </radialGradient>
                  </defs>
                  <circle cx="20" cy="20" r="18" fill="url(#goldGradient3)" stroke="#bfa12c" strokeWidth="2" />
                  <text x="50%" y="56%" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#bfa12c" fontFamily="Arial, sans-serif">Q</text>
                </svg>
                {coinBalance} Quanta Coins
              </div>
              <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 6, color: '#183153' }}>Breakdown:</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {Object.entries(breakdown || defaultBreakdown).map(([key, value], i) => (
                  <li key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, marginBottom: 2 }}>
                    <span>
                      {key === 'page_visits' ? 'Pages Visited' : key === 'form_submissions' ? 'Form Submissions' : key}
                    </span>
                    <span style={{ fontWeight: 700 }}>{value}</span>
                  </li>
                ))}
              </ul>
              <div style={{ fontSize: 13, color: '#888', marginTop: 10 }}>
                Earn coins by visiting new pages and submitting forms!
              </div>
            </div>
          )}
        </div>
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