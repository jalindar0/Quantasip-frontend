import React, { useState, useRef, useEffect } from 'react';
import styles from './About.module.css';

const heroBg = "https://quantasip.com/wp-content/uploads/2024/08/aerial-view-business-team.jpg";

const companyStory = [
  {
    title: "About QuantaSip - Pioneering Cadastral Mapping and Geospatial Services",
    text: "QuantaSIP is a pioneer in providing Cadastral Mapping, Survey, and Geospatial Services, and is part of the J&T Group established since 2008. With a team of 50+ professionals, we have worked on some of India's most prestigious and challenging projects. Our strong understanding of mapping technology and expertise ranges from survey to mapping across various industries, including electrical, agriculture, navigation, and infrastructure. Our capacity to scale up the team and quick learning has led us to successfully execute many projects. At QuantaSIP, we are committed to providing innovative GISolutions that meet the unique needs of our clients."
  },
  {
    title: "Our Journey - From Agri Support to Leading GIS Solutions Provider",
    text: "QuantaSip GIS Pvt Ltd started as an extension of J&T Group, with a focus on Agri Support Business. We quickly established ourselves as a leader in Cadastral Data Systems, providing accurate land records for infrastructure development. Over the years, we have developed the largest web of G-C-P (Ground Control Points) with each 50 Km pan India, and the largest 360-degree photo library of all motorable roads. In just six months, we have captured data for fuel stations, food malls, airports, railway stations, and more. Our journey has been one of continuous growth and innovation, and we are committed to providing the best GIS Solutions for our clients."
  }
];

const team = [
  { name: "Javed Shaikh", title: "Technical Director", exp: "", linkedin: "https://www.linkedin.com/in/javeds" },
  { name: "Aafreen Shaikh", title: "CFO", exp: "", linkedin: "https://www.linkedin.com/in/aafreen-shaikh-016a47280/" },
  { name: "Deepak Patil", title: "General Manager", exp: "25+ Yrs Experience", linkedin: "" },
  { name: "Laxman Punekar", title: "Project Manager", exp: "15+ Yrs Experience", linkedin: "https://www.linkedin.com/in/laxman-punekar-a28b3022/" },
  { name: "Anjali Karvekar", title: "HR Executive", exp: "2+ Yrs Experience", linkedin: "https://www.linkedin.com/in/anjali-karvekar-a0a54a211/" },
  { name: "Jalindar Karande", title: "Team Lead(IT)", exp: "3+ Yrs Experience", linkedin: "https://www.linkedin.com/in/jalindar-karande-464186154/?originalSubdomain=in" },
  { name: "Onkar Keskar", title: "Techno-Commercial GIS", exp: "9+ Yrs Experience", linkedin: "https://www.linkedin.com/in/onkar-keskar-104768100/" },
  { name: "Ameer Shaikh", title: "Sr.GIS Executive", exp: "6+ Yrs Experience", linkedin: "https://www.linkedin.com/in/ameer-shaikh-55431a145/" },
  { name: "Bharat Birangal", title: "Sr. GIS Executive", exp: "2+ Yrs Experience", linkedin: "https://www.linkedin.com/in/bharat-birangal-97089a137/" },
  { name: "Rohan Sardeshmukh", title: "Team Lead(IT)", exp: "2+ Yrs Experience", linkedin: "https://www.linkedin.com/in/rohansardeshmukh/" },
  { name: "Prathmesh Borse", title: "Marketing Executive", exp: "2+ Yrs Experience", linkedin: "https://www.linkedin.com/in/prathmesh-borse-370b061b2/" },
];

const testimonials = [
  {
    name: "Skymet Weather Pvt Ltd",
    title: "Mr. Arjun",
    text: "QuantaSIP has been an invaluable partner in our infrastructure development projects. Their expertise in Cadastral Mapping and Geospatial Services has allowed us to accurately plan and execute our projects, and their quick learning and ability to scale up the team has been impressive. We highly recommend QuantaSIP for any project that requires innovative GISolutions."
  },
  {
    name: "Genesys International Ltd",
    title: "Mr Sagar",
    text: "We have worked with QuantaSIP on several projects, and their professionalism and attention to detail have been outstanding. Their team of experts has a strong understanding of mapping technology, and their capacity to quickly adapt to our project needs has been impressive. We look forward to continuing our partnership with QuantaSIP for future projects."
  },
  {
    name: "Satsure",
    title: "Ms Rashmi",
    text: "QuantaSIP has been an integral part of our agriculture projects, providing accurate survey and mapping services that have allowed us to optimize our operations. Their team of professionals has a deep understanding of the industry, and their expertise in geospatial services has been invaluable. We highly recommend QuantaSIP for any project that requires reliable and innovative GISolutions."
  },
];

const About = () => {
  const [heroFull, setHeroFull] = useState(true);
  const heroRef = useRef(null);
  const belowRef = useRef(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);

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
    if (belowRef.current) {
      belowRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className={styles.hero + ' ' + styles.heroFull}
        ref={heroRef}
        style={{ height: '100vh', minHeight: '100vh', overflow: 'hidden', padding: 0 }}
      >
        <img src={heroBg} alt="About Hero" className={styles.heroBgBlur} draggable={false} />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>About us</h1>
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
        {/* Company Story */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{companyStory[0].title}</h2>
          <p className={styles.storyText}>{companyStory[0].text}</p>
        </div>

        {/* Testimonials */}
        <div className={styles.testimonials}>
          <h2 className={styles.testimonialsTitle}>Hear from Our Satisfied Clients on Their Experience with QuantaSip</h2>
          <div className={styles.testimonialList} style={{ justifyContent: 'center' }}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialName}>{testimonials[testimonialIndex].name}</div>
              <div className={styles.testimonialTitle}>{testimonials[testimonialIndex].title}</div>
              <div className={styles.testimonialText}>{testimonials[testimonialIndex].text}</div>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
            <button
              onClick={() => setTestimonialIndex((testimonialIndex - 1 + testimonials.length) % testimonials.length)}
              style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', marginRight: 16 }}
              aria-label="Previous testimonial"
            >
              &#8592;
            </button>
            {testimonials.map((_, idx) => (
              <span
                key={idx}
                onClick={() => setTestimonialIndex(idx)}
                style={{
                  display: 'inline-block',
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: idx === testimonialIndex ? '#1a237e' : '#bdbdbd',
                  margin: '0 6px',
                  cursor: 'pointer',
                  border: 'none',
                  transition: 'background 0.2s',
                }}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
            <button
              onClick={() => setTestimonialIndex((testimonialIndex + 1) % testimonials.length)}
              style={{ background: 'none', border: 'none', fontSize: 24, cursor: 'pointer', marginLeft: 16 }}
              aria-label="Next testimonial"
            >
              &#8594;
            </button>
          </div>
        </div>

        {/* Our Journey Section */}
        <div className={styles.journeySection}>
          <h2 className={styles.journeyTitle}>{companyStory[1].title}</h2>
          <div className={styles.journeySubtitle}>Building a Strong Foundation for Innovative GIS Solutions</div>
          <div className={styles.journeyText}>{companyStory[1].text}</div>
        </div>

        {/* Team Section */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Our Core Team & IT Experts – Leaders in Cadastral Mappings, Geospatial Services & Tech Innovations</h2>
          <h3 className={styles.sectionSubtitle}>Meet the Experts Driving Innovation and Excellence at QuantaSIP</h3>
          {/* Custom team grid layout */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
            <div className={styles.teamCard}>
              <div className={styles.teamImg}>
                <svg width="48" height="48" fill="#bdbdbd" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/></svg>
              </div>
              <div className={styles.teamName}>{team[0].name}</div>
              <div className={styles.teamTitle}>{team[0].title}</div>
              {team[0].exp && <div className={styles.teamExp}>{team[0].exp}</div>}
              {team[0].linkedin && <a href={team[0].linkedin} className={styles.teamLinkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 32 }}>
            {[team[1], team[2]].map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.teamImg}>
                  <svg width="48" height="48" fill="#bdbdbd" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/></svg>
                </div>
                <div className={styles.teamName}>{member.name}</div>
                <div className={styles.teamTitle}>{member.title}</div>
                {member.exp && <div className={styles.teamExp}>{member.exp}</div>}
                {member.linkedin && <a href={member.linkedin} className={styles.teamLinkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
              </div>
            ))}
          </div>
          <div className={styles.teamGrid} style={{ marginBottom: 32 }}>
            {team.slice(3, 7).map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.teamImg}>
                  <svg width="48" height="48" fill="#bdbdbd" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/></svg>
                </div>
                <div className={styles.teamName}>{member.name}</div>
                <div className={styles.teamTitle}>{member.title}</div>
                {member.exp && <div className={styles.teamExp}>{member.exp}</div>}
                {member.linkedin && <a href={member.linkedin} className={styles.teamLinkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
              </div>
            ))}
          </div>
          <div className={styles.teamGrid}>
            {team.slice(7, 11).map((member, i) => (
              <div key={i} className={styles.teamCard}>
                <div className={styles.teamImg}>
                  <svg width="48" height="48" fill="#bdbdbd" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"/></svg>
                </div>
                <div className={styles.teamName}>{member.name}</div>
                <div className={styles.teamTitle}>{member.title}</div>
                {member.exp && <div className={styles.teamExp}>{member.exp}</div>}
                {member.linkedin && <a href={member.linkedin} className={styles.teamLinkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 