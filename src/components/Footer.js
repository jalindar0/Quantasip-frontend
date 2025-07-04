import React from 'react';
import styles from '../pages/Home.module.css';

const Footer = () => (
  <footer className={styles.footerCustom}>
    <div className={styles.footerColumns}>
      <div className={styles.footerCol}>
        <h2>Company</h2>
        <ul className={styles.footerLinks}>
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
      </div>
      <div className={styles.footerCol}>
        <h2>Contact Us</h2>
        <ul className={styles.footerContactList}>
          <li><span className={styles.footerIcon}>✉️</span> info@quantasip.com</li>
          <li><span className={styles.footerIcon}>📞</span> +91 7517860524</li>
          <li><span className={styles.footerIcon}>📍</span>404, Wall Street 24, near McDonald's, Motiram Nagar, Warje, Pune, Maharashtra 411058</li>
        </ul>
      </div>
      <div className={styles.footerCol}>
        <h2>Write to Us</h2>
        <form className={styles.footerFormCustom}>
          <input type="text" placeholder="Name" />
          <input type="tel" placeholder="Phone" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
    <div className={styles.footerCopyright}>
      © QuantaSip Pvt. Ltd. 2023
    </div>
  </footer>
);

export default Footer; 