import React from 'react';

const testimonials = [
  {
    name: 'Skymet Weather Pvt Ltd',
    person: 'Mr. Arjun',
    text: 'QuantaSIP has been an invaluable partner in our infrastructure development projects. Their expertise in Cadastral Mapping and Geospatial Services has allowed us to accurately plan and execute our projects.'
  },
  {
    name: 'Genesys International Ltd',
    person: 'Mr Sagar',
    text: 'We have worked with QuantaSIP on several projects, and their professionalism and attention to detail have been outstanding.'
  },
  {
    name: 'Satsure',
    person: 'Ms Rashmi',
    text: 'QuantaSIP has been an integral part of our agriculture projects, providing accurate survey and mapping services that have allowed us to optimize our operations.'
  }
];

const Testimonials = () => (
  <section style={{ background: '#f9f9f9', padding: '2rem 0' }}>
    <h2 style={{ textAlign: 'center' }}>What Our Clients Say</h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
      {testimonials.map((t, i) => (
        <div key={i} style={{ background: '#fff', border: '1px solid #eee', borderRadius: 8, padding: '1rem', maxWidth: 300 }}>
          <h4>{t.name}</h4>
          <p style={{ fontStyle: 'italic' }}>{t.text}</p>
          <div style={{ color: '#888', marginTop: 8 }}>{t.person}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials; 