import React, { useState } from 'react';
import styles from './Careers.module.css';
import { useNavigate } from 'react-router-dom';

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

const jobs = [
  {
    id: 1056,
    title: 'Java Developer',
    url: 'https://quantasip.com/jobs/java-developer/',
    posted: 'Posted 10 months ago',
    about: 'We are looking for a talented Java Backend Developer to join our team. You will play a crucial role in developing and maintaining backend services, ensuring they are robust, scalable, and efficient. This position is perfect for someone who enjoys solving complex problems and working with modern technologies.',
    details: [
      'Role: Java Developer',
      'Location: Pune',
      'Experience: 5+ Years',
      'Job Type: Full Time',
    ],
  },
  {
    id: 636,
    title: 'Software Developer Intern',
    url: 'https://quantasip.com/jobs/software-developer-intern/',
    posted: 'Posted 11 months ago',
    about: '',
    details: [],
    company: 'QUANTA SIP',
  },
];

const team = [
  {
    name: 'Javed Shaikh',
    role: 'Technical Director',
    linkedin: 'https://www.linkedin.com/in/javeds',
  },
  {
    name: 'Aafreen Shaikh',
    role: 'CFO',
    linkedin: 'https://www.linkedin.com/in/aafreen-shaikh-016a47280/',
  },
  {
    name: 'Deepak Patil',
    role: 'General Manager',
    exp: '25+ Yrs Experience',
  },
  {
    name: 'Laxman Punekar',
    role: 'Project Manager',
    exp: '15+ Yrs Experience',
    linkedin: 'https://www.linkedin.com/in/laxman-punekar-a28b3022/',
  },
  {
    name: 'Anjali Karvekar',
    role: 'HR Executive',
    exp: '2+ Yrs Experience',
    linkedin: 'https://www.linkedin.com/in/anjali-karvekar-a0a54a211/',
  },
  {
    name: 'Jalindar Karande',
    role: 'Team Lead(IT)',
    exp: '3+ Yrs Experience',
    linkedin: 'https://www.linkedin.com/in/jalindar-karande-464186154/?originalSubdomain=in',
  },
  {
    name: 'Onkar Keskar',
    role: 'Techno-Commercial GIS',
    exp: '9+ Yrs Experience',
    linkedin: 'https://www.linkedin.com/in/onkar-keskar-104768100/',
  },
  {
    name: 'Ameer Shaikh',
    role: 'Sr.GIS Executive',
    exp: '6+ Yrs Experience',
    linkedin: 'https://www.linkedin.com/in/ameer-shaikh-55431a145/',
  },
  {
    name: 'Nikhil Sheth',
    role: 'Team Lead(GIS)',
    exp: '2+ Yrs Experience',
    linkedin: 'https://www.linkedin.com/in/nikhil-sheth-a64607260/',
  },
  {
    name: 'Bharat Birangal',
    role: 'Sr. GIS Executive',
    exp: '2+ Yrs Experience',
    linkedin: 'https://www.linkedin.com/in/bharat-birangal-97089a137/',
  },
  {
    name: 'Rohan Sardeshmukh',
    role: 'Team Lead(IT)',
    exp: '2+ Yrs Experience',
    linkedin: 'https://www.linkedin.com/in/rohansardeshmukh/',
  },
  {
    name: 'Bhavesh Kolhe',
    role: 'Marketing Executive',
    exp: '2+ Yrs Experience',
    linkedin: 'https://www.linkedin.com/in/bhawesh-k-a94bb1319/',
  },
];

function Careers() {
  // Placeholder for form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted (placeholder)');
  };
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  return (
    <div className={styles.careersPage}>
      {/* Hero Section with Slideshow */}
      <section className={styles.heroSection} style={{ height: '100vh', minHeight: '100vh', position: 'relative' }}>
        <div className={styles.heroBg} style={{backgroundImage: 'url(https://quantasip.com/wp-content/uploads/2024/08/portrait-professional-business-people-working-together-e1725081714654.jpg)', height: '100vh'}}></div>
        <div className={styles.heroContent} style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
          <h1>Careers</h1>
          <a className={styles.scrollDown} href="#scroll-down" aria-label="Scroll Down" style={{marginTop: '2rem'}}>
            <svg aria-hidden="true" viewBox="0 0 512 512" width="40" height="40" className={styles.animatedArrow}><path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z" fill="#fff"/></svg>
          </a>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className={styles.jobsSection} id="scroll-down">
        <div style={{marginTop: 60, marginBottom: 32}}>
          <h2 className={styles.sectionTitle}>Careers at QuantaSIP</h2>
          <h3 className={styles.sectionSubtitle}>We're always on the lookout for talented and passionate individuals to join our team. Here are our current job openings.</h3>
        </div>
        <div className={styles.searchBarSection}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Keywords"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <button className={styles.searchButton} aria-label="Search">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c2185b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
        </div>
        <div className={styles.jobsList}>
          {jobs
            .filter(job =>
              search.trim() === "" ||
              job.title.toLowerCase().includes(search.trim().toLowerCase())
            )
            .map(job => {
              const slug = job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
              return (
                <div key={job.id} className={styles.jobCard}>
                  <div className={styles.jobHeader}>
                    <h4><a href={job.url} target="_blank" rel="noopener noreferrer">{job.title}</a></h4>
                    {job.company && <div className={styles.companyName}>{job.company}</div>}
                    <div className={styles.applyBtns}>
                      <button className={styles.btnPrimary} onClick={() => navigate(`/jobs/${slug}/`)}>Apply Now</button>
                    </div>
                  </div>
                  <div className={styles.jobMeta}>
                    <span className={styles.jobDate}>{job.posted}</span>
                  </div>
                  <div className={styles.jobDesc}>
                    {job.about && <p><strong>About Position:</strong> {job.about}</p>}
                    {job.details.length > 0 && (
                      <ul>
                        {job.details.map((d, i) => <li key={i}>{d}</li>)}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </section>
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
              <div className={styles.teamTitle}>{team[0].role}</div>
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
                <div className={styles.teamTitle}>{member.role}</div>
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
                <div className={styles.teamTitle}>{member.role}</div>
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
                <div className={styles.teamTitle}>{member.role}</div>
                {member.exp && <div className={styles.teamExp}>{member.exp}</div>}
                {member.linkedin && <a href={member.linkedin} className={styles.teamLinkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default Careers; 