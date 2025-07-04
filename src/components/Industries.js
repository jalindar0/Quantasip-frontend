import React from 'react';

const industries = [
  { title: 'BFSI Solutions', desc: '…and many more' },
  { title: 'Agri-Innovator Solutions', desc: '…and many more' },
  { title: 'Geospatial and GIS Services', desc: '…and many more' },
  { title: 'Agri-Tech Innovations', desc: '…and many more' },
  { title: 'Surveying Services​', desc: '…and many more' }
];

const Industries = () => (
  <section style={{ background: '#fff', padding: '2rem 0' }}>
    <h2 style={{ textAlign: 'center' }}>Industries We Serve</h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
      {industries.map((ind, i) => (
        <div key={i} style={{ background: '#f9f9f9', border: '1px solid #eee', borderRadius: 8, padding: '1rem', maxWidth: 300 }}>
          <h4>{ind.title}</h4>
          <p>{ind.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Industries; 