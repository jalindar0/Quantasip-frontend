import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    services: [],
    message: '',
  });
  const [otherService, setOtherService] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [miniForm, setMiniForm] = useState({ name: '', phone: '', email: '', message: '' });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[0-9()#&+*\-=.]{10,}$/.test(phone);
  };

  const handleFormChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm(f => ({
        ...f,
        services: checked
          ? [...f.services, value]
          : f.services.filter(s => s !== value),
      }));
      if (name === 'services' && value === 'Others' && !checked) {
        setOtherService('');
      }
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };
  const handleFormSubmit = async e => {
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
    const payload = { ...form };
    if (form.services.includes('Others')) {
      payload.otherService = otherService;
    }
    try {
      const res = await fetch('http://localhost:5005/api/get-in-touch', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', services: [], message: '' });
        setOtherService('');
        setTimeout(() => setStatus(''), 2000);
      } else {
        const data = await res.json();
        setStatus(data.error || 'Error sending message.');
      }
    } catch (err) {
      setStatus('Error sending message.');
    }
  };
  const handleMiniFormChange = e => {
    const { name, value } = e.target;
    setMiniForm(f => ({ ...f, [name]: value }));
  };
  const handleMiniFormSubmit = e => {
    e.preventDefault();
    alert('Mini form submitted (placeholder)');
  };

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.heroSection} style={{ height: '100vh', minHeight: '100vh', position: 'relative' }}>
        <div className={styles.heroBg} style={{backgroundImage: 'url(/uploads/2024/08/hot-line-contact-us-call-center-search-interface.jpg)', height: '100vh'}}></div>
        <div className={styles.heroContent} style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
          <h1>Contact Us</h1>
          <a
            className={styles.scrollDown}
            href="#main-contact"
            aria-label="Scroll Down"
            style={{marginTop: '2rem'}}
            onClick={e => {
              e.preventDefault();
              const el = document.getElementById('main-contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <svg aria-hidden="true" viewBox="0 0 512 512" width="40" height="40" className={styles.animatedArrow}>
              <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z" fill="#fff"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className={styles.mainContactSection} id="main-contact">
        <h2 className={styles.contactHeading}>Let's get in Touch</h2>
        <div className={styles.contactGrid}>
          {/* Left: Contact Info */}
          <div className={styles.contactInfoCol}>
            <div className={styles.contactInfoItem}>
              <span className={styles.contactInfoIcon}>📞</span>
              <div>
                <div className={styles.contactInfoLabel}>Phone</div>
                <div className={styles.contactInfoValue}><a href="tel:+917517860524">+91 7517860524</a></div>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <span className={styles.contactInfoIcon}>✉️</span>
              <div>
                <div className={styles.contactInfoLabel}>Mail</div>
                <div className={styles.contactInfoValue}><a href="mailto:info@quantasip.com">info@quantasip.com</a></div>
              </div>
            </div>
            <div className={styles.contactInfoItem}>
              <span className={styles.contactInfoIcon}>📍</span>
              <div>
                <div className={styles.contactInfoLabel}>Office Address</div>
                <div className={styles.contactInfoValue}>404, Wall Street 24, near McDonald's, Motiram Nagar, Warje, Pune, Maharashtra 411058</div>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <div className={styles.contactFormCol}>
            <form className={styles.contactForm} onSubmit={handleFormSubmit}>
              <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleFormChange} required />
              <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleFormChange} required />
              <input type="tel" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleFormChange} required />
              <div className={styles.servicesGroup}>
                <div className={styles.servicesLabel}>Services Interested In</div>
                <label><input type="checkbox" name="services" value="Cadastral Datasets" checked={form.services.includes('Cadastral Datasets')} onChange={handleFormChange} /> Cadastral Datasets</label>
                <label><input type="checkbox" name="services" value="Land Record Verification" checked={form.services.includes('Land Record Verification')} onChange={handleFormChange} /> Land Record Verification</label>
                <label><input type="checkbox" name="services" value="Data Cleaning" checked={form.services.includes('Data Cleaning')} onChange={handleFormChange} /> Data Cleaning</label>
                <label><input type="checkbox" name="services" value="Data Correction" checked={form.services.includes('Data Correction')} onChange={handleFormChange} /> Data Correction</label>
                <label><input type="checkbox" name="services" value="Others" checked={form.services.includes('Others')} onChange={handleFormChange} /> Others</label>
                {form.services.includes('Others') && (
                  <input
                    type="text"
                    placeholder="Specify Others"
                    value={otherService}
                    onChange={e => setOtherService(e.target.value)}
                    style={{ marginTop: 10, width: '100%', padding: '8px 10px', borderRadius: 6, border: '1px solid #bdbdbd', fontSize: '0.98rem' }}
                    required
                  />
                )}
              </div>
              <textarea name="message" placeholder="Message" value={form.message} onChange={handleFormChange} />
              {status === 'success' && (
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                  <svg width="56" height="56" viewBox="0 0 56 56" style={{ display: 'block' }}>
                    <circle cx="28" cy="28" r="26" fill="#e6f4ea" stroke="#28a745" strokeWidth="3" />
                    <path d="M16 29l8 8 16-16" fill="none" stroke="#28a745" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                      <animate attributeName="stroke-dasharray" from="0,40" to="40,0" dur="0.5s" fill="freeze" />
                    </path>
                  </svg>
                </div>
              )}
              {status && status !== 'success' && (
                <div style={{ color: '#c2185b', fontWeight: 600, textAlign: 'center', marginTop: 8 }}>{status}</div>
              )}
              {error && (
                <div style={{ color: '#c2185b', fontWeight: 600, textAlign: 'center', marginTop: 8 }}>{error}</div>
              )}
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>

      {/* Discover Where We Are */}
      <div className={styles.discoverSection}>
        <h2 className={styles.discoverHeading}>Discover Where We Are</h2>
        <div className={styles.mapEmbed}>
          <iframe
            loading="lazy"
            src="https://maps.google.com/maps?q=quantasip%20Wallstreet%2024%20warje&t=m&z=15&output=embed&iwloc=near"
            title="quantasip Wallstreet 24 warje"
            aria-label="quantasip Wallstreet 24 warje"
            width="100%"
            height="100%"
            style={{border:0, borderRadius: '12px'}}
            allowFullScreen=""
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact; 