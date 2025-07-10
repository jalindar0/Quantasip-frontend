import React from 'react';
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

  return (
    <div className={styles.careersPage}>
      <div style={{ maxWidth: 1100, margin: '72px auto 64px auto', padding: '32px 0 0 0' }}>
        {/* Job Title */}
        <h2 style={{ fontSize: '3rem', fontWeight: 600, margin: '32px 0 24px 0', color: '#333', fontFamily: 'Montserrat, Arial, sans-serif' }}>{job?.title}</h2>
        {/* Job Meta */}
        <div style={{ color: '#444', fontSize: '1.1rem', marginBottom: 32, marginTop: 24, borderTop: '1px solid #ddd', paddingTop: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <i className="fas fa-calendar-check" style={{ marginRight: 8 }}></i>{job?.posted}
          </div>
          {/* About Position */}
          {job?.about && (
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontWeight: 700, fontSize: '1.15rem', marginBottom: 6 }}>About Position:</div>
              <div style={{ fontSize: '1.13rem', marginBottom: 8, lineHeight: 1.6 }}>{job.about}</div>
            </div>
          )}
          {/* Details List */}
          {job?.details && job.details.length > 0 && (
            <ul style={{ fontSize: '1.13rem', margin: 0, paddingLeft: 20, color: '#222', lineHeight: 1.7 }}>
              {job.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          )}
        </div>
        {/* Application Form */}
        <form style={{ maxWidth: 900, margin: '0 auto' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 24 }}>Apply For This Job</h3>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
            <label htmlFor="email" style={{ flex: '0 0 120px', fontWeight: 500 }}>Email<span style={{ color: '#c2185b' }}>*</span></label>
            <input id="email" name="email" type="email" required style={{ flex: 1, padding: '12px', fontSize: '1.1rem', border: '1.2px solid #bdbdbd', marginLeft: 12 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
            <label htmlFor="phone" style={{ flex: '0 0 120px', fontWeight: 500 }}>Phone<span style={{ color: '#c2185b' }}>*</span></label>
            <input id="phone" name="phone" type="tel" required style={{ flex: 1, padding: '12px', fontSize: '1.1rem', border: '1.2px solid #bdbdbd', marginLeft: 12 }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: 18 }}>
            <label htmlFor="resume" style={{ flex: '0 0 120px', fontWeight: 500 }}>Attach Resume<span style={{ color: '#c2185b' }}>*</span></label>
            <input id="resume" name="resume" type="file" required style={{ flex: 1, padding: '8px', fontSize: '1.1rem', border: '1.2px solid #bdbdbd', marginLeft: 12 }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 32 }}>
            <button type="submit" style={{ border: '1.5px solid #c2185b', color: '#c2185b', background: '#fff', fontSize: '1.15rem', padding: '10px 38px', borderRadius: 0, cursor: 'pointer', transition: 'background 0.2s' }}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
} 