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
  const coinBalanceRef = useRef(coinBalance);
  const [isClosing, setIsClosing] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    coinBalanceRef.current = coinBalance;
  }, [coinBalance]);

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

  // Store the last known coin balance across renders
  let lastKnownCoinBalance = null;
  // Fetch coin balance (refactored for reuse)
  const fetchCoinBalance = () => {
    const userId = getOrCreateUserId();
    fetch(`https://qb.quantasip.com/api/coin-balance/${userId}`)
      .then(res => res.json())
      .then(data => {
        // Only animate if the balance actually increased (using module-level variable)
        if (
          lastKnownCoinBalance !== null &&
          (data.coins || 0) > lastKnownCoinBalance
        ) {
          setShowFlyCoin(true);
          setTimeout(() => setShowFlyCoin(false), 1200);
        }
        setPrevCoinBalance(lastKnownCoinBalance);
        setCoinBalance(data.coins || 0);
        setBreakdown(data.breakdown || null);
        lastKnownCoinBalance = data.coins || 0;
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
  useEffect(() => {
    if (showPopover) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPopover]);
  useEffect(() => {
    if (!showPopover) return;
    function handleClick(e) {
      if (
        !e.target.closest('.quanta-coin-drawer') &&
        !e.target.closest('.quanta-coin-drawer')
      ) {
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
        <nav
          className={styles.navMenu}
          style={{ marginRight: 0 }}
        >
          <ul>
            <li className={currentActive === 'services' ? styles.active : ''}>
              <Link
                to="/services"
                onClick={e => {
                  if (window.location.pathname.replace(/\/+$/, '') === '/services') {
                    e.preventDefault();
                    window.scrollTo(0, 0);
                  }
                }}
              >
                Services
              </Link>
            </li>
            <li className={currentActive === 'products' ? styles.active : ''}>
              <Link
                to="/products"
                onClick={e => {
                  if (window.location.pathname.replace(/\/+$/, '') === '/products') {
                    e.preventDefault();
                    window.scrollTo(0, 0);
                  }
                }}
              >
                Products
              </Link>
            </li>
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
            <li className={currentActive === 'about' ? styles.active : ''}>
              <Link
                to="/about-us"
                onClick={e => {
                  if (window.location.pathname.replace(/\/+$/, '') === '/about-us') {
                    e.preventDefault();
                    window.scrollTo(0, 0);
                  }
                }}
              >
                About Us
              </Link>
            </li>
            <li className={currentActive === 'careers' ? styles.active : ''}>
              <Link
                to="/careers"
                onClick={e => {
                  if (window.location.pathname.replace(/\/+$/, '') === '/careers') {
                    e.preventDefault();
                    window.scrollTo(0, 0);
                  }
                }}
              >
                Careers
              </Link>
            </li>
            <li className={currentActive === 'contact' ? styles.active : ''}>
              <Link
                to="/contact-us"
                onClick={e => {
                  if (window.location.pathname.replace(/\/+$/, '') === '/contact-us') {
                    e.preventDefault();
                    window.scrollTo(0, 0);
                  }
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        {/* Move coin display here, after nav menu */}
        <div style={{ marginRight: 32, display: 'flex', alignItems: 'center', position: 'relative', minWidth: 48 }}>
          <div
            className="quanta-coin-single"
            style={{ cursor: 'pointer', position: 'relative', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setShowPopover((v) => !v)}
            title="View your Quanta Coins"
          >
            {/* Custom premium SVG coin asset */}
            <svg width="48" height="48" viewBox="0 0 48 48" style={{ display: 'block' }}>
              <defs>
                <radialGradient id="coinGoldBody" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#fffbe7" />
                  <stop offset="40%" stopColor="#ffe066" />
                  <stop offset="80%" stopColor="#ffd700" />
                  <stop offset="100%" stopColor="#bfa12c" />
                </radialGradient>
                <linearGradient id="coinRim" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fffbe7" />
                  <stop offset="50%" stopColor="#ffd700" />
                  <stop offset="100%" stopColor="#bfa12c" />
                </linearGradient>
                <radialGradient id="coinHighlight" cx="30%" cy="25%" r="60%">
                  <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                </radialGradient>
                <filter id="coinInnerShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feOffset dx="0" dy="2" />
                  <feGaussianBlur stdDeviation="2.5" result="offset-blur" />
                  <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                  <feFlood floodColor="#bfa12c" floodOpacity="0.25" result="color" />
                  <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                  <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                </filter>
              </defs>
              {/* Outer rim */}
              <circle cx="24" cy="24" r="22" fill="url(#coinRim)" stroke="#bfa12c" strokeWidth="2.5" />
              {/* Main gold body */}
              <circle cx="24" cy="24" r="18" fill="url(#coinGoldBody)" filter="url(#coinInnerShadow)" />
              {/* Top highlight */}
              <ellipse cx="20" cy="16" rx="8" ry="3" fill="url(#coinHighlight)" />
              {/* Sparkle/star */}
              <polygon points="30,12 32,18 38,18 33,22 35,28 30,24 25,28 27,22 22,18 28,18"
                fill="#fffbe7" opacity="0.7" style={{ filter: 'blur(0.5px)' }} />
              {/* Glossy overlay */}
              <path d="M12,24 a12,8 0 1,1 24,0" fill="#fff" opacity="0.18" />
              {/* Q letter */}
              <text x="50%" y="60%" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#bfa12c" fontFamily="Arial, sans-serif" style={{ letterSpacing: 2, textShadow: '0 2px 8px #fffbe7' }}>Q</text>
            </svg>
            {showFlyCoin && (
              <svg width="48" height="48" viewBox="0 0 48 48" className="quanta-coin-fly" style={{ left: 0, top: -30, width: 48, height: 48 }}>
                <defs>
                  <radialGradient id="coinGoldBodyFly" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor="#fffbe7" />
                    <stop offset="40%" stopColor="#ffe066" />
                    <stop offset="80%" stopColor="#ffd700" />
                    <stop offset="100%" stopColor="#bfa12c" />
                  </radialGradient>
                  <linearGradient id="coinRimFly" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fffbe7" />
                    <stop offset="50%" stopColor="#ffd700" />
                    <stop offset="100%" stopColor="#bfa12c" />
                  </linearGradient>
                  <radialGradient id="coinHighlightFly" cx="30%" cy="25%" r="60%">
                    <stop offset="0%" stopColor="#fff" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#fff" stopOpacity="0" />
                  </radialGradient>
                  <filter id="coinInnerShadowFly" x="-20%" y="-20%" width="140%" height="140%">
                    <feOffset dx="0" dy="2" />
                    <feGaussianBlur stdDeviation="2.5" result="offset-blur" />
                    <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                    <feFlood floodColor="#bfa12c" floodOpacity="0.25" result="color" />
                    <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                    <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                  </filter>
                </defs>
                {/* Outer rim */}
                <circle cx="24" cy="24" r="22" fill="url(#coinRimFly)" stroke="#bfa12c" strokeWidth="2.5" />
                {/* Main gold body */}
                <circle cx="24" cy="24" r="18" fill="url(#coinGoldBodyFly)" filter="url(#coinInnerShadowFly)" />

                {/* Sparkle/star */}
                <polygon points="30,12 32,18 38,18 33,22 35,28 30,24 25,28 27,22 22,18 28,18"
                  fill="#fffbe7" opacity="0.7" style={{ filter: 'blur(0.5px)' }} />
                {/* Glossy overlay */}
                <path d="M12,24 a12,8 0 1,1 24,0" fill="#fff" opacity="0.18" />
                {/* Q letter */}
                <text x="50%" y="60%" textAnchor="middle" fontSize="22" fontWeight="bold" fill="#bfa12c" fontFamily="Arial, sans-serif" style={{ letterSpacing: 2, textShadow: '0 2px 8px #fffbe7' }}>Q</text>
              </svg>
            )}
          </div>
          {showPopover && (
  <div
    className="quanta-coin-drawer"
    style={{
      position: 'fixed',
      top: 72, // header height
      right: 0,
      height: 'calc(100vh - 50px)', // ⬅️ slightly reduced from 72px to 80px
      width: 340,
      maxWidth: '90vw',
      background: 'linear-gradient(135deg, #e3ecf7 0%, #b7c7d7 100%)',
      backdropFilter: 'blur(18px) saturate(1.5)',
      borderLeft: '2.5px solid #183153',
      boxShadow: '-8px 0 32px 0 rgba(30,64,175,0.13)',
      zIndex: 99999,
      padding: '70px 24px 24px 24px', // ⬅️ increased top padding to 40px
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box', // ⬅️ ensures height respects padding
      animation: `${isClosing ? 'drawerSlideOut' : 'drawerSlideIn'} 0.3s ease-out forwards`,
    }}
  >
    <style>{`
      @keyframes drawerSlideIn {
        0% { transform: translateX(100%); opacity: 0.2; }
        100% { transform: translateX(0); opacity: 1; }
      }
      @keyframes drawerSlideOut {
        0% { transform: translateX(0); opacity: 1; }
        100% { transform: translateX(100%); opacity: 0; }
      }
    `}</style>

    {/* Close Button, Header, etc. stay the same */}
              <button
                onClick={() => {
                  setIsClosing(true);
                  setTimeout(() => {
                    setShowPopover(false);
                    setIsClosing(false);
                  }, 300);
                }}
                style={{
                  position: 'absolute',
                  top: 18,
                  right: 18,
                  background: 'transparent',
                  border: 'none',
                  color: '#183153',
                  fontSize: 28,
                  cursor: 'pointer',
                  fontWeight: 700,
                  zIndex: 100000,
                  transition: 'color 0.2s',
                }}
                aria-label="Close"
              >
                &times;
              </button>
              <button
  onClick={() => setShowInfo(prev => !prev)}
  title={showInfo ? 'Hide Info' : 'Show Info'}
  style={{
    position: 'absolute',
    top: 18,
    left: 18,
    background: '#ffffffcc',
    border: '1px solid #183153',
    borderRadius: '50%',
    color: '#183153',
    width: 24,
    height: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 12,
    fontWeight: 600,
    cursor: 'pointer',
    zIndex: 100000,
    transition: 'background 0.2s ease'
  }}
  onMouseEnter={e => e.currentTarget.style.background = '#f0f7ff'}
    onMouseLeave={e => e.currentTarget.style.background = '#ffffffcc'}
>
  i
</button>
{showInfo && (
    <div
      className="info-popup-content"
      style={{
        position: 'absolute',
        top: 60,
        left: 10,
        maxWidth: 260,
        background: '#e9f4ff',
        border: '1.5px solid #1976d2',
        borderRadius: 12,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        padding: '12px 16px',
        color: '#183153',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 1.5,
        display: 'flex',
        alignItems: 'flex-start',
        gap: 8,
      }}
    >
      <span>
        Earn coins by visiting new pages, submitting forms, and using Quantabot.
      </span>
      <button
          onClick={() => setShowInfo(false)}
          title="Close"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#183153',
            fontSize: 18,
            fontWeight: 700,
            cursor: 'pointer',
            padding: 0,
            marginLeft: 8,
            lineHeight: 1,
          }}
        >
          &times;
        </button>
    </div>
  )}

              <div style={{ display: 'flex', flexDirection: 'column', height: '100%', marginTop: '5px' }}>
  {/* Header: Coin Balance */}
  <div style={{
    fontWeight: 700,
    fontSize: 20,
    color: '#183153',
    marginBottom: 12,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    letterSpacing: 0.5
  }}>
    <svg width="32" height="32" viewBox="0 0 48 48" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
      <defs>
        <radialGradient id="goldGradient3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fffbe7" />
          <stop offset="60%" stopColor="#ffe066" />
          <stop offset="100%" stopColor="#d4af37" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="22" fill="url(#goldGradient3)" stroke="#bfa12c" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="18" fill="url(#goldGradient3)" />
      <text x="50%" y="60%" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#bfa12c" fontFamily="Arial, sans-serif">Q</text>
    </svg>
    {coinBalance} Quanta Coins Earned
  </div>

 {/* Breakdown Section */}
 <div style={{ flex: 1, overflowY: 'auto', paddingRight: 4 }}>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
    {(Object.entries(breakdown || defaultBreakdown)).map(([key, value], i) => (
  <li
    key={i}
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 15,
      marginBottom: 6,
      paddingBottom: 2,
      borderBottom: '1px solid rgba(24, 49, 83, 0.1)',
    }}
  >
    <span style={{ color: '#183153' }}>
      {key === 'page_visits' ? 'Pages Visited'
        : key === 'form_submissions' ? 'Form Submissions'
        : key === 'faq_questions' ? 'Quantabot Questions'
        : key === 'faq_bonus' ? 'Quantabot Bonus'
        : key}
    </span>
    <span style={{ fontWeight: 700, color: '#1976d2' }}>
      {typeof value === 'object' && value !== null ? value.value : value}
    </span>
  </li>
))}

    </ul>
  </div>


</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header; 