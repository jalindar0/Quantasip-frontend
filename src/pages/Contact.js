import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  // Placeholder for form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted (placeholder)');
  };

  return (
    <div className={styles.contactPage}>
      <div className={styles.mainContent}>
        {/* Hero Section with Slideshow */}
        <section className={styles.heroSection} style={{ height: '100vh', minHeight: '100vh', position: 'relative' }}>
          <div className={styles.heroBg} style={{backgroundImage: 'url(https://quantasip.com/wp-content/uploads/2024/08/hot-line-contact-us-call-center-search-interface.jpg)', height: '100vh'}}></div>
          <div className={styles.heroContent} style={{height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
            <h1>Contact Us</h1>
            <a className={styles.scrollDown} href="#scroll-down" aria-label="Scroll Down" style={{marginTop: '2rem'}}>
              <svg aria-hidden="true" viewBox="0 0 512 512" width="40" height="40" className={styles.animatedArrow}>
                <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z" fill="#fff"/>
              </svg>
            </a>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className={styles.infoSection} id="scroll-down">
          <h2>Let's get in Touch</h2>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <a href="tel:+917517860524" className={styles.icon} aria-label="Phone">
                <svg aria-hidden="true" viewBox="0 0 448 512" width="36" height="36"><path d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM94 416c-7.033 0-13.057-4.873-14.616-11.627l-14.998-65a15 15 0 0 1 8.707-17.16l69.998-29.999a15 15 0 0 1 17.518 4.289l30.997 37.885c48.944-22.963 88.297-62.858 110.781-110.78l-37.886-30.997a15.001 15.001 0 0 1-4.289-17.518l30-69.998a15 15 0 0 1 17.16-8.707l65 14.998A14.997 14.997 0 0 1 384 126c0 160.292-129.945 290-290 290z" fill="#0077b5"/></svg>
              </a>
              <div>
                <h3><a href="tel:+917517860524">Phone</a></h3>
                <p>+91 7517860524</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <a href="mailto:info@quantasip.com" className={styles.icon} aria-label="Mail">
                <svg aria-hidden="true" viewBox="0 0 512 512" width="36" height="36"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" fill="#0077b5"/></svg>
              </a>
              <div>
                <h3><a href="mailto:info@quantasip.com">Mail</a></h3>
                <p>info@quantasip.com</p>
              </div>
            </div>
            <div className={styles.infoCard}>
              <a href="mailto:info@quantasip.com" className={styles.icon} aria-label="Office Address">
                <svg aria-hidden="true" viewBox="0 0 288 512" width="36" height="36"><path d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z" fill="#0077b5"/></svg>
              </a>
              <div>
                <h3><a href="mailto:info@quantasip.com">Office Address</a></h3>
                <p>404, Wall Street 24, near McDonald's, Motiram Nagar, Warje, Pune, Maharashtra 411058​</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className={styles.formSection}>
          <div className={styles.formGrid}>
            <div className={styles.formWrap}>
              <h3>Write to Us</h3>
              <form className={styles.contactForm} onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder="Full Name" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="tel" name="phone" placeholder="Phone Number" required pattern="[0-9()#&+*-=.]+" title="Only numbers and phone characters (#, -, *, etc) are accepted." />
                <textarea name="message" placeholder="Message"></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
            <div className={styles.mapWrap}>
              <h3>Discover Where We Are</h3>
              <div className={styles.mapEmbed}>
                <iframe loading="lazy" src="https://maps.google.com/maps?q=quantasip%20Wallstreet%2024%20warje&t=m&z=15&output=embed&iwloc=near" title="quantasip Wallstreet 24 warje" aria-label="quantasip Wallstreet 24 warje" width="100%" height="250" style={{border:0}} allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>© QuantaSip Pvt. Ltd. 2023</p>
        </footer>
      </div>
    </div>
  );
}

export default Contact; 