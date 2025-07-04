import React from 'react';
import styles from './Careers.module.css';

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
        <h2>Careers at QuantaSIP</h2>
        <h2>We're always on the lookout for talented and passionate individuals to join our team. Here are our current job openings.</h2>
        <div className={styles.jobsList}>
          {jobs.map(job => (
            <div key={job.id} className={styles.jobCard}>
              <div className={styles.jobHeader}>
                <h4><a href={job.url} target="_blank" rel="noopener noreferrer">{job.title}</a></h4>
                {job.company && <div className={styles.companyName}>{job.company}</div>}
                <div className={styles.applyBtns}>
                  <a href="#" className={styles.btnPrimary}>Apply Now</a>
                  <a href={job.url} className={styles.btnPrimary} target="_blank" rel="noopener noreferrer">Apply Tommorrow</a>
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
          ))}
        </div>
      </section>

      {/* Company Journey Section */}
      <section className={styles.journeySection}>
        <h2>Our Journey - From Agri Support to Leading GIS Solutions Provider</h2>
        <h2>Building a Strong Foundation for Innovative GIS Solutions</h2>
        <p>QuantaSip GIS Pvt Ltd started as an extension of J&amp;T Group, with a focus on Agri Support Business. We quickly established ourselves as a leader in Cadastral DATA Systems, providing accurate land records for infrastructure development. Over the years, we have developed the largest web of G-C-P (Ground Control Points) with each 50 Km pan India, and the largest 360-degree photo library of all motorable roads. In just six months, we have captured data for fuel stations, food malls, airports, railway stations, and more. Our journey has been one of continuous growth and innovation, and we are committed to providing the best GIS Solutions for our clients.</p>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <h2>Our Core Team &amp; IT Experts – Leaders in Cadastral Mappings, Geospatial Services &amp; Tech Innovations</h2>
        <h2>Meet the Experts Driving Innovation and Excellence at QuantaSIP</h2>
        <div className={styles.teamGrid}>
          {team.map((member, idx) => (
            <div key={idx} className={styles.teamCard}>
              <h3>{member.name}</h3>
              <div className={styles.teamRole}><b>{member.role}</b>{member.exp && <div>{member.exp}</div>}</div>
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinIcon} aria-label="LinkedIn">
                  {/* LinkedIn SVG */}
                  <svg aria-hidden="true" viewBox="0 0 448 512" width="32" height="32"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" fill="#0077b5"/></svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <h3>Get in Touch</h3>
        <h5>Connect with us today for tailored GIS solutions and expert support for your infrastructure projects.</h5>
        <div className={styles.contactGrid}>
          <div className={styles.contactInfo}>
            <h3>Company</h3>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
              <li><a href="/terms-of-service">Terms of Service</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
            <h3>Contact Us</h3>
            <ul>
              <li><a href="mailto:info@quantasip.com">info@quantasip.com</a></li>
              <li><a href="tel:7517860524">+91 7517860524</a></li>
              <li>404, Wall Street 24, near McDonald's, Motiram Nagar, Warje, Pune, Maharashtra 411058​</li>
            </ul>
          </div>
          <div className={styles.contactFormWrap}>
            <h3>Write to Us</h3>
            <form className={styles.contactForm} onSubmit={handleFormSubmit}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="tel" name="phone" placeholder="Phone" required pattern="[0-9()#&+*-=.]+" title="Only numbers and phone characters (#, -, *, etc) are accepted." />
              <input type="email" name="email" placeholder="Email" required />
              <textarea name="message" placeholder="Message"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
        <footer className={styles.footer}>
          <p>© QuantaSip Pvt. Ltd. 2023</p>
        </footer>
      </section>
    </div>
  );
}

export default Careers; 