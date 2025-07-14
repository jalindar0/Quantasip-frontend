import React from 'react';
import styles from './Products.module.css';

const products = [
  {
    name: 'Way',
    description: 'A powerful geospatial platform for advanced mapping and analytics.',
    url: 'http://waytest.quantasip.com/way',
    button: 'Open Way',
    external: true,
    preview: 'http://waytest.quantasip.com/way',
    type: 'web',
  },
  {
    name: 'BhuQuanta',
    description: 'Comprehensive land records and cadastral data management solution.',
    url: 'http://bhuquanta.quantasip.com/',
    button: 'Open BhuQuanta',
    external: true,
    preview: 'http://bhuquanta.quantasip.com/',
    type: 'web',
  },
  {
    name: 'AgriInsights',
    description: 'Agricultural insights and analytics for smarter farming decisions.',
    url: 'https://agriinsights.quantasip.com/',
    button: 'Open AgriInsights',
    external: true,
    preview: 'https://agriinsights.quantasip.com/',
    type: 'web',
  },
  {
    name: 'QuantaSIP Android App',
    description: 'Download our official Android application (APK) for on-the-go access.',
    url: '/apk/quantasip-app.apk',
    button: 'Download APK',
    external: false,
    download: true,
    type: 'apk',
  },
];

// These are the typical desktop sizes for scaling
const PREVIEW_WIDTH = 1440;
const PREVIEW_HEIGHT = 900;
const PREVIEW_AREA_WIDTH = 700;
const PREVIEW_AREA_HEIGHT = 400;
const SCALE = PREVIEW_AREA_WIDTH / PREVIEW_WIDTH;

const Products = () => (
  <div className={styles.productsPage}>
    <section className={styles.heroSection}>
      <h1 className={styles.heroTitle}>Our Products</h1>
      <p className={styles.heroSubtitle}>Explore our innovative geospatial and GIS products designed to empower your business.</p>
    </section>
    <section className={styles.productsGridSection}>
      <div className={styles.productsGrid}>
        {products.map((product, idx) => (
          <div className={styles.productCard} key={idx}>
            <div className={styles.productPreview} style={{overflow: 'hidden', padding: 0, position: 'relative'}}>
              {product.type === 'web' ? (
                <div style={{width: '100%', height: '100%', overflow: 'hidden', position: 'relative'}}>
                  <iframe
                    src={product.preview}
                    title={product.name + ' Preview'}
                    width={PREVIEW_WIDTH}
                    height={PREVIEW_HEIGHT}
                    style={{
                      border: 'none',
                      transform: `scale(${SCALE})`,
                      transformOrigin: 'top left',
                      width: PREVIEW_WIDTH,
                      height: PREVIEW_HEIGHT,
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                    loading="lazy"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                  />
                </div>
              ) : (
                <span style={{ fontSize: 64, color: '#183153' }}>
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.6 7.2l-4.6-7.2-4.6 7.2h9.2zm-11.6 2.8c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1h-14zm7 7h-2v-2h2v2zm-1-16c.6 0 1 .4 1 1v1h-2v-1c0-.6.4-1 1-1zm-7 9h16v10c0 1.1-.9 2-2 2h-12c-1.1 0-2-.9-2-2v-10zm8 7c-1.1 0-2-.9-2-2h2v2zm2-2c0 1.1-.9 2-2 2v-2h2zm-2-2c-1.1 0-2-.9-2-2h2v2zm2-2c0 1.1-.9 2-2 2v-2h2z"/></svg>
                </span>
              )}
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            {product.download ? (
              <a href={product.url} download className={styles.productBtn}>
                {product.button}
              </a>
            ) : (
              <a href={product.url} target="_blank" rel="noopener noreferrer" className={styles.productBtn}>
                {product.button}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default Products; 