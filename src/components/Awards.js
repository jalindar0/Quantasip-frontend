import React from 'react';

const Awards = () => (
  <section style={{ background: '#eef6fa', padding: '2rem 0' }}>
    <h2 style={{ textAlign: 'center' }}>Awards & Recognition</h2>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginTop: '2rem' }}>
      <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 8, padding: '1rem', maxWidth: 300 }}>
        <h4>Geospatia Startup of the Year Award</h4>
        <p>"Our organization is thrilled to receive the Geospatia Startup of the Year Award for GeoSpatia-24."</p>
      </div>
      <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 8, padding: '1rem', maxWidth: 300 }}>
        <h4>Lokmat Achievers Award</h4>
        <p>Recognized for excellence in GIS solutions and innovation.</p>
      </div>
      <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 8, padding: '1rem', maxWidth: 300 }}>
        <h4>Featured in Geospatial Artha Magazine</h4>
        <p>"Our Technical Director Javed Sheikh, featured in Geospatial Artha Magazine Volume 2. Honored to be positioned alongside the Industry Leaders!!"</p>
      </div>
    </div>
  </section>
);

export default Awards; 