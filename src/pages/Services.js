import React, { useState, useRef, useEffect } from 'react';
import styles from './Services.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Placeholder images (replace with real images as needed)
const heroImg = '/uploads/2023/05/20230512205803_fpdl.in_gis-product-made-after-processing-aerial-pictures-taken-from-drone-ai_175356-13379_large.webp';
const cadastralImg = '/uploads/2024/08/Screenshot-2024-08-30-112555.png';
const process1Img = '/uploads/2023/05/Screenshot-2023-05-16-at-5.47.25-PM.webp';
const process2Img = '/uploads/2023/05/Screenshot-2023-05-16-at-5.47.38-PM.webp';
const attributesImg = '/uploads/2023/05/Screenshot-2023-05-16-at-5.51.35-PM.webp';
const landRecordImg = '/uploads/2023/05/Screenshot-2023-05-16-at-6.01.41-PM.webp';
const landRecordImg2 = '/uploads/2023/05/Screenshot-2023-05-16-at-6.02.58-PM.webp';
const landRecordImg3 = '/uploads/2023/05/Screenshot-2023-05-16-at-6.02.41-PM.webp';
const cleaning1Img = '/uploads/2023/05/Screenshot-2023-05-16-at-6.09.05-PM.webp';
const cleaning2Img = '/uploads/2023/05/Screenshot-2023-05-16-at-6.09.12-PM.webp';

const dataPoints = [
  { title: 'Road Network', stat: '2 Million+', desc: 'km covered', icon: '🛣️' },
  { title: 'Railway Network', stat: '50,000+', desc: 'km covered', icon: '🚆' },
  { title: 'APMC', stat: '2400+', desc: 'Registered APMC', icon: '🏪' },
  { title: 'National Banks', stat: '1 Lakh+', desc: 'Identified Banks', icon: '🏦' },
  { title: 'Colleges', stat: '1 Million+', desc: 'Marked Colleges', icon: '🎓' },
  { title: 'Hospitals', stat: '1.5 Million+', desc: 'Hospitals', icon: '🏥' },
  { title: 'Govt Offices', stat: '1 Million+', desc: 'Government Offices', icon: '🏛️' },
  { title: 'Landmarks', stat: '7.9 Million+', desc: 'Collective Landmarks', icon: '📍' },
  { title: 'Schools', stat: '1 Million+', desc: 'Marked Schools', icon: '🏫' },
  { title: 'Other PoI', stat: '120 Million+', desc: 'Total Data Point', icon: '📊' },
];

// Define a consistent image style for service section images
const serviceImageStyle = {
  width: '100%',
  maxWidth: 260,
  borderRadius: 8,
  margin: '0 auto 18px auto',
  display: 'block',
};
// Define a special style for the Service 1 main image (zoomed out)
const service1MainImageStyle = {
  width: '70%',
  maxWidth: '700px',
  borderRadius: 8,
  margin: '0 auto 18px auto',
  display: 'block',
};

// Define a larger image style for Service 3 images
const service3LargeImageStyle = {
  width: '100%',
  maxWidth: 600,
  borderRadius: 8,
  margin: '18px auto',
  display: 'block',
};

const Services = () => {
  // Collapse hero if hash is present in URL on mount
  const initialHeroFull = typeof window !== 'undefined' && window.location.hash ? false : true;
  const [heroFull, setHeroFull] = useState(initialHeroFull);
  const heroRef = useRef(null);
  const belowRef = useRef(null);

  // Smooth scroll to anchor if hash is present in URL
  useEffect(() => {
    if (!heroFull) {
      const hash = window.location.hash;
      if (hash) {
        // Timeout ensures DOM is ready and hero is collapsed
        setTimeout(() => {
          const el = document.getElementById(hash.replace('#', ''));
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 200);
      }
    }
  }, [heroFull]);

  // Handle scroll or arrow click to show rest of page
  useEffect(() => {
    function onScroll() {
      if (window.scrollY > 10) setHeroFull(false);
    }
    if (heroFull) {
      window.addEventListener('scroll', onScroll);
    }
    return () => window.removeEventListener('scroll', onScroll);
  }, [heroFull]);

  const handleArrowClick = (e) => {
    e.preventDefault();
    setHeroFull(false);
    setTimeout(() => {
    if (belowRef.current) {
      belowRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    }, 300);
  };

  return (
    <div className={styles.servicesPage}>
      {/* Header Navigation */}
      <Header active="services" />
      {/* Hero Section */}
      <section
        className={styles.heroSection + ' ' + (heroFull ? styles.heroFull : '')}
        ref={heroRef}
        style={heroFull ? { height: '100vh', minHeight: '100vh', overflow: 'hidden' } : {}}
        
      >
        <img
          src={heroImg}
          alt="Services Hero"
          className={styles.heroBgImg}
          draggable={false}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 700, marginBottom: 8 }}>Our Services</h1>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 500, margin: 0 }}>Geo-Positioned Cadastral Data & Land Records</h2>
          <h2 style={{ fontSize: '1.3rem', fontWeight: 500, margin: 0 }}>Clear, Cleansed, Corrected Maps</h2>
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
      {/* Rest of the page, hidden until scrolled or arrow clicked */}
      <div ref={belowRef} style={heroFull ? { display: 'none' } : {}}>
        <div className={styles.mainContent}>
          {/* Intro Section */}
          <section style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
            <h2 style={{ fontWeight: 700, fontSize: '1.7rem', marginBottom: 8 }}>Comprehensive GIS Solutions for Infrastructure Development</h2>
            <h4 style={{ fontWeight: 500, color: '#444', marginBottom: 8 }}>End-to-End GIS Services for Your Project Needs</h4>
            <p style={{ color: '#333', fontSize: '1.1rem' }}>
              At QuantaSIP GIS Pvt Ltd, we offer comprehensive GIS Solutions for infrastructure development projects. Our team of experts has a strong understanding of mapping technology, and our expertise ranges from survey to mapping across various industries, including electrical, agriculture, navigation, and infrastructure. We provide end-to-end GIS Services, from data collection to analysis, ensuring that your project needs are met with accuracy and efficiency. Our commitment to innovation and excellence has made us a trusted partner for some of India's most prestigious and challenging projects. Trust us to provide the best GIS Solutions for your project needs.
            </p>
          </section>

          {/* Service 1 Section */}
          <section style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem', marginBottom: '3rem' }}>
            <h3 id="service1" style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 16, textAlign: 'center' }}>
              Service I: Ready Cadastral Datasets for 18 States
            </h3>
            <img src={cadastralImg} alt="Cadastral Datasets" style={service1MainImageStyle} />
            <div className={styles.servicePointersRow}>
              <div className={styles.serviceCardPointer}>Procured Govt Cadastral Data under RoR for Multiple States (100% Available)</div>
              <div className={styles.serviceCardPointer}>Data Collection in Progress for Multiple States (UP, Rajasthan, Gujarat, Bihar, Assam, Chhattisgarh, West Bengal)</div>
              <div className={styles.serviceCardPointer}>“Local Govt Directory Code Mapped to Census Villages (Pan-India)”</div>
              <div className={styles.serviceCardPointer}>Physical Maps Digitized</div>
              <div className={styles.serviceCardPointer}>Boundaries Available at Multiple Levels (District, Tehsil, Pincode, and Village)</div>
            </div>
          </section>
          {/* Data Points Section */}
          <section style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1rem' }}>
            <h3 style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 16 }}>Available Datapoints</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
              {dataPoints.map((dp, i) => (
                <div key={i} style={{ flex: '1 1 180px', minWidth: 180, maxWidth: 220, background: '#f1f3f6', borderRadius: 12, boxShadow: '0 1px 4px rgba(0,0,0,0.05)', padding: '1.2rem 1rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: 8 }}>{dp.icon}</div>
                  <h4 style={{ fontWeight: 600, fontSize: '1.1rem', margin: 0 }}>{dp.title}</h4>
                  <div style={{ fontWeight: 700, fontSize: '1.2rem', color: '#1a237e', margin: '6px 0' }}>{dp.stat}</div>
                  <div style={{ color: '#444', fontSize: '0.98rem' }}>{dp.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Technology & Process Section */}
          <section style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem' }}>
            <p style={{ color: '#333', fontSize: '1.05rem' }}><strong>Process of Geo-referencing</strong></p>
            <p style={{ color: '#333', fontSize: '1.05rem' }}>We Bridge the Mismatch in Boundaries Between Govt's Cadastral Data and Open-Source Satellite Imagery</p>
            <p style={{ color: '#333', fontSize: '1.05rem' }}>Process 1: Geo-referencing of raw cadastral data</p>
            <img src={process1Img} alt="Geo-referencing" style={{ width: '100%', maxWidth: 600, borderRadius: 8, margin: '12px 0' }} />
            <p style={{ color: '#333', fontSize: '1.05rem' }}>Process 2: Correcting cadastral data with satellite imagery</p>
            <img src={process2Img} alt="Correcting cadastral data" style={{ width: '100%', maxWidth: 600, borderRadius: 8, margin: '12px 0' }} />
            <p style={{ color: '#333', fontSize: '1.05rem' }}>*Typically in a 1 hectare (10,000 sqm) plot, deviation of open-source satellite imagery can be upto 25 sq mtr – 0.25%</p>
            <p style={{ color: '#333', fontSize: '1.05rem' }}>Existing attributes in the dataset</p>
            <img src={attributesImg} alt="Attributes" style={{ width: '100%', maxWidth: 600, borderRadius: 8, margin: '12px 0' }} />
            <p style={{ color: '#333', fontSize: '1.05rem' }}>Acreage as per Polygon Area of Satellite Image Provided, 7/12 Acreage Available on Request</p>
          </section>

          {/* Service 2 Section */}
          <section style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem 1rem', marginBottom: '3rem' }}>
            <h3 id="service2" style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 16, textAlign: 'center' }}>
              Service 2: Land Record Verification
            </h3>
            <div className={styles.serviceDarkPointersRow}>
              <div className={styles.serviceDarkCardPointer}>
                Downloaded and periodically maintained complete Land Owner Information for Maharashtra, Karnataka, and Madhya Pradesh
              </div>
              <div className={styles.serviceDarkCardPointer}>
                In addition to 7/12 abstracts, we can provide 8-A mutation entry
              </div>
              <div className={styles.serviceDarkCardPointer}>
                Key fields in the database include owner name (transliterated in Unicode), acreage, and recorded charges (to be extracted).
              </div>
            </div>
            <div className={styles.serviceDarkPointersRow} style={{ justifyContent: 'center', marginTop: 18 }}>
              <div className={styles.serviceDarkCardPointer}>
                Data can be refreshed as per requirement
              </div>
              <div className={styles.serviceDarkCardPointer}>
                PoC provided for State Bank of India and HDFC Bank
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center', marginTop: 24 }}>
              <img src={landRecordImg2} alt="Land Record Example 1" style={serviceImageStyle} />
              <img src={landRecordImg3} alt="Land Record Example 2" style={serviceImageStyle} />
            </div>
          </section>

          {/* Service 3 Section */}
          <section style={{ maxWidth: 900, margin: '0 auto', padding: '2rem 1rem', marginBottom: '3rem' }}>
            <h3 id="service3" style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: 16, textAlign: 'center' }}>
              Service 3: Data Cleaning, Correction - Case 1
            </h3>
            <div className={styles.serviceDarkPointersRow}>
              <div className={styles.serviceDarkCardPointer}>
                In-Depth Study, Analysis, and Correction of Existing Data
              </div>
              <div className={styles.serviceDarkCardPointer}>
                Logical and Reasonable Analysis to Improve Land Owner Information Data
              </div>
            </div>
            <img src={cleaning1Img} alt="Data Cleaning, Correction - Case 1" style={service3LargeImageStyle} />
            <h3 style={{ fontWeight: 700, fontSize: '1.1rem', margin: '32px 0 8px 0', textAlign: 'center' }}>
              Service 3: Data Cleaning, Correction - Case 2
            </h3>
            <div className={styles.serviceDarkPointersRow}>
              <div className={styles.serviceDarkCardPointer}>
                Missing Survey number in existing data
              </div>
            </div>
            <img src={cleaning2Img} alt="Data Cleaning, Correction - Case 2" style={service3LargeImageStyle} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Services; 