import React from 'react';

const logoPlaceholder = 'https://via.placeholder.com/120x60?text=Logo';

const sponsors = [
  { name: 'Skymet Weather Pvt Ltd', logo: logoPlaceholder },
  { name: 'Genesys International Ltd', logo: logoPlaceholder },
  { name: 'Satsure', logo: logoPlaceholder },
  { name: 'Farmonaut', logo: logoPlaceholder },
  { name: 'DeHaat', logo: logoPlaceholder },
  // Add more as needed
];

const Sponsors = () => (
  <section style={{ background: '#f9f9f9', padding: '2rem 0' }}>
    <h2 style={{ textAlign: 'center' }}>We've Sponsored / Collaborated With</h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
      {sponsors.map((s, i) => (
        <div key={i} style={{ background: '#fff', border: '1px solid #eee', borderRadius: 8, padding: '1rem', maxWidth: 200, textAlign: 'center', minHeight: 120 }}>
          <div style={{ height: 60, marginBottom: 8, background: '#eee', borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={s.logo} alt={s.name} style={{ maxHeight: 60, maxWidth: '100%' }} />
          </div>
          <div>{s.name}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Sponsors; 