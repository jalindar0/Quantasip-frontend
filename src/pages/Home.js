import React, { useState, useEffect, useRef } from 'react';
import styles from './Home.module.css';

// Slideshow images
const slideshowImages = [
  'https://quantasip.com/wp-content/uploads/2024/08/modern-monitor-elegant-table.jpg',
  'https://quantasip.com/wp-content/uploads/2024/08/beautiful-landscape-high-angle-scaled.jpg',
  'https://quantasip.com/wp-content/uploads/2024/08/mobile-app-location-digital-art.png',
  'https://quantasip.com/wp-content/uploads/2024/08/from-car-city-map.jpg',
  'https://quantasip.com/wp-content/uploads/2024/08/3d-smartphone-device-with-map-gps-technology-1-scaled.jpg',
  'https://quantasip.com/wp-content/uploads/2024/08/unrecognizable-architect-drawing-plan.jpg',
  'https://quantasip.com/wp-content/uploads/2024/08/Understanding-Cadastral-Maps-Your-Guide-to-Informed-Land-Buying-copyasd.png',
  'https://quantasip.com/wp-content/uploads/2024/08/flat-lay-drawing-with-colorful-lines-scaled.jpg',
  'https://quantasip.com/wp-content/uploads/2024/08/china-city-night.jpg',
];

const animatedWords = [
  'Expertise',
  'Innovation',
  'Leadership',
  'Solutions',
];

const partnerLogos = [
  'https://quantasip.com/wp-content/uploads/2024/08/NPCI_logo.svg.png',
  'https://quantasip.com/wp-content/uploads/2024/08/Satsure_Logo-scaled-e1725512096298.jpg',
  'https://quantasip.com/wp-content/uploads/2024/08/download.png',
  'https://quantasip.com/wp-content/uploads/2024/08/images.png',
  'https://quantasip.com/wp-content/uploads/2024/08/afaqs_2023-04_892fde07-f530-4653-a60e-acf92fd98e7c_Skymet_New_Logo__Beyond_Weather.webp',
  'https://quantasip.com/wp-content/uploads/2024/08/images-2.png',
  'https://quantasip.com/wp-content/uploads/2024/08/images-1.png',
  'https://quantasip.com/wp-content/uploads/2024/08/Farmonaut_Logo_Black.png',
];

const serviceCardsRow1 = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 24 24" width="48" fill="none" stroke="#232a3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="10" r="3"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5V21"/></svg>
    ),
    title: 'Cadastral',
    back: 'Our GIS Solutions provide a comprehensive database of cadastral data from all States, ensuring easy access to accurate land records.',
    color: '#dbeafe', // pastel blue
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="none" stroke="#232a3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="32" height="32" rx="8"/><polyline points="16 24 22 30 32 18"/></svg>
    ),
    title: 'Survey',
    back: 'Our GIS Solutions offer drone surveys, land surveys, and DGPS services to ensure accurate and reliable geographic data.',
    color: '#bbf7d0', // pastel green
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="none" stroke="#232a3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="20"/><path d="M24 14v10l8 5"/></svg>
    ),
    title: 'Geo-Referencing',
    back: 'Our GIS Solutions provide accurate geo-referencing services, ensuring that digital data is correctly positioned on the map.',
    color: '#fef9c3', // pastel yellow
  },
];

const serviceCardsRow2 = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48" fill="none" stroke="#232a3d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="32" height="32" rx="8"/><path d="M16 24h16M24 16v16"/></svg>
    ),
    title: 'GIS Application Development',
    back: 'Our GIS Solutions offer designing, building, and maintaining GIS apps. These apps enable users to capture, store, analyze, and visualize spatial data.',
    color: '#e0e7ff', // pastel purple
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#232a3d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="24" cy="13" rx="15" ry="6" />
        <path d="M9 13v14c0 3.3 6.7 6 15 6s15-2.7 15-6V13" />
        <path d="M9 27c0 3.3 6.7 6 15 6s15-2.7 15-6" />
      </svg>
    ),
    title: 'Geo Database',
    back: 'Our GIS Solutions provide a comprehensive database of land records, with linkages to cadastral data in the pipeline for even more accurate information',
    color: '#fee2e2', // pastel red
  },
];

const testimonials = [
  {
    name: 'Skymet Weather Pvt Ltd',
    title: 'Mr. Arjun',
    text: 'QuantaSIP has been an invaluable partner in our infrastructure development projects. Their expertise in Cadastral Mapping and Geospatial Services has allowed us to accurately plan and execute our projects, and their quick learning and ability to scale up the team has been impressive. We highly recommend QuantaSIP for any project that requires innovative GISolutions',
  },
  {
    name: 'Genesys International Ltd',
    title: 'Mr Sagar',
    text: 'We have worked with QuantaSIP on several projects, and their professionalism and attention to detail have been outstanding. Their team of experts has a strong understanding of mapping technology, and their capacity to quickly adapt to our project needs has been impressive. We look forward to continuing our partnership with QuantaSIP for future projects.',
  },
  {
    name: 'Satsure',
    title: 'Ms Rashmi',
    text: 'QuantaSIP has been an integral part of our agriculture projects, providing accurate survey and mapping services that have allowed us to optimize our operations. Their team of professionals has a deep understanding of the industry, and their expertise in geospatial services has been invaluable. We highly recommend QuantaSIP for any project that requires reliable and innovative GISolutions.',
  },
];

function PillFlipCard({ icon, title, back, color }) {
  const [flipped, setFlipped] = useState(false);
  return (
    <div
      className={`${styles.pillCard} ${flipped ? styles.flipped : ''}`}
      style={{ background: color }}
      tabIndex={0}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
    >
      <div className={styles.pillCardInner}>
        <div className={styles.pillCardFront}>
          {icon && <div className={styles.pillIcon}>{icon}</div>}
          {title && <div className={styles.pillTitle}>{title}</div>}
        </div>
        <div className={styles.pillCardBack}>
          <div className={styles.pillBackDesc}>{back}</div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  // Slideshow logic
  const [slide, setSlide] = useState(0);
  const heroRef = useRef(null);
  const belowRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((s) => (s + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animated headline logic
  const [headlineIdx, setHeadlineIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIdx((i) => (i + 1) % animatedWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Testimonials slider logic
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleArrowClick = (e) => {
    e.preventDefault();
    if (belowRef.current) {
      belowRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.homePage}>
      {/* Hero Section */}
      <section
        className={styles.heroSection}
        ref={heroRef}
        style={{ height: '100vh', minHeight: '100vh', overflow: 'hidden' }}
      >
        {slideshowImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt="slideshow"
            className={styles.heroSlideImg}
            style={{ opacity: slide === i ? 1 : 0, transition: 'opacity 0.5s' }}
            draggable={false}
          />
        ))}
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1>QuantaSip GIS Pvt. Ltd.</h1>
          <h2>Geo-Positioned Cadastral Data & Land Records</h2>
          <h2>Clear, Cleansed, Corrected Maps</h2>
          <a
            href="#scroll-down"
            className={styles.scrollDownIcon}
            onClick={handleArrowClick}
            tabIndex={0}
            aria-label="Scroll down"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 512 512"
              width="48"
              height="48"
              className={styles.animatedArrow}
            >
              <path
                d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"
                fill="#fff"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* Rest of the page, always visible */}
      <div ref={belowRef}>
        <div className={styles.mainContent}>
          {/* Partner Logos - Industries We Serve */}
          <section className={styles.partnersSection}>
            <h4>Industries We Serve</h4>
            <div className={styles.partnerLogos}>
              {partnerLogos.map((logo, i) => (
                <img key={i} src={logo} alt="Partner Logo" draggable={false} />
              ))}
            </div>
          </section>

          {/* Animated Headline - Industries We Serve */}
          <section className={styles.animatedHeadlineSection}>
            <h3>
              Our{' '}
              <span className={styles.animatedHeadlineWord}>{animatedWords[headlineIdx]}</span>
              {' '}Across Industries
            </h3>
          </section>

          {/* Our GIS Solution (Service Cards) */}
          <section className={styles.servicesSection}>
            <h3>Our GIS Solution</h3>
            <h4>Solving Key Challenges in Infrastructure Development</h4>
            <div className={styles.serviceCardsGrid}>
              <div className={styles.serviceCardsRow}>
                {serviceCardsRow1.map((card, i) => (
                  <PillFlipCard key={i} {...card} />
                ))}
              </div>
              <div className={styles.serviceCardsRow}>
                {serviceCardsRow2.map((card, i) => (
                  <PillFlipCard key={i} {...card} />
                ))}
              </div>
            </div>
          </section>

          {/* Awards & Recognition */}
          <section className={styles.awardsSection}>
            <h2>Awards & Recognition</h2>
            <h2>"Our organization is thrilled to receive the Geospatia Startup of the Year Award for GeoSpatia-24."</h2>
            <div className={styles.awardImages}>
              <img src="https://quantasip.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-04-03-at-15.50-1.png" alt="Award 1" />
              <img src="https://quantasip.com/wp-content/uploads/2024/08/WhatsApp-Image-2024-04-03-at-15.50-2.png" alt="Award 2" />
            </div>
            <h2>Lokmat Achievers Award</h2>
            <div className={styles.awardImages}>
              <img src="https://quantasip.com/wp-content/uploads/2024/09/WhatsApp-Image-2024-09-10-at-11.41.26-1024x837.jpeg" alt="Lokmat 1" />
              <img src="https://quantasip.com/wp-content/uploads/2024/09/lokmat_1-2.jpeg" alt="Lokmat 2" />
            </div>
            <h2>"Our Technical Director Javed Sheikh, featured in Geospatial Artha Magazine Volume 2. Honored to be positioned alongside the Industry Leaders!!"</h2>
            <a href="https://issuu.com/geospatialworld/docs/geospatial_artha_sept-oct_2023_digital_edition" target="_blank" rel="noopener noreferrer">
              <img src="https://quantasip.com/wp-content/uploads/2024/09/Screenshot-2024-09-11-at-11.57.23%E2%80%AFAM.png" alt="Magazine" />
            </a>
            <h2>We've Sponsored</h2>
            <div className={styles.sponsorImages}>
              <img src="https://quantasip.com/wp-content/uploads/2024/09/images.jpeg" alt="Sponsor 1" />
              <img src="https://quantasip.com/wp-content/uploads/2024/09/images-2.png" alt="Sponsor 2" />
              <img src="https://quantasip.com/wp-content/uploads/2024/09/logo-2-1-1024x468.png" alt="Sponsor 3" />
            </div>
          </section>

          {/* What Our Clients Say (Testimonials) */}
          <section className={styles.testimonialsSection}>
            <h2>What Our Clients Say</h2>
            <div className={styles.testimonialsSlider}>
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={styles.testimonial + ' ' + (testimonialIdx === i ? styles.active : '')}
                  style={{ display: testimonialIdx === i ? 'block' : 'none' }}
                >
                  <cite>
                    <span>{t.name}</span>
                    <span>{t.title}</span>
                  </cite>
                  <div className={styles.testimonialText}>{t.text}</div>
                </div>
              ))}
              <div className={styles.testimonialNav}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={testimonialIdx === i ? styles.active : ''}
                    onClick={() => setTestimonialIdx(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Get in Touch (Contact Section) */}
          <section className={styles.contactSection}>
            <h3>Get in Touch</h3>
            <h5>Connect with us today for tailored GIS solutions and expert support for your infrastructure projects.</h5>
            <form className={styles.contactForm}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <div className={styles.checkboxGroup}>
                <label><input type="checkbox" /> Cadastral Datasets</label>
                <label><input type="checkbox" /> Land Record Verification</label>
                <label><input type="checkbox" /> Data Cleaning</label>
                <label><input type="checkbox" /> Data Correction</label>
                <label><input type="checkbox" /> Others</label>
              </div>
              <textarea placeholder="Describe your project or any specific requests" />
              <button type="submit">Send</button>
            </form>
            <div className={styles.contactInfo}>
              <ul>
                <li><a href="mailto:info@quantasip.com">info@quantasip.com</a></li>
                <li><a href="tel:7517860524">+91 7517860524</a></li>
                <li>404, Wall Street 24, near McDonald's, Motiram Nagar, Warje, Pune, Maharashtra 411058​</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home; 