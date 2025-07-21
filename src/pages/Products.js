import React, { useRef, useState, useEffect } from 'react';
import styles from './Products.module.css';

const carouselImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // puzzle 1
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', // puzzle 2
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80', // puzzle 3
];

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
    name: 'BhuQuanta Android App',
    description: 'Download our official Android application (APK) for on-the-go access.',
    url: '/app-debug.apk',
    button: 'Download APK',
    external: false,
    download: true,
    type: 'apk',
  },
];

const DESKTOP_WIDTH = 1200;
const DESKTOP_HEIGHT = 800;

function getOrCreateUserId() {
  let userId = localStorage.getItem('quanta_user_id');
  if (!userId) {
    userId = 'user_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem('quanta_user_id', userId);
  }
  return userId;
}

const Products = () => {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const productsRef = useRef(null);
  const cardRefs = useRef([]);
  const [scales, setScales] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIdx((idx) => (idx + 1) % carouselImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Calculate scale for each card
    if (cardRefs.current.length) {
      setScales(cardRefs.current.map(ref => {
        if (ref) {
          const width = ref.offsetWidth;
          return width / DESKTOP_WIDTH;
        }
        return 1;
      }));
    }
  }, []);

  const handleScrollDown = (e) => {
    e.preventDefault();
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.productsPage}>
      <section className={styles.heroSection} style={{ position: 'relative', minHeight: 340, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: 0 }}>
        {carouselImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Puzzle Slide ${i + 1}`}
            className={styles.heroSlideImg}
            style={{
              opacity: i === carouselIdx ? 1 : 0,
              transition: 'opacity 0.7s cubic-bezier(0.4,0,0.2,1)',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: 1,
            }}
            draggable={false}
          />
        ))}
        <div className={styles.heroOverlay} style={{ zIndex: 2 }} />
        <div className={styles.heroContent} style={{ zIndex: 3, position: 'relative', textAlign: 'center', color: '#fff', width: '100%' }}>
          <h1 className={styles.heroTitle}>Our Products</h1>
          <p className={styles.heroSubtitle}>Explore our innovative geospatial and GIS products designed to empower your business.</p>
          <a
            href="#products-section"
            className={styles.scrollDownIcon}
            onClick={handleScrollDown}
            tabIndex={0}
            aria-label="Scroll down"
            style={{ zIndex: 4, margin: '32px auto 0 auto', position: 'static', display: 'inline-block' }}
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 512 512"
              width="48"
              height="48"
              className={styles.animatedArrow}
            >
              <path
                d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"
                fill="#fff"
              />
            </svg>
          </a>
        </div>
      </section>
      <section ref={productsRef} id="products-section" className={styles.productsGridSection}>
        <div className={styles.productsGrid}>
          {products.map((product, idx) => (
            <div className={styles.productCard} key={idx} ref={el => cardRefs.current[idx] = el}>
              <div className={styles.productPreview} style={{overflow: 'hidden', padding: 0, position: 'relative'}}>
                {product.type === 'web' ? (
                  <div style={{width: '100%', height: '100%', overflow: 'hidden', position: 'relative'}}>
                    <iframe
                      src={product.preview}
                      title={product.name + ' Preview'}
                      width={DESKTOP_WIDTH}
                      height={DESKTOP_HEIGHT}
                      style={{
                        border: 'none',
                        transform: `scale(${scales[idx] || 1})`,
                        transformOrigin: 'top left',
                        width: DESKTOP_WIDTH,
                        height: DESKTOP_HEIGHT,
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        pointerEvents: 'none',
                      }}
                      tabIndex={-1}
                      loading="lazy"
                      sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    />
                  </div>
                ) : (
                  <img src="/logo0.jpg" alt="App Logo" style={{ width: 96, height: 96, objectFit: 'contain', borderRadius: 16, background: '#fff', boxShadow: '0 2px 8px rgba(24,49,83,0.08)' }} />
                )}
              </div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              {product.download ? (
                <a href={product.url} download="QuantaSIP-App.apk" className={styles.productBtn}>
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
};

export default Products; 