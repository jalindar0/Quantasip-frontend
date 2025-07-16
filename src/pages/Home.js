import React, { useState, useEffect, useRef } from 'react';
import styles from './Home.module.css';

// Slideshow images
const slideshowImages = [
  '/uploads/2024/08/modern-monitor-elegant-table.jpg',
  '/uploads/2024/08/beautiful-landscape-high-angle-scaled.jpg',
  '/uploads/2024/08/mobile-app-location-digital-art.png',
  '/uploads/2024/08/from-car-city-map.jpg',
  '/uploads/2024/08/3d-smartphone-device-with-map-gps-technology-1-scaled.jpg',
  '/uploads/2024/08/unrecognizable-architect-drawing-plan.jpg',
  '/uploads/2024/08/Understanding-Cadastral-Maps-Your-Guide-to-Informed-Land-Buying-copyasd.png',
  '/uploads/2024/08/flat-lay-drawing-with-colorful-lines-scaled.jpg',
  '/uploads/2024/08/china-city-night.jpg',
];

const animatedWords = [
  'Expertise',
  'Innovation',
  'Leadership',
  'Solutions',
];

const partnerLogos = [
  '/uploads/2024/08/NPCI_logo.svg.png',
  '/uploads/2024/08/Satsure_Logo-scaled-e1725512096298.jpg',
  '/uploads/2024/08/download.png',
  '/uploads/2024/08/images.png',
  '/uploads/2024/08/afaqs_2023-04_892fde07-f530-4653-a60e-acf92fd98e7c_Skymet_New_Logo__Beyond_Weather.webp',
  '/uploads/2024/08/images-2.png',
  '/uploads/2024/08/images-1.png',
  '/uploads/2024/08/Farmonaut_Logo_Black.png',
];

const serviceCardsRow1 = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 758q103.95-83.86 156.975-161.43Q690 519 690 452q0-59-21.5-100t-53.009-66.88q-31.51-25.881-68.271-37.5Q510.459 236 480 236q-30.459 0-67.22 11.62-36.761 11.619-68.271 37.5Q313 311 291.5 352T270 452q0 67 53.025 144.57T480 758Zm0 76Q343 731 276.5 636.801q-66.5-94.2-66.5-184.554Q210 384 234.5 332.5T298 246q39-35 86.98-52.5 47.98-17.5 95-17.5T575 193.5q48 17.5 87 52.5t63.5 86.533Q750 384.066 750 452.456 750 543 683.5 637 617 731 480 834Zm.089-318Q509 516 529.5 495.411q20.5-20.588 20.5-49.5Q550 417 529.411 396.5q-20.588-20.5-49.5-20.5Q451 376 430.5 396.589q-20.5 20.588-20.5 49.5Q410 475 430.589 495.5q20.588 20.5 49.5 20.5ZM210 976v-60h540v60H210Zm270-524Z"></path></svg>
    ),
    title: 'Cadastral',
    back: 'Our GIS Solutions provide a comprehensive database of cadastral data from all States, ensuring easy access to accurate land records.',
    color: '#dbeafe', // pastel blue
  },
  {
    icon: (
      <svg className="e-font-icon-svg e-far-check-square" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" width="36" height="36"><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
    ),
    title: 'Survey',
    back: 'Our GIS Solutions offer drone surveys, land surveys, and DGPS services to ensure accurate and reliable geographic data.',
    color: '#bbf7d0', // pastel green
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M458 975q-79-4-148-37t-120-86.5q-51-53.5-80.5-124.269Q80 656.463 80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q149 0 259 94t135 236h-61q-17-84-71-150t-135-99v18q0 35-24 61t-59 26h-87v87q0 16.575-13.5 27.787Q410 488 393 488h-83v88h110v125h-67L149 497q-5 20-7 39.667-2 19.666-2 39.333 0 135 91 233t227 106v60Zm392-26L716 815q-21 15-45.5 23t-50.065 8q-71.015 0-120.725-49.618Q450 746.765 450 675.882 450 605 499.618 555.5q49.617-49.5 120.5-49.5Q691 506 740.5 555.71T790 676.435q0 25.565-8.5 50.065Q773 751 759 773l134 133-43 43ZM619.859 786Q666 786 698 754.141q32-31.859 32-78T698.141 598q-31.859-32-78-32T542 597.859q-32 31.859-32 78T541.859 754q31.859 32 78 32Z"></path></svg>
    ),
    title: 'Geo-Referencing',
    back: 'Our GIS Solutions provide accurate geo-referencing services, ensuring that digital data is correctly positioned on the map.',
    color: '#fef9c3', // pastel yellow
  },
];

const serviceCardsRow2 = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M356 936H180q-24 0-42-18t-18-42V700q44-5 75.5-34.5T227 593q0-43-31.5-72.5T120 486V310q0-24 18-42t42-18h177q11-40 39.5-67t68.5-27q40 0 68.5 27t39.5 67h173q24 0 42 18t18 42v173q40 11 65.5 41.5T897 595q0 40-25.5 67T806 700v176q0 24-18 42t-42 18H570q-5-48-35.5-77.5T463 829q-41 0-71.5 29.5T356 936Zm-176-60h130q25-61 69.888-84 44.888-23 83-23T546 792q45 23 70 84h130V641h45q20 0 33-13t13-33q0-20-13-33t-33-13h-45V310H511v-48q0-20-13-33t-33-13q-20 0-33 13t-13 33v48H180v130q48.15 17.817 77.575 59.686Q287 541.555 287 593.223 287 644 257.5 686T180 746v130Zm329-330Z"></path></svg>
    ),
    title: 'GIS Application Development',
    back: 'Our GIS Solutions offer designing, building, and maintaining GIS apps. These apps enable users to capture, store, analyze, and visualize spatial data.',
    color: '#e0e7ff', // pastel purple
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 936q-151 0-255.5-46.5T120 776V376q0-66 105.5-113T480 216q149 0 254.5 47T840 376v400q0 67-104.5 113.5T480 936Zm0-488q86 0 176.5-26.5T773 362q-27-32-117.5-59T480 276q-88 0-177 26t-117 60q28 35 116 60.5T480 448Zm-1 214q42 0 84-4.5t80.5-13.5q38.5-9 73.5-22t63-29V438q-29 16-64 29t-74 22q-39 9-80 14t-83 5q-42 0-84-5t-80.5-14q-38.5-9-73-22T180 438v155q27 16 61 29t72.5 22q38.5 9 80.5 13.5t85 4.5Zm1 214q48 0 99-8.5t93.5-22.5q42.5-14 72-31t35.5-35V654q-28 16-63 28.5T643.5 704q-38.5 9-80 13.5T479 722q-43 0-85-4.5T313.5 704q-38.5-9-72.5-21.5T180 654v126q5 17 34 34.5t72 31q43 13.5 94 22t100 8.5Z"></path></svg>
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

const industriesWords = ['Expertise', 'Leadership', 'Solutions'];

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

  // Add state for industries animated word
  const [industriesWordIdx, setIndustriesWordIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndustriesWordIdx((i) => (i + 1) % industriesWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Add state for Get in Touch form
  const [form, setForm] = useState({ name: '', email: '', phone: '', services: [], message: '' });
  const [otherService, setOtherService] = useState('');
  const [status, setStatus] = useState('');

  const handleFormChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setForm(f => ({
        ...f,
        services: checked ? [...f.services, value] : f.services.filter(s => s !== value),
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
    setStatus('Sending...');
    const payload = { ...form };
    if (form.services.includes('Others')) {
      payload.otherService = otherService;
    }
    try {
      const res = await fetch('http://localhost:5000/api/get-in-touch', {
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
          {/* Partner Logos - Industries We Serve (Styled Grid) */}
          <section className={styles.industriesSection}>
            <div className={styles.industriesHeadline}>
              Our <span className={styles.animated}>{industriesWords[industriesWordIdx]}</span> Across Industries
            </div>
            <div className={styles.industriesGridRows}>
              <div className={styles.industriesGridRow}>
                {/* First row: 3 columns */}
                <div className={styles.industryGroup}>
                  <h5>BFSI Solutions</h5>
                  <div className={styles.industryLogos}>
                    <a href="https://www.npci.org.in/" target="_blank" rel="noopener noreferrer">
                      <img src="/uploads/2024/08/NPCI_logo.svg.png" alt="NPCI Logo" />
                    </a>
                    <a href="https://www.reliancegeneral.co.in/" target="_blank" rel="noopener noreferrer">
                      <img src="/uploads/2024/08/images-1.png" alt="Reliance General Insurance Logo" />
                    </a>
                  </div>
                  <div className={styles.industryMore}>…and many more</div>
                </div>
                <div className={styles.industryGroup}>
                  <h5>Agri-Innovator Solutions</h5>
                  <div className={styles.industryLogos}>
                    <a href="https://agrevolution.in/" target="_blank" rel="noopener noreferrer">
                      <img src="/uploads/2024/09/DeHaat.png" alt="DeHaat Logo" />
                    </a>
                    <a href="https://farmonaut.com/" target="_blank" rel="noopener noreferrer">
                      <img src="/uploads/2024/08/Farmonaut_Logo_Black.png" alt="Farmonaut Logo" />
                    </a>
                  </div>
                  <div className={styles.industryMore}>…and many more</div>
                </div>
                <div className={styles.industryGroup}>
                  <h5>Geospatial and GIS Services</h5>
                  <div className={styles.industryLogos}>
                    <a href="https://www.mahatransco.in/" target="_blank" rel="noopener noreferrer">
                      <img src="/uploads/2024/08/images.png" alt="MahaTransco Logo" />
                    </a>
                    <a href="https://www.igenesys.com/" target="_blank" rel="noopener noreferrer">
                      <img src="/uploads/2024/08/images-2.png" alt="Genesys Logo" />
                    </a>
                  </div>
                  <div className={styles.industryMore}>…and many more</div>
                </div>
              </div>
              <div className={styles.industriesGridRow + ' ' + styles.industriesGridRowBottom}>
                {/* Second row: 2 columns, centered under the first row */}
                <div className={styles.industryGroup}>
                  <h5>Agri-Tech Innovations</h5>
                  <div className={styles.industryLogos}>
                    <a href="https://www.satsure.co/" target="_blank" rel="noopener noreferrer">
                      <img src="/uploads/2024/08/Satsure_Logo-scaled-e1725512096298.jpg" alt="Satsure Logo" />
                    </a>
                    <a href="https://www.skymetweather.com/" target="_blank" rel="noopener noreferrer">
                      <img src="/uploads/2024/08/afaqs_2023-04_892fde07-f530-4653-a60e-acf92fd98e7c_Skymet_New_Logo__Beyond_Weather.webp" alt="Skymet Logo" />
                    </a>
                  </div>
                  <div className={styles.industryMore}>…and many more</div>
                </div>
                <div className={styles.industryGroup}>
                  <h5>Surveying Services</h5>
                  <div className={styles.industryLogos}>
                    <a href="https://www.mahametro.org/" target="_blank" rel="noopener noreferrer">
                      <img src="/uploads/2024/09/logo-2-e1725512065302.png" alt="Maha Metro Logo" />
                    </a>
                    <a href="https://www.npci.org.in/" target="_blank" rel="noopener noreferrer">
                      <img src="/uploads/2024/08/NPCI_logo.svg.png" alt="NPCI Logo" />
                    </a>
                  </div>
                  <div className={styles.industryMore}>…and many more</div>
                </div>
              </div>
            </div>
          </section>

          {/* Company Intro Section - aligned right */}
          <section className={styles.companyIntroSection}>
            <div className={styles.companyIntroContent}>
              <h2>Building a Better Tomorrow with Innovative GIS Solutions</h2>
              <p>QuantaSip GIS Pvt Ltd is your go-to EPC contractor for Railway, Highway, Powerline, and Irrigation Projects. Our team of 80+ staff, including Geo Spatial Analysts, developers, data analysts, and SMEs, have completed Google Map Data development, Pan India Highway data collection, and Geo Positioned Data Collection for all power towers of MSETCL. We have been recognized as one of the top 10 GIS companies in India by Business Outlook. Our partnership with NHAI for a GIS-enabled toll system makes us a pan-India vendor. Trust us to deliver quality services that exceed your expectations.</p>
            </div>
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

          {/* Our Services - Elementor style section */}
          <section className={styles.servicesElementorSection}>
            <h3 className={styles.servicesElementorHeading}>Our Services</h3>
            <h4 className={styles.servicesElementorSubheading}>Comprehensive GIS Solutions for Infrastructure Development</h4>
            <div className={styles.servicesElementorGrid}>
              {/* Card 1 */}
              <div className={styles.servicesElementorCard}>
                <div className={styles.servicesElementorBg} style={{backgroundImage: 'url(/uploads/2024/08/istockphoto-1452888582-612x612-1.jpg)'}}></div>
                <div className={styles.servicesElementorOverlay}></div>
                <div className={styles.servicesElementorContent}>
                  <h3>Cadastral Data Sets</h3>
                  <a className={styles.servicesElementorButton} href="/services#service1">Know More</a>
                </div>
              </div>
              {/* Card 2 */}
              <div className={styles.servicesElementorCard}>
                <div className={styles.servicesElementorBg} style={{backgroundImage: 'url(/uploads/2024/08/view-land-plot-real-estate-business-development.jpg)'}}></div>
                <div className={styles.servicesElementorOverlay}></div>
                <div className={styles.servicesElementorContent}>
                  <h3>Land Record Verification</h3>
                  <a className={styles.servicesElementorButton} href="/services#service2">Know More</a>
                </div>
              </div>
              {/* Card 3 */}
              <div className={styles.servicesElementorCard}>
                <div className={styles.servicesElementorBg} style={{backgroundImage: 'url(/uploads/2024/08/it-expert-updating-ai-systems-scaled.jpg)'}}></div>
                <div className={styles.servicesElementorOverlay}></div>
                <div className={styles.servicesElementorContent}>
                  <h3>API Services</h3>
                  <a className={styles.servicesElementorButton} href="/services#service2">Know More</a>
                </div>
              </div>
              {/* Card 4 */}
              <div className={styles.servicesElementorCard}>
                <div className={styles.servicesElementorBg} style={{backgroundImage: 'url(/uploads/2023/05/3.webp)'}}></div>
                <div className={styles.servicesElementorOverlay}></div>
                <div className={styles.servicesElementorContent}>
                  <h3>Data Cleaning, Correction</h3>
                  <a className={styles.servicesElementorButton} href="/services#service3">Know More</a>
                </div>
              </div>
            </div>
          </section>
          {/* Awards & Recognition */}
          <section className={styles.awardsSection}>
            <h2>"Our organization is thrilled to receive the Geospatia Startup of the Year Award for GeoSpatia-24."</h2>
            <div className={styles.awardImages}>
              <img src="/uploads/2024/08/WhatsApp-Image-2024-04-03-at-15.50-1.png" alt="Award 1" />
              <img src="/uploads/2024/08/WhatsApp-Image-2024-04-03-at-15.50-2.png" alt="Award 2" />
            </div>
            <h2>Lokmat Achievers Award</h2>
            <div className={styles.awardImages}>
              <img src="/uploads/2024/09/WhatsApp-Image-2024-09-10-at-11.41.26-1024x837.jpeg" alt="Lokmat 1" />
              <img src="/uploads/2024/09/lokmat_1-2.jpeg" alt="Lokmat 2" />
            </div>
            <h2>"Our Technical Director Javed Sheikh, featured in Geospatial Artha Magazine Volume 2. Honored to be positioned alongside the Industry Leaders!!"</h2>
            <a href="https://issuu.com/geospatialworld/docs/geospatial_artha_sept-oct_2023_digital_edition" target="_blank" rel="noopener noreferrer">
              <img src="/uploads/2024/09/Screenshot-2024-09-11-at-11.57.23%E2%80%AFAM.png" alt="Magazine" />
            </a>
            <h2>We've Sponsored</h2>
            <div className={styles.sponsorImages}>
              <img src="/uploads/2024/09/images.jpeg" alt="Sponsor 1" />
              <img src="/uploads/2024/09/images-2.png" alt="Sponsor 2" />
              <img src="/uploads/2024/09/logo-2-1-1024x468.png" alt="Sponsor 3" />
            </div>
          </section>

          {/* Why Choose Us */}
          <section className={styles.whyChooseUsSection}>
            <h2>Why Choose QuantaSIP GIS?</h2>
            <div className={styles.whyChooseUsGrid}>
              <div className={styles.whyCard}>
                <svg width="48" height="48" fill="none" stroke="#2e7d32" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="24" cy="24" r="20"/><path d="M16 24l6 6 10-10"/></svg>
                <h3>Proven GIS Expertise</h3>
                <p>Our team brings years of experience in cadastral mapping, land records, and geospatial solutions for diverse industries.</p>
              </div>
              <div className={styles.whyCard}>
                <svg width="48" height="48" fill="none" stroke="#1565c0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="32" height="32" rx="8"/><path d="M16 24h16M24 16v16"/></svg>
                <h3>Cutting-Edge Technology</h3>
                <p>We leverage the latest GIS software, satellite imagery, and data analytics to deliver accurate, actionable insights.</p>
              </div>
              <div className={styles.whyCard}>
                <svg width="48" height="48" fill="none" stroke="#ef6c00" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="24" cy="24" rx="20" ry="12"/><path d="M4 24c0 11 9 20 20 20s20-9 20-20"/></svg>
                <h3>Trusted by Industry Leaders</h3>
                <p>Our solutions are trusted by top organizations in infrastructure, agriculture, banking, and government sectors.</p>
              </div>
              <div className={styles.whyCard}>
                <svg width="48" height="48" fill="none" stroke="#00897b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M24 4v40M4 24h40"/></svg>
                <h3>Comprehensive Support</h3>
                <p>From data collection to analysis and visualization, we provide end-to-end GIS support for your projects.</p>
              </div>
            </div>
          </section>

          {/* Get in Touch (Contact Section) */}
          <section className={styles.getInTouchSection} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
            <h3 style={{textAlign: 'center', marginBottom: '60px', color: 'rgb(24, 49, 83)'}}>Get in Touch</h3>
            {/* Contact Form */}
            <form className={styles.contactForm} style={{maxWidth: 640, margin: '0 auto', background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px rgba(0,0,0,0.09)', padding: '56px 40px 48px 40px', display: 'flex', flexDirection: 'column', gap: 24, position: 'relative', width: '100%', boxSizing: 'border-box'}} onSubmit={handleFormSubmit}>
              <span style={{display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 88, height: 88, borderRadius: '50%', background: '#f4f6fa', border: '2.5px solid #e0e0e0', position: 'absolute', left: '50%', top: '-44px', transform: 'translateX(-50%)', boxShadow: '0 2px 8px rgba(0,0,0,0.06)'}}>
                <svg width="56" height="56" fill="#bdbdbd" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/></svg>
              </span>
              <div className={styles.formGroup}>
                <label htmlFor="form-field-name">Full Name</label>
                <input type="text" id="form-field-name" name="name" value={form.name} onChange={handleFormChange} placeholder="Enter your full name" required style={{fontSize: '1.08rem', borderRadius: 8, padding: '12px 14px', border: '1.5px solid #bdbdbd', marginTop: 6}} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="form-field-email">Email</label>
                <input type="email" id="form-field-email" name="email" value={form.email} onChange={handleFormChange} placeholder="Enter your email address" required style={{fontSize: '1.08rem', borderRadius: 8, padding: '12px 14px', border: '1.5px solid #bdbdbd', marginTop: 6}} />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="form-field-phone">Phone Number</label>
                <input type="tel" id="form-field-phone" name="phone" value={form.phone} onChange={handleFormChange} placeholder="Enter your phone number" required pattern="[0-9()#&+*-=.]+" title="Only numbers and phone characters (#, -, *, etc) are accepted." style={{fontSize: '1.08rem', borderRadius: 8, padding: '12px 14px', border: '1.5px solid #bdbdbd', marginTop: 6}} />
              </div>
              <div className={styles.formGroup}>
                <label>Services Interested In</label>
                <div className={styles.checkboxGroup} style={{gap: 8, marginTop: 6, display: 'flex', flexDirection: 'column'}}>
                  <div style={{display: 'flex', gap: 24}}>
                    <label style={{flex: 1}}><input type="checkbox" name="services" value="Cadastral Datasets" checked={form.services.includes('Cadastral Datasets')} onChange={handleFormChange} /> Cadastral Datasets</label>
                    <label style={{flex: 1}}><input type="checkbox" name="services" value="Land Record Verification" checked={form.services.includes('Land Record Verification')} onChange={handleFormChange} /> Land Record Verification</label>
                    <label style={{flex: 1}}><input type="checkbox" name="services" value="Data Cleaning" checked={form.services.includes('Data Cleaning')} onChange={handleFormChange} /> Data Cleaning</label>
                  </div>
                  <div style={{display: 'flex', gap: 24, marginTop: 8}}>
                    <label style={{flex: 1}}><input type="checkbox" name="services" value="Data Correction" checked={form.services.includes('Data Correction')} onChange={handleFormChange} /> Data Correction</label>
                    <label style={{flex: 1}}>
                      <input type="checkbox" name="services" value="Others" checked={form.services.includes('Others')} onChange={handleFormChange} /> Others
                    </label>
                    <span style={{flex: 1}}></span>
                  </div>
                </div>
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
              <div className={styles.formGroup}>
                <label htmlFor="form-field-message">Message</label>
                <textarea id="form-field-message" name="message" value={form.message} onChange={handleFormChange} placeholder="Describe your project or any specific requests" style={{fontSize: '1.08rem', borderRadius: 8, padding: '12px 14px', border: '1.5px solid #bdbdbd', marginTop: 6, minHeight: 80}}></textarea>
              </div>
              {/* Recaptcha placeholder */}
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
              <button type="submit" className={styles.submitButton} style={{fontSize: '1.13rem', borderRadius: 8, padding: '14px 0', background: '#183153', color: '#fff', fontWeight: 600, marginTop: 8, transition: 'background 0.2s'}}>Send</button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home; 