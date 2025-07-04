import React from 'react';

const solutions = [
  { title: 'Cadastral', desc: 'Comprehensive database of cadastral data from all States, ensuring easy access to accurate land records.' },
  { title: 'Survey', desc: 'Drone surveys, land surveys, and DGPS services to ensure accurate and reliable geographic data.' },
  { title: 'Geo-Referencing', desc: 'Accurate geo-referencing services, ensuring that digital data is correctly positioned on the map.' },
  { title: 'GIS Application Development', desc: 'Designing, building, and maintaining GIS apps for capturing, storing, analyzing, and visualizing spatial data.' },
  { title: 'Geo Database', desc: 'Comprehensive database of land records, with linkages to cadastral data for even more accurate information.' }
];

const Solutions = () => (
  <section style={{ background: '#f5faff', padding: '2rem 0' }}>
    <h2 style={{ textAlign: 'center' }}>Our GIS Solutions</h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
      {solutions.map((s, i) => (
        <div key={i} style={{ background: '#fff', border: '1px solid #eee', borderRadius: 8, padding: '1rem', maxWidth: 300 }}>
          <h4>{s.title}</h4>
          <p>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Solutions; 