import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Careers.module.css';

// Dummy job data (in a real app, fetch this by id)
const jobs = [
  {
    id: 1056,
    title: 'Java Developer',
    company: 'QUANTA SIP',
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
    company: 'QUANTA SIP',
    posted: 'Posted 11 months ago',
    about: '',
    details: [],
  },
];

export default function JobApplication() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const job = jobs.find(j => j.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug);

  const [success, setSuccess] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    e.target.reset();
    setTimeout(() => setSuccess(false), 4000);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true);
    else if (e.type === 'dragleave') setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      fileInputRef.current.files = e.dataTransfer.files;
    }
  };

  return (
    <div className={styles.careersPage} style={{ minHeight: '100vh', background: '#f7fafd' }}>
      <div style={{ maxWidth: 750, margin: '90px auto 64px auto', padding: '0 0 32px 0' }}>
        {/* Job Summary Card */}
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '32px 36px 24px 36px', marginBottom: 32, border: '1.5px solid #e0e0e0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-start' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: 0, color: '#183153', fontFamily: 'Montserrat, Arial, sans-serif' }}>{job?.title}</h2>
            <span style={{ color: '#888', fontSize: '1rem', marginBottom: 8 }}>{job?.posted}</span>
            {job?.about && <div style={{ color: '#333', fontSize: '1.08rem', margin: '8px 0 0 0', lineHeight: 1.6 }}>{job.about}</div>}
            {job?.details && job.details.length > 0 && (
              <ul style={{ fontSize: '1.05rem', margin: '10px 0 0 18px', color: '#222', lineHeight: 1.7 }}>
                {job.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            )}
          </div>
        </div>
        {/* Application Form Card */}
        <form className={styles.contactForm} style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px rgba(0,0,0,0.10)', padding: '40px 36px', border: '1.5px solid #e0e0e0', width: '100%', maxWidth: 750, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 22 }} onSubmit={handleFormSubmit}>
          <h3 style={{ fontWeight: 700, fontSize: '1.35rem', marginBottom: 18, color: '#183153', textAlign: 'center' }}>Apply For This Job</h3>
          <div className={styles.formGroup}>
            <label htmlFor="name">Full Name<span style={{ color: '#c2185b' }}>*</span></label>
            <input id="name" name="name" type="text" required placeholder="Enter your full name" style={{ fontSize: '1.08rem', borderRadius: 8, padding: '12px 14px', border: '1.5px solid #bdbdbd', marginTop: 6 }} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email<span style={{ color: '#c2185b' }}>*</span></label>
            <input id="email" name="email" type="email" required placeholder="Enter your email address" style={{ fontSize: '1.08rem', borderRadius: 8, padding: '12px 14px', border: '1.5px solid #bdbdbd', marginTop: 6 }} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="phone">Phone<span style={{ color: '#c2185b' }}>*</span></label>
            <input id="phone" name="phone" type="tel" required placeholder="Enter your phone number" style={{ fontSize: '1.08rem', borderRadius: 8, padding: '12px 14px', border: '1.5px solid #bdbdbd', marginTop: 6 }} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="resume">Attach Resume<span style={{ color: '#c2185b' }}>*</span></label>
            <div
              style={{
                border: dragActive ? '2px dashed #007bff' : '2px dashed #bdbdbd',
                borderRadius: 8,
                padding: '24px 12px',
                background: dragActive ? '#e3f2fd' : '#fafbfc',
                textAlign: 'center',
                cursor: 'pointer',
                marginTop: 6,
                transition: 'background 0.2s, border 0.2s',
                color: '#333',
                fontSize: '1.08rem',
                position: 'relative',
              }}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current.click()}
            >
              <input
                id="resume"
                name="resume"
                type="file"
                required
                ref={fileInputRef}
                style={{ display: 'none' }}
                accept=".pdf,.doc,.docx,.rtf,.txt,.odt,.zip"
              />
              <span style={{ color: '#007bff', fontWeight: 600 }}>Drag & drop your resume here</span> or click to select file
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="cover">Cover Letter / Message</label>
            <textarea id="cover" name="cover" placeholder="Write a short message or cover letter (optional)" style={{ fontSize: '1.08rem', borderRadius: 8, padding: '12px 14px', border: '1.5px solid #bdbdbd', marginTop: 6, minHeight: 80 }}></textarea>
          </div>
          <button type="submit" className={styles.submitButton} style={{ fontSize: '1.13rem', borderRadius: 8, padding: '14px 0', background: '#183153', color: '#fff', fontWeight: 600, marginTop: 8, transition: 'background 0.2s' }}>Submit Application</button>
          {success && <div style={{ color: '#28a745', fontWeight: 600, textAlign: 'center', marginTop: 12 }}>Application submitted! Thank you.</div>}
        </form>
      </div>
    </div>
  );
} 