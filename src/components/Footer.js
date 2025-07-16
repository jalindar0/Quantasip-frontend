import React, { useState } from 'react';
import styles from '../pages/Home.module.css';

const Footer = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[0-9()#&+*\-=.]{10,}$/.test(phone);
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setStatus('Sending...');
    if (!validateEmail(form.email)) {
      setStatus('');
      setError('Please enter a valid email address.');
      return;
    }
    if (!validatePhone(form.phone)) {
      setStatus('');
      setError('Please enter a valid phone number.');
      return;
    }
    console.log(form);
    try {
      const res = await fetch('http://localhost:5005/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('Message sent!');
        setForm({ "name": "", "phone": "", "email": "", "message": "" });
      } else {
        setStatus('Error sending message.');
      }
    } catch {
      setStatus('Error sending message.');
    }
  };

  return (
    <footer className={styles.footerCustom}>
      <div className={styles.footerColumns}>
        <div className={styles.footerCol}>
          <h2>Company</h2>
          <ul className={styles.footerLinks}>
            <li><a href="/about-us">About</a></li>
            <li><a href="/contact-us">Contact</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
          <hr className={styles.footerDivider} style={{ margin: '22px 0 10px 0' }} />
          <div style={{ display: 'flex', gap: '14px', marginTop: '10px' }}>
            <a href="https://www.linkedin.com/company/quantasip-geomatic-informative-solutions-pvt-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
            </a>
            <a href="https://www.instagram.com/quantasip_gis/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.277-.353-2.45-1.32-3.417-.967-.967-2.14-1.261-3.417-1.32C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
          </div>
        </div>
        <div className={styles.footerCol}>
          <h2>Contact Us</h2>
          <ul className={styles.footerContactList}>
            <li><span className={styles.footerIcon}>✉️</span> info@quantasip.com</li>
            <li><span className={styles.footerIcon}>📞</span> +91 7517860524</li>
            <li><span className={styles.footerIcon}>📍</span>404, Wall Street 24, near McDonald's, Motiram Nagar, Warje, Pune, Maharashtra 411058</li>
            <li><span className={styles.footerIcon}>🌐</span> Experts in GIS, Mapping & Geospatial Solutions</li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h2>Write to Us</h2>
          <form className={styles.footerFormCustom} onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} required />
            <button type="submit">Send</button>
            {status && <div>{status}</div>}
            {error && <div style={{ color: 'red' }}>{error}</div>}
          </form>
          <hr className={styles.footerDivider} />
        </div>
      </div>
      <div className={styles.footerCopyright}>
        © QuantaSIP GIS Pvt. Ltd. 2023 | GIS & Geospatial Solutions
      </div>
    </footer>
  );
};

export default Footer; 